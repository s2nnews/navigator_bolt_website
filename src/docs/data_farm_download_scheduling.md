# Data Farm Download Scheduling & Gap Detection

**Last Updated:** January 15, 2026  
**File:** `data/data_farm/historical_builder.py`

## Overview

The Data Farm Historical Builder uses a sophisticated scheduling and gap detection system to keep market data up-to-date while minimizing API calls and avoiding wasteful re-downloads of existing data.

**CRITICAL RULE:** The scheduler **ONLY updates timeframes that already exist** in the database for each symbol. It will NOT auto-download new timeframes - you must use "Build History" to add new timeframes.

---

## Auto-Scheduler Update Frequency

| Timeframe | Update Frequency | Lookback (Initial) | Lookback (Periodic) | Purpose |
|-----------|------------------|---------------------|---------------------|---------|
| **Daily (1day)** | 3x per day (06:00, 14:00, 22:00) | 10 days | 5 days | Catch vendor updates across time zones |
| **Hourly (60min)** | Every 10 minutes | 48 hours | 30 minutes | Keep hourly charts current |
| **10-Minute (10min)** | Every 10 minutes | 48 hours | 30 minutes | Keep 10-min charts current |
| **1-Minute (1min)** | Every 10 minutes | 48 hours | 30 minutes | Keep minute charts current |

### Daily Schedule (3x per day)
The daily bars update at three times to catch data vendor updates across different time zones:
- **06:00 local** - Catch Asian/European vendor updates
- **14:00 local** - Catch early US updates
- **22:00 local** - Catch US close updates (few hours after 4 PM ET market close)

### Intraday Schedule (Every 10 minutes)
All intraday timeframes (60min, 10min, 1min) update together every 10 minutes:
- Downloads last 30 minutes of data (periodic)
- Ends at "now - 5 minutes" to avoid incomplete bars
- Batched together to minimize database access

---

## Download Schedule (Detailed)

### 1. **On Startup** (Immediate)

When the Historical Builder starts via "Connect & Start", it performs:

#### A. Gap Detection (FIRST)
- Scans all active symbols for missing data
- Uses asset-aware logic (Stock/Futures/Forex/Crypto)
- Queues HIGH priority downloads for any gaps found

#### B. Daily Bar Updates (if symbol has daily data)
- Queues last **10 days** of daily bars
- HIGH priority
- Only for symbols with existing daily data

#### C. Intraday Bar Updates (60min, 10min, 1min)
- Queues last **48 hours** for each timeframe
- HIGH priority
- Only for symbols with existing data for that timeframe

### 2. **Every 10 Minutes** (Recurring)

- Updates all intraday timeframes (60min, 10min, 1min)
- Downloads last **30 minutes** of data
- Ends at "now - 5 minutes" to avoid incomplete bars
- NORMAL priority
- **Critical for Market Monitor** - keeps charts current

### 3. **3x Daily (06:00, 14:00, 22:00)** (Scheduled)

- Updates daily bars for symbols with existing daily data
- Downloads last **5 days** of data
- NORMAL priority
- Catches vendor updates across time zones

### 4. **Daily at Midnight** (Scheduled)

- Full gap detection for all symbols
- Catches any missed days (e.g., if system was offline)
- Asset-aware detection
- HIGH priority

### 5. **When Symbol Added** (Immediate)

When you add a new symbol via `add_symbols()`:

#### New Symbol (No Data):
- Queues **25 years** of daily bars
- Queues **30 days** of 1-min bars
- HIGH priority
- **No waiting until midnight!**

#### Existing Symbol (Has Data):
- Runs gap detection immediately
- Queues any missing data
- HIGH priority

---

## New Symbol Download Amounts:

✅ **Daily Bars:** 25 years  
✅ **1-Min Bars:** **30 days**

Now when you add a symbol like SPY, you'll see:

```python
📥 New symbol SPY has NO daily data - queueing 25 years of history
⏰ New symbol SPY has NO 1-min data - queueing 30 days of history
```

**Note:** TradeStation's API has a hard limit of **57,600 bars per request** for intraday data:
- **1 year request:** 142,000-525,000 bars (REJECTED ❌)
- **30 days request:** 11,700-43,200 bars (ACCEPTED ✅)

The 30-day window is safe for all asset classes:
- **Stocks:** ~11,700 bars (390 min/day)
- **Futures/Forex/Crypto:** ~43,200 bars (1440 min/day)

This gives you a month of solid 1-min history while staying well within API limits.

---

## Gap Detection Logic

Gap detection is **asset-aware** and uses different rules for different asset classes to avoid flagging normal market closures as "gaps".

### Daily Bars (All Asset Classes)

- **Gap Threshold:** > 7 days
- **Logic:** Any gap over a week is flagged
- **Ignores:** Weekends, long weekends
- **Catches:** Multi-week data outages, new symbols

### 1-Min Bars (Asset-Aware)

#### Stock (AAPL, MSFT, etc.)
- **Trading Hours:** 9:30 AM - 4:00 PM ET
- **Gap Threshold:** > 15 minutes during market hours, same day only
- **Ignores:**
  - Overnight gaps (4:00 PM → 9:30 AM)
  - Weekend gaps
  - Pre/post-market gaps
- **Catches:** Intraday trading halts, data outages

#### Futures (@ES, @NQ, etc.)
- **Trading Hours:** Nearly 24/5 (Sunday 5 PM CT - Friday 4 PM CT)
- **Gap Threshold:** > 2 hours on same day, > 24 hours multi-day
- **Ignores:**
  - Weekend gaps (Friday PM → Sunday PM)
  - Daily maintenance windows
- **Catches:** Multi-hour outages, missed weekdays

#### Forex (GBPUSD, EURUSD, etc.)
- **Trading Hours:** 24/5 (Sunday evening - Friday evening)
- **Gap Threshold:** > 2 hours on same day, > 24 hours multi-day
- **Ignores:**
  - Weekend gaps (Friday close → Sunday open)
- **Catches:** Intraday outages, missed weekdays

#### Crypto (BTCUSD, etc.)
- **Trading Hours:** 24/7/365
- **Gap Threshold:** > 1 hour any time
- **Ignores:** Nothing (trades continuously)
- **Catches:** Any outage > 1 hour

---

## Priority System

Downloads are queued with different priorities:

### HIGH Priority
- Gap-filled data
- Startup downloads (first 10 days daily, 48 hours 1-min)
- First 1-min update (initial 48 hours)
- New symbol data

### NORMAL Priority
- Recurring 5-minute 1-min updates
- Daily 5 PM daily bar updates
- Subsequent scheduled updates

**Priority ensures critical data (gaps, new symbols) downloads first.**

---

## Configuration

Key configuration parameters in `HistoricalBuilder.__init__()`:

```python
self.batch_size = 10  # Download 10 symbols at a time
self.batch_delay = 2.0  # 2 seconds between batches (rate limiting)
self.daily_update_hour = 17  # 5 PM update for daily data
self.min_update_minutes = 5  # Update 1-min data every 5 minutes
```

---

## Database Tables

### Symbol Metadata
- `symbol_metadata` table stores asset class, sector, tags
- Used for asset-aware gap detection
- Updated when symbols are added

### Bar Data
- `bars_daily` - Daily OHLCV data
- `bars_1min` - 1-minute OHLCV data
- Uses `INSERT OR REPLACE` to handle duplicate downloads

---

## Example Scenarios

### Scenario 1: Fresh Install
1. Start Data Farm Dashboard
2. Gap detection runs → Finds NO existing data
3. Queues 10 years daily + 48 hours 1-min for all symbols
4. Downloads begin immediately

### Scenario 2: Daily Use
1. System running 24/7
2. Every 5 minutes: Updates 1-min bars
3. Daily at 5 PM: Updates daily bars
4. Daily at midnight: Gap check (finds nothing - clean!)

### Scenario 3: Add New Symbol
1. `builder.add_symbols(['TSLA'], asset_class='Stock')`
2. Immediate check: Symbol has no data
3. Queue 10 years daily + 48 hours 1-min
4. Downloads start immediately (HIGH priority)
5. Data available within minutes

### Scenario 4: Weekend Return
1. Friday 4 PM: System downloads data
2. Weekend: System offline
3. Monday 9 AM: System starts
4. Gap detection finds Friday → Monday gap
5. Queues missing data (HIGH priority)
6. Downloads Friday PM data immediately

### Scenario 5: Multi-Day Absence
1. Thursday night: Last data download
2. Offline Friday, Saturday, Sunday, Monday
3. Tuesday morning: System starts
4. Gap detection finds 4-day gap
5. Queues all missing days (HIGH priority)
6. Downloads complete history since Thursday

---

## Verification Tools

### Check Gaps
```bash
python data/data_farm/check_gaps.py
```
Shows all "gaps" in the database:
- ✅ Overnight/Weekend (NORMAL) - Expected, will be ignored
- ⚠️ INTRADAY GAP - Real gap that needs filling

### Check Download Activity
```bash
python data/data_farm/check_download_activity.py
```
Shows:
- Bar counts per symbol
- Date ranges
- Asset class coverage
- Gap detection status

---

## Smart Features

### 1. No Duplicate Downloads
- `INSERT OR REPLACE` prevents duplicate data
- Overlapping date ranges are safe
- Re-downloading existing data updates it (no harm)

### 2. Asset-Aware Detection
- Stock gaps ignore overnight/weekend
- Futures gaps allow for maintenance
- Forex gaps ignore weekends
- Crypto gaps catch any outage

### 3. Rate Limiting
- 2-second delay between batches
- Prevents API throttling
- Batch size: 10 symbols at a time

### 4. Safe End Dates
- 1-min downloads end at "now - 10 minutes"
- Avoids incomplete bars
- Daily downloads end at yesterday

### 5. Immediate New Symbol Detection
- No waiting until midnight
- Data available within minutes
- Proper gap detection on existing data

---

## Troubleshooting

### Problem: Queue Never Empties
- **Check:** Are gaps being re-detected every cycle?
- **Solution:** Verify asset classes are set correctly
- **Tool:** Run `check_gaps.py` to see what's flagged

### Problem: Missing Recent Data
- **Check:** Is 5-minute scheduler running?
- **Look for:** Log messages "⏱️ Scheduling 1-min data updates"
- **Solution:** Restart Historical Builder

### Problem: New Symbol Not Downloading
- **Check:** Did you use `add_symbols()` with asset_class?
- **Look for:** Log messages "🔍 Checking data for newly added symbols"
- **Solution:** Re-add symbol with correct asset_class

### Problem: Gaps Not Filling
- **Check:** Are gaps genuine (not overnight/weekend)?
- **Tool:** Run `check_gaps.py` - look for "INTRADAY GAP"
- **Solution:** If overnight gaps are flagged, asset_class is wrong

---

## Future Enhancements

### Potential Improvements:
1. **Regional Exchange Hours** - Support TSE, LSE, ASX trading hours
2. **Holiday Calendar** - Skip downloads on market holidays
3. **Dynamic Update Frequency** - More frequent during market hours
4. **Parallel Downloads** - Download multiple symbols concurrently
5. **Smart Batch Sizing** - Adjust batch size based on API response times

---

## Related Documentation

- `DATA_FARM_COMPLETE_GUIDE.md` - Overall Data Farm system
- `DATA_FARM_METADATA_GUIDE.md` - Symbol metadata and asset classes
- `DATA_FARM_DASHBOARD_CONTROLS_GUIDE.md` - UI controls

---

## Summary

The Data Farm download scheduling system is designed to:
- ✅ Keep data current (5-min updates for 1-min bars)
- ✅ Fill gaps automatically (asset-aware detection)
- ✅ Handle new symbols immediately (no waiting)
- ✅ Minimize API calls (smart gap detection)
- ✅ Avoid wasteful re-downloads (ignore overnight/weekend)
- ✅ Support multiple asset classes (Stock/Futures/Forex/Crypto)

**Result:** A robust, efficient, and intelligent data management system that "just works"! 🎯

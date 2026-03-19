import { supabase } from '../lib/supabase';

const VARIANT_STORAGE_PREFIX = 's2n_exp_';

interface Variant {
  id: string;
  headline: string;
  subheadline: string;
  weight: number;
}

interface Experiment {
  name: string;
  variants: Variant[];
}

function pickVariant(variants: Variant[]): Variant {
  const total = variants.reduce((sum, v) => sum + v.weight, 0);
  let random = Math.random() * total;
  for (const v of variants) {
    random -= v.weight;
    if (random <= 0) return v;
  }
  return variants[0];
}

export function getAssignedVariant(experimentName: string): Variant | null {
  const key = VARIANT_STORAGE_PREFIX + experimentName;
  const stored = sessionStorage.getItem(key);
  if (stored) {
    return JSON.parse(stored);
  }
  return null;
}

export async function assignVariant(experimentName: string): Promise<Variant | null> {
  const existing = getAssignedVariant(experimentName);
  if (existing) return existing;

  try {
    const { data } = await supabase
      .from('experiments')
      .select('variants')
      .eq('name', experimentName)
      .eq('active', true)
      .maybeSingle();

    if (!data || !data.variants || !Array.isArray(data.variants)) return null;

    const variant = pickVariant(data.variants as Variant[]);
    const key = VARIANT_STORAGE_PREFIX + experimentName;
    sessionStorage.setItem(key, JSON.stringify(variant));
    return variant;
  } catch {
    return null;
  }
}

export function getVariantId(experimentName: string): string | null {
  const v = getAssignedVariant(experimentName);
  return v?.id ?? null;
}

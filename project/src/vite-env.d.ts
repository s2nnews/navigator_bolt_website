/// <reference types="vite/client" />

interface Window {
  Paddle?: {
    Initialize: (options: { token: string }) => void;
    Checkout: {
      open: (options: { items: Array<{ priceId: string; quantity: number }> }) => void;
    };
  };
}

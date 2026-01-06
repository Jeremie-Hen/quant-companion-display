import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { TokenIcon } from "./TokenIcon";

interface TradeSetup {
  token: string;
  direction: "long" | "short";
  confidence: number;
}

const tradeSetups: TradeSetup[] = [
  { token: "BTC", direction: "long", confidence: 92 },
  { token: "ETH", direction: "short", confidence: 87 },
  { token: "BTC", direction: "short", confidence: 84 },
  { token: "ETH", direction: "long", confidence: 95 },
];

const APPEAR_DELAY = 5000; // 5 seconds
const VISIBLE_DURATION = 30000; // 30 seconds

export const TradeNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSetupIndex, setCurrentSetupIndex] = useState(0);
  const [progress, setProgress] = useState(100);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentSetup = tradeSetups[currentSetupIndex];

  const showNotification = useCallback(() => {
    setProgress(100);
    setIsVisible(true);
    setIsAnimating(true);
  }, []);

  const hideNotification = useCallback(() => {
    setIsVisible(false);
    setIsAnimating(false);
    setCurrentSetupIndex((prev) => (prev + 1) % tradeSetups.length);
  }, []);

  const handleDismiss = useCallback(() => {
    hideNotification();
  }, [hideNotification]);

  // Initial appearance after 5 seconds
  useEffect(() => {
    const timer = setTimeout(showNotification, APPEAR_DELAY);
    return () => clearTimeout(timer);
  }, [showNotification]);

  // Progress bar animation
  useEffect(() => {
    if (!isAnimating) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / VISIBLE_DURATION) * 100);
      setProgress(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
        hideNotification();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isAnimating, hideNotification]);

  // Reappear 5 seconds after hiding
  useEffect(() => {
    if (isVisible) return;

    const timer = setTimeout(showNotification, APPEAR_DELAY);
    return () => clearTimeout(timer);
  }, [isVisible, showNotification]);

  if (!isVisible) return null;

  const isLong = currentSetup.direction === "long";

  return (
    <div className="relative h-10 rounded-full glass-panel border border-border/30 overflow-hidden flex items-center gap-2 px-3 pr-2 animate-fade-in">
      {/* Progress bar background */}
      <div
        className="absolute inset-0 bg-primary/20 transition-none"
        style={{
          clipPath: `inset(0 ${100 - progress}% 0 0)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-2">
        <TokenIcon token={currentSetup.token} size="sm" />

        <span
          className={`text-xs font-semibold uppercase ${
            isLong ? "text-success" : "text-destructive"
          }`}
        >
          {currentSetup.direction}
        </span>

        <div className="flex items-center gap-1">
          <span className="text-xs text-muted-foreground">Conf:</span>
          <span className="text-xs font-semibold text-primary">
            {currentSetup.confidence}
          </span>
        </div>

        <button
          onClick={handleDismiss}
          className="w-5 h-5 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

import { X, Settings } from "lucide-react";
import { QuantOrb } from "./QuantOrb";
import { TokenIcon } from "./TokenIcon";
import { PositionCard } from "./PositionCard";
import { SetupCard } from "./SetupCard";
import { AlertItem } from "./AlertItem";

interface QuantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  token: string;
}

export const QuantDrawer = ({ isOpen, onClose, token }: QuantDrawerProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-[400px] glass border-l border-border/50 z-50 drawer-enter flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <QuantOrb size="sm" />
              <span className="font-semibold text-foreground">Quant</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-success pulse-live" />
                <span className="text-[10px] text-success font-medium">Live</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg hover:bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-subtle">
              <TokenIcon token={token} size="sm" />
              <span className="text-xs font-medium text-foreground">{token}</span>
            </div>
            <span className="text-xs text-muted-foreground">2 positions</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">Updated 6m ago</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Active Positions */}
          <section>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Active Positions
            </h3>
            <div className="space-y-3">
              <PositionCard
                token="BTC"
                side="SHORT"
                size="$1,000"
                leverage="3x"
                pnlPercent="+0.8%"
                pnlDollar="+$8.12"
                confidenceFrom={78}
                confidenceTo={62}
                openTime="3h ago"
                entry="92,485"
              />
              <PositionCard
                token="ETH"
                side="LONG"
                size="$500"
                leverage="2x"
                pnlPercent="+2.1%"
                pnlDollar="+$10.50"
                confidenceFrom={85}
                confidenceTo={88}
                openTime="1h ago"
                entry="3,420"
              />
            </div>
            <p className="text-[11px] text-muted-foreground mt-3 pl-1">
              Tap a position to manage TP/SL and close.
            </p>
          </section>

          {/* Best Setup */}
          <section>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Best Setup for {token}
            </h3>
            <SetupCard
              token={token}
              strategy="MACD + RSI Confluence"
              timeframe="5m"
              direction="SHORT"
              confidence={82}
              signalAge="6m"
              riskReward="2.4"
              rationale="RSI/MACD alignment, momentum weakening. Price rejected from resistance zone with decreasing volume."
            />
          </section>

          {/* Alerts */}
          <section>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Alerts
            </h3>
            <div className="space-y-2">
              <AlertItem
                type="filled"
                message="Order filled: BTC SHORT $1,000"
                time="2m ago"
              />
              <AlertItem
                type="signal"
                message="High confidence setup detected (84)"
                time="8m ago"
              />
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border/50">
          <div className="flex items-center justify-between">
            <p className="text-[10px] text-muted-foreground">
              DYOR. Not investment advice.
            </p>
            <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <Settings className="w-3.5 h-3.5" />
              Preferences
            </button>
          </div>
          <p className="text-[10px] text-muted-foreground/60 mt-2">
            Double-click chip to see top setups across tokens.
          </p>
        </div>
      </div>
    </>
  );
};

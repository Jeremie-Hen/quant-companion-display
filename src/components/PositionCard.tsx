import { TokenIcon } from "./TokenIcon";
import { TrendingDown, TrendingUp } from "lucide-react";

interface PositionCardProps {
  token: string;
  side: "LONG" | "SHORT";
  size: string;
  leverage: string;
  pnlPercent: string;
  pnlDollar: string;
  confidenceFrom: number;
  confidenceTo: number;
  openTime: string;
  entry: string;
}

export const PositionCard = ({
  token,
  side,
  size,
  leverage,
  pnlPercent,
  pnlDollar,
  confidenceFrom,
  confidenceTo,
  openTime,
  entry,
}: PositionCardProps) => {
  const isPositive = pnlPercent.startsWith("+");
  const isConfidenceDown = confidenceTo < confidenceFrom;

  return (
    <div className="glass rounded-xl p-4 cursor-pointer chip-hover group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <TokenIcon token={token} size="md" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">{token}</span>
              <span
                className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                  side === "LONG"
                    ? "bg-success/20 text-success"
                    : "bg-destructive/20 text-destructive"
                }`}
              >
                {side}
              </span>
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              {size} · {leverage}
            </div>
          </div>
        </div>

        <div className="text-right">
          <div
            className={`font-semibold ${
              isPositive ? "text-success" : "text-destructive"
            }`}
          >
            {pnlPercent}
          </div>
          <div
            className={`text-xs ${
              isPositive ? "text-success/70" : "text-destructive/70"
            }`}
          >
            {pnlDollar}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <span>Confidence:</span>
          <span className="text-foreground font-medium">{confidenceFrom}</span>
          <span>→</span>
          <span
            className={`font-medium ${
              isConfidenceDown ? "text-amber-400" : "text-success"
            }`}
          >
            {confidenceTo}
          </span>
          {isConfidenceDown ? (
            <TrendingDown className="w-3 h-3 text-amber-400" />
          ) : (
            <TrendingUp className="w-3 h-3 text-success" />
          )}
        </div>
        
        <button className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors">
          Manage
        </button>
      </div>

      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-border/50 text-[11px] text-muted-foreground">
        <span>Open: {openTime}</span>
        <span>Entry: {entry}</span>
      </div>
    </div>
  );
};

import { TokenIcon } from "./TokenIcon";
import { Clock, Target, HelpCircle } from "lucide-react";

interface SetupCardProps {
  token: string;
  strategy: string;
  timeframe: string;
  direction: "LONG" | "SHORT";
  confidence: number;
  signalAge: string;
  riskReward: string;
  rationale: string;
}

export const SetupCard = ({
  token,
  strategy,
  timeframe,
  direction,
  confidence,
  signalAge,
  riskReward,
  rationale,
}: SetupCardProps) => {
  return (
    <div className="glass rounded-xl p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <TokenIcon token={token} size="md" glow />
          <div>
            <div className="font-semibold text-foreground">{strategy}</div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
              <Clock className="w-3 h-3" />
              <span>{timeframe}</span>
            </div>
          </div>
        </div>

        <span
          className={`text-xs font-bold px-2 py-1 rounded-md ${
            direction === "LONG"
              ? "bg-success/20 text-success glow-success-sm"
              : "bg-destructive/20 text-destructive glow-destructive-sm"
          }`}
        >
          {direction}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-3">
        <div className="glass-subtle rounded-lg p-2.5 text-center">
          <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">
            Confidence
          </div>
          <div className="text-lg font-bold text-primary">{confidence}</div>
        </div>
        <div className="glass-subtle rounded-lg p-2.5 text-center">
          <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">
            Signal
          </div>
          <div className="text-sm font-semibold text-foreground">{signalAge}</div>
        </div>
        <div className="glass-subtle rounded-lg p-2.5 text-center">
          <div className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">
            R:R
          </div>
          <div className="text-sm font-semibold text-success">{riskReward}</div>
        </div>
      </div>

      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-muted/30 mb-4">
        <Target className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
        <p className="text-xs text-muted-foreground leading-relaxed">{rationale}</p>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex-1 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors glow-primary-sm">
          Open Ticket
        </button>
        <button className="px-4 py-2.5 rounded-xl glass-subtle text-muted-foreground text-sm font-medium hover:text-foreground transition-colors flex items-center gap-1.5">
          <HelpCircle className="w-4 h-4" />
          Why?
        </button>
      </div>
    </div>
  );
};

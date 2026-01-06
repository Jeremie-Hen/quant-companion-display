import { TokenIcon } from "./TokenIcon";
import { ChevronRight, MoreHorizontal } from "lucide-react";

interface QuantChipProps {
  token: string;
  positionsCount: number;
  pnl: string;
  lastUpdated: string;
  onClick: () => void;
}

export const QuantChip = ({
  token,
  positionsCount,
  pnl,
  lastUpdated,
  onClick,
}: QuantChipProps) => {
  const isPositive = pnl.startsWith("+");

  return (
    <div
      onClick={onClick}
      className="glass rounded-full px-3 py-2 flex items-center gap-2.5 cursor-pointer chip-hover"
    >
      <TokenIcon token={token} size="sm" glow />
      
      <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold">
        {positionsCount}
      </div>

      <div
        className={`text-xs font-semibold ${
          isPositive ? "text-success" : "text-destructive"
        }`}
      >
        {pnl}
      </div>

      <div className="text-[10px] text-muted-foreground">{lastUpdated}</div>

      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />

      <button
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-5 h-5 rounded-full hover:bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
      >
        <MoreHorizontal className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

import { useState } from "react";
import { Minimize2, Maximize2 } from "lucide-react";
import { TokenIcon } from "./TokenIcon";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import quantIcon from "@/assets/quant-icon.png";

interface Position {
  token: string;
  percentage: number;
  amount: number;
  size?: number;
  currentPrice?: number;
  tpPrice?: number;
  slPrice?: number;
}

interface QuantChipProps {
  token: string;
  positions: Position[];
  onClick: () => void;
}

export const QuantChip = ({
  token,
  positions,
  onClick,
}: QuantChipProps) => {
  const [isMinimized, setIsMinimized] = useState(false);

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="glass rounded-full p-2 flex items-center justify-center chip-hover hover:scale-105 transition-transform"
      >
        <img src={quantIcon} alt="Quant" className="w-5 h-5 rounded-full" />
      </button>
    );
  }

  return (
    <div className="glass rounded-full px-3 py-2 flex items-center gap-2.5 chip-hover">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        className="w-5 h-5 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
      >
        <img src={quantIcon} alt="Quant" className="w-5 h-5 rounded-full" />
      </button>

      <div onClick={onClick} className="cursor-pointer">
        <TokenIcon token={token} size="sm" glow />
      </div>

      <div className="w-px h-4 bg-border rounded-full" />

      <div className="flex items-center gap-1.5">
        {positions.map((position, index) => (
          <HoverCard key={index} openDelay={100} closeDelay={100}>
            <HoverCardTrigger asChild>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
                className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all hover:scale-110 ${
                  position.percentage >= 0
                    ? "bg-success/20 border-success"
                    : "bg-destructive/20 border-destructive"
                }`}
              >
                <TokenIcon token={position.token} size="sm" />
              </button>
            </HoverCardTrigger>
            <HoverCardContent
              side="top"
              align="center"
              className="w-auto p-0 border-0 bg-transparent shadow-none"
            >
              <div className="glass rounded-xl px-3 py-2 flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <TokenIcon token={position.token} size="sm" />
                  <span className="text-xs font-medium text-foreground">{position.token}</span>
                  <span
                    className={`text-xs font-semibold ${
                      position.percentage >= 0 ? "text-success" : "text-destructive"
                    }`}
                  >
                    {position.percentage >= 0 ? "+" : ""}
                    {position.percentage.toFixed(2)}%
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ${Math.abs(position.amount).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  {position.size !== undefined && (
                    <span>Size: <span className="text-foreground font-medium">${position.size.toLocaleString()}</span></span>
                  )}
                  {position.currentPrice !== undefined && (
                    <span>Price: <span className="text-foreground font-medium">${position.currentPrice.toLocaleString()}</span></span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  {position.tpPrice !== undefined && (
                    <span>TP: <span className="text-success font-medium">${position.tpPrice.toLocaleString()}</span></span>
                  )}
                  {position.slPrice !== undefined && (
                    <span>SL: <span className="text-destructive font-medium">${position.slPrice.toLocaleString()}</span></span>
                  )}
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsMinimized(true);
        }}
        className="w-5 h-5 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
      >
        <Minimize2 className="w-3 h-3" />
      </button>
    </div>
  );
};

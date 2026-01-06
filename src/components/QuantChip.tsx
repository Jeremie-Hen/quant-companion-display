import { TokenIcon } from "./TokenIcon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import quantIcon from "@/assets/quant-icon.png";

interface Position {
  token: string;
  percentage: number;
  amount: number;
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

      <div className="flex items-center gap-1.5">
        {positions.map((position, index) => (
          <Popover key={index}>
            <PopoverTrigger asChild>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 rounded-full blur-md transition-opacity opacity-60 group-hover:opacity-100 ${
                    position.percentage >= 0 ? "bg-success" : "bg-destructive"
                  }`}
                />
                <div className="relative">
                  <TokenIcon token={position.token} size="sm" />
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent
              side="top"
              align="center"
              className="w-auto p-0 border-0 bg-transparent shadow-none"
            >
              <div className="glass rounded-xl px-3 py-2 flex items-center gap-2">
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
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
};

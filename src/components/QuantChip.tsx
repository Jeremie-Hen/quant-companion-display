import { TokenIcon } from "./TokenIcon";
import { PositionPreview } from "./PositionPreview";
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
  positionsCount: number;
  positions: Position[];
  onClick: () => void;
}

export const QuantChip = ({
  token,
  positionsCount,
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

      <Popover>
        <PopoverTrigger asChild>
          <button className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold hover:bg-primary/30 transition-colors">
            {positionsCount}
          </button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="start"
          className="w-auto p-0 border-0 bg-transparent shadow-none"
        >
          <PositionPreview positions={positions} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

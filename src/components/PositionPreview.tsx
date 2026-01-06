import { TokenIcon } from "./TokenIcon";

interface Position {
  token: string;
  percentage: number;
  amount: number;
}

interface PositionPreviewProps {
  positions: Position[];
  onPositionClick?: () => void;
}

export const PositionPreview = ({ positions, onPositionClick }: PositionPreviewProps) => {
  return (
    <div className="glass rounded-xl p-2 min-w-[140px] space-y-1">
      {positions.map((position, index) => (
        <div
          key={index}
          onClick={onPositionClick}
          className="flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-all duration-200 hover:bg-white/10 hover:scale-[1.02]"
        >
          <TokenIcon token={position.token} size="sm" />
          <span className="text-xs font-medium text-foreground">{position.token}</span>
          <div className="ml-auto flex items-center gap-2">
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
        </div>
      ))}
    </div>
  );
};
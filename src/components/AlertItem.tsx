import { CheckCircle2, Zap } from "lucide-react";

interface AlertItemProps {
  type: "filled" | "signal";
  message: string;
  time: string;
}

export const AlertItem = ({ type, message, time }: AlertItemProps) => {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg glass-subtle">
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
          type === "filled"
            ? "bg-success/20 text-success"
            : "bg-primary/20 text-primary"
        }`}
      >
        {type === "filled" ? (
          <CheckCircle2 className="w-4 h-4" />
        ) : (
          <Zap className="w-4 h-4" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-foreground leading-snug">{message}</p>
        <p className="text-[11px] text-muted-foreground mt-1">{time}</p>
      </div>
    </div>
  );
};

interface QuantOrbProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-5 h-5",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};

export const QuantOrb = ({ size = "md", className = "" }: QuantOrbProps) => {
  return (
    <div
      className={`${sizeClasses[size]} rounded-full orb-glow flex-shrink-0 ${className}`}
      aria-hidden="true"
    />
  );
};

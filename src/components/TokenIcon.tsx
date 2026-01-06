import bitcoinLogo from "@/assets/bitcoin-logo.png";
import ethereumLogo from "@/assets/ethereum-logo.png";

interface TokenIconProps {
  token: string;
  size?: "sm" | "md";
  glow?: boolean;
}

const tokenLogos: Record<string, string> = {
  BTC: bitcoinLogo,
  ETH: ethereumLogo,
};

const tokenColors: Record<string, string> = {
  BTC: "from-amber-500 to-orange-600",
  ETH: "from-indigo-400 to-purple-600",
  SOL: "from-purple-500 to-fuchsia-500",
};

const sizeClasses = {
  sm: "w-5 h-5",
  md: "w-7 h-7",
};

export const TokenIcon = ({ token, size = "md", glow = false }: TokenIconProps) => {
  const logo = tokenLogos[token];
  const gradient = tokenColors[token] || "from-gray-400 to-gray-600";
  
  if (logo) {
    return (
      <img
        src={logo}
        alt={token}
        className={`${sizeClasses[size]} rounded-full flex-shrink-0 ${glow ? "glow-primary-sm" : ""}`}
      />
    );
  }
  
  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center font-semibold text-foreground flex-shrink-0 text-[10px] ${
        glow ? "glow-primary-sm" : ""
      }`}
    >
      {token.slice(0, 1)}
    </div>
  );
};

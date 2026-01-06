import { TrendingUp, TrendingDown, Star, Search, Bell } from "lucide-react";

export const CryptoBackground = () => {
  const mockData = [
    { name: "Bitcoin", symbol: "BTC", price: "$94,231.42", change: "+2.34%", mcap: "$1.87T", volume: "$42.1B", isUp: true },
    { name: "Ethereum", symbol: "ETH", price: "$3,421.18", change: "+1.87%", mcap: "$411.2B", volume: "$18.3B", isUp: true },
    { name: "Solana", symbol: "SOL", price: "$187.32", change: "-0.42%", mcap: "$87.4B", volume: "$3.2B", isUp: false },
    { name: "BNB", symbol: "BNB", price: "$698.21", change: "+0.91%", mcap: "$104.1B", volume: "$1.8B", isUp: true },
    { name: "XRP", symbol: "XRP", price: "$2.18", change: "-1.23%", mcap: "$124.3B", volume: "$5.1B", isUp: false },
    { name: "Cardano", symbol: "ADA", price: "$0.892", change: "+3.21%", mcap: "$31.2B", volume: "$892M", isUp: true },
    { name: "Avalanche", symbol: "AVAX", price: "$38.42", change: "+1.12%", mcap: "$15.8B", volume: "$421M", isUp: true },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-40 blur-[2px] pointer-events-none select-none">
      {/* Top Navigation */}
      <div className="h-14 border-b border-border/30 bg-card/30 flex items-center px-6 gap-6">
        <div className="text-xl font-bold text-gradient-primary">CoinWatch</div>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="text-foreground">Cryptocurrencies</span>
          <span>Exchanges</span>
          <span>NFT</span>
          <span>Learn</span>
        </nav>
        <div className="flex-1" />
        <div className="flex items-center gap-3">
          <div className="w-64 h-9 rounded-lg bg-muted/30 flex items-center px-3 gap-2">
            <Search className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Search...</span>
          </div>
          <Bell className="w-5 h-5 text-muted-foreground" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/50 to-primary/20" />
        </div>
      </div>

      {/* Context Indicator */}
      <div className="absolute top-20 left-6 flex items-center gap-3 p-3 rounded-xl glass-subtle">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-sm font-bold">B</div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Bitcoin</span>
            <span className="text-muted-foreground text-sm">BTC</span>
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          </div>
          <div className="text-2xl font-bold">$94,231.42</div>
        </div>
        <div className="ml-4 text-success flex items-center gap-1">
          <TrendingUp className="w-4 h-4" />
          <span className="font-semibold">+2.34%</span>
        </div>
      </div>

      <div className="flex h-[calc(100%-3.5rem)]">
        {/* Left: Table */}
        <div className="flex-1 p-6 pt-28">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-muted-foreground text-left border-b border-border/20">
                <th className="pb-3 font-medium">#</th>
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium text-right">Price</th>
                <th className="pb-3 font-medium text-right">24h %</th>
                <th className="pb-3 font-medium text-right">Market Cap</th>
                <th className="pb-3 font-medium text-right">Volume(24h)</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((coin, i) => (
                <tr key={coin.symbol} className="border-b border-border/10">
                  <td className="py-4 text-muted-foreground">{i + 1}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${
                        coin.symbol === "BTC" ? "from-amber-500 to-orange-600" :
                        coin.symbol === "ETH" ? "from-indigo-400 to-purple-600" :
                        "from-gray-400 to-gray-600"
                      }`} />
                      <span className="font-medium">{coin.name}</span>
                      <span className="text-muted-foreground">{coin.symbol}</span>
                    </div>
                  </td>
                  <td className="py-4 text-right font-medium">{coin.price}</td>
                  <td className={`py-4 text-right font-medium ${coin.isUp ? "text-success" : "text-destructive"}`}>
                    <span className="flex items-center justify-end gap-1">
                      {coin.isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {coin.change}
                    </span>
                  </td>
                  <td className="py-4 text-right text-muted-foreground">{coin.mcap}</td>
                  <td className="py-4 text-right text-muted-foreground">{coin.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right: Chart Area */}
        <div className="w-[400px] p-6 pt-28 border-l border-border/20">
          <div className="h-64 rounded-xl glass-subtle p-4">
            <div className="text-xs text-muted-foreground mb-2">BTC/USD · 1H</div>
            <svg viewBox="0 0 300 150" className="w-full h-full">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--success))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--success))" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,100 Q30,90 60,95 T120,70 T180,80 T240,40 T300,50"
                fill="none"
                stroke="hsl(var(--success))"
                strokeWidth="2"
              />
              <path
                d="M0,100 Q30,90 60,95 T120,70 T180,80 T240,40 T300,50 L300,150 L0,150 Z"
                fill="url(#chartGradient)"
              />
            </svg>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="glass-subtle rounded-lg p-3">
              <div className="text-[10px] text-muted-foreground">24h High</div>
              <div className="font-semibold text-success">$95,421</div>
            </div>
            <div className="glass-subtle rounded-lg p-3">
              <div className="text-[10px] text-muted-foreground">24h Low</div>
              <div className="font-semibold text-destructive">$92,108</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

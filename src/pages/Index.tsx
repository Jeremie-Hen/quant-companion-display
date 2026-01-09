import { useState } from "react";
import { CryptoBackground } from "@/components/CryptoBackground";
import { QuantChip } from "@/components/QuantChip";
import { QuantDrawer } from "@/components/QuantDrawer";
import { TradeNotification } from "@/components/TradeNotification";

const Index = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Blurred Background */}
      <CryptoBackground />

      {/* Bottom Left Controls */}
      <div className="fixed bottom-6 left-6 z-30 flex items-center gap-3">
        <QuantChip
          token="BTC"
          positions={[
            { token: "BTC", percentage: -0.15, amount: 15.32, size: 2500, currentPrice: 97250, tpPrice: 102000, slPrice: 95000 },
            { token: "ETH", percentage: -3.84, amount: 42.18, size: 1800, currentPrice: 3420, tpPrice: 3800, slPrice: 3200 },
          ]}
          onClick={() => setIsDrawerOpen(true)}
        />
        <TradeNotification />
      </div>

      {/* Quant Drawer */}
      <QuantDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        token="BTC"
      />
    </div>
  );
};

export default Index;

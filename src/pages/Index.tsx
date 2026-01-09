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
            { token: "BTC", percentage: -0.15, amount: 15.32, size: 2500, tpDistance: 4.2, slDistance: 2.1 },
            { token: "ETH", percentage: -3.84, amount: 42.18, size: 1800, tpDistance: 6.8, slDistance: 1.5 },
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

import { useState } from "react";
import { CryptoBackground } from "@/components/CryptoBackground";
import { QuantChip } from "@/components/QuantChip";
import { QuantDrawer } from "@/components/QuantDrawer";

const Index = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Blurred Background */}
      <CryptoBackground />

      {/* Quant Chip - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-30">
        <QuantChip
          token="BTC"
          positions={[
            { token: "BTC", percentage: -0.15, amount: 15.32 },
            { token: "ETH", percentage: -3.84, amount: 42.18 },
          ]}
          onClick={() => setIsDrawerOpen(true)}
        />
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

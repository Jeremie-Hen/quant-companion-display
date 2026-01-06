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
          positionsCount={2}
          pnl="+1.2%"
          lastUpdated="6m"
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

import React from "react";
import { cn } from "@/lib/utils";

interface TicketFaceProps {
  mainContent: React.ReactNode;
  stubContent: React.ReactNode;
  isVerso?: boolean;
}

export function TicketFace({ mainContent, stubContent, isVerso = false }: TicketFaceProps) {
  return (
    <div
      className={cn(
        "relative flex w-full aspect-panoramic rounded-lg shadow-2xl",
        isVerso ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Main Area (75%) */}
      <div className="relative w-[75%] overflow-hidden rounded-l-lg">
        {/* Layer 1: Background Image */}
        <div className="absolute inset-0 bg-university-bg bg-cover bg-center opacity-10 blur-sm" />
        {/* Layer 2: Black Overlay */}
        <div className="absolute inset-0 bg-ticket-black/80" />
        {/* Layer 3: Content */}
        <div className="relative z-10 h-full flex flex-col p-6 text-white">
          {mainContent}
        </div>
      </div>

      {/* Stub Area (25%) */}
      <div className="relative w-[25%] bg-ticket-ivory overflow-hidden rounded-r-lg">
        {/* Layer 1: Paper Texture */}
        <div className="absolute inset-0 bg-paper-texture bg-cover opacity-50 mix-blend-multiply" />
        {/* Layer 2: Content */}
        <div className="relative z-10 h-full flex flex-col p-4 text-ticket-black">
          {stubContent}
        </div>
      </div>

      {/* Separator Line & Notches */}
      <div
        className={cn(
          "absolute top-0 bottom-0 w-px",
          isVerso ? "right-[25%]" : "left-[75%]"
        )}
      >
        {/* Dotted Line */}
        <div
          className="absolute inset-0 w-full"
          style={{
            backgroundImage: "linear-gradient(to bottom, #888 50%, transparent 50%)",
            backgroundSize: "1px 6px",
            backgroundRepeat: "repeat-y",
          }}
        />
        {/* Top Notch - Simulates a cut by matching the page background */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-100 dark:bg-gray-900 rounded-full" />
        {/* Bottom Notch */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-100 dark:bg-gray-900 rounded-full" />
      </div>
    </div>
  );
}

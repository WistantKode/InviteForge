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
        "relative flex w-full aspect-panoramic bg-ticket-ivory rounded-2xl shadow-xl overflow-hidden",
        isVerso ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Main Area (75%) */}
      <div className="relative w-[75%] bg-ticket-black bg-ticket-texture bg-blend-overlay text-white p-8 flex flex-col">
        {mainContent}
      </div>

      {/* Stub Area (25%) */}
      <div className="relative w-[25%] bg-ticket-ivory text-ticket-black p-6 flex flex-col items-center justify-center">
        {stubContent}
      </div>

      {/* Notches Separator */}
      <div
        className={cn(
          "absolute top-0 bottom-0 w-px bg-dashed-line",
          isVerso ? "right-[25%]" : "left-[75%]"
        )}
        style={{
          backgroundImage: "linear-gradient(to bottom, #888 50%, transparent 50%)",
          backgroundSize: "1px 8px",
        }}
      >
        {/* Top Notch */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-ticket-ivory rounded-full" />
        {/* Bottom Notch */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-ticket-ivory rounded-full" />
      </div>
    </div>
  );
}

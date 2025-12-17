"use client";

import Barcode from "react-barcode";

interface BarcodeProps {
  value: string;
  isVertical?: boolean;
}

export function TicketBarcode({ value, isVertical = false }: BarcodeProps) {
  return (
    <Barcode
      value={value}
      width={isVertical ? 1.5 : 2}
      height={isVertical ? 40 : 60}
      format="CODE128"
      displayValue={false}
      background="transparent"
      lineColor="#1A1A1A"
    />
  );
}

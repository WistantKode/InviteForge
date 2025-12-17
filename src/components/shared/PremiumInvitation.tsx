"use client";

import { TicketFace } from "./TicketFace";
import { TicketBarcode } from "./Barcode"; // Corrigé l'import

export function PremiumInvitation() {
  // Pour l'instant, nous affichons juste le recto avec un contenu de test.
  const rectoMainContent = (
    <div className="text-center">
      <h1 className="font-serif text-2xl">CÉRÉMONIE DE PARRAINAGE</h1>
      <p className="font-sans text-sm">Institut Universitaire de Technologie</p>
    </div>
  );

  const rectoStubContent = (
    <div className="text-center">
      <p className="font-serif text-lg [writing-mode:vertical-rl] rotate-180">
        INVITATION
      </p>
    </div>
  );

  return (
    <div className="w-full max-w-4xl p-4">
      <TicketFace mainContent={rectoMainContent} stubContent={rectoStubContent} />
    </div>
  );
}

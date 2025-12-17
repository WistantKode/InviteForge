"use client";

import { useInvitation } from "@/context/InvitationContext";
import { TicketFace } from "./TicketFace";
import { TicketBarcode } from "./Barcode";

export function PremiumInvitation() {
  const { data } = useInvitation();
  const ticketNumber = "IUT-2024-05-25-001"; // Exemple de numéro de billet

  // --- Contenu de la zone principale (75%) ---
  const rectoMainContent = (
    <div className="flex flex-col h-full text-white">
      {/* En-tête */}
      <div className="text-center mb-6">
        <h1 className="font-serif text-3xl tracking-wider">
          CÉRÉMONIE DE PARRAINAGE ACADÉMIQUE
        </h1>
        <p className="font-sans text-sm italic opacity-80 mt-1">
          Institut Universitaire de Technologie de Douala
        </p>
      </div>

      {/* Texte formel */}
      <p className="font-sans text-xs text-center opacity-90 max-w-md mx-auto mb-8">
        En l'honneur de la nouvelle promotion, nous avons le plaisir de vous convier à la cérémonie solennelle de parrainage, un moment de transmission et d'excellence académique.
      </p>

      {/* Bloc d'informations */}
      <div className="text-center space-y-2 mb-auto">
        <p className="font-sans text-base">{data.ceremonyDate}</p>
        <p className="font-sans text-base font-bold">{data.ceremonyLocation}</p>
      </div>

      {/* Code-barres */}
      <div className="flex items-center justify-center space-x-4">
        <TicketBarcode value={ticketNumber} />
        <p className="font-mono text-xs tracking-widest">{ticketNumber}</p>
      </div>
    </div>
  );

  // --- Contenu de la talonnette (25%) ---
  const rectoStubContent = (
    <div className="h-full w-full flex flex-col items-center justify-between text-ticket-black">
      <p
        className="font-serif text-xl tracking-widest uppercase"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Invitation Officielle
      </p>
      <div className="flex flex-col items-center space-y-2">
        <TicketBarcode value={ticketNumber} isVertical />
        <p className="font-mono text-xs -rotate-90 origin-center whitespace-nowrap">{ticketNumber}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-4xl p-4">
      <TicketFace mainContent={rectoMainContent} stubContent={rectoStubContent} />
    </div>
  );
}

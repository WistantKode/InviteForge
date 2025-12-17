"use client";

import { useInvitation } from "@/context/InvitationContext";
import { TicketFace } from "./TicketFace";
import { TicketBarcode } from "./Barcode";

export function PremiumInvitation() {
  const { data } = useInvitation();
  const ticketNumber = "IUT-2024-05-25-001";

  // =================================================================
  // RECTO FACE CONTENT
  // =================================================================
  const rectoMainContent = (
    <div className="flex flex-col h-full text-white p-10"> {/* Marges généreuses */}
      {/* En-tête */}
      <div className="text-center mb-auto"> {/* mb-auto pour pousser le reste vers le bas */}
        <h1 className="font-serif text-4xl font-bold tracking-wider leading-tight">
          CÉRÉMONIE DE PARRAINAGE
        </h1>
        <p className="font-serif text-lg italic opacity-90 mt-2">
          Institut Universitaire de Technologie de Douala
        </p>
      </div>

      {/* Texte formel */}
      <p className="font-sans text-sm text-center text-light-gray max-w-md mx-auto mt-8 mb-10 leading-relaxed">
        En l'honneur de la nouvelle promotion, nous avons le plaisir de vous convier à la cérémonie solennelle de parrainage, un moment de transmission et d'excellence académique.
      </p>

      {/* Bloc d'informations */}
      <div className="text-center space-y-2 mb-auto"> {/* mb-auto pour pousser le code-barres vers le bas */}
        <p className="font-sans text-base text-light-gray">{data.ceremonyDate}</p>
        <p className="font-sans text-base font-bold text-light-gray">{data.ceremonyLocation}</p>
      </div>

      {/* Code-barres */}
      <div className="flex flex-col items-center justify-center mt-auto"> {/* mt-auto pour le pousser en bas */}
        <TicketBarcode value={ticketNumber} />
        <p className="font-mono text-xs tracking-widest text-light-gray mt-1">{ticketNumber}</p>
      </div>
    </div>
  );

  // --- Contenu de la talonnette (25%) ---
  const rectoStubContent = (
    <div className="h-full w-full flex flex-col items-center justify-between text-ticket-black p-6"> {/* Marges généreuses */}
      <p
        className="font-serif text-xl font-bold tracking-widest uppercase text-ticket-black"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Invitation Officielle
      </p>
      <div className="flex flex-col items-center space-y-2">
        <TicketBarcode value={ticketNumber} isVertical />
        <p className="font-mono text-xs text-light-gray -rotate-90 origin-center whitespace-nowrap">{ticketNumber}</p>
      </div>
    </div>
  );

  // =================================================================
  // VERSO FACE CONTENT (unchanged for this phase)
  // =================================================================
  const versoMainContent = (
    <div className="flex flex-col h-full text-white p-6 text-left">
      <h2 className="font-serif text-2xl mb-4">CONDITIONS D’ACCÈS</h2>
      <ul className="font-sans text-xs space-y-3 list-disc list-inside opacity-90">
        <li>Ce billet est strictement personnel et non cessible.</li>
        <li>Une pièce d'identité pourra être demandée à l'entrée.</li>
        <li>L'accès à la salle est autorisé jusqu'à 15 minutes avant le début de la cérémonie.</li>
        <li>Veuillez éteindre vos appareils électroniques durant l'événement.</li>
      </ul>
      <div className="flex items-center justify-center space-x-4 mt-auto">
        <TicketBarcode value={ticketNumber} />
        <p className="font-mono text-xs tracking-widest">{ticketNumber}</p>
      </div>
    </div>
  );

  const versoStubContent = (
    <div className="h-full w-full flex flex-col items-center justify-between text-ticket-black">
      <p className="font-serif text-xl tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
        IUT de Douala
      </p>
      <p className="font-sans text-xxs text-center px-2">
        Billet personnel – non cessible
      </p>
    </div>
  );

  return (
    <div className="w-full max-w-4xl p-4 space-y-8">
      <TicketFace mainContent={rectoMainContent} stubContent={rectoStubContent} />
      <TicketFace mainContent={versoMainContent} stubContent={versoStubContent} isVerso={true} />
    </div>
  );
}

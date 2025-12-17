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
    <div className="flex flex-col h-full text-white p-4">
      <div className="text-center mb-6">
        <h1 className="font-serif text-3xl tracking-wider">CÉRÉMONIE DE PARRAINAGE</h1>
        <p className="font-sans text-sm italic opacity-80 mt-1">Institut Universitaire de Technologie</p>
      </div>
      <p className="font-sans text-xs text-center opacity-90 max-w-md mx-auto mb-8">
        En l'honneur de la nouvelle promotion, nous avons le plaisir de vous convier à la cérémonie solennelle de parrainage.
      </p>
      <div className="text-center space-y-2 mb-auto">
        <p className="font-sans text-base">{data.ceremonyDate}</p>
        <p className="font-sans text-base font-bold">{data.ceremonyLocation}</p>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <TicketBarcode value={ticketNumber} />
        <p className="font-mono text-xs tracking-widest">{ticketNumber}</p>
      </div>
    </div>
  );

  const rectoStubContent = (
    <div className="h-full w-full flex flex-col items-center justify-between text-ticket-black">
      <p className="font-serif text-xl tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
        Invitation Officielle
      </p>
      <div className="flex flex-col items-center space-y-2">
        <TicketBarcode value={ticketNumber} isVertical />
        <p className="font-mono text-xs -rotate-90 origin-center whitespace-nowrap">{ticketNumber}</p>
      </div>
    </div>
  );

  // =================================================================
  // VERSO FACE CONTENT
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

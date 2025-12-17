"use client"; // Important pour utiliser les hooks React

import { useState } from "react";
import { InvitationForm } from "@/components/shared/InvitationForm";
import { InvitationPreview } from "@/components/shared/InvitationPreview";

// On définit un type pour les données de l'invitation
export type InvitationData = {
  godchildName: string;
  godparentName: string;
  ceremonyDate: string;
  ceremonyLocation: string;
};

export default function HomePage() {
  const [invitationData, setInvitationData] = useState<InvitationData>({
    godchildName: "Jean Dupont",
    godparentName: "Marie Martin",
    ceremonyDate: "Samedi 25 Mai 2024",
    ceremonyLocation: "Amphithéâtre A",
  });

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900 p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full max-w-6xl">
        <div className="flex items-center justify-center">
          <InvitationForm data={invitationData} setData={setInvitationData} />
        </div>
        <div className="flex items-center justify-center">
          <InvitationPreview data={invitationData} />
        </div>
      </div>
    </main>
  );
}

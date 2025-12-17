"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { InvitationData } from "@/types";

// 1. Définir la structure du contexte
interface InvitationContextType {
  data: InvitationData;
  setData: React.Dispatch<React.SetStateAction<InvitationData>>;
}

// 2. Créer le contexte avec une valeur par défaut (undefined au début)
const InvitationContext = createContext<InvitationContextType | undefined>(undefined);

// 3. Créer le Provider (le composant qui fournira l'état)
export function InvitationProvider({ children }: { children: ReactNode }) {
  const [invitationData, setInvitationData] = useState<InvitationData>({
    godchildName: "Jean Dupont",
    godparentName: "Marie Martin",
    ceremonyDate: "Samedi 25 Mai 2024",
    ceremonyLocation: "Amphithéâtre A",
  });

  return (
    <InvitationContext.Provider value={{ data: invitationData, setData: setInvitationData }}>
      {children}
    </InvitationContext.Provider>
  );
}

// 4. Créer un hook personnalisé pour utiliser le contexte facilement
export function useInvitation() {
  const context = useContext(InvitationContext);
  if (context === undefined) {
    throw new Error("useInvitation must be used within an InvitationProvider");
  }
  return context;
}

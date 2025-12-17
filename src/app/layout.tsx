import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { InvitationProvider } from "@/context/InvitationContext";
import { Toaster } from "@/components/ui/sonner"; // Importer le Toaster pour les notifications

// Configuration des polices
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // En tant que variable CSS
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair", // En tant que variable CSS
});

export const metadata: Metadata = {
  title: "InviteForge | Créez votre invitation",
  description: "Un outil simple pour générer des billets d'invitation élégants.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      {/* On combine les classes des polices */}
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <InvitationProvider>
          <main>{children}</main>
          <Toaster />
        </InvitationProvider>
      </body>
    </html>
  );
}

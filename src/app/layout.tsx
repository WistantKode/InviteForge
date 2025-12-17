import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { InvitationProvider } from "@/context/InvitationContext"; // Importer le Provider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InviteForge",
  description: "Générez vos billets d'invitation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <InvitationProvider>{children}</InvitationProvider>
      </body>
    </html>
  );
}

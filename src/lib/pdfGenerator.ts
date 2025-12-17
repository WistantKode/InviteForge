import jsPDF from "jspdf";
import { InvitationData } from "@/app/page";

// La police 'Helvetica' est l'une des polices de base disponibles dans jsPDF.
// Pour des polices personnalisées (comme Playfair Display), une configuration plus avancée est nécessaire.

export const generateInvitationPDF = (data: InvitationData) => {
  // Créer un nouveau document PDF (format A5, orientation portrait)
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a5",
  });

  // --- Arrière-plan (optionnel) ---
  // doc.setFillColor("#F8F8F8");
  // doc.rect(0, 0, 148, 210, "F"); // Dimensions d'un A5

  // --- Logo de l'école ---
  // On suppose que le logo est dans public/logo.png
  // Note : jsPDF a besoin d'un petit temps pour charger l'image, d'où l'utilisation de async/await.
  const addLogo = async () => {
    try {
      const response = await fetch('/logo.png');
      const blob = await response.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      return new Promise<string>((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result as string);
        };
      });
    } catch (error) {
      console.error("Impossible de charger le logo:", error);
      return null;
    }
  };

  addLogo().then(logoDataURL => {
    if (logoDataURL) {
      doc.addImage(logoDataURL, "PNG", 64, 15, 20, 20); // Centré horizontalement, en haut
    }

    // --- Contenu du texte ---
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor("#333333");
    doc.text("La promotion 2024 a le plaisir de vous convier à la", 148 / 2, 50, { align: "center" });

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Cérémonie de Parrainage", 148 / 2, 65, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(14);
    doc.text("de", 148 / 2, 80, { align: "center" });

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor("#2563EB"); // Bleu
    doc.text(data.godchildName, 148 / 2, 90, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor("#333333");
    doc.text("sous le parrainage de", 148 / 2, 110, { align: "center" });

    doc.setFont("Helvetica", "medium");
    doc.setFontSize(14);
    doc.text(data.godparentName, 148 / 2, 120, { align: "center" });

    // --- Informations pratiques ---
    doc.setFontSize(12);
    doc.text(data.ceremonyDate, 148 / 2, 140, { align: "center" });
    doc.text(data.ceremonyLocation, 148 / 2, 148, { align: "center" });

    // --- Télécharger le PDF ---
    doc.save("invitation-ceremonie.pdf");
  });
};

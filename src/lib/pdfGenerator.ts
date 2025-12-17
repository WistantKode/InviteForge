import jsPDF from "jspdf";
import { InvitationData } from "@/types"; // Utilise le type centralisé

const loadLogo = async (): Promise<string | null> => {
  try {
    const response = await fetch('/logo.jpeg');
    const blob = await response.blob();
    return new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Impossible de charger le logo:", error);
    return null;
  }
};

export const generateInvitationPDF = async (data: InvitationData) => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a5",
  });

  const logoDataURL = await loadLogo();
  if (logoDataURL) {
    doc.addImage(logoDataURL, "PNG", 64, 15, 20, 20);
  }

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
  doc.setTextColor("#2563EB");
  doc.text(data.godchildName, 148 / 2, 90, { align: "center" });

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor("#333333");
  doc.text("sous le parrainage de", 148 / 2, 110, { align: "center" });

  doc.setFont("Helvetica", "medium");
  doc.setFontSize(14);
  doc.text(data.godparentName, 148 / 2, 120, { align: "center" });

  doc.setFontSize(12);
  doc.text(data.ceremonyDate, 148 / 2, 140, { align: "center" });
  doc.text(data.ceremonyLocation, 148 / 2, 148, { align: "center" });

  doc.save("invitation-ceremonie.pdf");
};

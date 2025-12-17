import jsPDF from "jspdf";
import { InvitationData } from "@/types";

// Helper to load logo (assuming it's in public/)
const loadLogo = async (): Promise<string | null> => {
  try {
    const response = await fetch('/logo.jpeg'); // Corrected to .jpeg
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
  const ticketWidth = 180; // mm
  const ticketHeight = 60; // mm
  const mainWidth = ticketWidth * 0.75; // 75%
  const stubWidth = ticketWidth * 0.25; // 25%

  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: [ticketWidth, ticketHeight],
  });

  const ticketBlack = "#1A1A1A";
  const ticketIvory = "#FDFBF5";
  const textColor = "#FFFFFF";
  const stubTextColor = "#1A1A1A";

  const titleFont = "Times";
  const bodyFont = "Helvetica";

  const ticketNumber = "IUT-2024-05-25-001";

  // =================================================================
  // RECTO (Page 1)
  // =================================================================

  // Background for Main Area (75%) - Black
  doc.setFillColor(ticketBlack);
  doc.rect(0, 0, mainWidth, ticketHeight, "F");

  // Background for Stub Area (25%) - Ivory
  doc.setFillColor(ticketIvory);
  doc.rect(mainWidth, 0, stubWidth, ticketHeight, "F");

  // --- Main Content (75%) ---
  doc.setTextColor(textColor);
  doc.setFont(titleFont, "bold");
  doc.setFontSize(14);
  doc.text("CÉRÉMONIE DE PARRAINAGE ACADÉMIQUE", mainWidth / 2, 10, { align: "center" });

  doc.setFont(bodyFont, "italic");
  doc.setFontSize(8);
  doc.text("Institut Universitaire de Technologie de Douala", mainWidth / 2, 15, { align: "center" });

  doc.setFont(bodyFont, "normal");
  doc.setFontSize(7);
  doc.text(
    "En l'honneur de la nouvelle promotion, nous avons le plaisir de vous convier à la cérémonie solennelle de parrainage.",
    mainWidth / 2, 25, { align: "center", maxWidth: mainWidth - 20 }
  );

  // Event Details
  doc.setFont(bodyFont, "normal");
  doc.setFontSize(9);
  doc.text(data.ceremonyDate, mainWidth / 2, 35, { align: "center" });
  doc.setFont(bodyFont, "bold");
  doc.text(data.ceremonyLocation, mainWidth / 2, 40, { align: "center" });

  // Guest Names
  doc.setFont(titleFont, "normal");
  doc.setFontSize(10);
  doc.text(`Filleul(e) : ${data.godchildName || "Nom du Filleul"}`, mainWidth / 2, 48, { align: "center" });
  doc.text(`Parrain/Marraine : ${data.godparentName || "Nom du Parrain"}`, mainWidth / 2, 53, { align: "center" });

  // Barcode (Horizontal)
  doc.setFont(bodyFont, "normal");
  doc.setFontSize(6);
  doc.text(`[BARCODE] ${ticketNumber}`, mainWidth / 2, ticketHeight - 5, { align: "center" });


  // --- Stub Content (25%) ---
  doc.setTextColor(stubTextColor);
  doc.setFont(titleFont, "bold");
  doc.setFontSize(10);
  doc.text("INVITATION OFFICIELLE", mainWidth + stubWidth / 2, ticketHeight / 2, { align: "center", angle: 90 });

  // Barcode (Vertical)
  doc.setFontSize(6);
  doc.text(`[BARCODE] ${ticketNumber}`, mainWidth + stubWidth / 2, ticketHeight - 10, { align: "center", angle: 90 });


  // =================================================================
  // VERSO (Page 2)
  // =================================================================
  doc.addPage();

  // Background for Main Area (75%) - Black (on the right for verso)
  doc.setFillColor(ticketBlack);
  doc.rect(stubWidth, 0, mainWidth, ticketHeight, "F");

  // Background for Stub Area (25%) - Ivory (on the left for verso)
  doc.setFillColor(ticketIvory);
  doc.rect(0, 0, stubWidth, ticketHeight, "F");

  // --- Main Content (75%) ---
  doc.setTextColor(textColor);
  doc.setFont(titleFont, "bold");
  doc.setFontSize(12);
  doc.text("CONDITIONS D’ACCÈS", stubWidth + mainWidth / 2, 10, { align: "center" });

  doc.setFont(bodyFont, "normal");
  doc.setFontSize(7);
  const conditionsText = [
    "• Ce billet est strictement personnel et non cessible.",
    "• Une pièce d'identité pourra être demandée à l'entrée.",
    "• L'accès à la salle est autorisé jusqu'à 15 minutes avant le début de la cérémonie.",
    "• Veuillez éteindre vos appareils électroniques durant l'événement."
  ];
  doc.text(conditionsText, stubWidth + 10, 20, { maxWidth: mainWidth - 20, lineHeightFactor: 1.5 });

  // Barcode (Horizontal)
  doc.setFontSize(6);
  doc.text(`[BARCODE] ${ticketNumber}`, stubWidth + mainWidth / 2, ticketHeight - 5, { align: "center" });

  // --- Stub Content (25%) ---
  doc.setTextColor(stubTextColor);
  doc.setFont(titleFont, "bold");
  doc.setFontSize(10);
  doc.text("IUT de Douala", stubWidth / 2, ticketHeight / 2 - 5, { align: "center", angle: 90 });
  doc.setFont(bodyFont, "normal");
  doc.setFontSize(6);
  doc.text("Billet personnel – non cessible", stubWidth / 2, ticketHeight / 2 + 5, { align: "center", angle: 90 });


  // --- Logo ---
  const logoDataURL = await loadLogo();
  if (logoDataURL) {
    // Place logo on Recto Main Area
    doc.addImage(logoDataURL, "JPEG", mainWidth / 2 - 10, 2, 20, 7); // Changed PNG to JPEG
    // Place logo on Verso Main Area
    doc.addImage(logoDataURL, "JPEG", stubWidth + mainWidth / 2 - 10, 2, 20, 7); // Changed PNG to JPEG
  }


  doc.save("invitation-ceremonie-premium.pdf");
};

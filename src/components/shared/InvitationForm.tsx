import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InvitationData } from "@/app/page";
import { generateInvitationPDF } from "@/lib/pdfGenerator";
import React from "react"; // Importation

interface InvitationFormProps {
  data: InvitationData;
  setData: React.Dispatch<React.SetStateAction<InvitationData>>;
}

export function InvitationForm({ data, setData }: InvitationFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de la page
    generateInvitationPDF(data); // Appelle la fonction de génération
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Créez votre invitation</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="godchildName">Nom du Filleul(e)</Label>
            <Input
              id="godchildName"
              value={data.godchildName}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="godparentName">Nom du Parrain / Marraine</Label>
            <Input
              id="godparentName"
              value={data.godparentName}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ceremonyDate">Date de la cérémonie</Label>
            <Input
              id="ceremonyDate"
              value={data.ceremonyDate}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ceremonyLocation">Lieu</Label>
            <Input
              id="ceremonyLocation"
              value={data.ceremonyLocation}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="w-full">
            Générer le PDF
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

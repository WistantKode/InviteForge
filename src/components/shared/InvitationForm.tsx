"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInvitation } from "@/context/InvitationContext"; // 1. Importer le hook
import { generateInvitationPDF } from "@/lib/pdfGenerator";

export function InvitationForm() {
  const { data, setData } = useInvitation(); // 2. Utiliser le hook pour obtenir data et setData

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateInvitationPDF(data);
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

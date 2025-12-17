"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInvitation } from "@/context/InvitationContext";
import { generateInvitationPDF } from "@/lib/pdfGenerator";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export function InvitationForm() {
  const { data, setData } = useInvitation();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    try {
      await generateInvitationPDF(data);
      toast.success("Invitation générée avec succès !");
    } catch (error) {
      toast.error("Une erreur est survenue lors de la génération.");
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="w-full max-w-lg shadow-xl rounded-2xl">
      <CardHeader>
        <CardTitle className="font-serif text-2xl">Composez votre Invitation</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Accordion type="multiple" defaultValue={["item-1", "item-2"]} className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-4">
              <AccordionTrigger className="font-semibold">Invités</AccordionTrigger>
              <AccordionContent className="space-y-6 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="godchildName">Nom du Filleul(e)</Label>
                  <Input id="godchildName" value={data.godchildName} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="godparentName">Nom du Parrain / Marraine</Label>
                  <Input id="godparentName" value={data.godparentName} onChange={handleChange} />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-4">
              <AccordionTrigger className="font-semibold">Cérémonie</AccordionTrigger>
              <AccordionContent className="space-y-6 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="ceremonyDate">Date de la cérémonie</Label>
                  <Input id="ceremonyDate" value={data.ceremonyDate} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ceremonyLocation">Lieu</Label>
                  <Input id="ceremonyLocation" value={data.ceremonyLocation} onChange={handleChange} />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button type="submit" className="w-full mt-8" disabled={isGenerating}>
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Génération en cours...
              </>
            ) : (
              "Générer le PDF"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

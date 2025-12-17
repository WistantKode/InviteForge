"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useInvitation } from "@/context/InvitationContext";

export function InvitationPreview() {
  const { data } = useInvitation();

  return (
    <Card className="w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
      <CardHeader className="flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="h-20 w-20 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-xs text-gray-500">Logo</span>
        </div>
      </CardHeader>
      <CardContent className="p-8 text-center space-y-4">
        <p className="text-base text-gray-600 dark:text-gray-300 font-sans">
          La promotion 2024 a le plaisir de vous convier à la
        </p>
        <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-gray-100">
          Cérémonie de Parrainage
        </h1>
        <p className="text-lg text-gray-800 dark:text-gray-200 font-sans pt-4">
          de
        </p>
        <h2 className="text-3xl font-serif font-semibold text-blue-600 dark:text-blue-400">
          {data.godchildName || "Prénom Nom"}
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-300 font-sans pt-4">
          sous le parrainage de
        </p>
        <h3 className="text-2xl font-serif font-medium text-gray-800 dark:text-gray-200">
          {data.godparentName || "Prénom Nom"}
        </h3>
        <div className="font-sans text-gray-700 dark:text-gray-300 pt-6 space-y-1">
          <p>{data.ceremonyDate || "Date de la cérémonie"}</p>
          <p className="font-semibold">{data.ceremonyLocation || "Lieu de la cérémonie"}</p>
        </div>
      </CardContent>
    </Card>
  );
}

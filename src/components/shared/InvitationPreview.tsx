import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { InvitationData } from "@/app/page"; // Importation du type

interface InvitationPreviewProps {
  data: InvitationData;
}

export function InvitationPreview({ data }: InvitationPreviewProps) {
  return (
    <Card className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg">
      <CardHeader className="flex items-center justify-center p-6">
        {/* Emplacement pour le logo */}
        <div className="h-16 w-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-xs text-gray-500">Logo</span>
        </div>
      </CardHeader>
      <CardContent className="p-8 text-center">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          La promotion 2024 a le plaisir de vous convier à la
        </p>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Cérémonie de Parrainage
        </h1>
        <p className="text-xl text-gray-800 dark:text-gray-200 mb-2">
          de
        </p>
        <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
          {data.godchildName || "Nom du Filleul"}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          sous le parrainage de
        </p>
        <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-8">
          {data.godparentName || "Nom du Parrain"}
        </h3>
        <div className="text-gray-700 dark:text-gray-300">
          <p>{data.ceremonyDate || "Date de la cérémonie"}</p>
          <p>{data.ceremonyLocation || "Lieu de la cérémonie"}</p>
        </div>
      </CardContent>
    </Card>
  );
}

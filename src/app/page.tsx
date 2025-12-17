import { InvitationForm } from "@/components/shared/InvitationForm";
import { InvitationPreview } from "@/components/shared/InvitationPreview";

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900 p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full max-w-6xl">
        <div className="flex items-center justify-center">
          <InvitationForm />
        </div>
        <div className="flex items-center justify-center">
          <InvitationPreview />
        </div>
      </div>
    </main>
  );
}

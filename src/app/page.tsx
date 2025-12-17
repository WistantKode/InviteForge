import { InvitationForm } from "@/components/shared/InvitationForm";
import { PremiumInvitation } from "@/components/shared/PremiumInvitation";

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full items-start justify-center bg-gray-100 dark:bg-gray-900 p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-center lg:pt-16">
          <InvitationForm />
        </div>
        <div className="flex items-center justify-center">
          <PremiumInvitation />
        </div>
      </div>
    </main>
  );
}

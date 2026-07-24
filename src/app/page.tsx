import { ArchiveHeader } from "@/components/archive/ArchiveHeader";
import { ArchiveLanding } from "@/components/archive/ArchiveLanding";
import { buildings } from "@/data/buildings";

export default function Home() {
  return (
    <main className="archive-overview-page">
      <ArchiveHeader />
      <ArchiveLanding buildings={buildings} />
    </main>
  );
}

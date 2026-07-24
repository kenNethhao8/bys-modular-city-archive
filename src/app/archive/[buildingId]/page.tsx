import { notFound } from "next/navigation";
import { ArchiveFooter } from "@/components/archive/ArchiveFooter";
import { ArchiveHeader } from "@/components/archive/ArchiveHeader";
import { BuildingShowcase } from "@/components/showcase/BuildingShowcase";
import { buildings } from "@/data/buildings";

type Props = {
  params: Promise<{ buildingId: string }>;
};

export function generateStaticParams() {
  return buildings.map(({ id }) => ({ buildingId: id }));
}

export default async function BuildingExhibitionPage({ params }: Props) {
  const { buildingId } = await params;
  const currentIndex = buildings.findIndex((building) => building.id === buildingId);

  if (currentIndex === -1) {
    notFound();
  }

  const building = buildings[currentIndex];
  const previousBuilding = buildings[(currentIndex - 1 + buildings.length) % buildings.length];
  const nextBuilding = buildings[(currentIndex + 1) % buildings.length];

  return (
    <main>
      <ArchiveHeader />
      <BuildingShowcase
        building={building}
        collectionSize={buildings.length}
        previousBuilding={previousBuilding}
        nextBuilding={nextBuilding}
      />
      <ArchiveFooter />
    </main>
  );
}

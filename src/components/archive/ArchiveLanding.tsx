import Link from "next/link";
import type { Building } from "@/types/building";

type Props = { buildings: Building[] };

type OverviewPresentation = {
  displayScale: number;
  horizontalOffset: string;
  order: number;
};

// This is a display-only curatorial arrangement for the landing page. It does
// not change the archive records or the individual exhibition pages.
const overviewPresentation: Record<string, OverviewPresentation> = {
  "jazz-club": { order: 1, displayScale: 1.1, horizontalOffset: "-2%" },
  "boutique-hotel": { order: 2, displayScale: 1.02, horizontalOffset: "-1%" },
  "natural-history-museum": { order: 3, displayScale: 1.23, horizontalOffset: "0%" },
  "assembly-square": { order: 4, displayScale: 0.98, horizontalOffset: "1%" },
  "bookshop": { order: 5, displayScale: 1.1, horizontalOffset: "2%" },
};

export function ArchiveLanding({ buildings }: Props) {
  const firstYear = Math.min(...buildings.map((building) => building.archive.releaseYear));
  const lastYear = Math.max(...buildings.map((building) => building.archive.releaseYear));
  const overviewBuildings = [...buildings].sort(
    (left, right) => overviewPresentation[left.id].order - overviewPresentation[right.id].order,
  );

  return (
    <section className="archive-overview" aria-labelledby="archive-title">
      <div className="overview-copy">
        <p className="overview-kicker">PERSONAL DIGITAL ARCHIVE / COLLECTION 01</p>
        <h1 id="archive-title">MODULAR CITY<br />ARCHIVE</h1>
        <p className="overview-statement">A personal digital archive of modular architecture.</p>
        <dl className="overview-summary" aria-label="Collection summary">
          <div><dt>Collection</dt><dd>{buildings.length} Buildings</dd></div>
          <div><dt>Archive Range</dt><dd>{firstYear} {"\u2014"} {lastYear}</dd></div>
        </dl>
      </div>

      <section className="overview-city" aria-label="Five-building archive overview">
        <p className="overview-instruction">Select a building to enter its archive</p>
        <div className="city-buildings">
          {overviewBuildings.map((building) => {
            const presentation = overviewPresentation[building.id];

            return (
              <Link
                className={`overview-building building-${building.id}`}
                href={`/archive/${building.id}`}
                key={building.id}
                aria-label={`Enter ${building.name} archive`}
              >
                <div className="overview-model">
                  <img
                    src={building.visual.heroImage}
                    alt=""
                    style={{
                      objectPosition: building.visual.imagePosition,
                      transform: `translateX(${presentation.horizontalOffset}) scale(${presentation.displayScale})`,
                    }}
                  />
                </div>
                <div className="overview-label">
                  <span>{String(building.index).padStart(2, "0")}</span>
                  <strong>{building.name}</strong>
                  <em>{building.archive.releaseYear}</em>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </section>
  );
}

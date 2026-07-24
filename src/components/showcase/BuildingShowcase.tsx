"use client";

import Link from "next/link";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import type { Building } from "@/types/building";
import { BuildingArchiveMeta } from "./BuildingArchiveMeta";
import { BuildingHero } from "./BuildingHero";
import { CuratorNotes } from "./CuratorNotes";

type Props = {
  building: Building;
  collectionSize: number;
  previousBuilding: Building;
  nextBuilding: Building;
};

export function BuildingShowcase({ building, collectionSize, previousBuilding, nextBuilding }: Props) {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .from("[data-animate='header']", { opacity: 0, y: -14, duration: 0.65 })
        .from("[data-animate='meta']", { opacity: 0, x: -28, duration: 0.75 }, "-=0.35")
        .from("[data-animate='hero']", { opacity: 0, y: 34, scale: 0.97, duration: 1.05 }, "-=0.55")
        .from("[data-animate='note']", { opacity: 0, y: 18, duration: 0.55, stagger: 0.13 }, "-=0.35")
        .from("[data-animate='footer']", { opacity: 0, duration: 0.5 }, "-=0.2");
    });
    return () => context.revert();
  }, []);

  return (
    <section className={`showcase theme-${building.visual.backgroundTheme}`}>
      <div className="exhibition-grid">
        <BuildingArchiveMeta building={building} collectionSize={collectionSize} />
        <BuildingHero building={building} />
      </div>
      <nav className="showcase-controls" aria-label="Browse the building collection">
        <Link className="showcase-control" href={`/archive/${previousBuilding.id}`} aria-label={`Show ${previousBuilding.name}`}>
          <span aria-hidden="true">{"\u2190"}</span>
        </Link>
        <Link className="showcase-control" href={`/archive/${nextBuilding.id}`} aria-label={`Show ${nextBuilding.name}`}>
          <span aria-hidden="true">{"\u2192"}</span>
        </Link>
      </nav>
      <CuratorNotes notes={building.curator.notes} />
    </section>
  );
}

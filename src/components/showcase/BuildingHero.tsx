import type { Building } from "@/types/building";

type Props = { building: Building };

export function BuildingHero({ building }: Props) {
  if (!building.visual.isPlaceholder) {
    return (
      <div className="building-presentation" data-animate="hero">
        <img
          className="building-image"
          src={building.visual.heroImage}
          alt={building.visual.imageAlt}
          style={{ objectPosition: building.visual.imagePosition }}
        />
      </div>
    );
  }

  return (
    <figure className="building-placeholder" data-animate="hero" role="img" aria-label="Museum visual placeholder">
      <div className="placeholder-sky" />
      <div className="museum-roof"><span /><span /><span /></div>
      <div className="museum-body">
        <div className="museum-sign">NATURAL HISTORY</div>
        <div className="museum-columns">{Array.from({ length: 7 }, (_, index) => <span key={index} />)}</div>
        <div className="museum-entrance" />
      </div>
      <figcaption>MODEL VISUAL PLACEHOLDER · ASSET TO BE ADDED</figcaption>
    </figure>
  );
}

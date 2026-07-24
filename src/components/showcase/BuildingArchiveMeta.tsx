import type { Building } from "@/types/building";

type Props = { building: Building; collectionSize: number };

export function BuildingArchiveMeta({ building, collectionSize }: Props) {
  const { archive, curator, index, nameLines } = building;
  const number = String(index).padStart(2, "0");
  const total = String(collectionSize).padStart(2, "0");
  const dimensions = `${archive.dimensions.heightCm} × ${archive.dimensions.widthCm} × ${archive.dimensions.depthCm} cm`;

  return (
    <section className="archive-meta" data-animate="meta" aria-label="Archive information">
      <p className="collection-index">{number} / {total}</p>
      <h1>{nameLines.map((line) => <span key={line}>{line}</span>)}</h1>
      <dl className="archive-facts">
        <div><dt>Set</dt><dd>#{archive.setNumber}</dd></div>
        <div><dt>Year</dt><dd>{archive.releaseYear}</dd></div>
        <div><dt>Age</dt><dd>{archive.ageRating}</dd></div>
        <div><dt>Pieces</dt><dd>{archive.pieceCount.toLocaleString()}</dd></div>
        <div><dt>Figures</dt><dd>{archive.minifigureCount}</dd></div>
        <div><dt>Dimensions</dt><dd>{dimensions}</dd></div>
      </dl>
      <p className="official-collection">
        <span>{archive.sourceTheme}</span>
        <span>{archive.collection}</span>
      </p>
      <p className="category-label">{curator.category}</p>
      <p className="collection-description">{curator.description}</p>
    </section>
  );
}

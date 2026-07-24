import type { CuratorNotes as Notes } from "@/types/building";

type Props = { notes: Notes };

const entries = [
  ["Architecture", "architecture"],
  ["Details", "details"],
  ["Story", "story"]
] as const;

export function CuratorNotes({ notes }: Props) {
  return (
    <section className="curator-notes" aria-label="Curator notes">
      {entries.map(([title, key]) => (
        <article className="note-card" data-animate="note" key={key}>
          <p className="note-number">0{entries.findIndex((entry) => entry[1] === key) + 1}</p>
          <h2>{title}</h2>
          <p>{notes[key]}</p>
        </article>
      ))}
    </section>
  );
}

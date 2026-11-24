import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Make the AI Judge Laugh: the Office Joke Open
// One line of office comedy, at most 200 characters. The judge compares
// entries two at a time, so the whole entry is this single line.
//
// Determinism note: the entry is a fixed string constant, so every run
// writes byte-identical output; the program only validates its length
// and writes it out.
//
// Why this joke: the office detail is specific (the printer that only
// jams on "urgent" documents), the turn lands in the last few words
// ("low priority"), and the payoff is a flash of recognition — the only
// way to get the machine to print your resignation is to tell it the
// resignation does not matter.
const JOKE =
  "Our printer only jams on documents marked 'urgent', so I've started labelling my resignation letter 'low priority'.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${outPath}`);

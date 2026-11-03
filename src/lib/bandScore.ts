// Approximate raw-score -> band conversion for self-practice purposes.
// Real IELTS band thresholds shift slightly between official test versions;
// these are the commonly published approximations used for practice scoring,
// not an official Cambridge/IELTS scoring table.

const LISTENING_TABLE: [number, number][] = [
  [39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5],
  [23, 6], [18, 5.5], [16, 5], [13, 4.5], [10, 4], [8, 3.5],
  [6, 3], [4, 2.5], [0, 2],
];

const READING_ACADEMIC_TABLE: [number, number][] = [
  [39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5],
  [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5],
  [6, 3], [4, 2.5], [0, 2],
];

function lookup(table: [number, number][], raw: number): number {
  for (const [minRaw, band] of table) {
    if (raw >= minRaw) return band;
  }
  return 1;
}

export function listeningBand(rawScore: number): number {
  return lookup(LISTENING_TABLE, rawScore);
}

export function readingBand(rawScore: number): number {
  return lookup(READING_ACADEMIC_TABLE, rawScore);
}

// IELTS overall-band rounding: average the skill bands, then round .25 up
// to the nearest .5 and .75 up to the next whole band (the official rule).
export function averageBand(bands: number[]): number {
  if (bands.length === 0) return 0;
  const mean = bands.reduce((a, b) => a + b, 0) / bands.length;
  return Math.round(mean * 2) / 2;
}

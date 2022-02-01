export interface MajorCredits {
  _brand: "major";
  credits: number;
};

export interface MinorCredits {
  _brand: "minor";
  credits: number;
};

export function sumMajorCredits(subject1: number, subject2: number): number {
  return (subject1 + subject2);
};

export function sumMinorCredits(subject1: number, subject2: number): number {
  return (subject1 + subject2);
};

export interface Dataset {
  label: string | null,
  backgroundColor: string[],
  data: number[]
}

export interface Refs {
  labels: string[];
  datasets: Dataset[];
}


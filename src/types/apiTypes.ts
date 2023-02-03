export interface Data {
  code: string;
  name: string;
  region_code: string;
  type: string;
}

export interface Suggestions {
  value: string,
  unrestricted_value: string,
  data: Data
}

export interface Aggregate {
  suggestions: Suggestions[]
}
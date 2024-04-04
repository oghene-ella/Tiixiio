export interface Region {
  id: number;
  name: string;
  states: State[];
}

// state.model.ts
export interface State {
  id: number;
  name: string;
  lgas: LGA[];
}

// lga.model.ts
export interface LGA {
  id: number;
  name: string;
}

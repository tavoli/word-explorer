export interface ResultItem {
  id: string;
  text: string;
}

export type Results = ResultItem[];

export interface AutoCompleteState {
  search: string;
  data: Results;
  loading: boolean;
  error: Error | null;
}

export interface ControllerContext {
  state: AutoCompleteState;
  query: (search: string) => void;
}

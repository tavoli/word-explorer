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

export interface AutoCompleteAction {
  type: string;
  payload: any;
}

export interface ControllerContext {
  state: AutoCompleteState;
  dispatch: (action: AutoCompleteAction) => void;
}

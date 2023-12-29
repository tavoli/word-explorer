export type ResultItem = any;

export type Results = ResultItem;

export interface AutoCompleteState {
  search: string;
  data: Map<string, Results>;
  loading: boolean;
  error: Error | null;
}

export interface AutoCompleteAction {
  type: string;
  payload?: any;
}

export interface AutoCompleteProps {
  url: string;
  debounceTime?: number;
  minChars?: number;
  maxItems?: number;
  cache?: boolean;
  cacheDuration?: number;
  initialResults?: Results;
  inputAutoFocus?: boolean;
  inputShortcutKey?: string;
  useEnterAsSubmit?: boolean;
}

export interface ControllerContext {
  state: AutoCompleteState;
  dispatch: React.Dispatch<unknown>;
}

export type SetState = React.Dispatch<React.SetStateAction<AutoCompleteState>>;

export interface ThunkProps {
  dispatch: React.Dispatch<unknown>;
  state: AutoCompleteState;
  options: AutoCompleteProps;
}

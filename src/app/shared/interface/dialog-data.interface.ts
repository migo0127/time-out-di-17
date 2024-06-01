import { Observable } from "rxjs";

export interface IDialogBase {
  title?: string;
  button: string;
  isFalseButton: boolean;
  callback: () => {};
  customAction: boolean;
}

export interface IDialogData extends IDialogBase{
  content: string;
}


export interface ITimeoutWarningDialogData extends IDialogBase {
  content: IDialogContent;
}

export interface IDialogContent {
  afk: Observable<number>;
  idleLimit: number;
  idleWarning: number;
}

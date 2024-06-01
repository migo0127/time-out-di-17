import { Observable } from "rxjs";

// 計時器秒數配置
export interface ITimeoutConfig {
  // 登出秒數（秒）
  idleLimit: number | null;
  // 警告秒數（秒）
  idleWarning: number | null;
}

// 暫存原有計時器秒數配置
export interface ITempTimeoutConfig  extends ITimeoutConfig {
  accumulatedSec: number;
}

// 計時器執行函數
export interface ITimeoutBase {
  // 自定義 callback
  callback: <T>(data?: T) => {};
  // 開始計時
  startTimer: () => void;
  // 中斷/暫停計時
  pauseTimer: () => void;
  // 繼續計時
  restartTimer: () => void;
  // 重置計時並開始計時
  resetTimer: (config?: ITempTimeoutConfig) => void;
  // 清除計時器
  clearTimer: () => void;
  // 自定義計時器總秒數 & 警告秒數
  setTimeoutConfig: (config: ITimeoutConfig) => void;
  // 獲取計時器計時中的秒數
  getAfk$: () => Observable<number>;
  // 獲取是否已倒數計時完的 Observable
  getIsTimeout$: () => Observable<boolean>;
  // 獲取是否已倒數至警告秒數的 Observable
  getIsTimeWarning$: () => Observable<boolean>;
}

export interface ITimeout extends ITimeoutBase, ITimeoutConfig {
  // 暫存原有計時器秒數配置
  tempConfig: ITempTimeoutConfig;
}


export interface ITimeoutConfigResponse<T> {
  returnCode: string;
  returnMsg: string;
  returnData: T
}

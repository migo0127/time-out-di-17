import { MonoTypeOperatorFunction, Observable, Subject, Subscription, interval, takeUntil, tap } from "rxjs";
import { ITempTimeoutConfig, ITimeout, ITimeoutConfig } from "../interface/time-out-config.interface";
import { Inject, Injectable } from "@angular/core";
import { TIMEOUT_CONFIG } from "./timeout-factory.service";

@Injectable()
export class TimeoutService implements ITimeout {

  // 累積計算秒數
  private accumulatedSec: number = 0;
  // 登出秒數（秒）
  private _idleLimit: number;
  // 默認登出秒數（秒）
  private _defaultIdleLimit: number = 60 * 10;
  // 警告秒數（秒）
  private _idleWarning: number;
  // 默認警告秒數（秒）
  private _defaultIdleWarning: number = 20;
  // 暫存原計時器秒數
  private _tempConfig: ITempTimeoutConfig;
  // 計時器
  private timer$: Subscription | null;
  // 計時器當前秒數
  private afk$: Subject<number> = new Subject();
  // 計時器中斷訂閱
  private pauseTimer$: Subject<boolean> = new Subject();
  // 登出訂閱
  private isTimeout$: Subject<boolean> = new Subject();
  // 警告訂閱
  private isTimeWarning$: Subject<boolean> = new Subject();

  // private authService: AuthService;

  get idleLimit(): number {
    return this._idleLimit;
  }

  get idleWarning(): number {
    return this._idleWarning;
  }

  get tempConfig(): ITempTimeoutConfig {
    return this._tempConfig;
  }

  constructor(
    @Inject(TIMEOUT_CONFIG) private config?: ITimeoutConfig,
  ) {
    // 默認計時器倒數 10 分鐘 （600秒）
    this._idleLimit = config?.idleLimit || this._defaultIdleLimit;
    // 默認警告時間倒數 20 秒
    this._idleWarning = config?.idleWarning || this._defaultIdleWarning;
    // this.authService = inject(AuthService);
  }

  // 訂閱當前累計的秒數（1、2、3....秒）
  getAfk$(): Observable<number> {
    return this.afk$!.asObservable();
  }

  // 訂閱計時器是否已超過登出秒數
  getIsTimeout$(): Observable<boolean> {
    return this.isTimeout$.asObservable();
  }

  // 訂閱計時器是否已超過警告秒數
  getIsTimeWarning$(): Observable<boolean> {
    return this.isTimeWarning$.asObservable();
  }

  // 自定義 callback
  callback: <T>(data?: T) => {};

  // 開始計時器
  startTimer(): void {
    this.startCounting();
  }

  // 檢查是否有尚未結束的計時器，需先結束舊計時器再重新啟用新計時器
  private startCounting(): void {
    console.log('[Countdown startCounting: startCounting!]', this.timer$);
    if(this.timer$) {
      console.log('[Countdown startCounting: this.timer$ clearTimer()]');
      this.clearTimer();
    } else {
      console.log('[Countdown startCounting: this.timer$.subscribe()]');
      this.timer$ = this.setTimer$().subscribe();
    }
  }

  // 開始累計秒數
  private setTimer$(): Observable<number | unknown> {
    console.log('[Countdown setTimer$]');
    return interval(1000).pipe(
      takeUntil(this.isTimeout$),
      // takeUntil(this.authService.isLoggedIn().pipe(filter(isLogin => !isLogin))),
      takeUntil(this.pauseTimer$),
      this.calcSec()
    )
  }

  // 計算累計秒數
  private calcSec(): MonoTypeOperatorFunction<unknown> {
    console.log('[Countdown calcSec]');
    return tap(_ => {
      this.accumulatedSec += 1;
      this.afk$!.next(this.accumulatedSec),
      this.checkIsTimeout(this.accumulatedSec, this._idleLimit);
    });
  }

  // 檢查當前累計秒數是否大於設定的登出秒數及警告秒數
  private checkIsTimeout(accumulatedSec: number, idleLimit: number): boolean {
    console.log('[Countdown checkIsTimeout]: ', [accumulatedSec, this._idleWarning ,idleLimit]);
    if(accumulatedSec >= idleLimit){
      this.isTimeout$.next(true);
      this.accumulatedSec = 0;
      return true;
    }else if((idleLimit - accumulatedSec) === this._idleWarning){
      this.isTimeWarning$.next(true);
      return false;
    }else{
      return false;
    }
  }

  // 中斷、暫停計時器
  pauseTimer(): void {
    console.log('[Countdown pauseTimer]');
    this._tempConfig = {
      idleLimit: this.idleLimit,
      idleWarning: this.idleWarning,
      accumulatedSec: this.accumulatedSec
    }
    this.pauseTimer$.next(true);
  }

  // 繼續中斷、暫停的計時器（不重新計算）
  restartTimer(): void {
    this.resetTimer(this._tempConfig);
  }

  // 重新新的計時器
  resetTimer(config?: ITempTimeoutConfig): void {
    this.clearTimer();
    console.log('[Countdown resetTimer config: ]', [config, this.accumulatedSec]);
    if(config){
      this.setTimeoutConfig(config);
      this.accumulatedSec = (config as ITempTimeoutConfig)?.accumulatedSec || 0;
    }
    this.startTimer();
  }

  // 重置、清除計時器
  clearTimer(): void {
    console.log('[Countdown clearTimer: clear!]');
    if(this.timer$){
      this.timer$.unsubscribe();
      this.timer$ = null;
    }
    this.accumulatedSec = 0;
  }

  // 自定義計時器總秒數 & 警告秒數
  setTimeoutConfig(config: ITimeoutConfig): void {
    this._idleLimit = config.idleLimit || this._defaultIdleLimit;
    this._idleWarning = config.idleWarning || this._defaultIdleWarning;
  }

}

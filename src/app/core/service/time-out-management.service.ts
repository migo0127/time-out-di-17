import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TimeoutService } from "./time-out.service";
import { AuthService } from "./auth.service";
import { TimeOutWarningDialogComponent } from "../../shared/time-out-warning-dialog/time-out-warning-dialog.component";
import { AlertDialogComponent } from "../../shared/alert-dialog/alert-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class TimeoutManagementService {

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
  ) {}

  /** 倒數計時器警告 TimeOutWarningDialogComponent
   * @param timeoutService 當前使用的 timeService 實例
   * @param config alert data 配置
   */
  showIsTimeWarningDialog<T>(timeoutService: TimeoutService, config: T): void {
    timeoutService.getIsTimeWarning$().subscribe((sec) => {
      console.log('TimeoutManagementService showIsTimeWarningDialog :' ,[config, sec]);
      this.dialog.open(TimeOutWarningDialogComponent, {
        data: {
          ...config
        },
        // 禁止 esc 或點擊背景來關閉 dialog
        disableClose: true
      })
        .afterClosed()
        .subscribe((isContinue: boolean) => {
          if(isContinue) {
            timeoutService.resetTimer();
          }
        });
    });
  }

  /** 共用 AlertDialogComponent
   * @param timeoutService 當前使用的 timeService 實例
   * @param config alert data 配置
   */
  showIsTimeoutAlertDialog<T>(timeoutService: TimeoutService, config: T): void {
    timeoutService.getIsTimeout$().subscribe((isTimeout: boolean) => {
      console.log('TimeoutManagementService showIsTimeoutAlertDialog :', [config, isTimeout]);
      this.dialog.closeAll();
      this.dialog.open(AlertDialogComponent, {
        data: {
          ...config
        },
        // 禁止 esc 或點擊背景來關閉 dialog
        disableClose: true
      })
        .afterClosed()
        .subscribe(() => {
          this.authService.logout();
        })
    })
  }

  /** 顯示計時器 分鐘：秒
   * @param sec 當前計時秒數
   * @param idleLimit 登出秒數
   * @param isIncrement 遞增(true) / 遞減（false、默認）
   * @returns
   */
  formatMinuteSecond(sec: number, idleLimit: number,isIncrement: boolean = false): string {
    let minute: string;
    let second: string;
    if(isIncrement){
      // 遞增 00:00 -> 10:00
      minute = Math.floor(sec / 60) < 10 ? `0${Math.floor(sec / 60)}` : `${Math.floor(sec / 60)}`;
      second = Math.floor(sec % 60) < 10 ? `0${Math.floor(sec % 60)}`: `${Math.floor(sec % 60)}`;
    } else {
      // 遞減 10:00 -> 00:00
      const totalSec: number = idleLimit - sec;
      minute = Math.floor(totalSec / 60) < 10 ? `0${Math.floor(totalSec / 60)}` : `${Math.floor(totalSec / 60)}`;
      second = Math.floor(totalSec % 60) < 10 ? `0${Math.floor(totalSec % 60)}`: `${Math.floor(totalSec % 60)}`;
    }
    return `${minute}:${second}`;
  }

}

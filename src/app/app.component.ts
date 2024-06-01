import { Component, HostListener } from '@angular/core';
import { TimeoutService } from '@core/service/time-out.service';
import { AlertDialogComponent } from './shared/alert-dialog/alert-dialog.component';
import { TimeoutManagementService } from '@core/service/time-out-management.service';
import { AuthService } from '@core/service/auth.service';
import { RouterOutlet } from '@angular/router';
import { GlobalTimeoutConfig } from '@core/interface/timeout-config.enum';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ RouterOutlet ],
  providers: [ AlertDialogComponent ]
})
export class AppComponent {

  title = 'time-out-di-17';

  constructor(
    private authService: AuthService,
    private timeoutService: TimeoutService,
    private timeoutManagementService: TimeoutManagementService,
  ) { }

  // @HostListener('window:beforeunload', ['$event'])
  // unloadHandle(event: Event): void {
  //   this.authService.logout();
  // }

  ngOnInit(): void {
    this.authService.isLoggedIn()
      .subscribe((isLogin: boolean) => {
      if(isLogin){
        this.startTimeout();
      }else{
        this.timeoutService.clearTimer();
      }
    });
  }

  private startTimeout(): void {
    this.timeoutService.startTimer();
    this.subIsTimeWarningDialog();
    this.subIsTimeoutAlertDialog();
  }

  private subIsTimeWarningDialog(): void {
    const config = {
      button: 'app - 繼續',
      content: {
        afk: this.timeoutService.getAfk$(),
        idleLimit: GlobalTimeoutConfig.idleLimit,
        idleWarning: GlobalTimeoutConfig.idleWarning,
      },
    }
    this.timeoutManagementService.showIsTimeWarningDialog(this.timeoutService, config);
  }

  private subIsTimeoutAlertDialog(): void {
    const config = {
      content: `您的閒置時間已超過 ${ GlobalTimeoutConfig.idleLimit / 60 } 分鐘，系統已將您登出。`
    }
    this.timeoutManagementService.showIsTimeoutAlertDialog(this.timeoutService, config);
  }

}

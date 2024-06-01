import { Component, Injector, Signal, inject } from '@angular/core';
import { HomeModules } from './home-modules';
import { Router } from '@angular/router';
import { TimeoutService } from '@core/service/time-out.service';
import { TimeoutManagementService } from '@core/service/time-out-management.service';
import { HomeTimeoutConfig } from '@core/interface/timeout-config.enum';
import { HomeProviders } from './home-providers';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [...HomeModules],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ ...HomeProviders ]
})
export default class HomeComponent {

  afk: Signal<number>;
  private injector: Injector = inject(Injector);

  constructor(
    private router: Router,
    private timeoutService: TimeoutService,
    private timeoutManagementService: TimeoutManagementService,
  ) { }

  ngOnInit(): void {
    this.startTimeout();
  }

  private startTimeout(): void {
    this.timeoutService.startTimer();
    this.getAfk();
    this.subIsTimeWarningDialog();
    this.subIsTimeoutAlertDialog();
  }

  private getAfk(): void {
    this.afk = <Signal<number>>toSignal(
      this.timeoutService.getAfk$(),
      { injector: this.injector }
    );
  }

  private subIsTimeWarningDialog(): void {
    const config = {
      button: 'home - 繼續',
      content: {
        afk: this.timeoutService.getAfk$(),
        idleLimit: HomeTimeoutConfig.idleLimit,
        idleWarning: HomeTimeoutConfig.idleWarning
      },
    }
    this.timeoutManagementService.showIsTimeWarningDialog(this.timeoutService, config);
  }

  private subIsTimeoutAlertDialog(): void {
    const config = {
      content: `您的閒置時間已超過 ${ HomeTimeoutConfig.idleLimit / 60 } 分鐘，系統已將您登出。`
    }
    this.timeoutManagementService.showIsTimeoutAlertDialog(this.timeoutService, config);
  }

  pauseTimer(): void {
    this.timeoutService.pauseTimer();
  }

  reStartTimer(): void {
    this.timeoutService.restartTimer();
  }

  reSetTimer(): void {
    this.timeoutService.resetTimer();
  }

  goToPage(url: string): void {
    this.router.navigateByUrl(`pages/${url}`);
  }

  ngOnDestroy(): void {
    this.timeoutService.clearTimer();
  }

}


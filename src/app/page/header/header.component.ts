import { Component, WritableSignal, signal } from '@angular/core';
import { HeaderModules } from './header-modules';
import { AuthService } from '@core/service/auth.service';
import { TimeoutService } from '@core/service/time-out.service';
import { TimeoutManagementService } from '@core/service/time-out-management.service';
import { GlobalTimeoutConfig } from '@core/interface/timeout-config.enum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...HeaderModules],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  loginTime: WritableSignal<string> = signal('00:00');

  constructor(
    private authService: AuthService,
    private timeoutService: TimeoutService,
    private timeoutManageService: TimeoutManagementService,
  ) { }

  ngOnInit(): void {
    this.timeoutService.getAfk$().subscribe((sec) => {
      this.loginTime.set(this.timeoutManageService.formatMinuteSecond(sec, GlobalTimeoutConfig.idleLimit, true));
    });
  }

  logout(): void {
    this.authService.logout();
  }
}


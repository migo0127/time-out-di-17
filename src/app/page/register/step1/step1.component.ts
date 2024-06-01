import { Component, WritableSignal, effect, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatDialog } from '@angular/material/dialog';
import { TimeoutService } from '@core/service/time-out.service';
import { TimeoutManagementService } from '@core/service/time-out-management.service';
import { RegisterModules } from '../register-modules';
import { RegisterProviders } from '../register-providers';
import { RegisterTimeoutConfig } from '@core/interface/timeout-config.enum';
import { AlertDialogComponent } from '@shared/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [ ...RegisterModules ],
  providers: [ ...RegisterProviders ],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component {
  isResendOTP: WritableSignal<boolean> = signal(false);
  disableResend: WritableSignal<boolean> = signal(false);
  registerForm: FormGroup;
  mode: ProgressBarMode = 'determinate';
  bufferValue: number = 100;
  isIncrement: boolean;
  resendSec: WritableSignal<number> = signal(-1);
  progressValue: WritableSignal<number>;
  progressMinute: WritableSignal<string>;

  phoneCodeControl(): AbstractControl<string> | null {
    return this.registerForm.get('phone');
  }

  otpCodeControl(): AbstractControl<string> | null {
    return this.registerForm.get('otpCode');
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private timeoutService: TimeoutService,
    private timeoutManageService: TimeoutManagementService,
  ) {
    this.initRegisterForm();
    effect(() => {
      console.log('isResendOTP: ',this.isResendOTP());
      console.log('disableResend: ',this.disableResend());
      // console.log('progressValue: ',this.progressValue());
      // console.log('progressMinute: ',this.progressMinute());
    });
  }

  ngOnInit(): void {
    this.initProgressValue();
  }

  private initRegisterForm(): void {
    this.registerForm = this.fb.group({
      phone: ['', [ Validators.required ]],
      otpCode: ['', [ Validators.required ]]
    });
  }

  private initProgressValue(): void {
    this.progressMinute = signal(this.isIncrement? '00:00' : '10:00');
    this.progressValue = signal(this.isIncrement ? 0 : 100);
    // console.log('progressValue: ',this.progressValue());
    // console.log('progressMinute: ',this.progressMinute());
  }

  sendOTP(): void {
    this.resendSec.set(0);
    if(!this.isResendOTP()) {
      console.log('init OTP');
      this.startTimeout();
      this.disableResend.set(true);
      this.isResendOTP.set(true);
    }else{
      // console.log('resend OTP');
      this.disableResend.set(true);
      this.resetTimeout();
    }
  }

  private resetTimeout(): void {
    this.initProgressValue();
    this.timeoutService.resetTimer();
  }


  private startTimeout(): void {
    this.timeoutService.startTimer();
    this.getAfk();
    this.getIsTimeout();
  }

  getAfk(): void {
    this.timeoutService.getAfk$().subscribe((sec) => {
      if(sec < 6) {
        this.resendSec.set(sec);
      }
      if(sec >= 5 && this.disableResend()){
        this.disableResend.set(false);
      }
      this.progressValue.set(
        this.isIncrement ?
        // 遞增 0 -> 100
        Math.floor((sec / RegisterTimeoutConfig.idleLimit) * 100) :
        // 遞減 100 -> 0
        Math.floor((1 - sec / RegisterTimeoutConfig.idleLimit) * 100)
      );

      // console.log('progressValue', this.progressValue);
      this.progressMinute.set(this.timeoutManageService.formatMinuteSecond(sec, RegisterTimeoutConfig.idleLimit, this.isIncrement));
    });
  }

  private getIsTimeout(): void {
    this.timeoutService.getIsTimeout$().subscribe((isTimeout: boolean) => {
      if(isTimeout){
        this.dialog.open(AlertDialogComponent, {
          data: {
            content: '驗證碼已超過認證時間，請重新發送驗證碼。'
          }
        });
      }
    });
  }

  sendRegister(): void {
    this.router.navigateByUrl('/register/step-2');
  }

  loginPage(e: Event): void {
    e.preventDefault();
    this.router.navigateByUrl('/');
  }

  ngOnDestroy(): void {
    this.timeoutService.clearTimer();
  }
}

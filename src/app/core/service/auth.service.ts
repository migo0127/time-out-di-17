import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private router: Router,
    private dialog: MatDialog,
  ) {}

  isLoggedIn(): Observable<boolean> {
    return this.isLogin$.asObservable();
  }

  isLoginTrigger(status: boolean): void {
    console.log('[AuthService isLoginTrigger status]: ', status);
    this.isLogin$.next(status);
  }

  logout(): void {
     // 當APP被登出時，需要檢查是否有 dialog 為開啟狀態，要將 dialog 一併關閉
    if(this.dialog?.openDialogs?.length > 0){
      this.dialog.closeAll();
    }
    this.isLoginTrigger(false);
    console.log('logout');
    this.router.navigateByUrl('/');
    // this.router.navigateByUrl('/').then(() => {
      // console.log('logout');
      // 透過 reload 來停止 app 中的 timeout 監聽
      // location.reload();
    // });
  }

}

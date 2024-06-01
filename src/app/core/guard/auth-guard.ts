import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map } from "rxjs";
import { AuthService } from "../service/auth.service";
import { inject } from "@angular/core";

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    return authService.isLoggedIn().pipe(
      map((isLogin: boolean) => {
        if(isLogin){
          return true;
        }else{
          return router.createUrlTree(['/login']);
        }
      })
    )
}
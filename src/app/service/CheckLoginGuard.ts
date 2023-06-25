import {CanActivate, Router} from "@angular/router";
import {TokenService} from "./token.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  constructor(private tokenService : TokenService,
              private router: Router) {
  }
  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.tokenService.getToken()){
      return true;
    } else {
      this.router.navigate([""]);
    }
  }
}

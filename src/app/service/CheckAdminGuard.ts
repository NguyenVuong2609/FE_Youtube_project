import {CanActivate, Router} from "@angular/router";
import {TokenService} from "./token.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CheckAdminGuard implements CanActivate {
  constructor(private tokenService : TokenService,
              private router: Router) {
  }
  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    for (let i = 0; i < this.tokenService.getRole().length; i++) {
      if (this.tokenService.getRole()[i].toLowerCase() == "admin"){
        return true;
      }
    }
    this.router.navigate([""]);
  }
}

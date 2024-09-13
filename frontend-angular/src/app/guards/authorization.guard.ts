import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot
} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";
import { Router } from '@angular/router';
import has = Reflect.has;

@Injectable()
export class AuthorizationGuard {

  constructor(private authService: AuthenticationService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult>{

    let authorize : boolean = false;
    let authorizedRoles : string[] = route.data['roles'];
    let roles : string[] = this.authService.roles as string[];
    for (let i : number = 0; i < roles.length; i++) {
      if(authorizedRoles.includes(roles[i])){
        authorize = true;

      }

    }
    return authorize;
  }
    /*if (this.authService.authenticated==true) {
      return true;
    }else
      this.router.navigateByUrl("/login")
    return false;
  }
*/
}
/*

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
*/

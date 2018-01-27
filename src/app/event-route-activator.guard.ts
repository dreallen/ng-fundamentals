import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EventService } from './event.service';

@Injectable()
export class EventRouteActivatorGuard implements CanActivate {

  constructor(private eventService: EventService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isValid = !!this.eventService.getEvent(+next.params['id']);
    if (!isValid) {
      this.router.navigate(['/404']);
    }
    return isValid;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = true;
  channel = new BehaviorSubject<boolean>(this.isLoggedIn);
  channel$ = this.channel.asObservable();

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login() {
    this.updateStatus(true);
  }

  logout(): void {
    this.updateStatus(false);
  }

  private updateStatus(val: boolean) {
    console.log('update status login:', val);
    this.isLoggedIn = val;
    this.channel.next(val);
    return val;
  }
}

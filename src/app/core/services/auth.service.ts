import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = true;
  channel = new BehaviorSubject<boolean>(this.isLoggedIn);
  channel$ = this.channel.asObservable();

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private localStoreService: LocalStorageService){
    this.updateStatus(this.localStoreService.getItem('isLoggedIn'));
  }

  login() {
    this.updateStatus(true);
  }

  logout(): void {
    this.updateStatus(false);
  }

  private updateStatus(val: boolean) {
    console.log('update status login:', val);
    this.isLoggedIn = val;
    this.localStoreService.setItem('isLoggedIn', val);
    this.channel.next(val);
    return val;
  }
}

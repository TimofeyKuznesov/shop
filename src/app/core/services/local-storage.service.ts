import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  setItem<T>(key: string, value: T) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  getItem<T>(key: string): T {
    return JSON.parse(window.localStorage.getItem(key));
  }
  removeItem(key: string) {
    window.localStorage.removeItem(key);
  }
}

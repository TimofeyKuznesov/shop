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
    const value = window.localStorage.getItem(key);
    try {
      return value && JSON.parse(value);
    } catch (error) {
      return undefined;
    }
  }
  removeItem(key: string) {
    window.localStorage.removeItem(key);
  }
}

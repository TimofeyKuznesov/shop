import { Injectable } from '@angular/core';

const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {


  constructor() { }

  generate(n: number) {
    const ret = [];
    for (let i = 0 ; i < n; i++){
      ret.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
    return ret.join('');
  }
}

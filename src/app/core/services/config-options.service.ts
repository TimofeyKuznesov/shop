import { Injectable } from '@angular/core';

import { ConfigOptionsModel } from '../model/config-options-model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private config: ConfigOptionsModel;
  constructor() { }

  setConfig(config: ConfigOptionsModel = {}) {
    this.config = {...this.config, ...config};
  }
  getConfig() {
    return this.config;
  }
}

import { Component, Inject, OnInit, Optional } from '@angular/core';

import { ConfigOptionsModel } from 'src/app/core/model';

import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { ConstantsService, CONSTANT_TOKEN } from 'src/app/core/services/constant.service';
import { GENERATOR_TOKEN } from 'src/app/core/services/generator.factory';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  config: ConfigOptionsModel = {};
  constructor(
    private configOptions: ConfigOptionsService,
    @Optional() @Inject(GENERATOR_TOKEN) public randomString,
    @Optional() @Inject(CONSTANT_TOKEN) public constants: ConstantsService
  ) { }

  ngOnInit(): void {
    this.config = this.configOptions.getConfig() || {};
  }

  get applicationInfo() {
    return this.constants ? `${this.constants.App} ${this.constants.Ver}` : '';
  }
  get srcUrl() {
    return this.constants ? this.constants.API_URL : null;
  }
}

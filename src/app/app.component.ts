import { Component, ElementRef, ViewChild, AfterContentInit } from '@angular/core';

import { AuthService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  @ViewChild('appTitle', {static: true}) private refTitle: ElementRef<HTMLHeadingElement>;
  title = 'shop';
  constructor(public authService: AuthService){
  }
  ngAfterContentInit() {
    // this.refTitle.nativeElement.innerHTML = this.title;
  }
}

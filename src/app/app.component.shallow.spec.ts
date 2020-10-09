import { TestBed, ComponentFixture } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { AuthService } from './core/services/auth.service';
import { LocalStorageService } from './core/services/local-storage.service';

let fixture: ComponentFixture<AppComponent>;

describe('AppComponent (Shallow)', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AuthService, LocalStorageService],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should load login status on start', () => {
    const localStorageService = TestBed.inject(LocalStorageService);
    const spy = spyOn(localStorageService, 'getItem');
    fixture = TestBed.createComponent(AppComponent);
    expect(spy.calls.count()).toBe(1);
    expect(spy.calls.first().args[0]).toBe('isLoggedIn');
  });
});

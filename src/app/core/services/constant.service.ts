import { InjectionToken } from '@angular/core';

export const CONSTANT_TOKEN_NAME = 'constantService';

export class ConstantsService {
    static App = 'Shop';
    static Ver = '0.1';
    static API_URL ='https://github.com/TimofeyKuznesov/shop';
}

export const CONSTANT_TOKEN = new InjectionToken<ConstantsService>(CONSTANT_TOKEN_NAME);
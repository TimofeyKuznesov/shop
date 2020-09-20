import { InjectionToken } from '@angular/core';

export const CONSTANT_TOKEN_NAME = 'constantService';

export class ConstantsService {
    App = 'Shop';
    Ver = '0.1';
    API_URL = 'https://github.com/TimofeyKuznesov/shop';
}

export const CONSTANT_SERVICE = new ConstantsService();
export const CONSTANT_TOKEN = new InjectionToken<ConstantsService>(CONSTANT_TOKEN_NAME);

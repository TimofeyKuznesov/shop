import { InjectionToken } from '@angular/core';

import { AppConfigModel } from '../model';

import { LocalStorageService } from './local-storage.service';

const SERVER_URL = 'http://localhost:3000';

export const APP_CONFIG_TOKEN = new InjectionToken<AppConfigModel>('AppConfig');

export const appConfigFactory = (localStorageService: LocalStorageService) => {
        const serverUrl: string = localStorageService.getItem<string>('serverUrl') || 'http://localhost:3000';
        const productsUrl = `${serverUrl}/products`;
        const ordersUrl = `${serverUrl}/orders`;
        return ({
        serverUrl,
        productsUrl,
        ordersUrl
    });
};

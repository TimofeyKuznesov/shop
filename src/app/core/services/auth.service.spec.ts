import {AuthService} from './auth.service';
import {LocalStorageService} from './local-storage.service';

describe('given AuthService', () => {
    let authService: AuthService;
    let localStoreServiceSpy;
    beforeEach(() => {
        localStoreServiceSpy = new LocalStorageService();
        spyOn(localStoreServiceSpy, 'setItem');
        authService = new AuthService(localStoreServiceSpy);
    });
    describe('and login', () => {
        beforeEach(() => {
            authService.login();
        });
        it('then set isLoggedIn = true in localStore', () => {
            expect(localStoreServiceSpy.setItem.calls.mostRecent().args).toEqual([ 'isLoggedIn', true ]);
        });
    });
    describe('and logout', () => {
        beforeEach(() => {
            authService.logout();
        });
        it('then set isLoggedIn = false in localStore', () => {
            expect(localStoreServiceSpy.setItem.calls.mostRecent().args).toEqual([ 'isLoggedIn', false ]);
        });
    });
});

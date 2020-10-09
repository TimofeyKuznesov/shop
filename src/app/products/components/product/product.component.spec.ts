import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Categories, ProductModel } from '../../models';

import {ProductComponent} from './product.component';

const product: ProductModel = {
    id: 1,
    name: 'Dell P2018H',
    description: '20"',
    price: 154,
    category: 3,
    isAvailable: true
};
const category = 'TestCategory';

describe('Given ProductComponent', () => {
    let component: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [ProductComponent]
        });

        fixture = TestBed.createComponent(ProductComponent);
        component = fixture.componentInstance;
        component.product = product;
        component.category = 3;
        fixture.detectChanges();
      });

    it('should display product name', () => {
        const nameEl = fixture.debugElement.query(By.css('.card-title'));
        expect(nameEl.nativeElement.textContent).toContain(component.product.name);
    });
    describe('then click Add', () => {
        let addProduct;
        beforeEach(() => {
            addProduct = jasmine.createSpyObj('addProduct', ['emit']);
            component.addProduct = addProduct;
            const addButton = fixture.debugElement.query(By.css('.add-button'));
            addButton.triggerEventHandler('click', null);
        });
        it('to be emit addProduct', () => {
            expect(addProduct.emit.calls.mostRecent().args[0]).toEqual(product);
        });
    });
});

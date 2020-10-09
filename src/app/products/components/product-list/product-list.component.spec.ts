import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { ProductsService } from '../../services';

import { ProductComponent } from '../product/product.component';

import { ProductListComponent } from './product-list.component';

@Component({
    selector: 'app-product-component',
    template: '<span class="stub-children"></span>',
    providers: [
      {
        provide: ProductComponent,
        useClass: ChildStubComponent // провайдим стаб вместо обычного компонента
      }
    ]
  })
  export class ChildStubComponent {
  }


describe('ProductListComponent', () => {
    let component: ProductListComponent;
    let fixture: ComponentFixture<ProductListComponent>;
    let store: MockStore;
    const initialState = { products: {products: [{id: 1}, {id: 2}]}};

    beforeEach(async () => {
        const productsServiceStub = {
            getAllProducts: () => of([])
          };
        TestBed.configureTestingModule({
          declarations: [
            ProductListComponent,
            ChildStubComponent // стаб компонент
          ],
          providers: [
            provideMockStore({ initialState }),
            ProductsService,
            {provide: ProductsService, useValue: productsServiceStub}
          ]
        })
        .compileComponents();
      });

    beforeEach(() => {
        store = TestBed.inject(MockStore);
        fixture = TestBed.createComponent(ProductListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges(); // запускаем чендж детекшин вместо ручной установки связи
      });

    it('should create', () => {
        expect(component).toBeTruthy();
      });

    it('contain 2 children', () => {
        const children = fixture.debugElement.queryAll(By.css('.stub-children'));
        expect(children.length).toBe(2);
    });
  });

import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of, defer } from 'rxjs';
import { ProductsService } from 'src/app/services/product.service';
import { ValueService } from 'src/app/services/value.service';
import { generateManyProducts } from '../models/product.mock';
import { ProductComponent } from '../product/product.component';

import { ProductsComponent } from './products.component';

fdescribe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productService: jasmine.SpyObj<ProductsService>;
  let valueService: jasmine.SpyObj<ValueService>;

  beforeEach(async () => {

    const prodServiceSpy = jasmine.createSpyObj('ProductsService', ['getAll']);
    const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getPromiseValue']);

    await TestBed.configureTestingModule({
      declarations: [ProductsComponent, ProductComponent],
      providers: [
        { provide: ProductsService, useValue: prodServiceSpy },
        { provide: ValueService, useValue: valueServiceSpy },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductsService) as jasmine.SpyObj<ProductsService>;
    valueService = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;

    const productMock = generateManyProducts(3);
    productService.getAll.and.returnValue(of(productMock));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(productService.getAll).toHaveBeenCalled();
  });

  fdescribe('tests for getAllProducts', () => {

    it('should return product list from service', () => {
      // Arr
      const productMock = generateManyProducts(10);
      const countPrev = component.products.length;
      productService.getAll.and.returnValue(of(productMock));

      // Act
      component.getAllProducts();
      fixture.detectChanges();

      // Assert
      expect(component.products.length).toEqual(productMock.length + countPrev);
    });

    it('should change the status "loading" to "success"', fakeAsync(() => {
      // Arr
      const productMock = generateManyProducts(10);
      productService.getAll.and.returnValue(defer(() => Promise.resolve(productMock)));

      // Act
      component.getAllProducts();
      fixture.detectChanges();
      expect(component.status).toEqual('loading');


      tick();
      fixture.detectChanges();

      //Assert
      expect(component.status).toEqual('success');
    }));


  });

  describe('tests for callPromise', () => {
    it('should call to promise',  async () => { // también se puede hacer con fakeAsync (con las promesas)
      // Arr
      const mockMsg = 'my mock str';
      valueService.getPromiseValue.and.returnValue(Promise.resolve(mockMsg));

      // Act
      await component.callPromise();
      fixture.detectChanges();

      // Assert
      expect(component.rta).toEqual(mockMsg);
      expect(valueService.getPromiseValue).toHaveBeenCalled();
    });

  });
});

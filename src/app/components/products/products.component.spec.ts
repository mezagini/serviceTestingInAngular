import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductsService } from 'src/app/services/product.service';
import { generateManyProducts } from '../models/product.mock';
import { ProductComponent } from '../product/product.component';

import { ProductsComponent } from './products.component';

fdescribe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productService: jasmine.SpyObj<ProductsService>;

  beforeEach(async () => {

    const prodServiceSpy = jasmine.createSpyObj('ProductsService', ['getAll']);

    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent, ProductComponent ],
      providers: [
        { provide: ProductsService, useValue: prodServiceSpy}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductsService) as jasmine.SpyObj<ProductsService>;
  });

  it('should create', () => {
    const productMock = generateManyProducts(3);
    productService.getAll.and.returnValue(of(productMock));

    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(productService.getAll).toHaveBeenCalled();
  });
});

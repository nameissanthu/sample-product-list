import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralProductsComponent } from './general-products.component';

describe('GeneralProductsComponent', () => {
  let component: GeneralProductsComponent;
  let fixture: ComponentFixture<GeneralProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

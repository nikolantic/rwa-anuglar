import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCartListComponent } from './my-cart-list.component';

describe('MyCartListComponent', () => {
  let component: MyCartListComponent;
  let fixture: ComponentFixture<MyCartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCartListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

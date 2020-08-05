import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustListComponent } from './cust-list.component';

describe('CustListComponent', () => {
  let component: CustListComponent;
  let fixture: ComponentFixture<CustListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

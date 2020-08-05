import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuListComponent } from './manu-list.component';

describe('ManuListComponent', () => {
  let component: ManuListComponent;
  let fixture: ComponentFixture<ManuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

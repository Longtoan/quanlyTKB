import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkbTheoLopComponent } from './tkb-theo-lop.component';

describe('TkbTheoLopComponent', () => {
  let component: TkbTheoLopComponent;
  let fixture: ComponentFixture<TkbTheoLopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkbTheoLopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkbTheoLopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

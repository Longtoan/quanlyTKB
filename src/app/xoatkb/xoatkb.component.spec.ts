import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XoatkbComponent } from './xoatkb.component';

describe('XoatkbComponent', () => {
  let component: XoatkbComponent;
  let fixture: ComponentFixture<XoatkbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XoatkbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XoatkbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

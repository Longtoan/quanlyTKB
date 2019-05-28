import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XepTkbComponent } from './xep-tkb.component';

describe('XepTkbComponent', () => {
  let component: XepTkbComponent;
  let fixture: ComponentFixture<XepTkbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XepTkbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XepTkbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

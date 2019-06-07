import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSSVComponent } from './dssv.component';

describe('DSSVComponent', () => {
  let component: DSSVComponent;
  let fixture: ComponentFixture<DSSVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DSSVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

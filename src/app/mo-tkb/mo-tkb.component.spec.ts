import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoTkbComponent } from './mo-tkb.component';

describe('MoTkbComponent', () => {
  let component: MoTkbComponent;
  let fixture: ComponentFixture<MoTkbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoTkbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoTkbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

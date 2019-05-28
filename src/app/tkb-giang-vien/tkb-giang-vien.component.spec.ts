import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkbGiangVienComponent } from './tkb-giang-vien.component';

describe('TkbGiangVienComponent', () => {
  let component: TkbGiangVienComponent;
  let fixture: ComponentFixture<TkbGiangVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkbGiangVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkbGiangVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

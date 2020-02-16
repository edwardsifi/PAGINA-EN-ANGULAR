import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexContComponent } from './index-cont.component';

describe('IndexContComponent', () => {
  let component: IndexContComponent;
  let fixture: ComponentFixture<IndexContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

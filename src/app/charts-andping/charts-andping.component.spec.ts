import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsAndpingComponent } from './charts-andping.component';

describe('ChartsAndpingComponent', () => {
  let component: ChartsAndpingComponent;
  let fixture: ComponentFixture<ChartsAndpingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsAndpingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsAndpingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

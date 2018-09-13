import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPingComponent } from './chart-ping.component';

describe('ChartPingComponent', () => {
  let component: ChartPingComponent;
  let fixture: ComponentFixture<ChartPingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartPingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

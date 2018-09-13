import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionSendComponent } from './instruction-send.component';

describe('InstructionSendComponent', () => {
  let component: InstructionSendComponent;
  let fixture: ComponentFixture<InstructionSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

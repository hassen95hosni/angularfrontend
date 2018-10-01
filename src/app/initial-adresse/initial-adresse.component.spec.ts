import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialAdresseComponent } from './initial-adresse.component';

describe('InitialAdresseComponent', () => {
  let component: InitialAdresseComponent;
  let fixture: ComponentFixture<InitialAdresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialAdresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialAdresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserByNameComponent } from './get-user-by-name.component';

describe('GetUserByNameComponent', () => {
  let component: GetUserByNameComponent;
  let fixture: ComponentFixture<GetUserByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUserByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

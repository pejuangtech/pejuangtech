import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdministratorComponent } from './modal-administrator.component';

describe('ModalAdministratorComponent', () => {
  let component: ModalAdministratorComponent;
  let fixture: ComponentFixture<ModalAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReparacionesComponent } from './add-reparaciones.component';

describe('AddReparacionesComponent', () => {
  let component: AddReparacionesComponent;
  let fixture: ComponentFixture<AddReparacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReparacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReparacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

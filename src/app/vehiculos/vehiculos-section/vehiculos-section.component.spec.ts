import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosSectionComponent } from './vehiculos-section.component';

describe('VehiculosSectionComponent', () => {
  let component: VehiculosSectionComponent;
  let fixture: ComponentFixture<VehiculosSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehiculosSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

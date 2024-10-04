import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesSectionComponent } from './clientes-section.component';

describe('ClientesSectionComponent', () => {
  let component: ClientesSectionComponent;
  let fixture: ComponentFixture<ClientesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

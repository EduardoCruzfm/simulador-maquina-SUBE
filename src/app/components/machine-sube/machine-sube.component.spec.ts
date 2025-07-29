import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineSUBEComponent } from './machine-sube.component';

describe('MachineSUBEComponent', () => {
  let component: MachineSUBEComponent;
  let fixture: ComponentFixture<MachineSUBEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineSUBEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineSUBEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

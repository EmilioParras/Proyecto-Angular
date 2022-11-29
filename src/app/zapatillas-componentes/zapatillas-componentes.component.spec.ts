import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapatillasComponentesComponent } from './zapatillas-componentes.component';

describe('ZapatillasComponentesComponent', () => {
  let component: ZapatillasComponentesComponent;
  let fixture: ComponentFixture<ZapatillasComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapatillasComponentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZapatillasComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

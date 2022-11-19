import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapatillasListComponent } from './zapatillas-list.component';

describe('ZapatillasListComponent', () => {
  let component: ZapatillasListComponent;
  let fixture: ComponentFixture<ZapatillasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapatillasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZapatillasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

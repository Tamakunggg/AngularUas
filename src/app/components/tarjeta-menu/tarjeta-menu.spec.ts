import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaMenu } from './tarjeta-menu';

describe('TarjetaMenu', () => {
  let component: TarjetaMenu;
  let fixture: ComponentFixture<TarjetaMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

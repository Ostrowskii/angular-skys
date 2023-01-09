import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBarraPaginaComponent } from './auth-barra-pagina.component';

describe('AuthBarraPaginaComponent', () => {
  let component: AuthBarraPaginaComponent;
  let fixture: ComponentFixture<AuthBarraPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthBarraPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthBarraPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

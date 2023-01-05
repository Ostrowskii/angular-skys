import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoTransparenteBordaBrancaComponent } from './botao-transparente-borda-branca.component';

describe('BotaoTransparenteBordaBrancaComponent', () => {
  let component: BotaoTransparenteBordaBrancaComponent;
  let fixture: ComponentFixture<BotaoTransparenteBordaBrancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoTransparenteBordaBrancaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoTransparenteBordaBrancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

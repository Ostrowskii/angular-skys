import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSecondAnimationComponent } from './inicio-second-animation.component';

describe('InicioSecondAnimationComponent', () => {
  let component: InicioSecondAnimationComponent;
  let fixture: ComponentFixture<InicioSecondAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioSecondAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioSecondAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

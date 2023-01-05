import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioFirstAnimationComponent } from './inicio-first-animation.component';

describe('InicioFirstAnimationComponent', () => {
  let component: InicioFirstAnimationComponent;
  let fixture: ComponentFixture<InicioFirstAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioFirstAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioFirstAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

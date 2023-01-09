import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthQuizComponent } from './auth-quiz.component';

describe('AuthQuizComponent', () => {
  let component: AuthQuizComponent;
  let fixture: ComponentFixture<AuthQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

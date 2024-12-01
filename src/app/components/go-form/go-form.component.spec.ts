import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoFormComponent } from './go-form.component';

describe('GoFormComponent', () => {
  let component: GoFormComponent;
  let fixture: ComponentFixture<GoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

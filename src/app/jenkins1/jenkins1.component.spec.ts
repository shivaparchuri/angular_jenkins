import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jenkins1Component } from './jenkins1.component';

describe('Jenkins1Component', () => {
  let component: Jenkins1Component;
  let fixture: ComponentFixture<Jenkins1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jenkins1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Jenkins1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

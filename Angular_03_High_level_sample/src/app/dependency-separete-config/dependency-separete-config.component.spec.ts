import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencySepareteConfigComponent } from './dependency-separete-config.component';

describe('DependencySepareteConfigComponent', () => {
  let component: DependencySepareteConfigComponent;
  let fixture: ComponentFixture<DependencySepareteConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependencySepareteConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependencySepareteConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

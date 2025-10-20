import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtTypeComponent } from './art-type.component';

describe('ArtTypeComponent', () => {
  let component: ArtTypeComponent;
  let fixture: ComponentFixture<ArtTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ArtTypeComponent]
    });
    fixture = TestBed.createComponent(ArtTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

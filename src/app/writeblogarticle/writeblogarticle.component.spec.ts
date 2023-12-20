import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteblogarticleComponent } from './writeblogarticle.component';

describe('WriteblogarticleComponent', () => {
  let component: WriteblogarticleComponent;
  let fixture: ComponentFixture<WriteblogarticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WriteblogarticleComponent]
    });
    fixture = TestBed.createComponent(WriteblogarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

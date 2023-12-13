import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPagePostComponent } from './main-page-post.component';

describe('MainPagePostComponent', () => {
  let component: MainPagePostComponent;
  let fixture: ComponentFixture<MainPagePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPagePostComponent]
    });
    fixture = TestBed.createComponent(MainPagePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

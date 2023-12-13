import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageTopPostComponent } from './main-page-top-post.component';

describe('MainPageTopPostComponent', () => {
  let component: MainPageTopPostComponent;
  let fixture: ComponentFixture<MainPageTopPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainPageTopPostComponent]
    });
    fixture = TestBed.createComponent(MainPageTopPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

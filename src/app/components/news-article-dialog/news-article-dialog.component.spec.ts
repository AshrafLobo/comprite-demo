import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticleDialogComponent } from './news-article-dialog.component';

describe('NewsArticleDialogComponent', () => {
  let component: NewsArticleDialogComponent;
  let fixture: ComponentFixture<NewsArticleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsArticleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArticleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

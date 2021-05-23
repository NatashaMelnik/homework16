// import { Observable } from 'rxjs/Observable';
import 'rxjs';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PageTextService } from '../../services/page-text.service';
import 'rxjs/add/observable/of';

import { ArticleComponent } from './article.component';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let spy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    // PageTextService = fixture.debugElement.injector.get(PageTextService);
    // spy = spyOn(PageTextService, 'getListTexts');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call ViewChild element sliderMiniat', () => {
  //   expect(component.sliderMiniat).toBe('div');
  // });

  it('should call service with texts', () => {
    component.constructor();
    expect(spy.calls.any()).toBeTruthy();
  });


});

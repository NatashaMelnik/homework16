import { TestBed, inject } from '@angular/core/testing';

import { PageTextService } from './page-text.service';

describe('PageTextService', () => {
  let service: PageTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return text paragraphs', () => {
    const mockParagraph = {h1: '«Цвет историй»: как устроен средневековый манускрипт'};
    expect(service.getListTexts()).toEqual(mockParagraph);
  });

  it('should return images src', () => {
    const mockObj = {phillip_img: 'http://t0.gstatic.com/images?q=tbn:ANd9GcRYFJDsdsiEKO9UIiDD7iyMM84NPS2cga65X6jbfee8vKta0zWi5_7fziRlk7kD'};
    expect(service.getListImages()).toEqual(mockObj);
  });

});

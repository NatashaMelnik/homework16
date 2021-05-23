import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, HttpTestingController ]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get people list', inject([ApiService, HttpTestingController], (service: ApiService, backend: HttpTestingController) => {
    // expect(service).toBeTruthy();
    const mockUsers = [{ body: '{\"login\":\"log123\",\"password\":\"123\"}', id: 1 }];

    service.getPeople().subscribe( user => {
      expect(user).toEqual(mockUsers);
    });

    backend.expectOne({
      method: 'GET',
      url: '/users'
    }).flush(mockUsers);

  }));

  it('should add persone', () => {
    const mockUsers = [{ body: '{\"login\":\"log123\",\"password\":\"123\"}', id: 1 }];
    expect(service.addPerson(mockUsers[0])).toBeTruthy();
  });

});

import { TestBed } from '@angular/core/testing';

import { AddWordService } from './add-word.service';

describe('AddWordService', () => {
  let service: AddWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

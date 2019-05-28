import { TestBed } from '@angular/core/testing';

import { ConnectMySQLService } from './connect-my-sql.service';

describe('ConnectMySQLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectMySQLService = TestBed.get(ConnectMySQLService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CalculatorServiceService } from './calculator-service.service';
import { LoggerService } from './logger.service';

describe('CalculatorServiceService', () => {
  let service: CalculatorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add two numbers',() => {
    const logger = jasmine.createSpyObj('LoggerService',["log"]);
    const calculator = new CalculatorServiceService(logger);
    const result = calculator.add(2,2);
    expect(result).toBe(5);
    // expect(logger.log).toHaveBeenCalledTimes();
  })
});

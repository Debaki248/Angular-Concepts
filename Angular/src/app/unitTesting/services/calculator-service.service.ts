import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {

  result:number;
  static spec: any;
  constructor(private logger:LoggerService) { }

add(number1:number,number2:number){
  this.logger.log("Addition Operation");
  return this.result = number1+ number2;
}
subtract(numberOne:number,numberTwo:number){
  this.logger.log("subtraction opearation");
  return this.result = numberOne + numberTwo;
}

}

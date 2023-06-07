import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  info:string[] =["adfd","1111","cdcsdcsdc"];
 info1:string[] =["erdcvde","1333","gfvfdfgv"];
 info2:string[] =["fvfvfdv","1444","vfvdvvf"];
 getInfo():string[]{
  return this.info;
 } 
 getInfoOne():string[]{
  return this.info1;
 }
 getInfoTwo():string[]{
  return this.info2;
 }
 constructor() { }
}

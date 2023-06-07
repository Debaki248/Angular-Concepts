import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class DataService {
   // dataEmitter = new EventEmitter<string>();
    dataEmitter = new Subject();
    raiseDataEmitterEvent(data: string) {
        this.dataEmitter.next(data);
    }


}
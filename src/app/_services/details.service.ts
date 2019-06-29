import { Injectable } from '@angular/core';
import { Details } from '../_model/details';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
 list: Details[];
constructor() { }

getdetails() {

  return this.list = [
   
    
  ];
}

}

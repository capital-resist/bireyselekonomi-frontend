import { Injectable } from '@angular/core';
import { Details } from '../_model/details';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
 list: Details[];
constructor() { }

getdetails() {
  this.list = [
    { ad: 'Gülden', maas: 2000, fatura: 200, kira: 800, yemek: 50},
    { ad: 'Furkan', maas: 2500, fatura: 100, kira: 700, yemek: 20}
  ];

  localStorage.setItem("table",JSON.stringify(this.list));

  return this.list;
}

}

import { Component, OnInit } from '@angular/core';
import { Details } from '../_model/details';
import { DetailsService } from '../_services/details.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: Details[];
  SecGelirGiderList: Details;
  constructor(private dservis: DetailsService ) { }

  ngOnInit() {
    this.GelirGiderList();
  }
  GelirGiderList() {
    this.list = this.dservis.getdetails();
  }
  GelirGiderListSec( d: Details) {
    this.SecGelirGiderList = d;
  }

}

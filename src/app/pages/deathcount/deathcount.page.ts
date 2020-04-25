import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

 
@Component({
  selector: 'app-deathcount',
  templateUrl: './deathcount.page.html',
  styleUrls: ['./deathcount.page.scss'],
})
export class DeathcountPage implements OnInit {
 
  deathcount: Observable<any>;
  searchText: any = '';
  constructor(private router: Router, private api: ApiService) { }
 
  ngOnInit() {
    this.deathcount = this.api.getDeaths();
    this.deathcount.subscribe(data => {
      console.log('my data: ', data);
      });
  }

  search(deaths){
    return deaths.responsible.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
}
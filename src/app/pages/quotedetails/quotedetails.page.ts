import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.page.html',
  styleUrls: ['./quotedetails.page.scss'],
})
export class QuotedetailsPage implements OnInit {

  quote: Observable<any>;
  id:any;
  data:any
  constructor(private router: Router, private api: ApiService, private activatedRoute: ActivatedRoute
              ){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit() {
    this.quote = this.api.getQuote(this.id);
        this.quote.subscribe(data => {
        console.log('my data: ', data);
        this.data = data[0];
        });
  }

}

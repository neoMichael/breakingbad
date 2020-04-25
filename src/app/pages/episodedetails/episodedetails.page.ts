import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-episodedetails',
  templateUrl: './episodedetails.page.html',
  styleUrls: ['./episodedetails.page.scss'],
})
export class EpisodedetailsPage implements OnInit {

  episode: Observable<any>;
  id:any;
  data:any;

  
  constructor(private router: Router, private api: ApiService, private activatedRoute: ActivatedRoute
              ){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');    
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.episode = this.api.getEpisode(this.id);
    this.episode.subscribe(data => {    
    this.data = data[0];
    });    
  }

}

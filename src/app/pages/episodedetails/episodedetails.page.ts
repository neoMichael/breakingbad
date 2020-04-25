import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-episodedetails',
  templateUrl: './episodedetails.page.html',
  styleUrls: ['./episodedetails.page.scss'],
})
export class EpisodedetailsPage implements OnInit {

  episode: Observable<any>;
  id:any;
  data:any;
  
  star_icon:any = "star-outline";

  
  constructor(
    private router: Router,
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private fav: FavoriteService
              ){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');    
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.episode = this.api.getEpisode(this.id);
    this.episode.subscribe(data => {    
    this.data = data[0];
    });
    this.getFav();    
  }


  getFav(){    
      this.star_icon = this.fav.getEpisodeFavorite(this.id);
  }


  favourite(episode_id){
    this.star_icon = this.fav.addEpisodeFavorite(episode_id);    
  }


}

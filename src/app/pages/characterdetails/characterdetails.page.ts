import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FavoriteService } from '../../services/favorite.service';

 
@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.page.html',
  styleUrls: ['./characterdetails.page.scss'],
})
export class CharacterdetailsPage implements OnInit {
 
  character: Observable<any>;
  id: string;
  data:any;
  isFavourite = false;  

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
     private api: ApiService,
     private fav: FavoriteService
     ) { }

 
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
        
    this.character = this.api.getCharacter(this.id);
    this.character.subscribe(data => {
      this.data = data[0];      
      });

      this.fav.isFavouriteEpisode(this.id).then(isFav => {
      this.isFavourite = isFav;
    });    
  }

  
  favouriteCharacter() {
    this.fav.favouriteCharacter(this.id).then(() => {
      this.isFavourite = true;
    });
  }
 
  unfavouriteCharacter() {
    this.fav.unfavouriteCharacter(this.id).then(() => {
      this.isFavourite = false;
    });
  } 
}
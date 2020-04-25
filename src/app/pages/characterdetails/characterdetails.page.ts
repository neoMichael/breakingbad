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
  
  star_icon:any = "star-outline";

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
      this.getFav();    
  }

  
  getFav(){
    console.log('here');
      this.star_icon = this.fav.getCharacterFavorite(this.id);
  }


  favourite(char_id){
    this.star_icon = this.fav.addCharacterFavorite(char_id);    
  }


 
}
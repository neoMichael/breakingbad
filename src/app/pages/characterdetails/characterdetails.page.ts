import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

 
@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.page.html',
  styleUrls: ['./characterdetails.page.scss'],
})
export class CharacterdetailsPage implements OnInit {
 
  character: Observable<any>;
  id: string;
  data:any;
  
  heart_icon:any = "heart-outline";
  //like_icon;
  //dislike_icon;

  constructor(private router: Router,private activatedRoute: ActivatedRoute, private api: ApiService) { }
 
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');    
    this.character = this.api.getCharacter(this.id);
    this.character.subscribe(data => {
            this.data = data[0];
      });    
  }
 
}
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
 
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }
 
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');    
    this.character = this.api.getCharacter(this.id);
  }
 
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.page.html',
  styleUrls: ['./characterdetails.page.scss'],
})
export class CharacterdetailsPage implements OnInit {
 
  character: any;
 
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
 
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('char_id');
    this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`).subscribe(res => {
      this.character = res;
    });
  }
 
}
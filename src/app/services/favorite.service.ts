import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() { }


//Favourite character

  characters = [];

  addCharacterFavorite(id) {

    let added = false;
    let star_icon = "star-outline";

    for (let item of this.characters) {

      if (item.id === id) {

        item.likes = !item.likes;
        added = true;
        
        if(item.likes){
            star_icon = "star";
        }else{
            star_icon = "star-outline";
        }
        break;
      }
    }

    if (!added) {
        let data = {
            id: id,
            likes: true
        }

      this.characters.push(data);
      star_icon = "star";
    }
    return star_icon;
  }


  getCharacterFavorite(id){

    let star_icon;

    if(this.characters.length < 1){        
        star_icon = "star-outline";
    }else{

        for (let item of this.characters) {

          if (item.id == id) {

            if(item.likes){
                star_icon = "star";
            }else{
                star_icon = "star-outline";
            }
            break;
          }else{
            
            star_icon = "star-outline";
          }
        }
      }
    
    return star_icon;
  }


  //Favourite episode

  episodes = [];
    

  addEpisodeFavorite(id) {

    let added = false;
    let star_icon = "star-outline";

    for (let item of this.episodes) {

      if (item.id === id) {

        item.likes = !item.likes;
        added = true;
        
        if(item.likes){
            star_icon = "star";
        }else{
            star_icon = "star-outline";
        }
        break;
      }
    }

    if (!added) {
        let data = {
            id: id,
            likes: true
        }

      this.episodes.push(data);
      star_icon = "star";
    }
    return star_icon;
  }


  getEpisodeFavorite(id){

    let star_icon;

    if(this.episodes.length < 1){        
        star_icon = "star-outline";
    }else{

        for (let item of this.episodes) {

          if (item.id == id) {

            if(item.likes){
                star_icon = "star";
            }else{
                star_icon = "star-outline";
            }
            break;
          }else{
            
            star_icon = "star-outline";
          }
        }
      }
    
    return star_icon;
  }



}

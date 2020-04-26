	
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
const STORAGE_CHARACTER_KEY = 'favouriteCharacters';
const STORAGE_EPISODE_KEY = 'favouriteEpisodes';
 
@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
 
  constructor(private storage: Storage) { }
 
  getAllFavouriteCharacters() {
    return this.storage.get(STORAGE_CHARACTER_KEY);
  }
 
  isFavouriteCharacter(char_id) {
    return this.getAllFavouriteCharacters().then(result => {
      return result && result.indexOf(char_id) !== -1;
    });
  }

 
  favouriteCharacter(char_id) {
    return this.getAllFavouriteCharacters().then(result => {
      if (result) {
        result.push(char_id);
        return this.storage.set(STORAGE_CHARACTER_KEY, result);
      } else {
        return this.storage.set(STORAGE_CHARACTER_KEY, [char_id]);
      }
    });
  }
 
  unfavouriteCharacter(char_id) {
    return this.getAllFavouriteCharacters().then(result => {
      if (result) {
        var index = result.indexOf(char_id);
        result.splice(index, 1);
        return this.storage.set(STORAGE_CHARACTER_KEY, result);
      }
    });
  }


  getAllFavouriteEpisodes() {
    return this.storage.get(STORAGE_CHARACTER_KEY);
  }
 
  isFavouriteEpisode(episode_id) {
    return this.getAllFavouriteEpisodes().then(result => {
      return result && result.indexOf(episode_id) !== -1;
    });
  }
 
  favouriteEpisode(episode_id) {
    return this.getAllFavouriteEpisodes().then(result => {
      if (result) {
        result.push(episode_id);
        return this.storage.set(STORAGE_CHARACTER_KEY, result);
      } else {
        return this.storage.set(STORAGE_CHARACTER_KEY, [episode_id]);
      }
    });
  }
 
  unfavouriteEpisode(episode_id) {
    return this.getAllFavouriteEpisodes().then(result => {
      if (result) {
        var index = result.indexOf(episode_id);
        result.splice(index, 1);
        return this.storage.set(STORAGE_CHARACTER_KEY, result);
      }
    });
  } 
}
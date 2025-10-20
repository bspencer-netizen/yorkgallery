import { Injectable } from '@angular/core';
import { ArtType } from './art-type';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  protected artTypeList: ArtType[] = [
  {
    "id": 0,
    "name": "Flowers",
    "media": "Oil on Canvas",
    "photo": "/assets/yg_flowers.jpg",
    "artist": "John Doe",
    "availability": true
  },
  {
    "id": 1,
    "name": "Hands",
    "media": "Oil on Canvas",
    "photo": "/assets/yg_hands.jpg",
    "artist": "Jane Doe",
    "availability": true
  },
  {
    "id": 2,
    "name": "Butterflies",
    "media": "Mixed Media",
    "photo": "/assets/yg_butterflies.jpg",
    "artist": "Rachel Roe",
    "availability": true
  },
  {
    "id": 3,
    "name": "Blue",
    "media": "Mixed Media",
    "photo": "/assets/yg_blue.jpg",
    "artist": "Rachel Roe",
    "availability": true
  },
  {
    "id": 4,
    "name": "Red Dress",
    "media": "Oil on Canvas",
    "photo": "/assets/yg_reddress.jpg",
    "artist": "Richard Roe",
    "availability": true
  },
  {
    "id": 5,
    "name": "Glasses",
    "media": "Mixed Media",
    "photo": "/assets/yg_glasses.jpg",
    "artist": "Mononym",
    "availability": true
  }
 ];
  constructor() { }

  getAllArtTypes() : ArtType[] {
    return this.artTypeList;
  }

  getArtTypeById(id: Number): ArtType |
  undefined {
    return this.artTypeList.find(artType => artType.id ===id);
  }
}

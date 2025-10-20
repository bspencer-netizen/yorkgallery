import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../gallery.service';
import { ArtType } from '../art-type';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
     <img class="listing-photo" [src]="artType?.photo">
     <section class="listing-description">
      <h2 class="listing-heading">{{artType?.name}}</h2>
      <p class="listing-type">{{artType?.artist}}, {{artType?.media}}
     </section>
     <section class="listing-features">
      <h2 class="section-heading">About this piece</h2>
      <ul>
       <li>Available for sale: {{artType?.availability}}</li>
      </ul>
     </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
 route: ActivatedRoute = inject(ActivatedRoute)
 galleryService = inject(GalleryService);
 artType: ArtType | undefined;

 constructor() {
  const artTypeId = Number(this.route.snapshot.params['id']);
  this.artType = this.galleryService.getArtTypeById(artTypeId);
 }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtTypeComponent } from '../art-type/art-type.component';
import { ArtType } from '../art-type';
import { GalleryService } from '../gallery.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ArtTypeComponent],
  template: `
    <section>
      <form>
       <input type="text" placeholder="Filter by Artist">
       <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
     <app-art-type *ngFor="let artType of artTypeList" [artType]="artType"></app-art-type>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 artTypeList: ArtType[] = [];
 galleryService: GalleryService = inject(GalleryService);

 constructor() {
  this.artTypeList = this.galleryService.getAllArtTypes();
 }
}

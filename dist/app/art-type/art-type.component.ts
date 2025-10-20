import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtType } from '../art-type';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-art-type',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="artType.photo" alt="Thumbnail image of {{artType.name}} by {{artType.artist}}">
      <h2 class="listing-heading">{{ artType.name }}</h2>
      <p class="listing-type">{{ artType.media}} by {{ artType.artist }}</p>
      <a [routerLink]="['/details', artType.id]">More Info</a>
    </section>
  `,
  styleUrls: ['./art-type.component.css']
})
export class ArtTypeComponent {
 @Input () artType!:ArtType;
}

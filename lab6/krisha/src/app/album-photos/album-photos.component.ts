import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})

export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  loaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location 
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); 
      this.albumService.getAlbumPhotos(id).subscribe(data => {
        this.photos = data;
        this.loaded = true;
      });
    });
  }
  goBack() {
    this.location.back();
  }
  handleImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'https://dummyimage.com/600/f8f9fa/888888&text=Фото+недоступно';
  }
}
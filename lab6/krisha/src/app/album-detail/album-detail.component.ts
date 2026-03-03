import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  loaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location 
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.albumService.getAlbum(id).subscribe(data => {
        this.album = data;
        this.loaded = true;
      });
    });
  }
  saveTitle(newTitle: string) {
    this.album.title = newTitle; 
    this.albumService.updateAlbum(this.album).subscribe(() => {
      alert('✅ Название объявления успешно обновлено!');
    });
  }
  goBack() {
    this.location.back();
  }
}
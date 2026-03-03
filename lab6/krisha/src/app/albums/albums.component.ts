import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 
import { AlbumService } from '../album.service'; 
import { Album } from '../models/album.model'; 
import { DemoService } from '../demo.service';
@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loaded: boolean = false; 
  constructor(private albumService: AlbumService) {}
//   constructor(private albumService: DemoService) {}
  ngOnInit() {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data; 
      this.loaded = true; 
    });
  }
  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../products';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product; 
  @Output() remove = new EventEmitter<number>(); 

  like() {
    this.product.likes++;
  }

  deleteItem() {
    this.remove.emit(this.product.id);
  }

  share(link: string) {
    const url = encodeURIComponent(link);
    window.open(`https://t.me/share/url?url=${url}&text=Посмотри на этот товар!`, '_blank');
  }

  shareWhats(link: string) {
    const shareUrl = `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + link)}`;
    window.open(shareUrl, '_blank');
  }
}
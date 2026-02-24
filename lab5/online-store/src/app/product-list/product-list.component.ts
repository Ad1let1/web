import { Component, Input, Output, EventEmitter } from '@angular/core'; // Добавь Output и EventEmitter
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() remove = new EventEmitter<number>(); 
  onRemoveProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
    this.remove.emit(productId);
  }
}
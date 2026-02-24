import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { CATEGORIES, PRODUCTS } from './data';
import { Category } from './category';
import { Product } from './products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {
  categories = CATEGORIES;
  allProducts = [...PRODUCTS]; 
  
  selectedCategory: Category | null = null;
  filteredProducts: Product[] = [];

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.filteredProducts = this.allProducts.filter(p => p.categoryId === category.id);
  }
  
  onRemoveProduct(productId: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== productId);
    this.filteredProducts = this.filteredProducts.filter(p => p.id !== productId);
  }
}
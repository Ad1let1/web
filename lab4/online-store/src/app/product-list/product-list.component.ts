import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Обязательно для *ngFor
import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule], // Добавляем CommonModule
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'iPhone 13 128GB',
      description: 'Отличный смартфон от Apple с ярким экраном и мощным процессором.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
    },
    {
      id: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
      name: 'Xiaomi Redmi Note 13',
      description: 'Бюджетный хит с хорошей камерой и емкой батареей.',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-8-gb-256-gb-chernyi-116035070/'
    },
    {
      id: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium',
      name: 'Dyson Airwrap Complete Long',
      description: 'Мультистайлер для разных типов волос, в комплекте с кейсом.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/dyson-airwrap-complete-long-hs05-multistailer-mednyi-107052924/'
    },
    {
      id: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      name: 'Sony PlayStation 5 Slim',
      description: 'Игровая консоль нового поколения с поддержкой 4K и HDR.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/'
    },
    {
      id: 5,
      image: '',
      name: 'Samsung Galaxy Buds2 Pro',
      description: 'Беспроводные наушники с активным шумоподавлением и студийным звуком.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-sm-r510nzaasek-seryi-106128765/'
    },
    {
      id: 6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      name: 'Apple MacBook Air 13 M2',
      description: 'Сверхтонкий ноутбук с производительным чипом M2.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/'
    },
    {
      id: 7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium',
      name: 'DeLonghi Dedica EC 685',
      description: 'Компактная рожковая кофеварка для приготовления эспрессо и капучино.',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/kofevarka-delonghi-dedica-ec-685-m-serebristyi-109062002/'
    }
    
  ];

  // Метод для поделиться (Telegram)
  share(link: string) {
    const shareUrl = `https://t.me/share/url?url=${link}&text=Посмотри на этот товар!`;
    window.open(shareUrl, '_blank');
  }
}
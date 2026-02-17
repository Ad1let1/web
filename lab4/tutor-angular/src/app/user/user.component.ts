import { Component, input } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';


// 2
// @Component({
//   selector: 'app-user',
//     template: `Username {{username}}`
// })
// 7:
// @Component({
//   selector: 'app-user',
//     template: ` <p> The user's name is {{name()}} </p>`,
// })
// 8:
@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
  `,
  imports: [NgOptimizedImage],
})

export class UserComponent {
    // 2 
    // username="Adilet";
    // 7:
    // readonly name = input<string>();
    logoUrl = '/public/favicon.ico';
    logoAlt = 'Angular logo';
    username = 'youngTech';
}

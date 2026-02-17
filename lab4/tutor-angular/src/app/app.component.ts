import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { CommentComponent } from './comment/comment.component';
import {NgOptimizedImage} from '@angular/common';

// 1
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   template: `
//     Hello {{ city }} {{ 1 + 1 }}
//   `,
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
// }

// -----------------------------------------------------

//2
// @Component({
//     selector: 'app-root',
//     imports: [RouterOutlet, UserComponent],
//     template: `
//         <section>
//         <app-user />
//         </section>
//     `,

// })

// -----------------------------------------------------

// 3
// @Component({
//     selector: 'app-root',
//     template: `
//         @if(isServerRunning){
//             <span> Yes it is running</span>
//         }@else{
//             <span> No it is not running </span>
//         }
//     `
// })
// -----------------------------------------------------

//4
// @Component({
//     selector: 'app-root',
//     template: `
//         @for( i of components; track i.id){
//             {{i.id}}. {{i.name}}
//             <br>
//         }
//     `
// })

// -----------------------------------------------------

//5:
// @Component({
//     selector: 'app-root',
//     template: `<div [contentEditable]="isEditable"></div>`
// })

// -----------------------------------------------------

//6:
// @Component({
//     selector: 'app-root'    ,
//     // template: `<button (click)="greet()">`
//     template: `
//     <section (mouseover)="showSecretMessage()">
//     There is a secret message when hover
//     {{message}}
//     </section>
//     `
// })

// -----------------------------------------------------

//7:
// @Component({
//     selector: 'app-root'    ,
//     imports: [UserComponent],
//     template: `<app-user name="Adilet"> </app-user>`
// })
// -----------------------------------------------------

//7:

// @Component({
//   selector: 'app-root',
//   template: `
//     <app-child (addItemEvent)="addItem($event)" />
//     <p>🐢 all the way down {{ items.length }}</p>
//   `,
//   imports: [ChildComponent],
// })

// 8: Defer
// @Component({
//   selector: 'app-root',
//   template: `
//     <div>
//       <article>
//         <p>
//           Angular is my favorite framework, and this is why. Angular has the
//           coolest deferrable view feature that makes defer loading content the
//           easiest and most ergonomic it could possibly be. The Angular community
//           is also filled with amazing contributors and experts that create
//           excellent content. The community is welcoming and friendly, and it
//           really is the best community out there.
//         </p>
//         <p>
//           I can't express enough how much I enjoy working with Angular. It
//           offers the best developer experience I've ever had. I love that the
//           Angular team puts their developers first and takes care to make us
//           very happy. They genuinely want Angular to be the best framework it
//           can be, and they're doing such an amazing job at it, too. This
//           statement comes from my heart and is not at all copied and pasted. In
//           fact, I think I'll say these exact same things again a few times.
//         </p>
//         <p>
//           Angular is my favorite framework, and this is why. Angular has the
//           coolest deferrable view feature that makes defer loading content the
//           easiest and most ergonomic it could possibly be. The Angular community
//           is also filled with amazing contributors and experts that create
//           excellent content. The community is welcoming and friendly, and it
//           really is the best community out there.
//         </p>
//         <p>
//           I can't express enough how much I enjoy working with Angular. It
//           offers the best developer experience I've ever had. I love that the
//           Angular team puts their developers first and takes care to make us
//           very happy. They genuinely want Angular to be the best framework it
//           can be, and they're doing such an amazing job at it, too. This
//           statement comes from my heart and is not at all copied and pasted. In
//           fact, I think I'll say these exact same things again a few times.
//         </p>
//         <p>
//           Angular is my favorite framework, and this is why. Angular has the
//           coolest deferrable view feature that makes defer loading content the
//           easiest and most ergonomic it could possibly be. The Angular community
//           is also filled with amazing contributors and experts that create
//           excellent content. The community is welcoming and friendly, and it
//           really is the best community out there.
//         </p>
//         <p>
//           I can't express enough how much I enjoy working with Angular. It
//           offers the best developer experience I've ever had. I love that the
//           Angular team puts their developers first and takes care to make us
//           very happy. They genuinely want Angular to be the best framework it
//           can be, and they're doing such an amazing job at it, too. This
//           statement comes from my heart and is not at all copied and pasted.
//         </p>
//       </article>
//     @defer(on viewport){
//       <app-comment />
//     }@placeholder{
//       <button>Нажми меня, чтобы загрузить комментарии</button>
//     }@loading(minimum 2s){
//       <p>loading comments...</p>
//     }

//     </div>
//     `,
//     imports:[CommentComponent]
// })

// 9: Optimizing images
export class AppComponent {
  // 1:
  //   city = 'San Francisco';
  // 2: пустой
  // 3:
  // isServerRunning = 0;
  // 4:
  // components = [
  //     {id:'1', name:'Adilet'},
  //     {id:'2', name:'Kanat'},
  //     {id:'3', name:'Nuridin'},
  // ]
  // 5:
  // isEditable=1;
  // 6
  // greet(){
  //     console.log('Hello');
  // }
  // message='';
  // showSecretMessage() {
  //      this.message = 'Way to go 🚀';
  // }
  // 7
  // items = new Array();
  // addItem(item: String){
  //     this.items.push(item);
  // }
  //8
}

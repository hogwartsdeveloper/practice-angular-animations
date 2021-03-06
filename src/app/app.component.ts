import { Component } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {changeWidthTrigger, divTrigger} from "./app.animations";
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [divTrigger, changeWidthTrigger],
  // animations: [
  //   trigger('clickedDiv', [
  //      state('start', style({
  //        backgroundColor: 'blue',
  //        width: '150px',
  //        height: '150px'
  //      })),
  //     state('end', style({
  //       backgroundColor: 'red',
  //       width: '300px',
  //       height: '300px'
  //     })),
  //     state('active', style({
  //       backgroundColor: 'orange',
  //       width: '170px',
  //       height: '170px'
  //     })),
  //     transition('start <=> end', animate('800ms ease-in')),
  //     transition('start => active', animate(400)),
  //     transition('active => end', animate(400))
  //   ]),
  //   trigger('multi', [
  //     state('start', style({
  //       width: '150px',
  //       height: '150px',
  //       border: '5px solid black'
  //     })),
  //     state('end', style({
  //       width: '170px',
  //       height: '170px',
  //       background: 'blue'
  //     })),
  //     transition('start <=> end', [
  //       style({
  //         background: 'red'
  //       }),
  //       animate(1500, style({
  //         background: 'yellow'
  //       })),
  //       animate(1000, style({
  //         width: '200px',
  //         height: '200px'
  //       })),
  //       animate(1000)
  //     ])
  //   ])
  // ]
})
export class AppComponent {
  title = 'angular-animation-practice';
  // clickedDivState = 'start';
  // multiState = 'start';

  // changeDivState() {
  //   this.clickedDivState = 'end';
  //   setTimeout(() => {
  //     this.clickedDivState = 'start'
  //   }, 3000)
  // }

  // 4
  isVisible = false;

  onAnimationStart(event: AnimationEvent) {
    console.log('Start: ', event);
  }

  onAnimationDone(event: AnimationEvent) {
    console.log('Done: ', event)
  }
}

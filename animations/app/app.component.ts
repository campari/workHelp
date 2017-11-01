import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/core";

@Component({
  selector: 'app-root',
	templateUrl: './app.component.html',
	animations: [
		trigger('divState', [
			state('normal', style({
				'background-color' : 'red',
				transform:'translateX(0)'
			})),
			state('highligted', style({
				'background-color': 'blue',
				transform: 'translateX(100px)'
			})),
			transition('normal => highligted', animate(300)),
			transition('highligted => normal', animate(300)),

		]),
		trigger('wildState', [
			state('normal', style({
				'background-color' : 'red',
				transform:'translateX(0) scale(1)'
			})),
			state('highligted', style({
				'background-color': 'blue',
				transform: 'translateX(100px) scale(1)'
			})),
			state('shrunked', style({
				'background-color': 'green',
				transform: 'translateX(100px) scale(0.5)'
			})),
			transition('normal => highligted', animate(300)),
			transition('highligted => normal', animate(800)),
			transition('shrunken <=> *', [
				style({
					'background-color': 'orange'
				}),
				animate(1000,style({
					borderRadius: '50px'
				})),
				animate(500)
			] ),
		]),
		trigger('list1', [
			state('in', style({
				opacity: 1,
				transform: 'translateX(0)'
			})),
			transition('void => *', [
				style({
					opacity: 0,
					transform: 'translateX(-100px)'
				}),
				animate(300)
			]),
			transition('* => void', [
				style({
					opacity: 0,
					transform: 'translateX(-100px)'
				}),
				animate(300)
			]),
		]),
	]
})
export class AppComponent {
	state = 'normal';
	wildState = 'normal';
	list = ['Milk', 'Sugar', 'Bread'];

	onAdd(item) {
		this.list.push(item);
	}

	onDelete(item) {
		this.list.splice(this.list.indexOf(item), 1);
	}


	onAnimate(){
		this.state == 'normal' ? this.state = 'highligted' : this.state = 'normal';
		this.wildState == 'normal' ? this.wildState = 'highligted' : this.wildState = 'normal';
	}

	onShrink(){
		this.wildState = 'shrunken';
	}
}

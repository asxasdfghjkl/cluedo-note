import CLUES from './clues';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public readonly players: number = 6;
	public readonly playerArr = new Array(this.players).fill(1).map((v, i) => i.toString());
	public icon: { [key: string]: string } = {};
	public color: { [key: string]: string } = {};
	public num: { [key: string]: string[] } = {};
	public selected: string | null = null;
	public clues = CLUES;
	public lang = 0;

	constructor() {
		window.addEventListener('beforeunload',
			($) => $.returnValue = this.lang ?
				'重載會失去所有記錄，你確定嗎？' :
				'Reload will clear all the data. Are you sure?',
		);
	}

	public onButtonClick($: { type: string; value: string | null }): void {
		if ($.value === null) {
			this[$.type][this.selected as string] = null;
			return;
		}

		if ($.type === 'num') {
			const target = (this.num[this.selected as string] = this.num[this.selected as string] || []);
			const index = target.indexOf($.value);
			if (index === -1) {
				target.push($.value);
			} else {
				target.splice(index, 1);
			}
		} else {
			this[$.type][this.selected as string] = $.value.toString();
		}
	}

	public toggleLang(): void {
		this.lang = this.lang ? 0 : 1;
	}

	public changePlayerName(index: number): void {
		const name: string | undefined | null = prompt(this.lang ? 'Please input the player name' : '請輸入玩家名稱');
		if (name) {
			this.playerArr[index] = name;
		}
	}
}

import CLUES from './clues';
import { Component } from '@angular/core';

const LANG_ZH = 0;
const LANG_EN = 1;

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
  public lang: number = LANG_ZH;
  public showMenu = false;

  private readonly save = ['playerArr', 'icon', 'color', 'num'];
  constructor() {
    if (localStorage.language) {
      this.lang = localStorage.language === LANG_ZH.toString() ? LANG_ZH : LANG_EN;
    } else if (!navigator.language.startsWith('zh')) {
      this.lang = LANG_EN;
    }

    if (localStorage[this.save[0]]) {
      this.save.forEach(v => this[v] = JSON.parse(localStorage[v]));
    }
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

    this.save.forEach(v => localStorage[v] = JSON.stringify(this[v]));
  }

  public newGame(): void {
    const result = confirm(this.lang ? '你確定要清除所有記錄嗎？' : 'Do you really want to clear all the data?');
    if (result) {
      this.save.forEach(v => {
        if (!Array.isArray(this[v])) {
          this[v] = {};
          delete localStorage[v];
        }
      });
    }
    this.showMenu = false;
  }

  public toggleLang(): void {
    localStorage.language = this.lang = this.lang ? 0 : 1;
    this.showMenu = false;
  }

  public changePlayerName(index: number): void {
    const name: string | undefined | null = prompt(this.lang ? 'Please input the player name' : '請輸入玩家名稱');
    if (name) {
      this.playerArr[index] = name;
    }
  }
}

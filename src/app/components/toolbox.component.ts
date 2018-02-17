import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-toolbox',
	templateUrl: './toolbox.component.html',
	styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent {
	@Input() disabled: boolean = true;
	@Output() buttonClick: EventEmitter<{ type: string; value: string | null }> = new EventEmitter();
	public iconBtns = ['check', 'times', 'question', 'exclamation', 'star', 'circle', 'chevron-circle-left', 'chevron-circle-right'];
	public numBtns = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
	public colorBtns = ['#f25235', '#eeaa56', '#eee860', '#64f28a', '#6394e7', '#c5c5c5'];
}

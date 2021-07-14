import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-show-card',
	templateUrl: './show-card.component.html',
	styleUrls: ['./show-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCardComponent implements OnInit {
	@Input() public title: string;
	@Input() public averageRating: number;
	@Input() public imageUrl: string;

	constructor() {}

	public logTitle(): void {
		console.log(this.title);
	}

	ngOnInit(): void {}
}

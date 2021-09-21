import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';

@Component({
	selector: 'app-show-list',
	templateUrl: './show-list.component.html',
	styleUrls: ['./show-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowListComponent {
	@Input() public shows: Array<Show>;

	constructor() {}
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-all-shows-container',
	templateUrl: './all-shows-container.component.html',
	styleUrls: ['./all-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllShowsContainerComponent implements OnInit {
	public shows: Array<Show>;

	constructor(private showService: ShowService) {}

	ngOnInit(): void {
		this.shows = this.showService.getShows();
	}
}

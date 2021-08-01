import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-all-shows-container',
	templateUrl: './all-shows-container.component.html',
	styleUrls: ['./all-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllShowsContainerComponent {
	public shows$: Observable<Array<Show> | null> = this.showService.getShows().pipe(
		retry(1),
		catchError((error: Error) => {
			this.errorObject = error;
			return of(null);
		})
	);
	public errorObject: Error;

	constructor(private showService: ShowService) {}
}

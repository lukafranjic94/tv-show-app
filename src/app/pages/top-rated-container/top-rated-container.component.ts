import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-top-rated-container',
	templateUrl: './top-rated-container.component.html',
	styleUrls: ['./top-rated-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopRatedContainerComponent {
	public shows$: Observable<Array<Show> | null> = this.showService.getTopRated().pipe(
		retry(1),
		catchError((error) => {
			this.errorObject = error;
			return of(null);
		})
	);
	public errorObject: Error | null = null;

	constructor(private showService: ShowService) {}
}

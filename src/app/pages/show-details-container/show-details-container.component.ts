import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, retry, switchMap } from 'rxjs/operators';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-show-details-container',
	templateUrl: './show-details-container.component.html',
	styleUrls: ['./show-details-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDetailsContainerComponent implements OnInit {
	public show$: Observable<Show | undefined>;
	public errorObject: Error | null;
	constructor(private showService: ShowService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.show$ = this.route.paramMap.pipe(
			switchMap((paramMap: ParamMap) => {
				const id: string | null = paramMap.get('id');
				if (id) {
					return this.showService.getShow(id).pipe(
						retry(1),
						catchError((error: Error) => {
							this.errorObject = error;
							return of(undefined);
						})
					);
				}
				return of(undefined);
			})
		);
	}
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, merge, Observable, of, Subject, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Review } from 'src/app/services/review/review.model';
import { ReviewService } from 'src/app/services/review/review.service';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';
import { User } from 'src/app/services/user/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { IReviewFormData } from './components/review-form/review-form.component';

interface ITemplateData {
	show: Show;
	reviews: Array<Review>;
	currentUserEmail: string;
}

export interface IReviewData {
	comment: string;
	rating: number;
	showId: string;
}

@Component({
	selector: 'app-show-details-container',
	templateUrl: './show-details-container.component.html',
	styleUrls: ['./show-details-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDetailsContainerComponent {
	private fetchTrigger$: Subject<void> = new Subject<void>();
	public templateData$: Observable<ITemplateData | null> = merge(this.route.paramMap, this.fetchTrigger$).pipe(
		switchMap(() => {
			const id: string | null = this.route.snapshot.paramMap.get('id');
			if (id) {
				return combineLatest([
					this.showService.getShow(id),
					this.reviewService.getReviewsForShowId(id),
					this.userService.getUser().pipe(map((user: User) => user.email)),
				]);
			}
			return throwError('Something went wrong');
		}),
		map(([show, reviews, currentUserEmail]: [Show, Array<Review>, string]) => {
			return {
				show,
				reviews,
				currentUserEmail,
			};
		}),
		catchError((error: Error) => {
			this.errorObject = error;
			return of(null);
		})
	);
	public errorObject: Error;

	constructor(
		private showService: ShowService,
		private route: ActivatedRoute,
		private reviewService: ReviewService,
		private userService: UserService
	) {}

	public onAddReview(reviewFormData: IReviewFormData): void {
		const showId: string | null = this.route.snapshot.paramMap.get('id');
		if (showId) {
			this.reviewService
				.addReview({
					comment: reviewFormData.comment,
					rating: reviewFormData.rating,
					showId,
				})
				.subscribe(() => {
					this.fetchTrigger$.next();
				});
		}
	}

	public onDeleteReview(reviewId: string): void {
		this.reviewService.deleteReview(reviewId).subscribe(() => {
			this.fetchTrigger$.next();
		});
	}
}

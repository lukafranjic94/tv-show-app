import { IRawReview } from 'src/app/interfaces/rawReview.interface';

export class Review {
	public comment: string;
	public rating: number;
	public id: string;
	public showId: string;
	constructor(rawReview: IRawReview) {
		this.comment = rawReview.comment;
		this.rating = rawReview.rating;
		this.id = rawReview.id;
		this.showId = rawReview.show_id;
	}
}

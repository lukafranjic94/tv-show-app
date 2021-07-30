import { IRawReview } from 'src/app/interfaces/rawReview.interface';

export class Review {
	public comment: string;
	public rating: number;
	public id: string;
	public showId: string;
	public userEmail: string;
	public userImageUrl: string;
	constructor(rawReview: IRawReview) {
		this.comment = rawReview.comment;
		this.rating = rawReview.rating;
		this.id = rawReview.id;
		this.showId = rawReview.show_id;
		this.userEmail = rawReview.user.email;
		this.userImageUrl = rawReview.user.image_url;
	}
}

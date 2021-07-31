import { IRawReview } from 'src/app/interfaces/rawReview.interface';
import { User } from '../user/user.model';

export class Review {
	public comment: string;
	public rating: number;
	public id: string;
	public showId: string;
	public user: User;
	constructor(rawReview: IRawReview) {
		this.comment = rawReview.comment;
		this.rating = rawReview.rating;
		this.id = rawReview.id;
		this.showId = rawReview.show_id;
		this.user = new User(rawReview.user);
	}
}

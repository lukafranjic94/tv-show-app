import { IRawUser } from 'src/app/interfaces/user.interface';

export class User {
	public id: string;
	public email: string;
	public imageUrl: string;
	constructor(rawUser: IRawUser) {
		this.id = rawUser.id;
		this.email = rawUser.email;
		this.imageUrl = rawUser.image_url;
	}
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';

@Component({
	selector: 'app-all-shows-container',
	templateUrl: './all-shows-container.component.html',
	styleUrls: ['./all-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllShowsContainerComponent implements OnInit {
	rawShows: Array<any> = [
		{
			title: 'Battlestar Galactica',
			description:
				'Battlestar Galactica (BSG) is an American military science fiction television series, and part of the Battlestar Galactica franchise. The show was developed by Ronald D. Moore and executive produced by Moore and David Eick as a re-imagining of the 1978 Battlestar Galactica television series created by Glen A. Larson.',
			average_rating: 4.1,
			image_url: 'https://images-na.ssl-images-amazon.com/images/I/81x1wKmDkFL._SL1500_.jpg',
		},
		{
			title: 'Breaking Bad',
			description:
				'Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan. The show aired on AMC from January 20, 2008, to September 29, 2013, consisting of five seasons for a total of 62 episodes. It was set and filmed in Albuquerque, New Mexico, and tells the story of Walter White (Bryan Cranston), an underpaid, overqualified and dispirited high school chemistry teacher who is struggling with a recent diagnosis of stage-three lung cancer.',
			average_rating: 4.7,
			image_url:
				'https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
		},
		{
			title: 'General',
			description:
				'rati životnu pripovijest hrvatskog ratnog junaka, generala Ante Gotovine. Sniman je na lokacijama u Zagrebu, Šibeniku i Livnu. Snimljen je u koprodukciji tvrtke Kiklop film i HRT-a, a podržan je od strane Hrvatskog audiovizualnog centra. Smatra ga se najočekivanijim hrvatskim filmom svih vremena.',
			average_rating: 4.7,
			image_url:
				'https://www.croatiaweek.com/wp-content/uploads/2019/07/MV5BZmMxYWM3NjAtYjcyZS00ZTEzLTg4ZjctMDY3NDEwYTY0MjQzXkEyXkFqcGdeQXVyNzQwNzQwMjA@._V1_SY1000_CR006951000_AL_.jpg?x61649',
		},
	];

	shows: Array<Show>;

	constructor() {}

	ngOnInit(): void {
		this.shows = this.rawShows.map((rawShow) => {
			const newShow = new Show(rawShow);
			console.log(`${newShow.title} ima rating ${newShow.calcPercentageRating()}%`);
			return newShow;
		});
	}
}

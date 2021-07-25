import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRawShow } from 'src/app/interfaces/rawShow.interface';
import { ApiPaths, environment } from 'src/environments/environment';
import { ReviewService } from '../review/review.service';
import { Show } from './show.model';

@Injectable({
	providedIn: 'root',
})
export class ShowService {
	private baseUrl: string = environment.baseUrl;
	constructor(private reviewService: ReviewService, private http: HttpClient) {}

	public getShows(): Observable<Array<Show>> {
		return this.http
			.get<{ shows: Array<IRawShow> }>(`${this.baseUrl}${ApiPaths.Shows}`)
			.pipe(map((response) => response.shows.map((rawShow) => new Show(rawShow))));
	}

	public getTopRated(): Observable<Array<Show>> {
		return this.http
			.get<{ shows: Array<IRawShow> }>(`${this.baseUrl}${ApiPaths.Shows}/top_rated`)
			.pipe(map((response) => response.shows.map((rawShow) => new Show(rawShow))));
	}

	public getShow(id: string): Observable<Show | undefined> {
		return this.http
			.get<{ show: IRawShow }>(`${this.baseUrl}${ApiPaths.Shows}/${id}`)
			.pipe(map((response) => new Show(response.show)));
	}
}

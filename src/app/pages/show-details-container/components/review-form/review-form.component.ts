import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export interface ReviewFormData {
	comment: string;
	rating: number;
}

@Component({
	selector: 'app-review-form',
	templateUrl: './review-form.component.html',
	styleUrls: ['./review-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewFormComponent implements OnInit {
	@Output() addReview: EventEmitter<ReviewFormData> = new EventEmitter<ReviewFormData>();
	public reviewFormGroup = this.fb.group({
		comment: ['', [Validators.required]],
		rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
	});
	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {}
	public onAddReview(): void {
		console.log(this.reviewFormGroup.value);
		this.addReview.emit(this.reviewFormGroup.value);
		this.reviewFormGroup.reset();
	}
}

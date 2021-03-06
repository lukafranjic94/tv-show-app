import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

export interface IReviewFormData {
	comment: string;
	rating: number;
}

@Component({
	selector: 'app-review-form',
	templateUrl: './review-form.component.html',
	styleUrls: ['./review-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewFormComponent {
	@Output() public addReview: EventEmitter<IReviewFormData> = new EventEmitter<IReviewFormData>();
	public reviewFormGroup: FormGroup = this.fb.group({
		comment: ['', [Validators.required]],
		rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
	});

	constructor(private fb: FormBuilder) {}

	public onAddReview(formDirective: FormGroupDirective): void {
		this.addReview.emit(this.reviewFormGroup.value);
		formDirective.resetForm();
		this.reviewFormGroup.reset();
	}
}

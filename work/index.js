class Review {
	constructor(body, rating) {
		this.body = body;
		this.rating = rating;
	}
}

function createReviewElement(body, rating) {
	const newReview = document.createElement('div');
	const newReviewBody = document.createElement('p');
	const newReviewRating = document.createElement('p');
	const newReviewDeleteButton = document.createElement('button');

	newReviewDeleteButton.id = '#delete-button';
	newReviewDeleteButton.textContent = 'Remove';
	newReviewDeleteButton.addEventListener('click', (event) => {
		const parentReview = event.currentTarget.parentNode;
		const reviews = parentReview.parentNode;
		const index = Array.from(reviews.children).indexOf(parentReview);
		const storedReviews = JSON.parse(localStorage.getItem('storedReviews'));
		storedReviews.splice(index, 1);
		localStorage.setItem('storedReviews', JSON.stringify(storedReviews));
		updateAverageRating();
		reviews.removeChild(parentReview);
	})
	newReviewBody.textContent = body;
	newReviewRating.textContent = `${rating}/5`;
	newReview.classList.add('review');
	newReview.appendChild(newReviewBody);
	newReview.appendChild(newReviewRating);
	newReview.appendChild(newReviewDeleteButton);
	return newReview;
}

function updateAverageRating() {
	const storedReviews = JSON.parse(localStorage.getItem('storedReviews'));
	const averageRating = document.querySelector('#average-rating');
	if (storedReviews.length === 0) {
		averageRating.textContent = 'Not yet rated';
		return;
	}
	const average = storedReviews.map(x => x.rating).reduce((accumulator, currentValue) => accumulator + currentValue) / storedReviews.length;
	averageRating.textContent = average.toFixed(2);
}

function clearInput() {
	const reviewBody = document.querySelector('#review-body');
	const reviewBodyAlert = document.querySelector('#review-body-alert');
	const reviewRatingAlert = document.querySelector('#review-rating-alert');
	const reviewRating = document.querySelector('#review-rating');

	reviewBody.value = '';
	reviewRating.value = '';
	reviewBodyAlert.classList.add('invisible');
	reviewRatingAlert.classList.add('invisible');

}

function initialize() {
	if (!localStorage.getItem('storedReviews')) {
		const reviewArray = [new Review('bongland humor lol', 3), new Review('not my cup of tea', 1), new Review('amazing', 5)];
		localStorage.setItem('storedReviews', JSON.stringify(reviewArray));
	}
	updateAverageRating();

	const reviews = document.querySelector('#reviews');
	const storedReviews = JSON.parse(localStorage.getItem('storedReviews'));
	storedReviews.forEach(review => {
		const newReview = createReviewElement(review.body, review.rating);
		reviews.appendChild(newReview);
	})

	const form = document.querySelector('#review-form');
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		let submitOk = true;
		const storedReviews = JSON.parse(localStorage.getItem('storedReviews'));
		const reviewBody = document.querySelector('#review-body').value;
		const reviewBodyAlert = document.querySelector('#review-body-alert');
		const reviewRatingAlert = document.querySelector('#review-rating-alert');
		const reviewRating = document.querySelector('#review-rating').value;
		if (!reviewBody.trim()) {
			reviewBodyAlert.classList.remove('invisible');
			submitOk = false;
		}
		if (!reviewRating || (reviewRating < 1 || reviewRating > 5)) {
			reviewRatingAlert.classList.remove('invisible');
			submitOk = false;
		}
		if (!submitOk) {
			return;
		}
		const newReview = createReviewElement(reviewBody, reviewRating);

		reviews.appendChild(newReview);
		storedReviews.push(new Review(reviewBody, parseInt(reviewRating)));
		localStorage.setItem('storedReviews', JSON.stringify(storedReviews));
		updateAverageRating();
		clearInput();
	});

}

initialize();


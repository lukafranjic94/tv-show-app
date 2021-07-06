const form = document.querySelector('#review-form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	const reviewBody = document.querySelector('#review-body').value;
	const reviewRating = document.querySelector('#review-rating').value;
	const newReview = document.createElement('div');
	const newReviewBody = document.createElement('p');
	const newReviewRating = document.createElement('p');
	const reviews = document.querySelector('#reviews')

	newReviewBody.textContent = reviewBody
	newReviewRating.textContent = `${reviewRating}/5`
	newReview.classList.add("review")
	newReview.appendChild(newReviewBody);
	newReview.appendChild(newReviewRating);
	reviews.appendChild(newReview);
});

class Review {
	constructor(body, rating) {
		this.body = body;
		this.rating = rating;
	}
}

const storedReviews = [new Review('bongland humor lol', 3), new Review('not my cup of tea', 1)]
const reviews = document.querySelector('#reviews')
storedReviews.forEach(review => {
	const newReview = document.createElement('div');
	const newReviewBody = document.createElement('p');
	const newReviewRating = document.createElement('p');

	newReviewBody.textContent = review.body;
	newReviewRating.textContent = `${review.rating}/5`
	newReview.classList.add("review")
	newReview.appendChild(newReviewBody);
	newReview.appendChild(newReviewRating);
	reviews.appendChild(newReview);
})
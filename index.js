const main = document.getElementById('main');
const submitBtn = document.getElementById('submit-btn');
const ratingScoreOneBtn = document.getElementById('rating-score-1');
const ratingScoreTwoBtn = document.getElementById('rating-score-2');
const ratingScoreThreeBtn = document.getElementById('rating-score-3');
const ratingScoreFourBtn = document.getElementById('rating-score-4');
const ratingScoreFiveBtn = document.getElementById('rating-score-5');

let ratingScore = 0;

ratingScoreOneBtn.addEventListener('click', () => {
  ratingScore = 1;
});

ratingScoreTwoBtn.addEventListener('click', () => {
  ratingScore = 2;
});

ratingScoreThreeBtn.addEventListener('click', () => {
  ratingScore = 3;
});

ratingScoreFourBtn.addEventListener('click', () => {
  ratingScore = 4;
});

ratingScoreFiveBtn.addEventListener('click', () => {
  ratingScore = 5;
});

function renderThankYouState() {
  main.innerHTML = `
      <div class="card thank-you-state">
				<div>
					<img src="./images/illustration-thank-you.svg" alt="pos and card" />
        </div>  

				<div class="selection">
					<p>You selected ${ratingScore} out of 5</p>
				</div>

				<h2>Thank you!</h2>

				<p>
					We appreciate you taking the time to give a rating. If you ever need
					more support, don’t hesitate to get in touch!
				</p>
      </div>
  `;
}

function handleSubmit() {
  renderThankYouState();
}

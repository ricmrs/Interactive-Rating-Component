const form = document.querySelector('.form');
const ratingStateCard = document.querySelector('.ratingstate');
const thankYouCard = document.querySelector('.thankyou');
const result = document.querySelector('.rate')

form.addEventListener('submit', showThankYouCard);

function showThankYouCard(event) {
  event.preventDefault();
  const rate = document.querySelector('input[name="numbers"]:checked');
  if(!rate) return;
  ratingStateCard.style.display = 'none';
  thankYouCard.style.display = 'flex';
  result.insertAdjacentHTML('beforeend', rate.value);
}
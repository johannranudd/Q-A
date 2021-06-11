
const btn = document.querySelector('.buttons');
const hiddenText = document.querySelector('.hidden-text p');


btn.addEventListener('click', function(question) {
  btn.classList.toggle('show-text');
  hiddenText.classList.toggle('show-text');
  console.log(hiddenText);
})
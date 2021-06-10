const plussIcon = document.querySelector('.pluss-icon');
const minusIcon = document.querySelector('.minus-icon');
const hiddenSection = document.querySelector('.hidden-section');




plussIcon.addEventListener('click', function() {
    hiddenSection.classList.add('show-hidden-section');
    minusIcon.classList.add('show-icon');
    plussIcon.classList.add('hide-icon');
})
minusIcon.addEventListener('click', function() {
    hiddenSection.classList.remove('show-hidden-section');
    minusIcon.classList.remove('show-icon');
    plussIcon.classList.remove('hide-icon');
})


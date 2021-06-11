

const questionWrapper = document.querySelectorAll('.question-wrapper');

questionWrapper.forEach(function(question) {
  const btn = question.querySelector('.buttons');

  btn.addEventListener('click', function() {
    question.classList.toggle('show-text');

    questionWrapper.forEach(function(item) {
      // console.log(item);

      if (item !== question) {
        item.classList.remove('show-text')
      }

    });
  });
});
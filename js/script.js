// const plussIcon = document.querySelector(".pluss-icon");
// const minusIcon = document.querySelector(".minus-icon");
// const hiddenSection = document.querySelectorAll(".hidden-section");
// const buttons = document.querySelectorAll(".open-card-btn");
// const questionCard = document.querySelectorAll('.question-card')

// !for loop option
// !Todo make cards that are open close when openeing a new card
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         hiddenSection[i].classList.toggle('show-hidden-section');
//         plussIcon.classList.toggle('hide-icon');
//         minusIcon.classList.toggle('show-icon');
//     })
// };

// !forEach
// !Todo make cards that are open close when openeing a new card
// buttons.forEach(function (per) {
//   per.addEventListener("click", function (e) {
//     const answer =
//       e.currentTarget.parentElement.nextSibling.nextSibling.nextSibling
//         .nextSibling;
//     answer.classList.toggle("show-hidden-section");
//   });
// });

//!using selectors inside element

// questionCard.forEach(function (questionPer) {
//     const btn = questionPer.querySelector('.open-card-btn');
//     const newHiddenSection = questionPer.querySelector('.hidden-section');
//     const minusIcon = questionPer.querySelector('.minus-icon');
//     const plussIcon = questionPer.querySelector('.pluss-icon');

//     btn.addEventListener('click', function() {
//         questionCard.forEach(function (questionPerAgain) {
//             const anotherHiddenSection = questionPerAgain.querySelector('.hidden-section');
//                 plussIcon.classList.toggle('hide-icon');
//                 minusIcon.classList.toggle('show-icon');
//             if (anotherHiddenSection !== questionPer) {
//                 anotherHiddenSection.classList.remove('show-hidden-section')
//             }

//         });

//         newHiddenSection.classList.toggle('show-hidden-section');

//     });
// });

// const questionCard = document.querySelectorAll(".question-card");

// questionCard.forEach(function (question) {
//   const btn = question.querySelector(".open-card-btn");
//   const plussIcon = question.querySelectorAll(".pluss-icon");
//   const minusIcon = question.querySelectorAll(".minus-icon");
//   const hiddenSection = question.querySelector(".hidden-section");

//   btn.addEventListener("click", function() {
//     hiddenSection.classList.toggle("show-hidden-section");
//     minusIcon.classList.toggle('show-icon');
//     if (plussIcon.classList == 'show-icon' ) {
//         console.log('sggsgf');
//       }
//   });
// });

const questionWrapper = document.querySelectorAll(".question-wrapper");

questionWrapper.forEach(function (question) {
  const btn = question.querySelectorAll("span");
  const hiddenText = question.querySelector(".hidden-text");
  const minusIcon = question.querySelector(".minus-icon");
  const plussIcon = question.querySelector(".pluss-icon");

  // btn.addEventListener('click', function() {
  //     hiddenText.classList.toggle('show-text');
  //     plussIcon.classList.toggle('hide-icon');
  //     minusIcon.classList.toggle('show-icon');
  //     console.log(plussIcon);
  //     console.log(minusIcon);
  // })
  if (questionWrapper !== question) {
    question.classList.remove("show-text");
  }
  btn.forEach((item) => {
    item.addEventListener("click", () => {
      minusIcon.classList.toggle("show-icon");
      plussIcon.classList.toggle("hide-icon");
      hiddenText.classList.toggle("show-text");
    });
  });
});

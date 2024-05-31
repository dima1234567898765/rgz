const readMoreBtns = document.querySelectorAll('#readMoreBtn1, #readMoreBtn2, #readMoreBtn3, #readMoreBtn4, #readMoreBtn5, #readMoreBtn6, #readMoreBtn7, #readMoreBtn8, #readMoreBtn9');
const readMoreTexts = document.querySelectorAll('#readMoreText1, #readMoreText2, #readMoreText3, #readMoreText4, #readMoreText5, #readMoreText6, #readMoreText7, #readMoreText8, #readMoreText9');

readMoreBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    readMoreTexts[index].classList.toggle('hidden');
    readMoreTexts[index].classList.toggle('visible');
  });
});
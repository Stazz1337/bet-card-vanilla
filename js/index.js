const chevronBtn = document.querySelector('.card__btn-chevron');
const cardText = document.getElementById('card-text');

chevronBtn.addEventListener('click', () => {
    if (!cardText.classList.contains('is--opened')) {
        cardText.classList.toggle('is--opened');
        cardText.style.maxHeight = cardText.scrollHeight + 'px';
        chevronBtn.querySelector('.chevron-icon').style.transform = 'rotateX(180deg)';
    } else {
        cardText.classList.toggle('is--opened');
        cardText.style.maxHeight = '120px';
        chevronBtn.querySelector('.chevron-icon').style.transform = 'none';
    }
});
const popup = document.querySelector('.popup');
const page = document.querySelector('.page');
const price = document.querySelector('.offer__price-after');
const formSelect = document.querySelector('.offer__years');
const popupPrice = document.querySelector('.popup__price');
const popupSelect = document.querySelector('.popup__years');
const popupOpen = document.querySelector('.popup-open');
const mediaQuery = window.matchMedia('(max-width: 767px)');
const mobilePopup = document.querySelector('.popup-mobile');
const closeButton = document.querySelector('.popup-mobile__close')
const infoBlock = document.querySelector('.offer__info-block');
const infoButtonBlock = document.querySelector('.bottom__info');
const priceMobile = document.querySelector('.popup-mobile__price');
const formSelectMobile = document.querySelector('.popup-mobile__years');

window.addEventListener('scroll', function() {
  if (scrollY > 700) {
    popup.classList.add('opened');
  } else {
    popup.classList.remove('opened')
  }
});

window.addEventListener('scroll', function() {
  if (mediaQuery.matches && scrollY > 1000) {
    popupOpen.classList.add('popup-open_opened');
  } else {
    popupOpen.classList.remove('popup-open_opened')
  }
});

function checkMediaQuery() {
  if (window.innerWidth > 768) {
    popupOpen.classList.remove('popup-open_opened')
    mobilePopup.classList.remove('opened_mobile');
  }
}

function openMobilePopup() {
  mobilePopup.classList.add('opened_mobile');
  popupOpen.classList.remove('popup-open_opened')
  page.classList.add('page-block');
}

function closeMobilePopup() {
  mobilePopup.classList.remove('opened_mobile');
  popupOpen.classList.add('popup-open_opened')
  page.classList.remove('page-block');
}

function openInfoBlock () {
  infoBlock.classList.toggle('offer__info-block_opened');
}

function increaseOffer() {
  if (formSelect.value == 1) {
    price.textContent = '100000000';
  } if (formSelect.value > 1) {
    const newPriceOffer = 100000000 * Number(formSelect.value)
    price.textContent = String(newPriceOffer);
  }
  popupPrice.textContent = price.textContent;
  popupSelect.value = formSelect.value;
  formSelectMobile.value = formSelect.value;
  priceMobile.textContent = price.textContent;
}

function increasePopup() {
  if (popupSelect.value == 1) {
    popupPrice.textContent = '100000000';
  } if (popupSelect.value > 1) {
    const newPricePopup = 100000000 * Number(popupSelect.value)
    popupPrice.textContent = String(newPricePopup);
  }
  price.textContent = popupPrice.textContent;
  formSelect.value = popupSelect.value;
}

function increasePopupMobile() {
  if (formSelectMobile.value == 1) {
    priceMobile.textContent = '100000000';
  } if (formSelectMobile.value > 1) {
    const newPricePopup = 100000000 * Number(formSelectMobile.value)
    priceMobile.textContent = String(newPricePopup);
  }
  price.textContent = priceMobile.textContent;
  formSelect.value = formSelectMobile.value;
}

formSelect.addEventListener('change', increaseOffer);
popupSelect.addEventListener('change', increasePopup);
formSelectMobile.addEventListener('change', increasePopupMobile);
popupOpen.addEventListener('click', openMobilePopup);
closeButton.addEventListener('click', closeMobilePopup);
infoButtonBlock.addEventListener('click', openInfoBlock);
window.addEventListener('resize', checkMediaQuery);
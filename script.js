const navBurgerBtn = document.querySelector(`.nav-burger-btn`);
const navExternal = document.querySelector(`.nav-external`);
const cartBtn = document.querySelector(`.cart-btn`);
const cartSection = document.querySelector(`.cart-section`);
const closeCartBtn = document.querySelector(`.close-cart`);
const overlay = document.querySelector(`.overlay`);

const openNavMobile = () => {
  navExternal.classList.toggle(`opened`);
};

const openCart = () => {
  cartSection.classList.toggle(`cart-opened`);
  navExternal.classList.remove(`opened`);
  overlay.classList.add(`overlay-active`);
};

const closeCart = () => {
  cartSection.classList.toggle(`cart-opened`);
  overlay.classList.remove(`overlay-active`);
};

navBurgerBtn.addEventListener(`click`, openNavMobile);
cartBtn.addEventListener(`click`, openCart);
closeCartBtn.addEventListener(`click`, closeCart);

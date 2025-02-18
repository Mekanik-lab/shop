// BASKET
const showBasketBtn = document.querySelector("#basket");
const closeBtn = document.querySelector("#basket-card__close-btn");
const basketCard = document.querySelector("#basket-card");

// OVERLAY
const overlay = document.querySelector("#overlay");

// LOGIN
const showLoginBtn = document.querySelector("#login"); 
const closeFormBtn = document.querySelector("#login-card__close-btn");
const loginCard = document.querySelector("#login-card"); 

// BASKET
showBasketBtn.addEventListener("click", () => {
    basketCard.classList.add("active");
    overlay.classList.add("active-overlay"); 
});

closeBtn.addEventListener("click", () => {
    basketCard.classList.remove("active");
    overlay.classList.remove("active-overlay"); 
});

overlay.addEventListener("click", () => {
    basketCard.classList.remove("active");
    loginCard.classList.remove("active"); 
    overlay.classList.remove("active-overlay"); 
});

// LOGIN
showLoginBtn.addEventListener("click", () => {
    loginCard.classList.add("active");
    overlay.classList.add("active-overlay"); 
});

closeFormBtn.addEventListener("click", () => {
    loginCard.classList.remove("active");
    overlay.classList.remove("active-overlay"); 
});

overlay.addEventListener("click", () => {
    loginCard.classList.remove("active");
    overlay.classList.remove("active-overlay"); 
});


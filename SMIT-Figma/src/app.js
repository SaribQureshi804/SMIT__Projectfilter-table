let menuBtn = document.getElementById("menu-btn");
let mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

let faqBtns = document.querySelectorAll(".faq-btn");

faqBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let answer = btn.nextElementSibling;
    let icon = btn.querySelector(".faq-icon");

    answer.classList.toggle("hidden");
    icon.textContent = icon.textContent === "+" ? "-" : "+";
  });
});

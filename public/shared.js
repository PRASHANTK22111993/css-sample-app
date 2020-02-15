var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var negativeButton = document.querySelector(".modal__action--negative");

var planSelectorButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for (var i = 0; i < planSelectorButtons.length; i++) {
    planSelectorButtons[i].addEventListener("click", function () {
        // backdrop.style.display = "block";
        // modal.style.display = "block";
        backdrop.classList.add("open");
        modal.classList.add("open");
    });
}

var closeFunction = function () {
    backdrop.classList.remove("open");
    if (modal) {
        modal.classList.remove("open");
    }
};

backdrop.addEventListener("click", function () {
    mobileNav.classList.remove("open");
    closeFunction();
});

if (negativeButton) {
    negativeButton.addEventListener("click", closeFunction);
}

toggleButton.addEventListener("click", function () {
    // mobileNav.style.display = "block";
    // backdrop.style.display = "block";
    backdrop.classList.add("open");
    mobileNav.classList.add("open");
});

const profileImage = document.getElementById("profile-photo");
const enlargedImage = document.getElementById("enlarged-photo");
const modal = document.getElementById("modal");

profileImage.addEventListener("click", function () {
  enlargedImage.src = "img.JPG";
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Disable scrolling
});

modal.addEventListener("click", function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Enable scrolling
});

modal.addEventListener("click", function () {
  modal.style.display = "none";
  document.body.style.filter = "blur(0)";
  document.body.style.overflow = "auto"; // Enable scrolling
});

// Add scroll animation to the header
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Add hover animation to the header elements
profileImage.addEventListener("mouseenter", () => {
  header.classList.add("hovered");
});

profileImage.addEventListener("mouseleave", () => {
  header.classList.remove("hovered");
});
const openWhatsAppButton = document.getElementById("openWhatsApp");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("closePopup");

openWhatsAppButton.addEventListener("click", () => {
    popup.style.display = "block";
});

closePopupButton.addEventListener("click", () => {
    popup.style.display = "none";
});

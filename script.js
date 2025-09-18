/* === Part 2: Functions, Scope & Return Values === */

// Global variable (to show scope difference)
let clickCount = 0;

// Function with parameter & return value
function calculateDouble(num) {
  return num * 2;
}

// Function demonstrating local vs global scope
function trackClicks() {
  let localClick = ++clickCount; // localClick only exists here
  console.log("Total clicks (global):", clickCount);
  console.log("Local variable:", localClick);
  return localClick;
}

/* === Part 3: Combining CSS + JS === */

// Function to animate the box by adding/removing a CSS class
function animateBox() {
  const box = document.querySelector(".animated-box");

  // Reuse function to calculate animation duration
  const duration = calculateDouble(500); // returns 1000ms

  box.style.transition = `transform ${duration}ms ease`;
  box.style.transform = "rotate(360deg) scale(1.5)";

  // Reset after animation
  setTimeout(() => {
    box.style.transform = "rotate(0deg) scale(1)";
  }, duration);

  trackClicks(); // show scope in console
}

// Function to toggle modal visibility
function toggleModal() {
  const modal = document.getElementById("myModal");
  modal.classList.toggle("show");
  trackClicks();
}

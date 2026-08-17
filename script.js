// Mobile navigation
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}


// Current year
document.getElementById("year").textContent =
  new Date().getFullYear();


// Temporary article message
function showMessage(event) {
  event.preventDefault();

  alert(
    "এই article-এর পূর্ণ page শিগগিরই যোগ করা হবে।"
  );
}

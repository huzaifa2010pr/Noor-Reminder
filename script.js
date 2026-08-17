// ===============================
// Noor Reminder - JavaScript
// ===============================


// Mobile Menu
function toggleMenu() {
  const nav = document.getElementById("nav");

  if (nav) {
    nav.classList.toggle("show");
  }
}


// Close mobile menu after clicking a link
document.querySelectorAll("#nav a").forEach(function(link) {

  link.addEventListener("click", function() {

    const nav = document.getElementById("nav");

    if (nav) {
      nav.classList.remove("show");
    }

  });

});


// ===============================
// Digital Tasbih
// ===============================

let count = 0;

function increaseCount() {

  count++;

  const counter = document.getElementById("count");

  if (counter) {
    counter.textContent = count;
  }

}


function resetCount() {

  count = 0;

  const counter = document.getElementById("count");

  if (counter) {
    counter.textContent = count;
  }

}


// ===============================
// Copy Dua
// ===============================

function copyDua() {

  const dua = "رَبِّ زِدْنِي عِلْمًا";

  if (navigator.clipboard) {

    navigator.clipboard.writeText(dua)
      .then(function() {

        alert("দোয়াটি কপি হয়েছে 🤲");

      })
      .catch(function() {

        alert("দোয়াটি কপি করা যায়নি।");

      });

  } else {

    alert("আপনার browser copy feature support করছে না।");

  }

}

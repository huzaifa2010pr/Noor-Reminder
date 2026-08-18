// ===============================
// Noor Reminder JavaScript
// ===============================


// MOBILE MENU

function toggleMenu() {

  const nav = document.getElementById("nav");

  if (nav) {
    nav.classList.toggle("show");
  }

}


// Close menu after clicking a link

document.querySelectorAll("#nav a").forEach(function(link) {

  link.addEventListener("click", function() {

    const nav = document.getElementById("nav");

    if (nav) {
      nav.classList.remove("show");
    }

  });

});



// ===============================
// SEARCH
// ===============================

function searchPosts() {

  const input = document.getElementById("searchInput");

  const message = document.getElementById("searchMessage");

  const posts = document.querySelectorAll(".post-card");

  if (!input) return;

  const query = input.value.trim().toLowerCase();

  let visiblePosts = 0;


  posts.forEach(function(post) {

    const text = post.textContent.toLowerCase();

    if (query === "" || text.includes(query)) {

      post.style.display = "";

      visiblePosts++;

    } else {

      post.style.display = "none";

    }

  });


  if (query === "") {

    message.textContent = "";

  } else if (visiblePosts === 0) {

    message.textContent =
      "কোনো কনটেন্ট পাওয়া যায়নি। অন্য শব্দ দিয়ে চেষ্টা করুন।";

  } else {

    message.textContent =
      visiblePosts + "টি কনটেন্ট পাওয়া গেছে।";

  }

}



// ===============================
// TASBIH
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
// COPY DUA
// ===============================

function copyDua() {

  const dua = "رَبِّ زِدْنِي عِلْمًا";

  if (!navigator.clipboard) {

    alert("আপনার browser copy feature support করছে না।");

    return;

  }


  navigator.clipboard.writeText(dua)

    .then(function() {

      alert("দোয়াটি কপি হয়েছে 🤲");

    })

    .catch(function() {

      alert("দোয়াটি কপি করা যায়নি।");

    });

}

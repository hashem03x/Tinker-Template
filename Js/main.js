let header = document.querySelector("header");

window.onscroll = () => {
  if (window.scrollY >= 50 || window.pageYOffset >= 50) {
    header.classList.add("active");
    document.querySelector("header .container .logo").style.color = "black";
    document.querySelectorAll("header .container .links li a").forEach((a) => {
      a.style.color = "black";
    });
  } else {
    header.classList.remove("active");
    document.querySelector("header .container .logo").style.color = "white";
    document.querySelectorAll("header .container .links li a").forEach((a) => {
      a.style.color = "white";
    });
  }
};

// Gallery Section:
let links = document.querySelectorAll(".holder .options li");
let images = document.querySelectorAll(".gallery .images img");
let imgContainer = document.querySelector(".gallery .images");

// Filter Images By Classes:
links.forEach((li) => {
  li.addEventListener("click", (e) => {
    links.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
    let dataclass = e.target.dataset.class;
    images.forEach((img) => {
      if (img.dataset.class.includes(dataclass)) {
        img.style.display = "inline-block";
      } else {
        img.style.display = "none";
      }
    });
  });
});

// Open Images OverLay:
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    let Overlay = document.createElement("div");
    Overlay.className = "overlay";
    let imageBox = document.createElement("div");
    let img = document.createElement("img");
    img.src = e.target.src;
    imageBox.className = "image";
    imageBox.appendChild(img);
    let close = document.createElement("div");
    close.className = "close-overlay";
    close.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    imageBox.appendChild(close);
    Overlay.appendChild(imageBox);
    document.body.appendChild(Overlay);
    close.addEventListener("click", () => {
      document.body.removeChild(Overlay);
    });
  });
});

// Testimonials Cards Changing:
let cards = document.querySelectorAll(".testimonials .testi");
let bullets = document.querySelectorAll(".testimonials .bullets li");

bullets.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    let index = e.target.dataset.index;
    cards.forEach((card) => {
      if (card.dataset.index === index) {
        cards.forEach((card) => {
          card.classList.add("invisible");
        });
        card.classList.remove("invisible");
      }
    });
    bullets.forEach((bullet) => {
      bullet.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// Control Posts:
let Btns = document.querySelectorAll(".posts .left .tabs li");
Btns.forEach((btn) => {
  let posts = document.querySelectorAll(".right .post");
  btn.addEventListener("click", (e) => {
    posts.forEach((post) => {
      post.classList.add("invisible");
      if (e.target.dataset.post === post.dataset.post) {
        post.classList.remove("invisible");
      }
    });
  });
});

// Contact Us Form:

let form = document.querySelector(".contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let submit = document.querySelector(".contactForm .submit");
  let inputs = document.querySelectorAll(".contactForm .field");
  let textarea = document.querySelectorAll(".contactForm textarea");
  let overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);
  let msgBox = document.createElement("div");
  let msg = document.createElement("h4");
  msg.innerHTML = `Message Sent , Thank You`;
  msg.style.color = "#33c1cf";
  msgBox.className = "msgBox";
  msgBox.appendChild(msg);
  let close = document.createElement("div");
  close.className = "close-overlay";
  close.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  msgBox.appendChild(close);
  overlay.appendChild(msgBox);
  document.body.appendChild(overlay);
  close.addEventListener("click", () => {
    document.body.removeChild(overlay);
  });
});

// Toggle Menu:
let menuBtn = document.querySelector(".menu");
let navlinks = document.querySelector("header .nav .links");
menuBtn.addEventListener("click", () => {
  navlinks.classList.toggle("open");
});

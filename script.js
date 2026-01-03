// loader
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

const burger = document.getElementById("burger");
const nav = document.getElementById("navMenu");

// hamburger nyit/zár
burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("open");
});

// kattintás menüpontra → záródjon be
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    burger.classList.remove("open");
  });
});



// COOKIE ELEMENTS
const cookieOverlay = document.getElementById("cookieOverlay");
const acceptBtn = document.getElementById("acceptCookies");
const declineBtn = document.getElementById("declineCookies");


// ellenőrzés betöltéskor
if(localStorage.getItem("cookieConsent")){
  cookieOverlay.style.display = "none";
}

// elfogadás
acceptBtn.addEventListener("click", ()=>{
  localStorage.setItem("cookieConsent", "accepted");
  cookieOverlay.style.display = "none";
});

// elutasítás
declineBtn.addEventListener("click", ()=>{
  localStorage.setItem("cookieConsent", "declined");
  cookieOverlay.style.display = "none";
});


// draggable carousel
const track = document.getElementById("carouselTrack");

let isDragging = false;
let startX = 0;
let scrollStart = 0;

/* DESKTOP */
track.addEventListener("mousedown", (e) => {
  isDragging = true;
  track.classList.add("dragging");
  startX = e.clientX;
  scrollStart = track.scrollLeft;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  track.classList.remove("dragging");
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const walk = (e.clientX - startX) * 1.1;
  track.scrollLeft = scrollStart - walk;
});

/* TOUCH */
track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  scrollStart = track.scrollLeft;
});

track.addEventListener("touchmove", (e) => {
  const x = e.touches[0].clientX;
  const walk = (x - startX) * 1.1;
  track.scrollLeft = scrollStart - walk;
});

/* VÉGTELEN LOOP */
track.addEventListener("scroll", () => {
  const maxScroll = track.scrollWidth / 2;

  if (track.scrollLeft >= maxScroll) {
    track.scrollLeft -= maxScroll;
  }

  if (track.scrollLeft <= 0) {
    track.scrollLeft += maxScroll;
  }
});

function loading() {
  var tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out",
  });

  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.5,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );

  tl.to(
    "#loader h1",
    {
      duration: 0.7,
      delay: 0.2,
      color: "black",
    },
    "anim"
  );

  tl.to("#loader", {
    opacity: 0,
    onComplete: function () {
      // Optionally hide the loader after animation completes
      document.getElementById("loader").style.display = "none";
    },
  });

  // Make sure to call scroll initialization after animations are complete
  tl.call(initScroll); // Assuming initScroll is a function that initializes Locomotive Scroll

  function initScroll() {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    document.querySelector(".footer h2").addEventListener("click", () => {
      scroll.scrollTo(0);
    });
  }
}

// Call the loading function
loading();
var elem = document.querySelectorAll("#elem");
var page2 = document.querySelector("#page2");
elem.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var bgImg = e.getAttribute("data-img");
    page2.style.backgroundImage = `url(${bgImg})`;
  });
});
const images = document.querySelectorAll(".images-container img");

// Loop through each image
images.forEach((img) => {
  // Generate a random height between 400 and 600 pixels
  const randomHeight = Math.floor(Math.random() * (600 - 400 + 1)) + 400;

  // Set the height of the image
  img.style.height = `${randomHeight}px`;
});

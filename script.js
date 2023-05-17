/**********BANNER TOP*/
// Get the banner element
const banner = document.querySelector(".banner");

// Get the offset position of the banner
const bannerOffsetTop = banner.offsetTop;

// Add a scroll event listener
window.addEventListener("scroll", function () {
  // Check if the user has scrolled past the banner
  if (window.pageYOffset > bannerOffsetTop) {
    // Add the 'sticky' class to the banner
    banner.classList.add("sticky");
  } else {
    // Remove the 'sticky' class from the banner
    banner.classList.remove("sticky");
  }
});
/**************BANNER BOTTOM*/

// const fullDate = new Date();
// const time = fullDate.getHours();
// console.log(fullDate);
// console.log(time);

// if (time < 12 && time >= 0) {
//   console.log("good morning");
// } else if (time > 12 && time <= 16) {
//   console.log("good afternoon");
// } else if (time > 16 && time <= 23) {
//   console.log("good evening");
// }

// const greetingElement = document.querySelector(".greeting");
// greetingElement.textContent = greeting;

const fullDate = new Date();
const time = fullDate.getHours();
let greeting;

if (time < 12 && time >= 0) {
  greeting = "Good morning!";
} else if (time >= 12 && time <= 16) {
  greeting = "Good afternoon!";
} else if (time > 16 && time <= 23) {
  greeting = "Good evening!";
}

const greetingElement = document.querySelector(".greeting");
greetingElement.textContent = greeting;

const menuItems = document.querySelectorAll(".menu a");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const menu = document.querySelector(".menu");
    menu.classList.remove("show");
  });
});

/*toggling the menu open and closed TOP*/
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  console.log("show toggled");
});
// hamburger.addEventListener("click", () => {
//   menu.classList.toggle("menu--open")
//     ? hamburger.classList.add("open")
//     : hamburger.classList.remove("open");
// });
/*toggling the menu open and closed BOTTOM*/

document.addEventListener("DOMContentLoaded", () => {
  const messages = ["I'm Jonny", "A Web Developer"];
  let currentMessageIndex = 0;
  let currentMessage = messages[currentMessageIndex];

  let textElement = document.getElementById("animatedText");

  function animateText() {
    let i = 0;
    let typingInterval = setInterval(() => {
      if (i >= currentMessage.length) {
        clearInterval(typingInterval);
        setTimeout(deleteText, 1000);
      } else {
        let text = currentMessage.substring(0, i + 1);
        textElement.textContent = text;
        i++;
      }
    }, 100);
  }

  function deleteText() {
    let i = currentMessage.length;
    let deletingInterval = setInterval(() => {
      if (i === 0) {
        clearInterval(deletingInterval);
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        currentMessage = messages[currentMessageIndex];
        setTimeout(animateText, 1000);
      } else {
        let text = currentMessage.substring(0, i - 1);
        textElement.textContent = text;
        i--;
      }
    }, 50);
  }

  animateText();
});

const carousell = () => {
  const carouselSlider = document.querySelector(".carousel__slider");
  const list = document.querySelector(".carousel__list");
  const item = document.querySelector(".carousel__item");
  let list2;
  const speed = 1;

  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  const clone = () => {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;
  };
  const moveFirst = () => {
    x -= speed;
    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
  };

  const moveSecond = () => {
    x2 -= speed;

    if (list2.offsetWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  };

  const hover = () => {
    clearInterval(a);
    clearInterval(b);
  };

  const unhover = () => {
    a = setInterval(moveFirst, 10);
    b = setInterval(moveSecond, 10);
  };

  clone();

  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);

  carouselSlider.addEventListener("mouseenter", hover);
  carouselSlider.addEventListener("mouseleave", unhover);
};
carousell();

import gsap from "gsap";
import AOS from "aos";
import { Events, animateScroll as scroll, scroller } from "react-scroll";

const configureAnimationSettings = () => {
  AOS.init({
    offset: window.innerHeight * 0.3,
    duration: 1200,
  });
};

const configureScrollSettings = () => {
  Events.scrollEvent.register("begin", function () {
    console.log("begin");
  });

  Events.scrollEvent.register("end", function () {
    console.log("end");
  });

  window.addEventListener("scroll", handleMenuScrolling);
};

const removeEvents = () => {
  Events.scrollEvent.remove("begin");
  Events.scrollEvent.remove("end");
};

const handleMenuScrolling = () => {
  const fromTop = window.scrollY;
  const navbar = document.querySelector(".navigation");
  if (!navbar) return;
  if (fromTop > 20) {
    navbar.classList.add("navigation--fixed");
  } else navbar.classList.remove("navigation--fixed");
};

const loadCallbackAnimation = () => {
  setTimeout(() => {
    console.log("eee");
    if (!document.querySelector(".header__text")) return;
    const header = document.querySelector(".header__text").childNodes;
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut", opacity: 0 },
    });
    tl.from(
      header,
      1,
      {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        delay: 0.2,
      },
      "+=1"
    );
  }, 1000);
};

function scrollToTop() {
  scroll.scrollToTop();
}

function scrollTo(elmnt) {
  const offset = Math.floor(-window.innerHeight * 0.2);

  console.log("scrollTo");
  scroller.scrollTo(elmnt, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
    offset: offset,
  });
}

export {
  configureAnimationSettings,
  configureScrollSettings,
  removeEvents,
  handleMenuScrolling,
  loadCallbackAnimation,
  scrollToTop,
  scrollTo,
};

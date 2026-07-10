const menuButton = document.getElementById("menu-btn"),
  menu = document.getElementById("mobile-menu"),
  menuIcon = document.getElementById("menu-icon"),
  closeIcon = document.getElementById("close-icon"),
  links = document.querySelectorAll(".mobile-link");


  
  
menuButton.addEventListener("click", () => {
  menu.classList.toggle("translate-x-full"),
    menuIcon.classList.toggle("hidden"),
    closeIcon.classList.toggle("hidden"),
    document.body.classList.toggle("overflow-hidden");
}),
  links.forEach((t) => {
    t.addEventListener("click", () => {
      menu.classList.add("translate-x-full");

      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      document.body.classList.remove("touch-none");
    });
  });

const navbar = document.getElementById("navbar"),
  navbarContainer = document.getElementById("navbar-container"),
  logo = document.getElementById("logo"),
  navLinks = document.querySelectorAll(".nav-link"),
  quoteBtn = document.getElementById("quoteBtn"),
  mobileMenu = document.getElementById("mobile-menu"),
  mobileCtaButton = document.getElementById("mobileCtaButton"),
  serviceLink = document.getElementById("services-link");

  function updateNavbar() {
    if (!menu.classList.contains("translate-x-full")) {
      return;
    }
  
    const isScrolled = window.scrollY > 60;
  
    if (isScrolled === navbarScrolled) {
      return;
    }
  
    navbarScrolled = isScrolled;
  
    isScrolled
      ? (
        navbar.classList.remove("top-6"),
        navbar.classList.add("top-0"),
        navbarContainer.classList.remove("py-6"),
        navbar.classList.add("py-3", "bg-white", "shadow-xl"),
        logo.classList.remove("text-white"),
        logo.classList.add("text-[#0B1A2B]"),
        navLinks.forEach((t) => {
          t.classList.remove("text-white"), t.classList.add("text-[#0B1A2B]");
        }),
        serviceLink.classList.remove("text-white"),
        serviceLink.classList.add("text-[#0B1A2B]"),
        quoteBtn.classList.remove(
          "bg-transparent",
          "border-white",
          "text-white",
          "hover:bg-gray-200/20"
        ),
        quoteBtn.classList.add(
          "bg-[#0B1A2B]",
          "text-white",
          "hover:bg-[#081320]"
        ),
        mobileMenu.classList.remove("bg-black/95"),
        mobileMenu.classList.add("bg-white"),
        menuButton.classList.remove("text-white"),
        menuButton.classList.add("text-black"),
        mobileCtaButton.classList.add("bg-primary")
        )
      : (
        navbar.classList.remove("top-0"),
        navbar.classList.add("top-6"),
        navbar.classList.remove("py-3", "bg-white", "shadow-xl"),
        navbarContainer.classList.add("py-6"),
        logo.classList.remove("text-[#0B1A2B]"),
        logo.classList.add("text-white"),
        navLinks.forEach((t) => {
          t.classList.remove("text-[#0B1A2B]"), t.classList.add("text-white");
        }),
        serviceLink.classList.add("text-white"),
        serviceLink.classList.remove("text-[#0B1A2B]"),
        quoteBtn.classList.remove(
          "border-[#0B1A2B]",
          "text-[#0B1A2B]",
          "hover:bg-[#0B1A2B]",
          "hover:text-white"
        ),
        quoteBtn.classList.add(
          "bg-transparent",
          "border-white",
          "text-white",
          "hover:bg-gray-200/20"
        ),
        mobileMenu.classList.add("bg-black/95"),
        mobileMenu.classList.remove("bg-white"),
        menuButton.classList.add("text-white"),
        menuButton.classList.remove("text-black")
        );
  }


let navbarScrolled = false;
window.addEventListener("scroll", updateNavbar, { passive: true });

const service = document.getElementById("service");
const boatFields = document.getElementById("boatFields");
const boatModel = document.getElementById("boatModel");
const boatYear = document.getElementById("boatYear");


if (service && boatFields) {
  function toggleBoatFields() {
    const show =
      service.value === "boat" || service.value === "both";
  
    if (show) {
      boatFields.classList.remove("max-h-0", "opacity-0", "-translate-y-2");
      boatFields.classList.add("max-h-96", "opacity-100", "translate-y-0");
    } else {
      boatFields.classList.remove("max-h-96", "opacity-100", "translate-y-0");
      boatFields.classList.add("max-h-0", "opacity-0", "-translate-y-2");
  
      boatModel.value = "";
      boatYear.value = "";
    }
  
    boatModel.required = show;
    boatYear.required = show;
  }
  service.addEventListener("change", toggleBoatFields);
  toggleBoatFields();
}


const track = document.getElementById("gallery-track");
const slides = track.children;

let index = 0;

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById("next-slide").addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlider();
});

document.getElementById("prev-slide").addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
});





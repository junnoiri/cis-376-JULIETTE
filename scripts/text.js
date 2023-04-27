// The function is to open and close hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navList = document.querySelector("nav ul");
let menuOpen = false;

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navList.classList.toggle("active");
  menuOpen = !menuOpen;
});

window.addEventListener("scroll", () => {
  if (menuOpen) {
    window.scrollTo(0, 0);
  }
});

// The function is to reload the page
function reloadPage() {
  location.reload();
}

$(document).ready(function () {
  // The function is to show the advanced search options

  $(".advanced-search").click(function () {
    $(".optional-form-elements").toggle();
  });

  // The function is to use clock picker functions
  $(".start-clock").clockpicker({
    // Setting option
    placement: "bottom",
    autoclose: true,
  });

  $(".end-clock").clockpicker({
    // Setting option
    placement: "bottom",
    autoclose: true,
  });

  // Below this is a function for displaying multiple subjects as options.
  // List of Subjects
  let courseLists = [
    "Computer Science",
    "Psychology",
    "Economics",
    "Business Administration",
    "Medicine",
    "Biology",
    "Engineering",
    "Environmental Science",
    "International Relations",
    "English Literature",
    "Mathematics",
    "History",
    "Sociology",
    "Communication Studies",
    "Education",
    "Linguistics",
  ];

  let courseOptions = "";

  for (i = 0; i < courseLists.length; i++) {
    courseOptions += `<option value=" ${courseLists[i]} ">${courseLists[i]} </option>`;
  }
  console.log(courseOptions);

  $("#subject").append(courseOptions);
});

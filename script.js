// featured cupcake flavors array
let featuredFlavors = [
  {
    dayCode: 0,
    dayName: "sunday",
    name: "Blueberry Pie",
    img: "assets/blueberry-pie.jpg",
  },
  {
    dayCode: 1,
    dayName: "monday",
    name: "Matcha",
    img: "assets/matcha.jpg",
  },
  {
    dayCode: 2,
    dayName: "tuesday",
    name: "Reeses",
    img: "assets/reeses.jpg",
  },
  {
    dayCode: 3,
    dayName: "wednesday",
    name: "Strawberry Shortcake",
    img: "assets/strawberry.jpg",
  },
  {
    dayCode: 4,
    dayName: "thursday",
    name: "Smores",
    img: "assets/smores.jpg",
  },
  {
    dayCode: 5,
    dayName: "friday",
    name: "Banana Split",
    img: "assets/banana-split.jpg",
  },
  {
    dayCode: 6,
    dayName: "saturday",
    name: "Cannoli",
    img: "assets/cannoli.jpg",
  },
];

// country flavors mapping - each country has a signature cupcake
let countryFlavors = {
  usa: {
    name: "Banana Split",
    img: "assets/banana-split.jpg",
    color: "#B22234", // red from US flag
  },
  france: {
    name: "Cannoli",
    img: "assets/cannoli.jpg",
    color: "#0055A4", // blue from French flag
  },
  japan: {
    name: "Matcha",
    img: "assets/matcha.jpg",
    color: "#BC002D", // red from Japanese flag
  },
  italy: {
    name: "Strawberry Shortcake",
    img: "assets/strawberry.jpg",
    color: "#009246", // green from Italian flag
  },
};

// find flavor object based on weekday using a loop
function findFlavorObject() {
  let todayCode = new Date().getDay();
  console.log(`Today's day code is: ${todayCode}`);
  for (let i = 0; i < featuredFlavors.length; i++) {
    if (featuredFlavors[i].dayCode === todayCode) {
      return featuredFlavors[i];
    }
  }
}

// Dev Shop code
// 1) Get the elements we will update – the cupcake name and image elements
const nameEl = document.getElementById("featured-cupcake-name");
const imgEl = document.getElementById("featured-cupcake-img");

// find correct flavor and update the DOM elements
function revealFlavor() {
  let flavorObject = findFlavorObject();
  imgEl.src = flavorObject.img;
  nameEl.innerText = flavorObject.name;
}

//PART 2 INSTRUCTOR DEMO (Show Random Flavor)

// 2) Track which flavor is currently selected
let i = 0;

// 3) Render the current flavor to the page
function show() {
  const f = featuredFlavors[i];
  imgEl.src = f.img;
  nameEl.textContent = f.name;
}

// 4) Draw the first flavor when the script runs
show();

// 5) Wire the button to show a random flavor on each click
document
  .getElementById("random-flavor-btn")
  .addEventListener("click", function () {
    i = Math.floor(Math.random() * featuredFlavors.length);

    show();
    console.log("Random flavor:", featuredFlavors[i].name);
  });

// Wire the country selector to show country-specific flavor
document
  .getElementById("country-selector")
  .addEventListener("change", function () {
    // Get the selected country value
    let selectedCountry = this.value;

    // Check if a valid country was selected
    if (selectedCountry && countryFlavors[selectedCountry]) {
      // Get the flavor for this country
      let countryFlavor = countryFlavors[selectedCountry];

      // Update the display with country flavor
      imgEl.src = countryFlavor.img;
      nameEl.textContent = countryFlavor.name;

      // Add themed color to the name (bonus feature!)
      nameEl.style.color = countryFlavor.color;

      console.log(
        "Country selected:",
        selectedCountry,
        "-",
        countryFlavor.name
      );
    } else {
      // If "-- Choose a Country --" is selected, show the current flavor
      show();
      nameEl.style.color = ""; // reset color
    }
  });

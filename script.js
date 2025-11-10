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
// 1) Get the elements we will update
// get the cupcake name and image elements
const nameEl = document.getElementById("featured-cupcake-name");
const imgEl = document.getElementById("featured-cupcake-img");

// find correct flavor and update the DOM elements
function revealFlavor() {
  // get today's flavor object
  let flavorObject = findFlavorObject();

  // update the image source
  imgEl.src = flavorObject.img;

  // update the cupcake name text
  nameEl.innerText = flavorObject.name;
}
//PART 2 INSTRUCTOR DEMO (Show Random Flavor)

// 2) Track which flavor is currently selected
let i = 0; // index in featuredFlavors

// 3) Render the current flavor to the page
function show() {
  const f = featuredFlavors[i]; // read item at position i
  imgEl.src = f.img; // update image
  nameEl.textContent = f.name; // update caption text
}

// 4) Draw the first flavor when the script runs
show();

// 5) Wire the button to show a random flavor on each click
document
  .getElementById("random-flavor-btn")
  .addEventListener("click", function () {
    // 6) Pick a random index from 0 up to (but not including) featuredFlavors.length
    i = Math.floor(Math.random() * featuredFlavors.length);

    // Update the page and log for visibility
    show();
    console.log("Random flavor:", featuredFlavors[i].name);
  });

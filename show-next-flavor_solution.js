// 1) Get the elements we will update
const nameEl = document.getElementById("featured-cupcake-name");
const imgEl = document.getElementById("featured-cupcake-img");

// 2) Track which flavor is currently selected
let i = 0; // index in featuredFlavors

// 3) Render the current flavor to the page
function show() {
  const f = featuredFlavors[i];
  imgEl.src = f.img;
  nameEl.textContent = f.name;
}

// 4) Draw the first flavor when the script runs
show();

// 5) Wire the button to move forward through the list
document
  .getElementById("next-flavor-btn") // MAKE SURE THE ID IS CORRECT
  .addEventListener("click", function () {
    // 6a) Advance to the next index
    i = i + 1;

    // 6b) If we passed the last item, wrap back to the first
    if (i >= featuredFlavors.length) i = 0;

    // 6c) Update the page and log for visibility
    show();
    console.log("Now showing:", featuredFlavors[i].name);
  });

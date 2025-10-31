General todo list.

- we need the day of the week to determine which image we should use.
- create an onclick that calls some function
- replace the placeholder image or its source with the correct image
- update the cupcake name with the correct cupcake name for that day

Organized steps (pseudocode)

1. Clicking on the placeholder cupcake image triggers a function

- Write an onclick for the placeholder img and call the (currently non-existing) showFlavorOfDay (or whatever you call it) function
- Use today (the day of the week) to determine the flavor
- Change the img to be the correct flavor's image (provided function) and information

2. Find the day of the week and choose the correct flavor

- Use the findFlavorObject function already written to get the correct flavor object and probably store it in a variable.
- Test the existing code to see how it work s (make sure that it correctly loops over the featruedFlavors array to return the correct flavor)

3. Replace the placeholder img

- Update the src of the image element by using the .img property of the flavor object
- Write a new js function to to reveal the image of the correct flavor of the day
- update the placeholder to use the data from the correct flavor of the day

4. Update the cupcake name

- Update the text of the <strong> element to reflect the .name of our flavor object

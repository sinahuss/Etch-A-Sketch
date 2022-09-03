# Etch A Sketch

For access to the live web page, I used [GitHub Pages](https://sinahuss.github.io/Etch-A-Sketch/)  

I've created an Etch a Sketch to further practice my skills in JavaScript and the DOM. Below are my thoughts and list of points I've learned while completing this project.  

- Creating HTML elements dynamically through JavaScript was interesting to me
    - I think I could have been more efficient with the event listeners. Instead of adding an event listener to each individual gridPoint, I could have add one listener to the container and specified which gridPoint I was targeting. In the future, I will research event delegation and come back to this project
- Manipulating colors was a challenge, I could not use transparency because the background of the grid container was black, so I went with brightness instead and inverted the color to go from white to a more full color
    - This may be a point I come back to as I learn more about JavaScript.
- Resetting the grid was difficult because of the method I used to increment color. I may come back to this project and implement a new way of resetting the grid that doesn't involve deleting it and redrawing it.
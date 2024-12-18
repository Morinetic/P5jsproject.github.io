// Create an array to hold the snowflakes and a variable to control the snowfall
let snowflakes = [];
let snowing = true; // Variable to toggle snowing on/off

// Setup function: called once at the start to set up initial values
function setup() {
  createCanvas(400, 400); // Create a 400x400 pixel canvas

  // Create 100 snowflakes and push them into the snowflakes array
  for (let i = 0; i < 100; i++) {
    snowflakes.push(new Snowflake()); // Instantiate a new snowflake and add it to the array
  }
}

// Draw function: continuously called to update and render the canvas
function draw() {
  // Draw the sky (background)
  background(135, 206, 235); // Set the sky color to a light blue (sky blue)
  
  // Call the function to draw the hills
  drawHills();
  
  // If snowing is true, update and display each snowflake
  if (snowing) {
    for (let i = 0; i < snowflakes.length; i++) {
      snowflakes[i].update(); // Update each snowflake's position
      snowflakes[i].display(); // Draw the snowflake on the canvas
    }
  }
}

// Snowflake class: used to define individual snowflakes and their behaviors
class Snowflake {
  constructor() {
    // Random initial position for the snowflake
    this.x = random(width); // Random x-position
    this.y = random(-100, -10); // Random y-position (start off-screen above the canvas)
    this.size = random(2, 5); // Random size for snowflakes (between 2 and 5 pixels)
    this.speed = random(1, 3); // Random speed for snowflakes (between 1 and 3 pixels per frame)
  }

  // Method to update the snowflake's position (make it fall)
  update() {
    this.y += this.speed; // Move the snowflake down the canvas by its speed
    
    // If the snowflake reaches the bottom of the screen, reset it to the top
    if (this.y > height) {
      this.y = random(-100, -10); // Reset the y-position above the canvas
      this.x = random(width); // Randomize the x-position again
    }
  }

  // Method to display the snowflake
  display() {
    fill(255); // Set snowflake color to white
    noStroke(); // Remove the outline from the snowflake
    ellipse(this.x, this.y, this.size); // Draw the snowflake as an ellipse
  }
}

// Function to draw the hills (landscape)
function drawHills() {
  noStroke(); // No outline for the hills
  
  // Draw the first (foreground) hill with a light green color
  fill(144, 238, 144); // Light green color
  ellipse(width / 2, height - 20, 800, 200); // Big hill
  
  // Draw the second (background) hill with a dark green color
  fill(34, 139, 34); // Dark green color
  ellipse(width / 3, height - 30, 600, 200); // Left hill
}

// Function to toggle snowing on/off when the mouse is pressed
function mousePressed() {
  snowing = !snowing; // Toggle the value of snowing (if it's true, set to false, and vice versa)
}

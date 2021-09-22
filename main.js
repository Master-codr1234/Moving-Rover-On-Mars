var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var rover_width = 100;
var rover_height = 90;

var rover_image = "rover.png";

var rover_x = 10;
var rover_y = 10;

var background_images_array = ["mars.jpg", "mars2.jpeg", "mars3.jpeg", "mars4.jpeg", "mars5.jpeg"];

var random_number = Math.floor(Math.random() * 5);
var background_image = background_images_array[random_number];
console.log("background image = " + background_image);


function add() {
    background_img = new Image();
    background_img.onload = uploadbg();
    background_img.src = background_image;

    rover_img = new Image();
    rover_img.onload = uploadrover();
    rover_img.src = rover_image;
}

function uploadbg() {
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == 38) {
        up();
        console.log("Up key is pressed");
    }

    if (keyPressed == 40) {
        down();
        console.log("Down key is pressed");
    }

    if (keyPressed == 37) {
        left();
        console.log("Left key is pressed");
    }

    if (keyPressed == 39) {
        right();
        console.log("Right key is pressed");
    }

    if (keyPressed == 87) {        
        up();
        console.log("W is pressed");
    }

    if (keyPressed == 65) {        
        left();
        console.log("A is pressed");
    }

    if (keyPressed == 83) {        
        down();
        console.log("S is pressed");
    }

    if (keyPressed == 68) {        
        right();
        console.log("D is pressed");
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up key is pressed, x = " + rover_x + " y = " + rover_y);
        uploadbg();
        uploadrover();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When down key is pressed, x = " + rover_x + " y = " + rover_y);
        uploadbg();
        uploadrover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left key is pressed, x = " + rover_x + " y = " + rover_y);
        uploadbg();
        uploadrover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right key is pressed, x = " + rover_x + " y = " + rover_y);
        uploadbg();
        uploadrover();
    }
}

//Bootstrap

if(screen.width < 992) {
    document.getElementById("nan").style.display = "block";
} else {
    document.getElementById("avail").style.display = "block";
    document.body.style.backgroundImage = 'url("mars.gif")';
}
import { menuClick } from "./components/burgerbutton.js";
// import { draw } from "./components/inkdraw.js";

(() => {

    const burger = document.querySelector(".burgerButton");

    burger.addEventListener("click", menuClick);




    //Sketch is an array of shapes to make the trail.
    // Mouse tracks the x and y of the mouse position.
    var sketch = [],
    mouse = {
        x: 0,
        y: 0
    };

    var dot = function() {
        this.x = 0;
        this.y = 0;
        this.node = (function(){
            var n = document.createElement("div");
            n.className = "trail";
            document.querySelector(".inkbox").appendChild(n);
            return n;
        }());
    };

    //dot.prototype.draw() will set the position of the div
    dot.prototype.draw = function() {
        this.node.style.left = this.x + "px";
        this.node.style.top = this.y + "px";
    };

    
     //populate the sketch array with dot objects
     for (var i = 0; i < 12; i++) {
        var d = new dot();
        sketch.push(d);
    }


    function draw() {
        //make sure the mouse position is set when draw is called
        var x = mouse.x,
            y = mouse.y;

        // animation!
        sketch.forEach(function(dot, index, sketch) {
            var nextDot = sketch[index + 1] || sketch[0];

            dot.x = x;
            dot.y = y;
            dot.draw();
            x += (nextDot.x - dot.x) * .8;
            y += (nextDot.y - dot.y) * .8;
        });
    }

    addEventListener("mousemove", function(event) {
        mouse.x = event.pageX;
        mouse.y = event.pageY;
    });
    
    //animate calls draw and then itself
    function animate() {
        draw();
        requestAnimationFrame(animate);
    }
    animate();
})();
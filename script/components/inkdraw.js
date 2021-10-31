    //Sketch is an array of shapes to make the trail.
    // Mouse tracks the x and y of the mouse position.
    var sketch = [];

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
        this.node.style.left = this.y + "px";
    };

    //make sure the mouse position is set when draw is called
    var mouse = {
            x: 0,
            y: 0
        },
        x = mouse.x,
        y = mouse.y;
    
     //populate the sketch array with dot objects
     for (var i = 0; i < 5; i++) {
        var d = new dot();
        sketch.push(d);
    }


    function draw() {

        // animation!
        sketch.forEach(function(dot, index, sketch) {
            var nextDot = sketch[index + 1] || sketch[0];

            dot.x = x;
            dot.y = y;
            dot.draw();
            x += (nextDot.x - dot.x) * .6;
            y += (nextDot.y - dot.y) * .6;
        });
    }

export { draw }
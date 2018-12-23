const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');
// circle object with draw and update methods
function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = () => {
         // make a circle
         c.beginPath();
         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
         c.strokeStyle = 'blue';
         c.stroke();
         c.fill();
    }
    this.update = () => {
         // make the circle bounce between left-right 
         if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
             this.dx = -this.dx
         }
         // and top - bottom
         if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
             this.dy = -this.dy
         }
         this.x += this.dx;
         this.y += this.dy;
         // draw a circle
         this.draw();
    }
    
}
//object cirlce instance
//let circle = new Circle(200, 200, 3, 3, 30);
//store the circles into an array
let circleArray = [];
// make new instances
for (i=0; i< 100; i++){ 
    let radius = 30;
    let x = Math.random() * (innerWidth -radius *2) +radius;
    let y = Math.random() * (innerHeight -radius *2) +radius;
    //x velocity
    let dx = (Math.random() - 0.5) * 10;
    //y velocity
    let dy = (Math.random() - 0.5) * 10;
    
    // push to circle array
    circleArray.push(new Circle(x, y, dx, dy, radius));    
}

//animation function
function animate(){
    requestAnimationFrame(animate);
    // clear repeated circles
    c.clearRect(0,0, innerWidth, innerHeight);
    for (let i=0; i< circleArray.length; i++){
        circleArray[i].update();
    } 
}

animate();
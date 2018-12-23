const canvas = document.getElementById('canvas')

const c = canvas.getContext('2d');
// mouse object
let mouse = {
    x: undefined,
    y: undefined
};
const maxRadius = 40;
// const minRadius = 2;
// color array 
const colorArray = [
    '#577170',
    '#561C30',
    '#92C9ED',
    '#501D73',
    '#008744',
    '#4A6CA8'
]
// event listener
window.addEventListener('mousemove',(e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});
// resize browser handling
window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
// circle object with draw and update methods
function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = () => {
         // make a circle
         c.beginPath();
         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
         c.fillStyle = this.color;
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
         // interact with the circles
         if(mouse.x - this.x < 50 && mouse.x - this.x > -50
             && mouse.y -this.y < 50 && mouse.y - this.y > -50){
                 if(this.radius <maxRadius){
                     this.radius +=1;
                 }
         }else if (this.radius > this.minRadius){
             this.radius -=1;
         }
         // draw a circle
         this.draw();
    }    
}
//object cirlce instance
//let circle = new Circle(200, 200, 3, 3, 30);
//store the circles into an array
let circleArray = [];

function init(){
    circleArray = [];
    // make new instances
    for (i = 0; i < 800; i++) {
        let radius = Math.random() * 3 + 1;
        let x = Math.random() * (innerWidth - radius * 2) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius;
        //x velocity
        let dx = (Math.random() - 0.5) * 7;
        //y velocity
        let dy = (Math.random() - 0.5) * 7;

        // push to circle array
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
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
init();
animate();
class Paper{
    constructor(x, y, width,height){
      var options={
        isStatic: false,
        restitution:0.8,
        friction:0.5,
       'frictionStatic':1,
       'inertia': Infinity,
        density:1.2,
        
      }
            
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body)
    this.width = width;
    this.height =height;
    this.image=loadImage("sprites/paper.png")
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
      }
}
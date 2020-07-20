class Dustbin{
    constructor(x, y ,width,height){
    var options={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height)
    this.width=width
    this.height=height
    World.add(world,this.body)
    this.dustbin=loadImage("sprites/dustbin.png")           
        }

        display(){
        imageMode(CENTER)
        image(this.dustbin,655,280,105,150)
          }
      

      
     

};
class Bob{
    constructor(x,y){
    var Options={
    restitution:0.5,
    friction:0.8,
    density:0.2,
    isStatic:true    
}
    this.bob=Bodies.circle(x,y,50,Options)
    World.add(world,this.bob)
}
    
    
    display(){
    var pos=this.bob.position
    push()
    ellipse(RADIUS);
    ellipse (pos.x, pos.y,50,50)
    stroke("250")
    
    pop()
    }
}

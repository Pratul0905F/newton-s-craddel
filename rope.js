class rope{
constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    length:20,
    stiffness:0.04
}

this.body=Matter.Constraint.create(options)
this.point=pointB
World.add(world,this.body)

}
display(){
push()
var A=this.body.bodyA.position
var B = this.point   
strokeWeight(2)
stroke("black")
line(A.x,A.y,B.x,B.y)



pop()    
}
}


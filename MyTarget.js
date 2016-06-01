/**
 * MyTarget
 * @constructor
 */
 function MyTarget(scene,x,y,z) {
 	CGFobject.call(this, scene);
    this.targetX = x;
    this.targetY = y;
    this.targetZ = z;
  	this.target = new MyCircle(this.scene,30);

  	this.targetCarga=false;
 };

 MyTarget.prototype = Object.create(CGFobject.prototype);
 MyTarget.prototype.constructor = MyTarget;

 MyTarget.prototype.display = function(){
    this.scene.pushMatrix();

	this.scene.translate(this.targetX,this.targetY,this.targetZ);
	this.scene.rotate(Math.PI/2,1,0,0);
	this.target.display();
	this.scene.popMatrix();
 }

            
       

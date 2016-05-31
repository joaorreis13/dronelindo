/**
 * MyBodyDronePerna
 * @constructor
 */
function MyBodyDronePerna(scene){
	CGFobject.call(this, scene);
	
  this.paralelo = new MyUnitCubeQuad(this.scene);
  this.curva = new MyHalfCilinder(this.scene,20,20);
}

 MyBodyDronePerna.prototype = Object.create(CGFobject.prototype);
 MyBodyDronePerna.prototype.constructor = MyBodyDronePerna;

MyBodyDronePerna.prototype.display = function() {

	//Base das pernas 1
	this.scene.pushMatrix();
		this.scene.translate(0.75,-1,0);
		this.scene.scale(0.05,0.05,2);
		this.paralelo.display();
	this.scene.popMatrix();

	//Base das pernas 2
	this.scene.pushMatrix();
		this.scene.translate(-0.75,-1,0);
		this.scene.scale(0.05,0.05,2);
		this.paralelo.display();
	this.scene.popMatrix();

	//Semi-cilindro 1
	this.scene.pushMatrix();
		this.scene.translate(0,-1,-0.45);
		this.scene.scale(3/4,1,1/10);
		this.curva.display();
	this.scene.popMatrix();

//Semi-Cilindro 2
	this.scene.pushMatrix();
		this.scene.translate(0,-1,0.4);
		this.scene.scale(3/4,1,1/10);
		this.curva.display();
	this.scene.popMatrix();
}
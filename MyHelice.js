/**
 * MyHelice
 * @constructor
 */
 
 function MyHelice(scene){
	CGFobject.call(this, scene);
  this.helice = new MyCylinder(this.scene,2,20);
  this.semiesfera = new MyLamp(this.scene,20,20);
}

MyHelice.prototype = Object.create(CGFobject.prototype);
 MyHelice.prototype.constructor = MyHelice;

MyHelice.prototype.display = function() {
	//Helice 1
	this.scene.pushMatrix();
	this.scene.translate(-0.3,0.03,0);
	this.scene.rotate(-Math.PI/8,1,0,0);
	this.scene.scale(0.25,0.125,0.125);
	this.scene.rotate(this.angle,0,1,0);
	this.helice.display();
	this.scene.popMatrix();

	//Helice 2
	this.scene.pushMatrix();
	this.scene.translate(0.3,0.03,0);
	this.scene.rotate(Math.PI/8,1,0,0);
	this.scene.scale(0.25,0.125,0.125);
	this.scene.rotate(this.angle,0,1,0);
	this.helice.display();
	this.scene.popMatrix();

	//semi-esfera centrada
	this.scene.pushMatrix();
	this.scene.rotate(-Math.PI/2,1,0,0);
	this.scene.scale(0.09,0.09,0.09);
	this.scene.rotate(this.angle,0,1,0);
	this.semiesfera.display();
	this.scene.popMatrix();

}
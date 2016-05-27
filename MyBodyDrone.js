/**
 * MyBodyDrone
 * @constructor
 */

 function MyBodyDrone(scene, droneAppearance)  {
 	CGFobject.call(this,scene);
 
	this.corpo = new MyBodyDroneCorpo(this.scene,new CGFappearance(this.scene));
	this.braco = new MyBodyDroneBraco(this.scene,new CGFappearance(this.scene));
	this.perna = new MyBodyDronePerna(this.scene,new CGFappearance(this.scene));
	this.helice = new MyBodyDroneHelice(this.scene,new CGFappearance(this.scene));
	this.lamp = new MyLamp(this.scene,20,20);

 if(typeof droneAppearance !== 'undefined'){
 	this.setAppearance(droneAppearance);
 }
 this.initBuffers();
 };


 MyBodyDrone.prototype = Object.create(CGFobject.prototype);
 MyBodyDrone.prototype.constructor = MyBodyDrone;

 MyBodyDrone.prototype.display = function() {
 	//this.lamp.display();
 	
 	//Helice para Braco 1
	this.scene.pushMatrix();
		this.scene.translate(1.65,0.25,0);
		this.helice.display();
	this.scene.popMatrix();

	//Helice para Braco 2
	this.scene.pushMatrix();
		this.scene.translate(-1.65,0.25,0);
		this.helice.display();
	this.scene.popMatrix();

	//Helice para Braco 3
	this.scene.pushMatrix();
		this.scene.translate(0,0.25,1.65);
		this.helice.display();
	this.scene.popMatrix();

	// Helice para Braco 4
	this.scene.pushMatrix();
		this.scene.translate(0,0.25,-1.65);
		this.helice.display();
	this.scene.popMatrix();
	
	//Pernas do drone
	this.scene.pushMatrix();
		this.perna.display();
	this.scene.popMatrix();

 	//corpo do drone
	this.scene.pushMatrix();
	this.corpo.display();
	this.scene.popMatrix();

	//Bracos do drone
	this.scene.pushMatrix();
	this.braco.display();
	this.scene.popMatrix();

 
 };

 MyBodyDrone.prototype.setAppearance = function(droneAppearance) {

 		this.corpoAppearance = droneAppearance.corpoAppearance;
 		this.pernaAppearance = droneAppearance.pernaAppearance;
 		this.heliceAppearance = droneAppearance.heliceAppearance;
 		this.bracoAppearance = droneAppearance.bracoAppearance;

 		this.corpoAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
		this.corpoAppearance.setSpecular(0.2, 0.2, 0.2, 1);
		this.corpoAppearance.setShininess(120);
		this.corpoAppearance.setDiffuse(0.8, 0.8, 0.8, 1);
}


function MyBodyDroneCorpo(scene, corpoAppearance){
	CGFobject.call(this, scene);
	this.corpo = new MyLamp(this.scene,20,20);
	this.corpoAppearance = corpoAppearance;
}

 MyBodyDroneCorpo.prototype = Object.create(CGFobject.prototype);
 MyBodyDroneCorpo.prototype.constructor = MyBodyDroneCorpo;

MyBodyDroneCorpo.prototype.display = function() {
	this.scene.pushMatrix();
	//this.scene.translate(5,4.9,3);
	this.scene.rotate(-Math.PI/2,1,0,0);
	this.scene.scale(0.6,0.6,0.6);
	this.corpoAppearance.apply();
	this.corpo.display();
	this.scene.popMatrix();
}


function MyBodyDroneBraco(scene, bracoAppearance){
	CGFobject.call(this, scene);
   this.br = new MyCylinder(this.scene,20,20);
   this.base = new MyBodyDroneBracoBase(this.scene);
   this.bracoAppearance = bracoAppearance;

}

 MyBodyDroneBraco.prototype = Object.create(CGFobject.prototype);
 MyBodyDroneBraco.prototype.constructor = MyBodyDroneBraco;

MyBodyDroneBraco.prototype.display = function() {

this.scene.pushMatrix();
//Base 1 do braco
this.scene.pushMatrix();
this.scene.translate(0,0.1,-1.65);
this.base.display();
this.scene.popMatrix();

//Base 2 do braco
this.scene.pushMatrix();
this.scene.translate(0,0.1,1.65);
this.base.display();
this.scene.popMatrix();

//Base 3 do braco
this.scene.pushMatrix();
this.scene.translate(-1.65,0.1,0);
this.base.display();
this.scene.popMatrix();

//Base 4 do braco
this.scene.pushMatrix();
this.scene.translate(1.65,0.1,0);
this.base.display();
this.scene.popMatrix();


//Braco 1
	this.scene.pushMatrix();
		this.scene.translate(0,0.1,0);
		this.scene.scale(0.1,0.1,3);
		this.br.display();
	this.scene.popMatrix();


//Braco 2
	this.scene.pushMatrix();
		this.scene.translate(0,0.1,0);
		this.scene.rotate(Math.PI/2,0,1,0);	
		this.scene.scale(0.1,0.1,3);
		this.br.display();
	this.scene.popMatrix();
this.bracoAppearance.apply();
this.scene.popMatrix();


}

function MyBodyDroneBracoBase(scene){
	CGFobject.call(this, scene);
   this.br = new MyCylinder(this.scene,20,20);
   this.base = new MyCircle(this.scene,20);

}

 MyBodyDroneBracoBase.prototype = Object.create(CGFobject.prototype);
 MyBodyDroneBracoBase.prototype.constructor = MyBodyDroneBracoBase;

MyBodyDroneBracoBase.prototype.display = function() {

	//Cilindro da base do braco
this.scene.pushMatrix();
this.scene.rotate(Math.PI/2,1,0,0);
this.scene.scale(0.2,0.2,0.3);
this.scene.pushMatrix();
this.br.display();

//Base 1 da base do braco
this.scene.pushMatrix();
this.scene.scale()
this.scene.translate(0,0,0.5);
this.scene.rotate(Math.PI,1,0,0);
this.base.display();
this.scene.popMatrix();


//Base 2 da base do braco
this.scene.pushMatrix();
this.scene.translate(0,0,-0.5);
this.base.display();
this.scene.popMatrix();
this.scene.popMatrix();
this.scene.popMatrix();
}


function MyBodyDronePerna(scene, pernaAppearance){
	CGFobject.call(this, scene);
  this.paralelo = new MyUnitCubeQuad(this.scene);
  this.curva = new MyHalfCilinder(this.scene,20,20);
	this.pernaAppearance = pernaAppearance;
}

 MyBodyDronePerna.prototype = Object.create(CGFobject.prototype);
 MyBodyDronePerna.prototype.constructor = MyBodyDronePerna;

MyBodyDronePerna.prototype.display = function() {
	this.scene.pushMatrix();
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
	this.pernaAppearance.apply();
	this.scene.popMatrix();
}
function MyBodyDroneHelice(scene, heliceAppearance){
	CGFobject.call(this, scene);
  this.helice = new MyCylinder(this.scene,2,20);
  this.semiesfera = new MyLamp(this.scene,20,20);
	this.heliceAppearance = heliceAppearance;
}

 MyBodyDroneHelice.prototype = Object.create(CGFobject.prototype);
 MyBodyDroneHelice.prototype.constructor = MyBodyDroneHelice;

MyBodyDroneHelice.prototype.display = function() {
	this.scene.pushMatrix();
	//Helice 1
	this.scene.pushMatrix();
	this.scene.translate(-0.3,0.03,0);
	this.scene.rotate(-Math.PI/8,1,0,0);
	this.scene.scale(0.25,0.125,0.125);
	this.helice.display();
	this.scene.popMatrix();

	//Helice 2
	this.scene.pushMatrix();
	this.scene.translate(0.3,0.03,0);
	this.scene.rotate(Math.PI/8,1,0,0);
	this.scene.scale(0.25,0.125,0.125);
	this.helice.display();
	this.scene.popMatrix();

	//semi-esfera centrada
	this.scene.pushMatrix();
	this.scene.rotate(-Math.PI/2,1,0,0);
	this.scene.scale(0.09,0.09,0.09);
	this.semiesfera.display();
	this.scene.popMatrix();
	this.heliceAppearance.apply();
	this.scene.popMatrix();
}

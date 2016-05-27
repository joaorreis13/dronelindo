/**
 * MyBodyDrone
 * @constructor
 */
/*
 function MyBodyDrone(scene)  {
 	CGFobject.call(this,scene);

	this.corpo = new MyBodyDroneCorpo(this.scene,20,20);
	this.braco = new MyBodyDroneBraco(this.scene);


 };

 MyBodyDrone.prototype = Object.create(CGFobject.prototype);
 MyBodyDrone.prototype.constructor = MyBodyDrone;

 MyBodyDrone.prototype.display = function() {
 //	this.corpo.display();
 	this.scene.pushMatrix();
 	this.braco.display();
 	this.scene.popMatrix();
 }



function MyBodyDroneCorpo(scene){
	CGFobject.call(this, scene);
	this.corpo = new MyLamp(this.scene,20,20);
}

 MyBodyDroneCorpo.prototype = Object.create(CGFobject.prototype);
 MyBodyDroneCorpo.prototype.constructor = MyBodyDroneCorpo;

MyBodyDroneCorpo.prototype.display = function() {
	this.scene.pushMatrix();
//	this.scene.translate(5,4.9,3);
	this.scene.rotate(-Math.PI/2,1,0,0);
	this.scene.scale(0.6,0.6,0.6);
	this.corpo.display();
	this.scene.popMatrix();

}


function MyBodyDroneBraco(scene, bracoAppearance){
	CGFobject.call(this, scene);
   this.br = new MyCylinder(this.scene,20,20);
   this.base = new MyBodyDroneBases(this.scene);
  // this.bracoAppearance = bracoAppearance;

}

 MyBodyDroneBraco.prototype = Object.create(CGFobject.prototype);
 MyBodyDroneBraco.prototype.constructor = MyBodyDroneBraco;

MyBodyDroneBraco.prototype.display = function() {

this.scene.pushMatrix();
this.base.display();
this.scene.popMatrix();
/*
//Base 2 do braco
this.scene.pushMatrix();
//this.scene.translate(-1.65,0.1,0);
this.base.display();
this.scene.popMatrix();
/*
//Base 3 do braco
this.scene.pushMatrix();
//this.scene.translate(3.5,5,3);
this.base3.display();
this.scene.popMatrix();

//Base 4 do braco
this.scene.pushMatrix();
//this.scene.translate(6.5,5,3);
this.base4.display();
this.scene.popMatrix();

/*
//Braco 1
	this.scene.pushMatrix();
		this.scene.translate(5,5,3);
		this.scene.scale(0.1,0.1,3);
		this.br.display();
	this.scene.popMatrix();


//Braco 2
	this.scene.pushMatrix();
		this.scene.translate(5,5,3);
		this.scene.rotate(Math.PI/2,0,1,0);	
		this.scene.scale(0.1,0.1,3);
		this.br.display();
	this.scene.popMatrix();
//this.bracoAppearance.apply();
//this.scene.popMatrix();


}
function MyBodyDroneBases(scene)  {
 	CGFobject.call(this,scene);

	this.obj = new MyBodyDroneCilindro(this.scene);

 this.obj.initBuffers();
 };

 MyBodyDroneBases.prototype = Object.create(CGFobject.prototype);
 MyBodyDroneBases.prototype.constructor = MyBodyDroneBases;

 MyBodyDroneBases.prototype.display = function() {
 this.scene.pushMatrix();
 this.scene.translate(1.65,0.1,0);
 this.obj.display();
 this.scene.popMatrix();

 this.scene.pushMatrix();
 this.scene.translate(-1.65,0.1,0);
 this.obj.display();
 this.scene.popMatrix();
  this.scene.pushMatrix();
 this.scene.translate(0,0.1,0);
 this.obj.display();
 this.scene.popMatrix();
  this.scene.pushMatrix();
 this.scene.translate(0,0.1,1.65);
 this.obj.display();
 this.scene.popMatrix();

 }*/
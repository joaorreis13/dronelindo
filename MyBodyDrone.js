/**
 * MyBodyDrone
 * @constructor
 */
   var degToRad = Math.PI /180;
 function MyBodyDrone(scene, bodyMat, armMat, heliceMat, legMat)  {
  CGFobject.call(this,scene);


this.bodyMat = bodyMat;
this.armMat = armMat;
this.heliceMat = heliceMat;
this.legMat = legMat;
 
	this.corpo = new MyLamp(this.scene,20,20);
	this.braco = new MyBodyDroneBraco(this.scene,this.armMat);
	this.perna = new MyBodyDronePerna(this.scene,this.legMat);
	this.helice_frente = new MyHelice(this.scene,this.velocidade_helice_frente);
	this.helice_tras = new MyHelice(this.scene,this.velocidade_helice_tras);
	this.helice_lado1 = new MyHelice(this.scene,this.velocidade_helice_lados);
	this.helice_lado2 = new MyHelice(this.scene,this.velocidade_helice_lados);
	
 this.initBuffers();
 };


 MyBodyDrone.prototype = Object.create(CGFobject.prototype);
 MyBodyDrone.prototype.constructor = MyBodyDrone;

 MyBodyDrone.prototype.display = function() {
 	
	

 	//Helice para Braco 1
	this.scene.pushMatrix();
		this.scene.translate(1.65,0.25,0);
		//this.heliceMat[this.droneAppearance].apply();
		this.helice_lado1.display();
	this.scene.popMatrix();

//this.scene.materialDefault.apply();
	//Helice para Braco 2
	this.scene.pushMatrix();
		this.scene.translate(-1.65,0.25,0);
		//this.heliceMat[this.droneAppearance].apply();
		this.helice_lado2.display();
	this.scene.popMatrix();

//this.scene.materialDefault.apply();
	//Helice para Braco 3
	this.scene.pushMatrix();
		this.scene.translate(0,0.25,1.65);
		//this.heliceMat[this.droneAppearance].apply();
		this.helice_frente.display();
	this.scene.popMatrix();

//this.scene.materialDefault.apply();
	// Helice para Braco 4
	this.scene.pushMatrix();
		this.scene.translate(0,0.25,-1.65);
		//this.heliceMat[this.droneAppearance].apply();
		this.helice_tras.display();
	this.scene.popMatrix();
this.scene.popMatrix();

//this.scene.materialDefault.apply();
	//Pernas do drone
	this.scene.pushMatrix();
		this.perna.display();
	this.scene.popMatrix();

 	//corpo do drone
	this.scene.pushMatrix();
	this.scene.rotate(-Math.PI/2,1,0,0);
	this.scene.scale(0.6,0.6,0.6);
	this.corpo.display();
	this.scene.popMatrix();

	//Bracos do drone
	this.scene.pushMatrix();
	this.braco.display();
	this.scene.popMatrix();

 };

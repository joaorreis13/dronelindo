/**
 * MyBodyDrone
 * @constructor
 */

 function MyBodyDrone(scene, droneAppearance,v_frente,v_tras,v_lados)  {
  CGFobject.call(this,scene);
 
	this.velocidade_helice_frente = v_frente;
	this.velocidade_helice_tras = v_tras;
	this.velocidade_helice_lados = v_lados;
 
	this.corpo = new MyLamp(this.scene,20,20);
	this.braco = new MyBodyDroneBraco(this.scene,new CGFappearance(this.scene));
	this.perna = new MyBodyDronePerna(this.scene,new CGFappearance(this.scene));
	this.helice_frente = new MyBodyDroneHelice(this.scene,this.velocidade_helice_frente);
	this.helice_tras = new MyBodyDroneHelice(this.scene,this.velocidade_helice_tras);
	this.helice_lado1 = new MyBodyDroneHelice(this.scene,this.velocidade_helice_lados);
	this.helice_lado2 = new MyBodyDroneHelice(this.scene,this.velocidade_helice_lados);
	
	
 this.initBuffers();
 };


 MyBodyDrone.prototype = Object.create(CGFobject.prototype);
 MyBodyDrone.prototype.constructor = MyBodyDrone;

 MyBodyDrone.prototype.display = function() {
 	//this.lamp.display();
 	
 	//Helice para Braco 1
	this.scene.pushMatrix();
		this.scene.translate(1.65,0.25,0);
		this.helice_lado1.display();
	this.scene.popMatrix();

	//Helice para Braco 2
	this.scene.pushMatrix();
		this.scene.translate(-1.65,0.25,0);
		this.helice_lado2.display();
	this.scene.popMatrix();

	//Helice para Braco 3
	this.scene.pushMatrix();
		this.scene.translate(0,0.25,1.65);
		this.helice_frente.display();
	this.scene.popMatrix();

	// Helice para Braco 4
	this.scene.pushMatrix();
		this.scene.translate(0,0.25,-1.65);
		this.helice_tras.display();
	this.scene.popMatrix();

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


MyBodyDrone.prototype.updateMoveHelice = function(time,velocidade_frente,velocidade_tras, velocidade_lados){
this.helice_tras.updateMove(velocidade_tras,time);
this.helice_lado1.updateMove(velocidade_lados,time);
this.helice_lado2.updateMove(velocidade_lados,time);
this.helice_frente.updateMove(velocidade_frente,time);
}









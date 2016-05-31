/**
 * MyBodyDrone
 * @constructor
 */
   var degToRad = Math.PI /180;
   
 function MyBodyDrone(scene)  {
  CGFobject.call(this,scene);



/*	this.body = {};
	this.amrsLegs = {};
	
	this.tropa = new CGFappearance(this);
	this.tropa.loadTexture("tropa.png");

	this.amarelo = new CGFappearance(this);
	this.amarelo.loadTexture("amarelo.png");

	this.azul = new CGFappearance(this);
	this.azul.loadTexture("azul.png");


	this.metalico = new CGFappearance(this);
	this.metalico.loadTexture("metalico.png");

	this.castanho = new CGFappearance(this);
	this.castanho.loadTexture("castanho.png");

	this.vermelho = new CGFappearance(this);
	this.vermelho.loadTexture("vermelho.png");

	this.body[0] = this.tropa;
	this.body[1] = this.amarelo;
	this.body[2] = this.azul;

	this.armsLegs[0] = this.metalico;
	this.armsLegs[1] = this.castanho;
	this.armsLegs[2] = this.vermelho;

*/

	 
	this.corpo = new MyLamp(this.scene,20,20);
	this.braco = new MyBodyDroneBraco(this.scene);
	this.perna = new MyBodyDronePerna(this.scene);
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

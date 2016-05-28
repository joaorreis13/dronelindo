/**
 * MyDrone
 * @constructor
 */
function MyDrone(scene, appearence) {
    CGFobject.call(this, scene);
        this.velocidade_helice_tras = 1;
	this.velocidade_helice_lados = -1;
	this.velocidade_helice_frente = 1;

    this.appearence = appearence;
    this.helice_frente = new MyHelice(this.scene,this.velocidade_helice_frente);
	this.helice_tras = new MyHelice(this.scene,this.velocidade_helice_tras);
	this.helice_lado1 = new MyHelice(this.scene,this.velocidade_helice_lados);
	this.helice_lado2 = new MyHelice(this.scene,this.velocidade_helice_lados);
     

    this.drone = new MyBodyDrone(this.scene,this.appearence);
    
    this.x = 7.5;
    this.y = 5;
    this.z = 7.5;
    this.ang_x = 0;
    this.ang_y = 1;
    this.ang_z = 0;
    this.ang = 0;

  
    
    this.drone.initBuffers();
}
;

//(0.5, 0.3, 0), (-0.5, 0.3, 0), (0, 0.3, 2), ou seja, um
//triângulo a apontar para +ZZ.

MyDrone.prototype = Object.create(CGFobject.prototype);
MyDrone.prototype.constructor = MyDrone;

MyDrone.prototype.display = function() {
    this.scene.pushMatrix();
    this.scene.translate(this.x, this.y, this.z);
    this.scene.rotate(this.ang, this.ang_x, this.ang_y, this.ang_z);
    this.drone.display();
    this.scene.popMatrix();

};

MyDrone.prototype.updateVelocidadaHelice = function(velocidade_frente, velocidade_tras, velocidade_lados){
	this.velocidade_helice_tras = velocidade_tras;
	this.velocidade_helice_lados = velocidade_lados;
	this.velocidade_helice_frente = velocidade_frente;
}

MyDrone.prototype.move = function(direction) {
    
	if (direction == 'Esquerda')
        if (this.rotLeft != true) {
            this.rotLeft = true;
        }
   if (direction == 'Direita')
        if (this.rotRight != true) {
            this.rotRight = true;  
        }
    if (direction == 'Frente')
        if (this.moveFrente != true) {
            this.moveFrente = true;
            }
    if (direction == 'Tras')
         if (this.moveTras != true){
             this.moveTras = true;
             }
    if (direction == 'Cima')
         if (this.moveCima != true){
             this.moveCima = true;
             }
    if (direction == 'Baixo')
             if (this.moveBaixo != true){
             this.moveBaixo = true;
             };
};

MyDrone.prototype.para = function(direction){
        
	if (direction == 'Esquerda')
        if (this.rotLeft == true) {
            this.rotLeft = false;
			
        };
    if (direction == 'Direita')
        if (this.rotRight == true) {
            this.rotRight = false;  
		
        };
    if (direction == 'Frente')
        if (this.moveFrente == true) {
            this.moveFrente = false;
			
            };
    if (direction == 'Tras')
         if (this.moveTras == true){
             this.moveTras = false;
			
             };
    if (direction == 'Cima')
         if (this.moveCima == true){
             this.moveCima = false
             };
    if (direction == 'Baixo')
         if (this.moveBaixo == true){
             this.moveBaixo = false;
             };
};
MyDrone.prototype.updateVelocidadeHelice = function(v_frente, v_tras,v_lados){
	this.velocidade_helice_frente = v_frente;
	this.velocidade_helice_tras = v_tras;
	this.velocidade_helice_lados = v_lados;
}


MyDrone.prototype.update = function(currTime) {
    
    if (this.moveFrente) {
        this.x += (Math.sin(this.ang)) *this.scene.speed*0.03;
        this.z += (Math.cos(this.ang)) * this.scene.speed*0.03;
        this.drone.helice_frente.updateMove(this.velocidade_helice_frente,currTime);
    this.drone.helice_tras.updateMove(this.velocidade_helice_tras,currTime);
    this.drone.helice_lado1.updateMove(this.velocidade_helice_lados,currTime);
    this.drone.helice_lado2.updateMove(this.velocidade_helice_lados,currTime);
        
    }
	if(this.moveTras){
		this.x -= (Math.sin(this.ang)) *this.scene.speed*0.03;
        this.z -= (Math.cos(this.ang)) * this.scene.speed*0.03;	
        this.drone.helice_frente.updateMove(this.velocidade_helice_frente,currTime);
    this.drone.helice_tras.updateMove(this.velocidade_helice_tras,currTime);
    this.drone.helice_lado1.updateMove(this.velocidade_helice_lados,currTime);
    this.drone.helice_lado2.updateMove(this.velocidade_helice_lados,currTime);
	}

	if(this.moveCima){
		this.y += this.scene.speed*0.03;
		this.drone.helice_frente.updateMove(this.velocidade_helice_frente,currTime);
    this.drone.helice_tras.updateMove(this.velocidade_helice_tras,currTime);
    this.drone.helice_lado1.updateMove(this.velocidade_helice_lados,currTime);
    this.drone.helice_lado2.updateMove(this.velocidade_helice_lados,currTime);
	}
	if(this.moveBaixo){
		this.y -= this.scene.speed*0.03;
	this.drone.helice_frente.updateMove(this.velocidade_helice_frente,currTime);
    this.drone.helice_tras.updateMove(this.velocidade_helice_tras,currTime);
    this.drone.helice_lado1.updateMove(this.velocidade_helice_lados,currTime);
    this.drone.helice_lado2.updateMove(this.velocidade_helice_lados,currTime);
	}
	if(this.rotLeft){
	this.ang +=this.scene.speed * Math.PI / 75;	
	this.drone.helice_frente.updateMove(this.velocidade_helice_frente,currTime);
    this.drone.helice_tras.updateMove(this.velocidade_helice_tras,currTime);
    this.drone.helice_lado1.updateMove(this.velocidade_helice_lados,currTime);
    this.drone.helice_lado2.updateMove(this.velocidade_helice_lados,currTime);
	}
	if(this.rotRight){
	this.ang -= this.scene.speed * Math.PI / 75;
	this.drone.helice_frente.updateMove(this.velocidade_helice_frente,currTime);
    this.drone.helice_tras.updateMove(this.velocidade_helice_tras,currTime);
    this.drone.helice_lado1.updateMove(this.velocidade_helice_lados,currTime);
    this.drone.helice_lado2.updateMove(this.velocidade_helice_lados,currTime);
	};
	this.drone.helice_frente.updateMove(this.velocidade_helice_frente,currTime);
    this.drone.helice_tras.updateMove(this.velocidade_helice_tras,currTime);
    this.drone.helice_lado1.updateMove(this.velocidade_helice_lados,currTime);
    this.drone.helice_lado2.updateMove(this.velocidade_helice_lados,currTime);
};


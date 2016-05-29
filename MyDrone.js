/**
 * MyDrone
 * @constructor
 */
   var degToRad = Math.PI /180;
function MyDrone(scene, appearence) {
    CGFobject.call(this, scene);
        this.velocidade_helice_tras = 1;
	this.velocidade_helice_lados = -1;
	this.velocidade_helice_frente = 1;

    this.appearence = appearence;
     	this.pitch = 0;

    this.drone = new MyBodyDrone(this.scene,this.appearence,this.pitch);
    
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

    this.scene.translate(this.x, this.y, this.z);
    this.scene.rotate(this.ang, this.ang_x, this.ang_y, this.ang_z);
    this.scene.pushMatrix();
    this.scene.rotate(this.pitch*degToRad,1,0,0);
    this.drone.display();
    this.scene.popMatrix();
};



MyDrone.prototype.updatePitch = function(angulo){
	if(this.pitch == 0)
	this.pitch = angulo;
	if(this.pitch > -20 && this.pitch < 20)
		this.pitch +=angulo;
	if(angulo == 0)
		this.pitch = 0;
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
	this.velocidade_helice_frente = v_frente;// *(1/this.scene.helice_speed);
	this.velocidade_helice_tras = v_tras;//*(1/this.scene.helice_speed);
	this.velocidade_helice_lados = v_lados;//*(1/this.scene.helice_speed);
}



MyDrone.prototype.update = function(currTime) {
    
    if (this.moveFrente) {
        this.x += (Math.sin(this.ang)) *this.scene.speed*0.03;
        this.z += (Math.cos(this.ang)) * this.scene.speed*0.03;
    }
	if(this.moveTras){
		this.x -= (Math.sin(this.ang)) *this.scene.speed*0.03;
        this.z -= (Math.cos(this.ang)) * this.scene.speed*0.03;	
	}

	if(this.moveCima){
		this.y += this.scene.speed*0.03;
	}
	if(this.moveBaixo){
		this.y -= this.scene.speed*0.03;
	}
	if(this.rotLeft){
	this.ang +=this.scene.speed * Math.PI / 75;	
	}
	if(this.rotRight){
	this.ang -= this.scene.speed * Math.PI / 75;
	};
	this.drone.helice_frente.updateMove(this.velocidade_helice_frente,currTime);
    this.drone.helice_tras.updateMove(this.velocidade_helice_tras,currTime);
    this.drone.helice_lado1.updateMove(this.velocidade_helice_lados,currTime);
    this.drone.helice_lado2.updateMove(this.velocidade_helice_lados,currTime);

};


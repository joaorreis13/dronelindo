/**
 * MyDrone
 * @constructor
 */
function MyDrone(scene, appearence) {
    CGFobject.call(this, scene);
    this.appearence = appearence;
     
    this.velocidade_helice_tras = 1;
	this.velocidade_helice_lados = -1;
	this.velocidade_helice_frente = 1;

    this.drone = new MyBodyDrone(this.scene,this.appearence,this.velocidade_helice_frente,this.velocidade_helice_tras,this.velocidade_helice_lados);
    
    
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
            this.drone.updateMoveHelice(0.2,0.2,-10);
        }
   if (direction == 'Direita')
        if (this.rotRight != true) {
            this.rotRight = true;  
            this.drone.updateMoveHelice(0.2,0.2,-10);		
        }
    if (direction == 'Frente')
        if (this.moveFrente != true) {
            this.moveFrente = true;
            this.drone.updateMoveHelice(0.2,10,-1);
            }
    if (direction == 'Tras')
         if (this.moveTras != true){
             this.moveTras = true;
             this.drone.updateMoveHelice(10,0.2,-1);
             }
    if (direction == 'Cima')
         if (this.moveCima != true){
             this.moveCima = true;
		this.drone.updateMoveHelice(1,1,-1);
             }
    if (direction == 'Baixo')
             if (this.moveBaixo != true){
             this.moveBaixo = true;
			this.drone.updateMoveHelice(1,1,-1);
             };
};

MyDrone.prototype.para = function(direction){
        
	if (direction == 'Esquerda')
        if (this.rotLeft == true) {
            this.rotLeft = false;
			this.drone.updateMoveHelice(1,1,-1);
        };
    if (direction == 'Direita')
        if (this.rotRight == true) {
            this.rotRight = false;  
		this.drone.updateMoveHelice(1,1,-1);
        };
    if (direction == 'Frente')
        if (this.moveFrente == true) {
            this.moveFrente = false;
			this.drone.updateMoveHelice(1,1,-1);
            };
    if (direction == 'Tras')
         if (this.moveTras == true){
             this.moveTras = false;
			this.drone.updateMoveHelice(1,1,-1);
             };
    if (direction == 'Cima')
         if (this.moveCima == true){
             this.moveCima = false;
			this.drone.updateMoveHelice(1,1,-1);
             };
    if (direction == 'Baixo')
         if (this.moveBaixo == true){
             this.moveBaixo = false;
			this.drone.updateMoveHelice(1,1,-1);
             };
};

MyDrone.prototype.update = function(t) {
    
    if (this.moveFrente) {
        this.x += (Math.sin(this.ang)) *this.scene.speed * (0.1 / 3);
        this.z += (Math.cos(this.ang)) * this.scene.speed * (0.1 / 3);
		}
	if(this.moveTras){
		this.x -= (Math.sin(this.ang)) *this.scene.speed * (0.1 / 3);
        this.z -= (Math.cos(this.ang)) * this.scene.speed *(0.1 / 3);	
	}

	if(this.moveCima){
		this.y += this.scene.speed *(0.1/3);
	}
	if(this.moveBaixo){
		this.y -= this.scene.speed *(0.1/3);
	}
	if(this.rotLeft){
	this.ang +=this.scene.speed * Math.PI / 75;	
	}
	if(this.rotRight){
	this.ang -= this.scene.speed * Math.PI / 75;
	};

};


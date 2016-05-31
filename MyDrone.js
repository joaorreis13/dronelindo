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
     	this.inclinacao = 0;

    this.drone = new MyBodyDrone(this.scene,this.appearence);
    
	//Adicionar hook

	this.hook = new MyHook(this.scene);

    this.x = 7.5;
    this.y = 5;
    this.z = 7.5;
    this.ang = 0;
    this.last_time = 0;
	this.delta = 0;
	this.first =0;

  
    
    this.drone.initBuffers();
}
;

//(0.5, 0.3, 0), (-0.5, 0.3, 0), (0, 0.3, 2), ou seja, um
//triângulo a apontar para +ZZ.

MyDrone.prototype = Object.create(CGFobject.prototype);
MyDrone.prototype.constructor = MyDrone;

MyDrone.prototype.display = function() {
	
    this.scene.translate(this.x, this.y, this.z);
    this.scene.rotate(this.ang, 0, 1, 0);
    this.scene.pushMatrix();
    this.scene.rotate(this.inclinacao*degToRad,1,0,0);
    this.drone.display();
    this.scene.popMatrix();

    this.hook.display();
};



MyDrone.prototype.updateInclinacao = function(angulo){
	if(this.inclinacao == 0)
	this.inclinacao = angulo;
	if(this.inclinacao > -25 && this.inclinacao < 25)
		this.inclinacao +=angulo;
	if(angulo == 0)
		this.inclinacao = 0;
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
    if (direction == 'Estica')
           	 if (this.estica != true){
             this.estica = true;
             };        
    if (direction == 'Encolhe')
           	 if (this.encolhe != true){
             this.encolhe = true;
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
    if (direction == 'Estica')
           	 if (this.estica == true){
             this.estica = false;
             };        
    if (direction == 'Encolhe')
           	 if (this.encolhe == true){
             this.encolhe = false;
             };              
};
MyDrone.prototype.updateVelocidadeHelice = function(v_frente, v_tras,v_lados){
	this.velocidade_helice_frente = v_frente;
	this.velocidade_helice_tras = v_tras;
	this.velocidade_helice_lados = v_lados;

}


MyDrone.prototype.update = function(currTime) {
    this.delta = currTime - this.lastCurrTime;
    this.lastCurrTime = currTime;

	if (this.first == 0)
	{
		this.delta = 0;
		this.first = 1;
	}
	if(this.estica){
		this.hook.esticaHook(1);
	};
	if(this.encolhe){
		this.hook.esticaHook(-1);
	};
    if (this.moveFrente) {
        this.x += (Math.sin(this.ang)) * this.scene.speed*(this.delta/1000);
        this.z += (Math.cos(this.ang)) * this.scene.speed*(this.delta/1000);
    }
	if(this.moveTras){
		this.x -= (Math.sin(this.ang)) *this.scene.speed*(this.delta/1000);
        this.z -= (Math.cos(this.ang)) * this.scene.speed*(this.delta/1000);	
	}

	if(this.moveCima){
		this.y += this.scene.speed*(this.delta/1000);
	}
	if(this.moveBaixo){
		this.y -= this.scene.speed*(this.delta/1000);
	}
	if(this.rotLeft){
	this.ang += (this.scene.speed/60)*this.delta * Math.PI / 75;	
	}
	if(this.rotRight){
	this.ang -= (this.scene.speed/60)*this.delta * Math.PI / 75;
	};
	this.drone.helice_frente.updateMove(this.velocidade_helice_frente,currTime);
    this.drone.helice_tras.updateMove(this.velocidade_helice_tras,currTime);
    this.drone.helice_lado1.updateMove(this.velocidade_helice_lados,currTime);
    this.drone.helice_lado2.updateMove(this.velocidade_helice_lados,currTime);

};


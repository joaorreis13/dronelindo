/**
 * MyDrone
 * @constructor
 */
 
   var degToRad = Math.PI /180;
function MyDrone(scene, droneAppearance) {
    CGFobject.call(this, scene);
        this.velocidade_helice_tras = 1;
	this.velocidade_helice_lados = -1;
	this.velocidade_helice_frente = 1;
    
     	this.inclinacao = 0;
	
 
   
    
	//Adicionar hook

	
	this.aux;
    this.x = 7.5;
    this.y = 5;
    this.z = 7.5;
    this.ang = 0;
    this.last_time = 0;
	this.delta = 0;
	this.first =0;
	this.boxX = 3;
	this.boxY=0.5;
	this.boxZ = 3;
  	this.targetX=10;
  	this.targetY=0.1;
  	this.targetZ=3;
	this.droneAppearance = droneAppearance;
  
	

	//Texturas
	this.bodyMat=[new CGFappearance(this.scene), new CGFappearance(this.scene), new CGFappearance(this.scene)];
 	this.armMat=[new CGFappearance(this.scene), new CGFappearance(this.scene), new CGFappearance(this.scene)];
 	this.heliceMat=[new CGFappearance(this.scene), new CGFappearance(this.scene), new CGFappearance(this.scene)];
 	this.legMat=[new CGFappearance(this.scene), new CGFappearance(this.scene), new CGFappearance(this.scene)];

 	this.bodyMat[0].setDiffuse(1,1,1,1);
	this.bodyMat[0].setSpecular(0.5,0.5,0.5,1);
	this.bodyMat[0].setShininess(1);
	this.bodyMat[0].loadTexture("../resources/images/verde_corpo.jpg");
	
	this.legMat[0].setDiffuse(1,1,1,1);
	this.legMat[0].setSpecular(0.5,0.5,0.5,1);
	this.legMat[0].setShininess(1);
	this.legMat[0].loadTexture("../resources/images/verde_perna.jpg");

	this.heliceMat[0].setDiffuse(1,1,1,1);
	this.heliceMat[0].setSpecular(0.5,0.5,0.5,1);
	this.heliceMat[0].setShininess(1);
	this.heliceMat[0].loadTexture("../resources/images/verde_helice.jpg");

	this.armMat[0].setDiffuse(1,1,1,1);
	this.armMat[0].setSpecular(0.5,0.5,0.5,1);
	this.armMat[0].setShininess(1);
	this.armMat[0].loadTexture("../resources/images/verde_braco.png");   
    
 	this.bodyMat[1].setDiffuse(1,1,1,1);
	this.bodyMat[1].setSpecular(0.5,0.5,0.5,1);
	this.bodyMat[1].setShininess(1);
	this.bodyMat[1].loadTexture("../resources/images/amarelo.png");

	this.legMat[1].setDiffuse(1,1,1,1);
	this.legMat[1].setSpecular(0.5,0.5,0.5,1);
	this.legMat[1].setShininess(1);
	this.legMat[1].loadTexture("../resources/images/amarelo.png");

	this.heliceMat[1].setDiffuse(1,1,1,1);
	this.heliceMat[1].setSpecular(0.5,0.5,0.5,1);
	this.heliceMat[1].setShininess(1);
	this.heliceMat[1].loadTexture("../resources/images/amarelo.png");

	this.armMat[1].setDiffuse(1,1,1,1);
	this.armMat[1].setSpecular(0.5,0.5,0.5,1);
	this.armMat[1].setShininess(1);
	this.armMat[1].loadTexture("../resources/images/amarelo.png");

 	this.bodyMat[2].setDiffuse(1,1,1,1);
	this.bodyMat[2].setSpecular(0.5,0.5,0.5,1);
	this.bodyMat[2].setShininess(1);
	this.bodyMat[2].loadTexture("../resources/images/azul_corpo.png");

	this.legMat[2].setDiffuse(1,1,1,1);
	this.legMat[2].setSpecular(0.5,0.5,0.5,1);
	this.legMat[2].setShininess(1);
	this.legMat[2].loadTexture("../resources/images/azul_perna.png");

	this.heliceMat[2].setDiffuse(1,1,1,1);
	this.heliceMat[2].setSpecular(0.5,0.5,0.5,1);
	this.heliceMat[2].setShininess(1);
	this.heliceMat[2].loadTexture("../resources/images/azul_helice.jpg");

	this.armMat[2].setDiffuse(1,1,1,1);
	this.armMat[2].setSpecular(0.5,0.5,0.5,1);
	this.armMat[2].setShininess(1);
	this.armMat[2].loadTexture("../resources/images/azul.png");
	
 	 this.drone = new MyBodyDrone(this.scene,this.bodyMat, this.armMat, this.heliceMat, this.legMat, this.droneAppearance);
 	 this.caixa = new MyBox(this.scene,this.boxX,this.boxY,this.boxZ, this.droneAppearance);
    this.target = new MyTarget(this.scene,this.targetX,this.targetY,this.targetZ,this.droneAppearance);
    this.hook = new MyHook(this.scene);

  this.drone.initBuffers();
};

//(0.5, 0.3, 0), (-0.5, 0.3, 0), (0, 0.3, 2), ou seja, um
//triângulo a apontar para +ZZ.

MyDrone.prototype = Object.create(CGFobject.prototype);
MyDrone.prototype.constructor = MyDrone;

MyDrone.prototype.display = function() {
	
	this.scene.materialDefault.apply();
	this.scene.pushMatrix();
    this.scene.translate(this.x, this.y, this.z);
    this.scene.rotate(this.ang, 0, 1, 0);
    this.scene.materialDefault.apply();
    this.scene.pushMatrix();
    this.scene.rotate(this.inclinacao*degToRad,1,0,0);
    this.bodyMat[this.scene.currDroneAppearance].apply();
    this.drone.display();
    this.scene.popMatrix();
    this.scene.popMatrix();


	this.scene.materialDefault.apply();
    this.scene.pushMatrix();
    //this.armMat[this.scene.droneAppearance].apply();
    //this.heliceMat[this.scene.droneAppearance].apply();
    this.hook.display();
    this.scene.popMatrix();
   

    this.scene.materialDefault.apply();
	this.scene.pushMatrix();
	this.target.display();
	this.scene.popMatrix();

	this.scene.materialDefault.apply();
    this.scene.pushMatrix();
	this.caixa.display();
	this.scene.popMatrix();


	
};



MyDrone.prototype.updateInclinacao = function(angulo){
	if(this.inclinacao == 0)
	this.inclinacao = angulo;
	if(this.inclinacao > -30 && this.inclinacao < 30)
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

MyDrone.prototype.verificaColisao = function(){
		
	if(this.boxY-0.5 < this.aux && this.boxY+0.5 > this.aux)
	if((this.boxX-0.5 < this.x) && (this.boxX+0.5 > this.x))
	if(this.boxZ-0.5 < this.z && (this.boxZ+0.5 > this.z)){
	this.caixa.boxConnected=true;
	}
}

MyDrone.prototype.verificaTarget = function(){

	this.distX = this.targetX-this.boxX;
	this.distX *= this.distX;

	this.distY = this.targetY - this.boxY;
	this.distY *= this.distY;

	this.distZ = this.targetZ - this.boxZ;
	this.distZ *= this.distZ;

	this.dist = Math.sqrt(this.distX + this.distY + this.distZ);

	if(this.dist<0.4){
	this.target.targetCarga=true;
}
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
   	this.aux=this.y - this.hook.estica -0,5;
   	
   	if(this.caixa.boxConnected){
   		console.log("Conectou");
   		this.caixa.updateCaixa(this.x,this.y-0.67-this.hook.estica,this.z);
   		this.boxX=this.x;
   		this.boxY=this.y-0.67-this.hook.estica;
   		this.boxZ=this.z;
   };
   
   if(this.target.targetCarga){
	this.caixa.boxConnected=false;
	console.log("caiu");
	this.caixa.updateCaixa(this.targetX,this.targetY+0.6,this.targetZ);
	}
	this.verificaColisao();
   	this.verificaTarget();

}



/*MyDrone.prototype.arrivingDest = function(){


}*/

MyDrone.prototype.moveBox = function(){
	//move para as coordenadas this.x y e z
	this.box.updatePosition();
	//ou seja vamos ter que criar uma classe a parte para a bomba
};
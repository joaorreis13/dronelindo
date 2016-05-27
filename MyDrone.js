/**
 * MyDrone
 * @constructor
 */
function MyDrone(scene, appearence) {
    CGFobject.call(this, scene);
    this.appearence = appearence;
    this.drone = new MyBodyDrone(this.scene,this.appearence);
    
    
    this.x = 7.5;
    this.y = 5;
    this.z = 7.5;
    this.ang_x = 0;
    this.ang_y = 1;
    this.ang_z = 0;
    this.ang = 0;
    //false
    this.boolroda = 1;
    this.time = Date.now();
    this.moveFrente = false;
    
    this.drone.initBuffers();
}
;

//(0.5, 0.3, 0), (-0.5, 0.3, 0), (0, 0.3, 2), ou seja, um
//triângulo a apontar para +ZZ.

MyDrone.prototype = Object.create(CGFobject.prototype);
MyDrone.prototype.constructor = MyDrone;

MyDrone.prototype.display = function() {
    /*	if(this.boolroda == 0){
		this.scene.pushMatrix();
	this.scene.translate(this.x,this.y,this.z);
	this.scene.rotate(this.ang,this.ang_x,this.ang_y,this.ang_z);
	this.scene.translate(-this.x,-this.y,-this.z);
	this.drone.display();
		this.scene.popMatrix();
	}
	else{*/
    this.scene.pushMatrix();
    this.scene.translate(this.x, this.y, this.z);
    this.scene.rotate(this.ang, this.ang_x, this.ang_y, this.ang_z);
    this.drone.display();
    this.scene.popMatrix();

}
;

/*MyDrone.prototype.roda = function(alfa){
	//verdadeiro
	this.boolroda = 0;
	this.ang = this.ang + (alfa/90);
};*/

/*
MyDrone.prototype.moveTras = function(){
	this.x -= (Math.sin(this.ang))* (0.1/3);
	this.z -= (Math.cos(this.ang))* (0.1/3);
};


MyDrone.prototype.moveCima = function(){
	this.y += (0.1/3);
};

MyDrone.prototype.moveBaixo = function(){
	this.y -= (0.1/3);
};
*/
MyDrone.prototype.move = function(direction) {
    
	if (direction == 'Esquerda')
        if (this.rotLeft != true) {
            this.rotLeft = true;
        };
    if (direction == 'Direita')
        if (this.rotRight != true) {
            this.rotRight = true;        
        };
    if (direction == 'Frente')
        if (this.moveFrente != true) {
            this.moveFrente = true;
			//Inserir aqui as cenas das helices
            }
    if (direction == 'Tras')
         if (this.moveTras != true){
             this.moveTras = true;
			//Inserir aqui as cenas das helices
             }
    if (direction == 'Cima')
         if (this.moveCima != true){
             this.moveCima = true;
			//Inserir aqui as cenas das helices
             }
    if (direction == 'Baixo')
             if (this.moveBaixo != true){
             this.moveBaixo = true;
			//Inserir aqui as cenas das helices
             }
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
			//Inserir aqui as cenas das helices
            };
    if (direction == 'Tras')
         if (this.moveTras == true){
             this.moveTras = false;
			//Inserir aqui as cenas das helices
             };
    if (direction == 'Cima')
         if (this.moveCima == true){
             this.moveCima = false;
			//Inserir aqui as cenas das helices
             };
    if (direction == 'Baixo')
         if (this.moveBaixo == true){
             this.moveBaixo = false;
			//Inserir aqui as cenas das helices
             };
};

MyDrone.prototype.update = function(t) {
    
    if (this.moveFrente) {
        this.x += (Math.sin(this.ang)) * (0.1 / 3);
        this.z += (Math.cos(this.ang)) * (0.1 / 3);
		};
	
	if(this.moveTras){
		this.x -= (Math.sin(this.ang)) * (0.1 / 3);
        this.z -= (Math.cos(this.ang)) * (0.1 / 3);	
	};	

	if(this.moveCima){
		this.y += (0.1/3);
	};
	if(this.moveBaixo){
		this.y -= (0.1/3);
	};
	if(this.rotLeft){
	this.ang += Math.PI / 75;	
	};
	if(this.rotRight){
	this.ang -= Math.PI / 75;	
	};
};

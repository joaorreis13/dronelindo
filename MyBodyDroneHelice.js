/**
 * MyBodyDroneHelice
 * @constructor
 */
 var degToRad = Math.PI /180;
function MyBodyDroneHelice(scene,vel){
	CGFobject.call(this, scene);
	this.helice = new MyHelice(this.scene);
	this.last_time = 0;
	this.intervalo = 0;
	this.angle = 0;
	this.velocidade = vel;
}
MyBodyDroneHelice.prototype.display = function(){
	this.scene.pushMatrix();
//	this.scene.rotate(this.angle * degToRad,0,1,0);
	this.helice.display();
	this.scene.popMatrix();
}

 

MyBodyDroneHelice.prototype.updateMove = function(velocidade,currTime)
{	
this.velocidade = velocidade;
if(this.last_time == 0){
	this.intervalo = 0;
}
else {
	this.intervalo = currTime - this.last_time;
}
	this.last_time = currTime;
	this.angle = this.angle + (Math.PI/180)*(360 / ((this.velocidade/60) * (this.intervalo / 100)));
}

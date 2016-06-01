/**
 * MyBodyDroneHelice
 * @constructor
 */
 var degToRad = Math.PI /180;
function MyBodyDroneHelice(scene,vel){
	CGFobject.call(this, scene);
	this.helice = new MyHelice(this.scene);
	this.last_time = 0;
	this.delta = 0;
	this.first =0;
	this.angle = 0;
	this.velocidade = vel;
}
MyBodyDroneHelice.prototype.display = function(){
	this.scene.pushMatrix();
	this.helice.display();
	this.scene.popMatrix();
}

 

MyBodyDroneHelice.prototype.updateMove = function(velocidade,currTime)
{	
this.delta = currTime - this.lastCurrTime;
    this.lastCurrTime = currTime;

	if (this.first == 0)
	{
		this.delta = 0;
		this.first = 1;
	}
 	this.angle += (this.velocidade) * (this.delta / 1000);

}

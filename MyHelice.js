/**
 * MyHelice
 * @constructor
 */
  var degToRad = Math.PI /180;
 function MyHelice(scene,vel){
	CGFobject.call(this, scene);
  this.helice = new MyCylinder(this.scene,2,20);
    this.semiesfera = new MyLamp(this.scene,20,20);

  this.last_time = 0;
	this.delta = 0;
	this.first =0;
	this.angle = 0;
	this.velocidade = vel;
}

MyHelice.prototype = Object.create(CGFobject.prototype);
 MyHelice.prototype.constructor = MyHelice;

MyHelice.prototype.display = function() {
	this.scene.pushMatrix();
	this.scene.rotate(this.angle*degToRad,0,1,0);
	//Helice 1
	this.scene.pushMatrix();
	this.scene.translate(-0.3,0.03,0);
	this.scene.rotate(-Math.PI/8,1,0,0);
	this.scene.scale(0.25,0.125,0.125);
	this.helice.display();
	this.scene.popMatrix();

	//Helice 2
	this.scene.pushMatrix();
	this.scene.translate(0.3,0.03,0);
	this.scene.rotate(Math.PI/8,1,0,0);
	this.scene.scale(0.25,0.125,0.125);
	this.helice.display();
	this.scene.popMatrix();

//semi-esfera centrada
	this.scene.pushMatrix();
	this.scene.rotate(-Math.PI/2,1,0,0);
	this.scene.scale(0.09,0.09,0.09);
	this.semiesfera.display();
	this.scene.popMatrix();
	
	this.scene.popMatrix();

}

MyHelice.prototype.updateMove = function(velocidade, currTime)
{
this.delta = currTime - this.lastCurrTime;
    this.lastCurrTime = currTime;

	if (this.first == 0)
	{
		this.delta = 0;
		this.first = 1;
	}
 	this.angle = this.angle + (360/(velocidade/60)*degToRad * (this.delta / 1000));

}

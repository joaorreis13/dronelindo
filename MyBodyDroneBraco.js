/**
 * MyBodyDronebraco
 * @constructor
 */
function MyBodyDroneBraco(scene, bracoAppearance){
	CGFobject.call(this, scene);
   this.br = new MyCylinder(this.scene,20,20);
   this.base = new MyBodyDroneBracoBase(this.scene);
   this.bracoAppearance = bracoAppearance;

}

 MyBodyDroneBraco.prototype = Object.create(CGFobject.prototype);
 MyBodyDroneBraco.prototype.constructor = MyBodyDroneBraco;

MyBodyDroneBraco.prototype.display = function() {

this.scene.pushMatrix();
//Base 1 do braco
this.scene.pushMatrix();
this.scene.translate(0,0.1,-1.65);
this.base.display();
this.scene.popMatrix();

//Base 2 do braco
this.scene.pushMatrix();
this.scene.translate(0,0.1,1.65);
this.base.display();
this.scene.popMatrix();

//Base 3 do braco
this.scene.pushMatrix();
this.scene.translate(-1.65,0.1,0);
this.base.display();
this.scene.popMatrix();

//Base 4 do braco
this.scene.pushMatrix();
this.scene.translate(1.65,0.1,0);
this.base.display();
this.scene.popMatrix();


//Braco 1
	this.scene.pushMatrix();
		this.scene.translate(0,0.1,0);
		this.scene.scale(0.1,0.1,3);
		this.br.display();
	this.scene.popMatrix();


//Braco 2
	this.scene.pushMatrix();
		this.scene.translate(0,0.1,0);
		this.scene.rotate(Math.PI/2,0,1,0);	
		this.scene.scale(0.1,0.1,3);
		this.br.display();
	this.scene.popMatrix();
this.bracoAppearance.apply();
this.scene.popMatrix();


}

function MyBodyDroneBracoBase(scene){
	CGFobject.call(this, scene);
   this.br = new MyCylinder(this.scene,20,20);
   this.base = new MyCircle(this.scene,20);

}

 MyBodyDroneBracoBase.prototype = Object.create(CGFobject.prototype);
 MyBodyDroneBracoBase.prototype.constructor = MyBodyDroneBracoBase;

MyBodyDroneBracoBase.prototype.display = function() {

	//Cilindro da base do braco
this.scene.pushMatrix();
this.scene.rotate(Math.PI/2,1,0,0);
this.scene.scale(0.2,0.2,0.3);
this.scene.pushMatrix();
this.br.display();

//Base 1 da base do braco
this.scene.pushMatrix();
this.scene.scale()
this.scene.translate(0,0,0.5);
this.scene.rotate(Math.PI,1,0,0);
this.base.display();
this.scene.popMatrix();


//Base 2 da base do braco
this.scene.pushMatrix();
this.scene.translate(0,0,-0.5);
this.base.display();
this.scene.popMatrix();
this.scene.popMatrix();
this.scene.popMatrix();
}

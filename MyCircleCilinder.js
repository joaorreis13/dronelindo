/**
 * MyCircleCylinder
 * @constructor
 */
 function MyCircleCilinder(scene, slices, minS, maxS, minT, maxT)  {
 	CGFobject.call(this,scene);
  
	
	this.slices=slices;
	this.minS = typeof minS !== 'undefined' ? minS : 0;
	this.maxS = typeof maxS !== 'undefined' ? maxS : 1;
	this.minT = typeof minT !== 'undefined' ? minT : 0;
	this.maxT = typeof maxT !== 'undefined' ? maxT : 1;


	this.cil = new MyCylinder(scene,this.slices,1,this.minS, this.maxS,this.minT, this.masT);
	this.circle = new MyCircle(scene,this.slices);
 	this.cil.initBuffers();
 };


 MyCircleCilinder.prototype = Object.create(CGFobject.prototype);
 MyCircleCilinder.prototype.constructor = MyCircleCilinder;

 MyCircleCilinder.prototype.initBuffers = function() {
	this.scene.pushMatrix();
		this.scene.rotate(30,0,0,1);
		this.circle.display();
	this.scene.popMatrix();

	
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };



/**
 * MyTriangulo
 * @constructor
 */
 function MyTriangulo(scene) {
 	CGFobject.call(this,scene);


 	this.initBuffers();
 };

 //(0.5, 0.3, 0), (-0.5, 0.3, 0), (0, 0.3, 2), ou seja, um
//triângulo a apontar para +ZZ.
 
 MyTriangulo.prototype = Object.create(CGFobject.prototype);
 MyTriangulo.prototype.constructor = MyTriangulo;

 MyTriangulo.prototype.initBuffers = function() {

	this.indices = [
	1,2,0,
	0,2,1
 	];
 	this.vertices = [
	0.5, 0.3,0,
	-0.5,0.3,0,
	0,0.3,2
 	];
	this.normais = [
	0,0,1,
	0,0,1,
	0,0,1
	];
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
 
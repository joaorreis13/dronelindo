/**
 * MyLamp
 * @constructor
 */
 function MyLamp(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices=slices;
	this.stacks=stacks;

 	this.initBuffers();
 };

 MyLamp.prototype = Object.create(CGFobject.prototype);
 MyLamp.prototype.constructor = MyLamp;

 MyLamp.prototype.initBuffers = function() {

	this.indices = [];
 	this.vertices = [];
 	this.normals = [];

	var angle_height = Math.PI/2/this.stacks;
	var angle = 2*Math.PI/this.slices;
	
	var ang_pi = Math.PI/2;
	
	for (var stack=0; stack <= this.stacks;stack++)
	{
		var angulo = ang_pi-stack*angle_height;
		for ( var slice=0; slice < this.slices;slice++)
		{
			this.vertices.push(Math.sin(angulo)*Math.cos(slice*angle), Math.sin(angulo)*Math.sin(slice*angle), Math.cos(angulo));
			this.normals.push(Math.sin(angulo)*Math.cos(slice*angle), Math.sin(angulo)*Math.sin(slice*angle), Math.cos(angulo));
		}
	}
	

	for (var stack=0; stack < this.stacks;stack++)
	{
		
		
		for ( var slice=0; slice < this.slices;slice++)
		{ 
		var slicestack = this.slices*stack;
			if(slice +1 == this.slices)
			{
				this.indices.push(slicestack+slice, slicestack+this.slices+slice+1-this.slices,slicestack+this.slices+slice);
				this.indices.push(slicestack+slice,slicestack+slice+1-this.slices, slicestack+this.slices+slice+1-this.slices);
			}
			else
			{
				this.indices.push(slicestack+slice, slicestack+this.slices+slice+1,slicestack+this.slices+slice);
				this.indices.push(slicestack+slice,slicestack+slice+1, slicestack+this.slices+slice+1);
			}
		}
		
	}
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };

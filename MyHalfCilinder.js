/**
 * MyHalfCilinder
 * @constructor
 */

function MyHalfCilinder(scene, slices, stacks) 
 {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyHalfCilinder.prototype = Object.create(CGFobject.prototype);
 MyHalfCilinder.prototype.constructor = MyHalfCilinder;

 MyHalfCilinder.prototype.initBuffers = function() 
 {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/

 	this.vertices =[];

 	this.indices =[];

 	this.normals =[];
 	this.texCoords = [];

	var angle = 2*Math.PI/this.slices;
	
	for (var i=0; i <= this.stacks;i++)
	{
		for ( var j=0; j < this.slices;j++)
		{
			//vertices e normais
			this.vertices.push(Math.cos(angle*j),Math.sin(angle*j),i/this.stacks);
			this.normals.push(Math.cos(angle*j),Math.sin(angle*j),0);
			this.texCoords.push(i/this.slices, j/this.stacks);
		}
	}
	

	for (var i=0; i < this.stacks;i++)
	{
		var n = this.slices*i;
		
		for ( var j=0; j < this.slices/2;j++)
		{
				this.indices.push(n+j, n+this.slices+j+1,n+this.slices+j);
				this.indices.push(n+j,n+j+1, n+this.slices+j+1);
				this.indices.push(n+this.slices+j, n+this.slices+j+1,n+j);
				this.indices.push(n+this.slices+j+1,n+j+1, n+j);
				
			}
		}
			
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
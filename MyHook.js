/**
 * MyHook
 * @constructor
 */
 function MyHook(scene) {
 	CGFobject.call(this, scene);

  this.gancho = new MyUnitCubeQuad(this.scene);
  this.hook = new MyCylinder(this.scene, 3, 1);

  this.estica=1;
 };

 MyHook.prototype = Object.create(CGFobject.prototype);
 MyHook.prototype.constructor = MyHook;


MyHook.prototype.esticaHook = function(direction){
    if(direction == -1) //encolhe
    {
      if(this.estica > 0.3)//distancia minima 
        this.estica -= 0.1;
    }
    if(direction == 1) //estica se possivel ver a altura do drone e limitar distancia solo
    this.estica += 0.1;
  }


 MyHook.prototype.display = function() {


   this.scene.pushMatrix();
   this.scene.rotate(Math.PI,0,0,1); 
   this.scene.translate(0,this.estica/2,0);
   this.scene.rotate(Math.PI/2,1,0,0);
   this.scene.scale(0.1,0.1,this.estica); // ultimo 1 por estica 
   this.hook.display();
   this.scene.popMatrix();

   this.scene.pushMatrix();
   this.scene.rotate(Math.PI/2,1,0,0);
   this.scene.translate(0,0,this.estica); // ultimo 1 por estica
   this.scene.scale(0.25,0.25,0.25);
   this.gancho.display();
   this.scene.popMatrix();
 }
 
MyHook.prototype.getHookPos = function(){
	this.position = {};

	this.position[0] = this.x;
	this.position[1] = this.y - this.hook.estica -0,5;
	this.position[2] = this.z;
	return this.position;
}
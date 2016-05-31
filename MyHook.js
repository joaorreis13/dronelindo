/**
 * MyHook
 * @constructor
 */
 function MyHook(scene,x,y,z) {
 	CGFobject.call(this, scene);

  this.gancho = new MyUnitCubeQuad(this.scene);
  this.hook = new MyCylinder(this.scene, 3, 1);

  this.estica=1;
  this.x = x;
  this.y = y-0.5 - this.estica;
  this.z = z;
 };

 MyHook.prototype = Object.create(CGFobject.prototype);
 MyHook.prototype.constructor = MyHook;


MyHook.prototype.esticaHook = function(direction){
    if(direction == -1) //encolhe
    {
      if(this.estica > 0.3)//distancia minima 
        this.estica -= 0.1;
    }
    if(direction == 1) //estica
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


MyHook.prototype.getPosition = function(){
  this.position = {};
  
    position[0] = this.x;
    position[1] = this.y;;
    position[2] = this.z;
  return this.position;

}
/**
 * MyBox
 * @constructor
 */
 function MyBox(scene,x,y,z) {
 	CGFobject.call(this, scene);
    this.boxX = x;
    this.boxY = y;
    this.boxZ = z;
  this.caixa = new MyUnitCubeQuad(this.scene);

  this.boxConnected=false;
 };

 MyBox.prototype = Object.create(CGFobject.prototype);
 MyBox.prototype.constructor = MyBox;

 MyBox.prototype.display = function(){
     this.scene.pushMatrix();
	this.scene.translate(this.boxX,this.boxY,this.boxZ);
	this.caixa.display();
	this.scene.popMatrix();
 }



MyBox.prototype.updateCaixa = function(x,y,z){
            this.boxX = x;
            this.boxY = y;
            this.boxZ = z;
}
            
       

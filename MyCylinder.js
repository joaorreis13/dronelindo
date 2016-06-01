/**
 * MyPrism
 * @constructor
 */
function MyCylinder(scene, slices, stacks) {
    CGFobject.call(this, scene);
    
    this.slices = slices;
    this.stacks = stacks;
    
    this.initBuffers();
}
;

MyCylinder.prototype = Object.create(CGFobject.prototype);
MyCylinder.prototype.constructor = MyCylinder;

MyCylinder.prototype.initBuffers = function() {
    
    
    this.vertices = [];
    this.normals = [];
    this.indices = [];
    this.texCoords = [];
    
    

    var ang = 360 / this.slices;
    var incstack = 1 / this.stacks;    
    var incslice = 1 / this.slices;
    var degtorad = Math.PI / 180.0;
    var radt = ang * degtorad;
    var x =0;
    var y=0;
    
    // Cálculo vértices e normais
    for (var j = 0; j < this.stacks + 1; j++) {
        for (var i = 0; i < this.slices; i++) {
            this.vertices.push(Math.cos(radt * i), Math.sin(radt * i), 0.5 - (incstack * j));
            this.normals.push(Math.cos(radt * i), Math.sin(radt * i), 0);
            this.texCoords.push(x,y);
            x += incslice;
        }
        x = 0;
        y += incstack;
    }
    
    // Cálculo Indices
    for (var j = 0; j < this.stacks; j++) {
        for (var i = 0; i < this.slices; i++) {
            this.indices.push(i + j * this.slices, i + (j + 1) * this.slices, (i + 1) % (this.slices) + (j + 1) * this.slices);
            this.indices.push(i + j * this.slices, (i + 1) % (this.slices) + (j + 1) * this.slices, (i + 1) % (this.slices) + j * this.slices);
        }
    }
    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
}
;

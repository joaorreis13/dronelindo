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
    
    

    var ang = 360 / this.slices;
    var inc = 1 / this.stacks;    
    var degtorad = Math.PI / 180.0;
    var radt = ang * degtorad;
    
    // Cálculo vértices e normais
    for (var j = 0; j < this.stacks + 1; j++) {
        for (var i = 0; i < this.slices; i++) {
            this.vertices.push(Math.cos(radt * i), Math.sin(radt * i), 0.5 - (inc * j));
            this.normals.push(Math.cos(radt * i), Math.sin(radt * i), 0);
        }
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

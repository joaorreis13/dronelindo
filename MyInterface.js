/**
 * MyInterface
 * @constructor
 */
 
 
function MyInterface() {
	//call CGFinterface constructor 
	CGFinterface.call(this);
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) {
CGFinterface.prototype.init.call(this, application);
	
	// init GUI. For more information on the methods, check:
	//  http://workshop.chromeexperiments.com/examples/gui
	
	this.gui = new dat.GUI();

	// add a button:
	// the first parameter is the object that is being controlled (in this case the scene)
	// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
	// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); }; 

	this.gui.add(this.scene, 'Relogio');	
	
	//Grupo da texturas
	var textureGroup = this.gui.addFolder("Texturas");
	textureGroup.add(this.scene, 'droneAppearanceList', this.scene.droneAppearanceList);
	textureGroup.open();
	// add a group of controls (and open/expand by defult)
	
	var group=this.gui.addFolder("Luzes");
	group.open();

	// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
	// e.g. this.option1=true; this.option2=false;
	
	group.add(this.scene, 'light0');
	group.add(this.scene, 'light1');
	group.add(this.scene, 'light2');
	group.add(this.scene, 'light3');
	// add a slider
	// must be a numeric variable of the scene, initialized in scene.init e.g.
	// this.speed=3;
	// min and max values can be specified as parameters
	
	this.gui.add(this.scene, 'speed', 0.1, 5);
	this.gui.add(this.scene, 'helice_speed', 0.1, 2);



	return true;
};

/**
 * processKeyboard
 * @param event {Event}
 */
MyInterface.prototype.processKeyDown = function(event) {
	

	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyDown.call(this, event);
	
	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars
	
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
	switch (event.keyCode)
	{
		//A & a
		case (65):
		case(97):
			this.scene.drone.move('Esquerda');
			this.scene.drone.updateVelocidadeHelice(0.2,0.2,-10);
			break;

			//D & d
		case(68):
		case(100):
			this.scene.drone.move('Direita');
			this.scene.drone.updateVelocidadeHelice(0.2,0.2,-10);
			break;
		
		//S & d
		case(83):
		case(115):
			//anda para tras
			this.scene.drone.move('Tras');
			this.scene.drone.updateVelocidadeHelice(0.2,10,-1);
			this.scene.drone.updateInclinacao(-2);
			break;
		//W & w
		case(87):
		case(119):
			//anda para a frente
			this.scene.drone.move('Frente');
			this.scene.drone.updateVelocidadeHelice(10,0.2,-1);
			this.scene.drone.updateInclinacao(2);
			break;
		//I & i
		case(73):
		case(105):
		//subir
		this.scene.drone.move('Cima');
		this.scene.drone.updateVelocidadeHelice(1,1,-1);
		break;
		case(74):
		case(106):
		//descer
		this.scene.drone.move('Baixo');
		this.scene.drone.updateVelocidadeHelice(1,1,-1);
		break;
		
		//Sobe Gancho		
		case(76):
		case(108):
		this.scene.drone.move('Estica');
		break;
		//Desce Gancho
		case(112):
		case(80):		
		this.scene.drone.move('Encolhe');
		break;	
		default:
		this.scene.drone.updateVelocidadeHelice(1,1,-1);
	};

};
MyInterface.prototype.processKeyUp = function(event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyUp.call(this, event);
	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
	switch (event.keyCode)
	{
		//A & a
		case (65):
		case(97):
		this.scene.drone.para('Esquerda');
		this.scene.drone.updateVelocidadeHelice(1,1,-1);
			break;
		

			//D & d
		case(68):
		case(100):
		this.scene.drone.para('Direita');
		this.scene.drone.updateVelocidadeHelice(1,1,-1);
			break;
			
		//S & d
		case(83):
		case(115):
			//anda para tras
			this.scene.drone.para('Tras');
			this.scene.drone.updateVelocidadeHelice(1,1,-1);
			this.scene.drone.updateInclinacao(0);
			break;
		//W & w
		case(87):
		case(119):
			//anda para a frente
			this.scene.drone.para('Frente');
			this.scene.drone.updateVelocidadeHelice(1,1,-1);
			this.scene.drone.updateInclinacao(0);
			break;
		//I & i
		case(73):
		case(105):
		//subir
			this.scene.drone.para('Cima');
			this.scene.drone.updateVelocidadeHelice(1,1,-1);
		break;
		case(74):
		case(106):
		//descer
			this.scene.drone.para('Baixo');
			this.scene.drone.updateVelocidadeHelice(1,1,-1);
		break;
		
		//Sobe Gancho		
		case(76):
		case(108):
		this.scene.drone.para('Estica');
		break;
		//Desce Gancho
		case(112):
		case(80):
		this.scene.drone.para('Encolhe');
		break;	
			default:
			this.scene.drone.updateVelocidadeHelice(1,1,-1);
			
	};

};
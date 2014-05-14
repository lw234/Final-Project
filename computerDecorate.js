//what going to be decorate 
function Laptop() {
	this.cost = function() { return 1000;};
	this.screenSize = function() {return 11;};
}

/*Decorator 1*/
function screenSize(laptop){
	var v = laptop.cost();
	laptop.cost = function() {
		return v + 200;
	
	}
}
/*Decorator 1*/
function Memory(laptop){
	var v = laptop.cost();
	laptop.cost = function() {
		return v + 200;
	
	};
}
/*Decorator 1*/
function HardDrive(laptop){
	var v = laptop.cost();
	laptop.cost = function() {
		return v + 200;
	
	};
}
var LT = new Laptop();
screenSize(LT);
Memory(LT);
HardDrive(LT);
console.log(LT.cost());
console.log(LT.screenSize());

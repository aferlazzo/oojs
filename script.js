(function(){
	"use strict";
	var kName;
	var kColor;
	var kGender;
	var kSpeak;
	var myCat;
	var yourCat;

	/* the Kitten Constructor function */
	var Kitten = function Kitten() {
		/* the constructor properties */
		this.name = '';
		this.color = '';
		this.gender = '';
	};

	/*
	 	the Kitten Object Constructor methods are its 'special powers':
	 	setName, setColor, setGender, getName, getColor, getGender, and speak.
	 	Each instance of the Kitten object will inherit the special powers.
	*/
	Kitten.prototype.setName = function(name) {
		this.name = name;
	};

	Kitten.prototype.setColor = function(color) {
		this.color = color;
	};

	Kitten.prototype.setGender = function(gender) {
		this.gender = gender;
	};

	Kitten.prototype.getName = function() {
		return this.name;
	};

	Kitten.prototype.getColor = function() {
		return this.color;
	};

	Kitten.prototype.getGender = function() {
		return this.gender;
	};

	Kitten.prototype.speak = function() {
		var str;
		str = 'I am ' + this.name + ', a ' + this.color + ' ' +
			this.gender + ' kitten who can also talk.';
		return str;
	};

	/*
		"getElementById" returns references to DOM elements by their IDs (the
		locations on the page) that we want to display the results
	*/
	kName   = document.getElementById('myCatsName');
	kColor  = document.getElementById('myCatsColor');
	kGender = document.getElementById('myCatsGender');
	kSpeak   = document.getElementById('myCatsSuperPower');

	// and instance of the Kitten function
	myCat = new Kitten();

	// setters set values for an object's properties
	myCat.setName('Garfield');
	myCat.setColor('gray');
	myCat.setGender('male');


	// getters return property values
	kName.textContent   = myCat.getName();
	kColor.textContent  = myCat.getColor();
	kGender.textContent = myCat.getGender();
	kSpeak.textContent   = myCat.speak();

	/*
		"getElementById" returns references to DOM elements by their IDs (the
		locations on the page) that we want to display the results
	*/
	kName   = document.getElementById('yourCatsName');
	kColor  = document.getElementById('yourCatsColor');
	kGender = document.getElementById('yourCatsGender');
	kSpeak   = document.getElementById('yourCatsSuperPower');
	yourCat = new Kitten();

	// setters
	yourCat.setName('Sylvester');
	yourCat.setColor('orange');
	yourCat.setGender('female');

	// getters
	kName.textContent   = yourCat.getName();
	kColor.textContent  = yourCat.getColor();
	kGender.textContent = yourCat.getGender();
	kSpeak.textContent   = yourCat.speak();
})();
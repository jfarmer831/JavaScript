
function getTotal() {
	var text1 = "";
	var text2 = "";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByName('pizzasize');
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	
	runningTotal = sizeTotal;
	text2 = text2+"$"+sizeTotal+"<br>";
	getMeat(runningTotal,text1,text2); 
};

function getMeat(runningTotal,text1,text2) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByName("meatchoice");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
		
	}
	runningTotal = (runningTotal + meatTotal);
	for (var j = 0; j < selectedMeat.length; j++) {
			text1 = text1+selectedMeat[j]+"<br>";
			if (meatCount <= 1) {
				text2 = text2 +"$"+ 0 + "<br>";
				meatCount = meatCount - 1;
			} else if (meatCount == 2) {
				text2 = text2 +"$"+1 + "<br>";
				meatCount = meatCount - 1;
			} else {
				text2 = text2 +"$"+1 + "<br>";
				meatCount = meatCount - 1;
			}
	}
	getVeggie(runningTotal,text1,text2);
};		

function getVeggie(runningTotal,text1,text2) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByName("veggiechoice");
	for (var k = 0; k < veggieArray.length; k++) {
		if (veggieArray[k].checked) {
			selectedVeggie.push(veggieArray[k].value);
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	for (var j = 0; j < selectedVeggie.length; j++) {
			text1 = text1+selectedVeggie[j]+"<br>";
			if (veggieCount <= 1) {
				text2 = text2 +"$"+0 + "<br>";
				veggieCount = veggieCount - 1;
			} else if (veggieCount == 2) {
				text2 = text2 +"$"+1 + "<br>";
				veggieCount = veggieCount - 1;
			} else {
				text2 = text2 +"$"+1 + "<br>";
				veggieCount = veggieCount - 1;
			}
	}
	
	getCheese(runningTotal,text1,text2);

};		

function getCheese(runningTotal,text1,text2) {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByName('cheesechoice');
		for (var i = 0; i < cheeseArray.length; i++) {
			if (cheeseArray[i].checked) {
				selectedCheese = cheeseArray[i].value;
			}
		}
	if (cheeseArray[2].checked) {
		cheeseTotal = 3;
	} 
	text2 = text2+"$"+cheeseTotal+"<br>";
	text1 = text1+selectedCheese+"<br>";
	runningTotal = runningTotal +cheeseTotal;
	getSauce(runningTotal,text1,text2);
};

function getSauce(runningTotal,text1,text2) {
	var sauceArray = document.getElementsByName('saucechoice');
	for (var i = 0; i < sauceArray.length; i++) {
		if (sauceArray[i].checked) {
			var selectedSize = sauceArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
		text2 = text2 + "$" + 0 + "<br>";
		getCrust(runningTotal,text1,text2);
};

function getCrust(runningTotal,text1,text2) {
	var crustTotal = 0;
	var crustArray = document.getElementsByName('crustchoice');
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			var selectedCrust = crustArray[i].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}
	if (crustArray[2].checked) {
		crustTotal = 3;
		text2 = text2+"$"+crustTotal+"<br>";
	} else if (crustArray[0].checked) {
		crustTotal = 0;
		text2 = text2+"$"+crustTotal+"<br>";
	} else if (crustArray[1].checked) {
		crustTotal = 0;
		text2 = text2+"$"+crustTotal+"<br>";
	} else if (crustArray[3].checked) {
		crustTotal = 0;
		text2 = text2+"$"+crustTotal+"<br>";
	} else if (crustArray[4].checked) {
		crustTotal = 0;	
		text2 = text2+"$"+crustTotal+"<br>";
	}

	runningTotal = (runningTotal + crustTotal);


	document.getElementById("cart").style.opacity=1;
	document.getElementById("showtext1").innerHTML=text1;
	document.getElementById("showtext2").innerHTML=text2;
	document.getElementById("totalPrice").innerHTML = "</h3>Total Price  $"+runningTotal+".00"+"</h3>";
};	
	




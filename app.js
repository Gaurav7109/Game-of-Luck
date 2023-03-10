var player1 = prompt("Enter the name of First Player");
while(player1 === "") {
	
	alert("please enter the name for the First Player");
	player1 = prompt("Enter the name of First Player");
}

var player2 = prompt("Enter the name of Second Player");
while(player2 === ""){
	alert("please enter the name for Second Player");
	player2 = prompt("Enter the name of second player");
}
while(player2 === player1){
	alert("please enter the different name for Second Player");
	player2 = prompt("Enter the name of second player");
}

document.querySelector(".playerName1").innerHTML = player1;
document.querySelector(".playerName2").innerHTML = player2;


function refresh(){
	
	let button = document.querySelector(".btn");
	button.disabled = true;
	setTimeout(refresh1, 1500);
	 var music = new Audio('diceSound.mp3');
  	music.play();
	setTimeout(function(){
		button.disabled = false;
	},1500);
}

function refresh1()
{
	var first_Num = Math.random()*6;
	first_Num = Math.floor(first_Num) +1;


	var second_Num = Math.random()*6;
	second_Num = Math.floor(second_Num) +1;

	while(first_Num === second_Num){
		first_Num = Math.random()*6;
		first_Num = Math.floor(first_Num) +1;


		second_Num = Math.random()*6;
		second_Num = Math.floor(second_Num) +1;
	}

	document.querySelector(".playerValue1").innerHTML= first_Num;
	document.querySelector(".playerValue2").innerHTML = second_Num;


	if(first_Num === 1){
		
		document.querySelector(".box1").classList.remove("dot");
		document.querySelector(".box1").classList.remove("dot2");
		document.querySelector(".box1").classList.remove("dot3");
		document.querySelector(".box1").classList.remove("dot4");
		document.querySelector(".box1").classList.remove("dot5");
		document.querySelector(".box1").classList.remove("dot6");
		document.querySelector(".box1").classList.add("dot1");
	}
	else if(first_Num === 2){
		document.querySelector(".box1").classList.remove("dot");
		document.querySelector(".box1").classList.remove("dot1");
		document.querySelector(".box1").classList.remove("dot3");
		document.querySelector(".box1").classList.remove("dot4");
		document.querySelector(".box1").classList.remove("dot5");
		document.querySelector(".box1").classList.remove("dot6");
		document.querySelector(".box1").classList.add("dot2");
	}

	else if(first_Num === 3){
		document.querySelector(".box1").classList.remove("dot");
		document.querySelector(".box1").classList.remove("dot1");
		document.querySelector(".box1").classList.remove("dot4");
		document.querySelector(".box1").classList.remove("dot5");
		document.querySelector(".box1").classList.remove("dot6");
		document.querySelector(".box1").classList.add("dot3");
	}
	else if(first_Num === 4){

		document.querySelector(".box1").classList.remove("dot");
		document.querySelector(".box1").classList.remove("dot2");
		document.querySelector(".box1").classList.remove("dot3");
		document.querySelector(".box1").classList.remove("dot1");
		document.querySelector(".box1").classList.remove("dot5");
		document.querySelector(".box1").classList.remove("dot6");
		document.querySelector(".box1").classList.add("dot4");
	}
	else if(first_Num === 5){
		document.querySelector(".box1").classList.remove("dot");
		document.querySelector(".box1").classList.remove("dot3");
		document.querySelector(".box1").classList.remove("dot4");
		document.querySelector(".box1").classList.remove("dot1");
		document.querySelector(".box1").classList.remove("dot6");
		document.querySelector(".box1").classList.add("dot5");
	}
	else if (first_Num === 6){
		document.querySelector(".box1").classList.remove("dot");
		document.querySelector(".box1").classList.remove("dot3");
		document.querySelector(".box1").classList.remove("dot4");
		document.querySelector(".box1").classList.remove("dot5");
		document.querySelector(".box1").classList.remove("dot1");
		document.querySelector(".box1").classList.add("dot6");
	}
	if(second_Num === 1){
		document.querySelector(".box2").classList.remove("dot");
		document.querySelector(".box2").classList.remove("dot2");
		document.querySelector(".box2").classList.remove("dot3");
		document.querySelector(".box2").classList.remove("dot4");
		document.querySelector(".box2").classList.remove("dot5");
		document.querySelector(".box2").classList.remove("dot6");
		document.querySelector(".box2").classList.add("dot1");
	}
	else if(second_Num === 2){
		
		document.querySelector(".box2").classList.remove("dot");
		document.querySelector(".box2").classList.remove("dot1");
		document.querySelector(".box2").classList.remove("dot3");
		document.querySelector(".box2").classList.remove("dot4");
		document.querySelector(".box2").classList.remove("dot5");
		document.querySelector(".box2").classList.remove("dot6");
		document.querySelector(".box2").classList.add("dot2");
	}
	else if(second_Num === 3){

		document.querySelector(".box2").classList.remove("dot");
		document.querySelector(".box2").classList.remove("dot2");
		document.querySelector(".box2").classList.remove("dot1");
		document.querySelector(".box2").classList.remove("dot4");
		document.querySelector(".box2").classList.remove("dot5");
		document.querySelector(".box2").classList.remove("dot6");
		document.querySelector(".box2").classList.add("dot3");
	}
	else if(second_Num === 4){

		document.querySelector(".box2").classList.remove("dot");
		document.querySelector(".box2").classList.remove("dot2");
		document.querySelector(".box2").classList.remove("dot3");
		document.querySelector(".box2").classList.remove("dot1");
		document.querySelector(".box2").classList.remove("dot5");
		document.querySelector(".box2").classList.remove("dot6");
		document.querySelector(".box2").classList.add("dot4");
	}
	else if(second_Num === 5){

		document.querySelector(".box2").classList.remove("dot");
		document.querySelector(".box2").classList.remove("dot2");
		document.querySelector(".box2").classList.remove("dot3");
		document.querySelector(".box2").classList.remove("dot4");
		document.querySelector(".box2").classList.remove("dot1");
		document.querySelector(".box2").classList.remove("dot6");
		document.querySelector(".box2").classList.add("dot5");
	}
	else if(second_Num ===6){
		
		document.querySelector(".box2").classList.remove("dot");
		document.querySelector(".box2").classList.remove("dot2");
		document.querySelector(".box2").classList.remove("dot3");
		document.querySelector(".box2").classList.remove("dot4");
		document.querySelector(".box2").classList.remove("dot5");
		document.querySelector(".box2").classList.remove("dot1");
		document.querySelector(".box2").classList.add("dot6");
	}
	if(first_Num>second_Num){
		document.querySelector("h2").innerHTML = player1 + " won the game."

	}else if(second_Num>first_Num){
		document.querySelector("h2").innerHTML = player2 + " won the game."

	}else{
		document.querySelector("h2").innerHTML = "Match tied. Click on refresh for another match."
	}
}



$(document).ready(function() {
	var carrentValue = null;
	var firstNumber = null;
	var operation = null;
	var secondNumber = null;
	var memory = null;
	 function gatherNumber() { //написать число
            $("#result").val( $("#result").val()+$(this).val());
        };

     function cleanResult() { // oчистить 
        $("#result").val("");
       };

     function chooseOperation() {
     	if($("#result").val()!==""||$("#ourMathematics").val()!==""){
     	   	if (operation===null){
	     	firstNumber = $("#result").val();

	       	operation = $(this).val();
	     	$("#ourMathematics").val(firstNumber +" "+ $(this).val() + " ");
	     	cleanResult();
	     	} else {
	     	$("#ourMathematics").val(firstNumber +" "+ $(this).val() + " ");
	     	operation = $(this).val();
	     	};
	    }; 
	     
     };
     function quadraticRoot() {
     	if($("#result").val()!==""||$("#ourMathematics").val()!==""){
	     	if ($("#ourMathematics").val()!==""){
	     	var string = $("#ourMathematics").val();
	        string =string.slice(0, string.length-3);	
	        $("#ourMathematics").val("sqrt"+" "+"("+string +")"); 
	     	} else{
	     	operation = $(this).val();
	     	firstNumber = $("#result").val();
	     	$("#ourMathematics").val("sqrt"+" "+"("+firstNumber +")");     	
	    	};
	    };	
 	};

     function getResult() {
     	secondNumber = $("#result").val();
     	switch(operation) {
     		case "+": 
     			carrentValue = +firstNumber + +secondNumber;
     			break;
     		case "-":
     			carrentValue = +firstNumber - +secondNumber;
     			 break;
     		case "*": 
     			carrentValue = +firstNumber * +secondNumber;
     			break;
     		case "/": 
     			carrentValue = +firstNumber / +secondNumber;
     		    break;
     		case "Sqrt":
     			carrentValue = Math.sqrt(+firstNumber);
     		    break;    
     	};
     };

     function showResult() {
     	getResult();
     	if (carrentValue===Infinity){
     		$("#result").val("На ноль не делят");
     	   	cleanOurMathematics();
     	   	cleanAll();
     	} else if(isNaN(carrentValue)){
     		$("#result").val("Не верный аргумент");
     	    cleanOurMathematics();
     	    cleanAll();
     	   }
     	else { 
     		$("#result").val(carrentValue);
     		cleanOurMathematics();
     		cleanAll();	
     		
    	};
     };

     function recordMemory() {
     	memory = $("#result").val();
     	};
     function useMemory() {
     	$("#result").val(memory);
     };	

     function cleanAll() {
     	firstNumber = null;
     	secondNumber = null;
     	operation = null;
     	carrentValue = null;
     };

     function cleanOurMathematics() {
     	$("#ourMathematics").val("");
     };
 

            $(".number").on("click", gatherNumber);
            $(".CE").on("click", cleanResult);
            $(".operation").on("click", chooseOperation);
            $(".equal").on("click", showResult);
            $(".sqrt").on("click", quadraticRoot);
            $(".memoryAdd").on("click", recordMemory);
            $(".memory-").on("click", useMemory)

});



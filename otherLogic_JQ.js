 $(document).ready(function() {
   	var carrentValue = null;
	var firstNumber = null;
	var operation = null;
	var secondNumber = null;
	var memory = null;
    var ourNumber = null;
   
    
    function cleanBothLine() { //проверяет была ли до этого какая либо операция
        
        var ourMathematicsLine = $("#ourMathematics").val(); 
        var arrow = $("#result").val();
            if(ourMathematicsLine[ourMathematicsLine.length-2] === "="||arrow[arrow.length-1]==="т") {
                cleanResult();
                cleanOurMathematics();
            } 
              return false;
          };

    function gatherNumber() {//написать число: перебор багов 0. 00000 ... 0==>1/если баг после набора он скидуется в chooseOperation
            cleanBothLine();
            if(operation==="Sqrt") {
                cleanResult();
            } else {
            ourNumber = $("#result").val()+$(this).val();
            checkNumber();    
                
            }
    };

    function chooseOperation() { //выбирает операцию и отобажает ее
       	   	if (firstNumber === null && $("#result").val()!==""){
    	     	rememberFirstNumber();
                operation = $(this).val();//
               	putOurMath(); 
    	     	cleanResult();
            } else if( firstNumber !== null && $("#result").val()===""){ 
                operation = $(this).val();//
                putOurMath();
            }
    };
    
    function quadraticRoot() { // отдельна операция по квадратному корню
     	          operation = "Sqrt";
        if ($("#ourMathematics").val()!==""||$("#result").val()!==""){
	     	if ($("#ourMathematics").val()!==""&&$("#result").val()===""){
        	     	var string = $("#ourMathematics").val();
                    if(string[0]==="s") {
                    putLineForSqrt();
                    } else {
                    string =string.slice(0, string.length-2);
                    firstNumber = +string;	
        	        putLineForSqrt();
                    cleanResult();
                    }
             } else {
        	     	rememberFirstNumber();
                    putLineForSqrt();
                    cleanResult();
            };
	    };
 	};

    function getResult() { // делaяет вычисление с двумя числами
     	secondNumber = $("#result").val();
        if(operation==="Sqrt" || secondNumber!=="")
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
                secondNumber="";
     		    break;    
     	};
    };

    function showResult() { // отображает результат в двох строках
     	    getResult();
            if(carrentValue !==null) {  // не работате квадратны корент или 5- =
         	if (carrentValue===Infinity){
         		$("#result").val("На ноль не делят");
         	   	cleanOurMathematics();
         	   	cleanAll();
         	} else if(isNaN(carrentValue)){
         		$("#result").val("Не верный аргумент");
         	    cleanOurMathematics();
         	    cleanAll();
         	} else { 
                $("#ourMathematics").val($("#ourMathematics").val()+" "+ secondNumber+ " " + "="+ " ");
         		$("#result").val(carrentValue);
         		cleanAll();
            };	
        };
    };

    function checkNumber() {
                    if(ourNumber[0]==="0" && ourNumber[1]!=="."){
                        ourNumber = +ourNumber;
                    } else if(ourNumber[0]===".") {
                        ourNumber = "";
                    } else {
                        for(var i=0; i<ourNumber.length; i++) {

                            if(ourNumber[i]===".") {
                            var amountOfPoint = 0; 
                                for(var i = 0; i<ourNumber.length; i++) {
                                    if(ourNumber[i]===".") {
                                        amountOfPoint++;
                                    };
                                };
                                if(amountOfPoint>1) {
                                ourNumber = ourNumber.slice(0, -1)
                                };
                            };
                        };
                    };
                    $("#result").val(ourNumber);
    };

    function rememberFirstNumber() {
        firstNumber = $("#result").val();
    };
    function putOurMath() {
        $("#ourMathematics").val(+firstNumber +" "+ operation); 
    };
    function rememberOperation() { // не везде работает
        operation = $(this).val();
    };
    function putLineForSqrt() {
        $("#ourMathematics").val("sqrt"+" "+"("+ +firstNumber +")");
    }
    function cleanResult() { // oчистить 
        $("#result").val("");
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
            $(".CE").on("click", cleanBothLine);
            $(".operation").on("click", chooseOperation);
            $(".equal").on("click", showResult);
            $(".sqrt").on("click", quadraticRoot);
            $(".memoryAdd").on("click", recordMemory);
            $(".memory-").on("click", useMemory) 

function focusKeyBoard(e) { /////////////////////////////////////
                $("#result").focus();
                if(e.keyCode == 13 || e.keyCode == 8 || e.keyCode == 144 || e.keyCode == 27) { 
                    return true;
                }
                else if(e.keyCode < 97 || e.keyCode>105) {
                    return false;
                };
                cleanBothLine();
            };
function useKeyBoard(e) {
    
                if(e.keyCode > 95){ //  набор числа
                    if(e.keyCode == 96) {
                        ourNumber = $("#result").val()+"0"
                    } else if(e.keyCode == 110){
                        ourNumber = $("#result").val()+".";
                    } else { ourNumber = $("#result").val() 
                };

                    checkNumber();
                        $("#result").val(ourNumber)
            }; 

                switch (e.keyCode) {
                    case 107:
                        operation = "+";
                        if($("#result").val()!==""&&$("#ourMathematics").val()==="") {
                        rememberFirstNumber();
                        cleanResult();
                        putOurMath();
                        } else if($("#result").val()===""&&$("#ourMathematics").val()!==""){
                            putOurMath();
                        };
                    break;
                    case 109:
                        operation = "-";
                        if($("#result").val()!==""&&$("#ourMathematics").val()==="") {
                        rememberFirstNumber();
                        cleanResult();
                        putOurMath();
                        } else if($("#result").val()===""&&$("#ourMathematics").val()!==""){
                            putOurMath();
                        };
                    break;
                    case 106:
                        operation = "*";
                        if($("#result").val()!==""&&$("#ourMathematics").val()==="") {
                        rememberFirstNumber();
                        cleanResult();
                        putOurMath();
                        } else if($("#result").val()===""&&$("#ourMathematics").val()!==""){
                            putOurMath();
                        };
                    break;
                    case 111:
                        operation = "/";
                        if($("#result").val()!==""&&$("#ourMathematics").val()==="") {
                        rememberFirstNumber();
                        cleanResult();
                        putOurMath();
                        } else if($("#result").val()===""&&$("#ourMathematics").val()!==""){
                            putOurMath();
                        };
                    break;


                    
                    case 13:
                        showResult();
                    break;

                    case 27:
                        cleanResult();
                        cleanBothLine();
                    break;
                };
};
         $("body").on("keyup", useKeyBoard);
          $("body").on("keydown", focusKeyBoard);

$("input").on({ 
           mouseenter: function() {
            $(this).addClass("click");
        }, mouseleave: function() {
            $(this).removeClass("click");
        }, mousedown : function() {
            $(this).animate({opacity: '0.1', borderRadius: '40px'}, 100);
            $(this).animate({opacity: '1', borderRadius: '0px'}, 100);
        } 
    });

}); 



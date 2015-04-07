
	$(document).ready(function() {
        
          
        function gatherNumber() { //написать число
            var numeral = $(this).val();
            var input = $("#result").val();
            $("#result").val(input + numeral);
            };

        function chooseOperation() {
            var operation = $(this).val();
          $("#ourMathematics").val($("#ourMathematics").val() + $("#result").val() + " " + operation + " ");
          $("#result").val("");

        };

       function showResult() {
        var string = $("#ourMathematics").val()+$("#result").val();
        string =string.slice(0, string.length-2);
        $("#result").val(eval(string));
        $("#ourMathematics").val("");
        // add parameter

       };

       function cleanResult() {
        $("#result").val("");
       }



       $(".equal").on("click", showResult);
       $(".number").on("click", gatherNumber);
       $(".operation").on("click", chooseOperation);
       $(".CE").on("click", cleanResult);
       
   });
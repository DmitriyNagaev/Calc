  $(document).ready( function() {startCalc();
  });

  function startCalc() {
     var currentValue = null;
     var a = null;
     var b = null;
     var operation = null;
     var ourNumber = "";
     var memory = null;
     var str = null;
     var keyBoardNumber = [{key: 96, value: "0"}, {key: 97, value: "1"}, {key: 98, value: "2"}, {key: 99, value: "3"},
         {key: 100, value: "4"}, {key: 101, value: "5"}, {key: 102, value: "6"}, {key: 103, value: "7"},
         {key: 104, value: "8"}, {key: 105, value: "9"}, {key: 110, value: "."}, {key: 109, value: "-"}];
     var keyBoardOperation = [{key: 106, value: "*"}, {key: 107, value: "+"}, {key: 109, value: "-"},
         {key: 111, value: "/"}];

     String.prototype.format = function() {
         var args = arguments;
         return this.replace(/{(\d+)}/g, function(match, number) {
             return typeof args[number] != 'undefined' ? args[number] : match;
         });
     };
     function getA() {
         a = +ourNumber;
     }
     function getB() {
         b = +ourNumber;
     }
     function setNumber(number) {   //ставить число
         $("#lineForNumber").val(number)
     }
     function isNumeric(n) { // проверяет на число
         return !isNaN(parseFloat(n)) && isFinite(n)
     }
     function cleanLineForNumber() {
         $("#lineForNumber").val("")
     }
     function cleanOurMath() {
         $("#ourMathematics").val("");
     }
     function cleanOurNumber() {
         ourNumber = "";
     }
     function cleanVariables() {
         currentValue = null;
         a = null;
         b = null;
         operation = null;
         ourNumber = "";
     }
     function recordMemory() {
         memory = $("#lineForNumber").val();
     }
     function useMemory() {
         $("#lineForNumber").val(memory);
     }
     function submitNumber() { // проверяет число

             if (ourNumber[0] === "0" && ourNumber[1] !== "." && ourNumber[1] !== "-") { // на 00
                 ourNumber = +ourNumber;
             } else if (ourNumber[0] === "-" && ourNumber.length === 1 && operation === null) { // на начало с -
                 ourNumber = "-";
             }
             else if (ourNumber[0] === "-" && ourNumber[1] === "0" && ourNumber[2] !== ".") { // на -00
                 ourNumber = ourNumber.slice(1);
                 ourNumber = "-" + +ourNumber;
             }
             else if (!isNumeric(ourNumber)|| ourNumber.length>14) { // прочие проверки на число
                 ourNumber = ourNumber.slice(0, -1)
             }

     }

     function setOurMath() {

         if (operation === "Sqrt" && currentValue === null) {
             str = "sqrt({0})".format(a);
             checkLengthOfString(str, 19, 16, "<<");
             $("#ourMathematics").val(str);
         }else if(operation === "Sqrt" && currentValue !== null) {
             str = "sqrt({0}) =".format(a);
             checkLengthOfString(str, 19, 16, "<<");
             $("#ourMathematics").val(str)
         }else if (b === null) {
             $("#ourMathematics").val("{0} {1}".format(a, operation));
         } else {
             str = "{0} {1} {2} =".format(a, operation, b);
             checkLengthOfString(str, 19, 16, "<<");
             $("#ourMathematics").val(str);
         }
     }
     function checkLengthOfString(string, length, truncate, simbol) {
         if(string.length>length) {
             return str ="{1} {0}".format(string.slice(-truncate), simbol);
         }
     }
     function doLogicForNumber() {
         var str = $("#ourMathematics").val();
         if(str[str.length-1]==="="&&ourNumber==="-"){
             cleanOurNumber();
             return false;
         } else {
             checkAndPrepareLinesForNextIteration();
             submitNumber();
             setNumber(ourNumber);
         }
     }
     function addNumeralToOurNumberUseKey(e) {
         if(operation==="Sqrt") {
             setNumber("")
         } else {
             for (var i = 0; i < keyBoardNumber.length; i++) if (e.keyCode == keyBoardNumber[i].key) {
                 ourNumber += keyBoardNumber[i].value;
                 doLogicForNumber();
             }
         }
     }
     function calculateResult() {
         if(operation==="Sqrt" || b!==null) {
             switch (operation) {
                 case "+":
                     currentValue = a + b;
                     break;
                 case "-":
                     currentValue = a - b;
                     break;
                 case "*":
                     currentValue = a * b;
                     break;
                 case "/":
                     currentValue = a / b;
                     break;
                 case "Sqrt":
                     currentValue = Math.round( Math.sqrt(a)*1000000)/1000000;
                     break;
             }
         }
     }
     function checkAndPrepareLinesForNextIteration() {
         var ourMathematicsLine = $("#ourMathematics").val();
         if(ourMathematicsLine[ourMathematicsLine.length-1] === "=") {
             cleanLineForNumber();
             cleanOurMath();
         }
         return false;
     }
     function getResult() {
         calculateResult();
         if(!isNumeric(currentValue)){
             $("#lineForNumber").val("Ошибка")
         } else {
             str = String(currentValue);
             checkLengthOfString(str, 14, 12, "E");
             setNumber(str);
         }
     }
     function doLogicWithOperation() {
         if(ourNumber !=="-") {
             if ($("#ourMathematics").val() === ""&& $("#lineForNumber").val()!=="") {
                 getA();
                 setOurMath();
                 cleanLineForNumber();
                 cleanOurNumber();
             } else if($("#ourMathematics").val() !== ""&&$("#lineForNumber").val()===""){
                 setOurMath();
             } else if($("#ourMathematics").val() !== ""&&$("#lineForNumber").val()!==""&&$("#lineForNumber").val()!=="Ошибка"&&a===null){
                 ourNumber = +$("#lineForNumber").val();
                 getA();
                 setOurMath();
                 cleanLineForNumber();
                 cleanOurNumber();
             }
         }
     }
      function getOperationUseKey (e) {
            for (var i = 0; i < keyBoardOperation.length; i++) {
                if (e.keyCode == keyBoardOperation[i].key) {
                    operation = keyBoardOperation[i].value;
                    doLogicWithOperation();
                }
            }
     }
     function setEndOfIteration() {
         if(operation==="Sqrt"){
             getResult();
             setOurMath();
             cleanVariables();
         }
         else if (a !== null && $("#lineForNumber").val() !== "") {
             getB();
             setOurMath();
             cleanLineForNumber();
             getResult();
             cleanVariables();

         }
     }

     function useOtherKey (e) {
         if (e.keyCode == 13) {
             setEndOfIteration()
         }
         if (e.keyCode ==27) {
             checkAndPrepareLinesForNextIteration();
             cleanLineForNumber();
             cleanOurNumber();
         }
         if (e.keyCode == 8) {
             ourNumber = ourNumber.slice(0, ourNumber.length-1);
             setNumber(ourNumber);
         }
     }
//////////////////////////////////////

     function addNumeralToOurNumber() {
         checkAndPrepareLinesForNextIteration();
         if(operation==="Sqrt") {
             setNumber("")
         } else {
             ourNumber = $("#lineForNumber").val()+$(this).val();
             doLogicForNumber();
         }
     }
     function getOperation() {
         operation = $(this).val();
         doLogicWithOperation();
     }
     function useQuadraticRoot() {
         operation = "Sqrt";
         if ($("#ourMathematics").val()!==""||$("#lineForNumber").val()!==""){
             if ($("#ourMathematics").val()!==""&&$("#lineForNumber").val()===""){
                 var string = $("#ourMathematics").val();
                 if(string[0]==="s") {
                     setOurMath();
                 } else {
                     string =string.slice(0, string.length-2);
                     a = +string;
                     setOurMath();
                     cleanLineForNumber();
                 }
             } else {
                 ourNumber = $("#lineForNumber").val();
                 getA();
                 setOurMath();
                 cleanLineForNumber();
             }
         }
     }

     $(".number").on("click", addNumeralToOurNumber);
     $("#minus").on("click", addNumeralToOurNumber);
     $(".operation").on("click", getOperation);
     $("#CE").on("click", cleanLineForNumber);
     $("#CE").on("click", checkAndPrepareLinesForNextIteration);
     $("#equal").on("click", setEndOfIteration);
     $("#sqrt").on("click", useQuadraticRoot);
     $("#memoryAdd").on("click", recordMemory);
     $("#memory-").on("click", useMemory);
     ///////////

        function startUseKey(e){
            addNumeralToOurNumberUseKey(e);
            getOperationUseKey(e);
            useOtherKey(e);
        }
     $("body").on("keydown", startUseKey);

      $("#button").click(function() {
          $("#button").addClass("hide");
          $(".calc").addClass("calcAnimate");
          $("div.line input").addClass("buttonAnimate")
      })

 };



 /*+++ // создать модуль старт калькулятор нажал кнопку = анимация = появился калькулятор (1)
  ++ /// все модуле а модуль возвращает только старт калькулятор (1)
   // для документ реди вещаю обработчик кнопки старт (1)
   // появлятся кальк (1)
 ;

    // $("#ourMathematics").val() убрать и сохранить в переменную (3)
    // локал сторедж (база данных), сделать историю расчетов сделать в калькуляторе стрелка и выезжает история (после 1)
    // создать событие с данными результата  - историей (после 1)




   /* +++ $(".number").on("click", gatherNumber); // обернуть в функцию и в нутри старта
   ++ $(".CE").on("click", cleanResult);


 // ++++ работать надо со строкой а не заниматься ее преоброзованиеы
// ++++ проверка на число isNaN && isFinite ... 00 (как есть)
// ++++ клавиши создать 2 масива маси состоит из  объктов ключ значение [{key: 105, value: "0"}]
// ++++ два масива один на число а второй на операцию
//++++ "sqrt({0})".format(35) формат строк для джава скрипат функция
// шрифт Google web fonts классны шрифт
// ++++ ограничить цыфри 15
// расплывающийся круг с центра
// <div class=number></div>
// <button>Petro poroshenko</button>
// .number { width: 3rem; height: 3rem; background-color: black; margin: 2rem; border-radius: 100px;}

 /* .number:hover { background-color: violet; }
div::before {
  position: absolute;
  z-index: 200;
  display: block;
  width: 10px;
  height: 10px;
  background-color: red;
} */

// сет бокси 
// запуск кейгена  внутри
// установка програмы


//// мои мысли : +++ и для клавы и для кнопак создать единый обработчик через ID и класc
// +++надо вводить негатиные значения ++++++++++++++++++++(реализовано в submitNumber)
// +++++в работе с оболочкой работаем с полем, а в работе с кнопками с значение надо это синхронизировать
 // +++при стираниее через СЕ или ускейп надо стирать значение ourNumber +-
 // +++настроить стираее через бескпейс, но надо стирать и переме ++++
 // +++после ошибки нельзя делать вычисления
 // ++++после получения результата должно отнимать, а не начинать писать число с-

 // +++настроить работу корня должен брать с конца итерации значени
 //++++ реализавать функцию формат для строк
// ++++формат строк не работает для а = 0:
 // +++ для строк ограничить ввод, если матиматика больче сделать в формате "<<458838+78= */



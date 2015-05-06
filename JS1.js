




 /* var calculator = (function(){
        var carrentValue = null;

        return {
        add: function(x){
            carrentValue += x;
            },
        subruct: function(x){
            carrentValue -= x;
            },
        multiply: function(x){
            carrentValue *= x;
            },
        divide: function(x){
            if(x===0){
                alert('Делить на 0 нельзя');
                carrentValue = 0;
            }
            else{
            carrentValue /= x;
                }
            },
        quadraticRoot: function(x){
            if(x<0){
                alert('Квадратный корень добываться только из положительных чисел')
                carrentValue = 0;
                }
            else {
                carrentValue = Math.sqrt(x);

                }
            },
        getResult: function(){
            return carrentValue
            },
        resetCalc: function(){
            return carrentValue = null
            }    
        }

} )();


var handler = (function(){
     var operation = null;
    var text ='\n1.Сложить\n2.Вычислить\n3.Умножить\n4.Поделить\n5.Получить квадратный корень';

         function chooseOperation(message){
                var ourOperation = prompt(message);
                var variantOfResult = ['1','2','3','4','5', null];
                   for(var i=0; i<variantOfResult.length; i++){
                        if(ourOperation === variantOfResult[i]){
                           return operation = +ourOperation;    
                        }       

                    }
                    return chooseOperation('****Нельза распознать операцию****\nПолайлуста корректно выберите операцию: '+text);

            };

         function peformOperation(number){
                switch (operation){
                case 1:
                    calculator.add(number);
                break;
                case 2:
                    calculator.subruct(number);
                break;
                case 3:
                    calculator.multiply(number);
                break;
                case 4:
                    calculator.divide(number);
                break;
                case 5:
                    calculator.quadraticRoot(number);
                }
            };

          function  getNumber(message){
                var number = prompt(message);
                if(number===null){
                    return number;
                }
                else if(isNumeric(number)){
                return +number;
                }

                return getNumber('Корректно введите число!!!');
                
                
            };

           function isNumeric(n){
                return !isNaN(parseFloat(n)) && isFinite(n);
            };


            return {startHandler: function(){
                while(true){
                
                        chooseOperation(' Если хотите воспользоваться калькулятором выберите операцию: ' + text)
                        if (operation === 0){
                            break;
                        };   /// поставить параметр на выход при отмене

                        if(calculator.getResult() === null){
                        var a = getNumber('Введите первое число!');
                            if(a===null){
                            break;
                         } else{
                        calculator.add(a)
                            }
                        };


                        if(operation === 5){
                            peformOperation(calculator.getResult());
                        } else{
                        var b = getNumber('Введите второе число!')
                            if(b===null){
                            break;
                         }
                            peformOperation(b);
                        }



                        var result = confirm('Результат = ' + calculator.getResult() + '\nЖелаете продолжить?');
                        if(result===false){
                            break;
                        };
                        var memory = confirm('Хотите продолжить с полученным результатом?');
                        if(memory===false){
                            calculator.resetCalc();
                        }                      
                }
            }
        }


})();

handler.startHandler(); */


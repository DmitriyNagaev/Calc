var calculator = (function(){  
        var carrentValue = null;

        return {
        add: function(x){
            carrentValue += x;
            },
        susruct: function(x){
            carrentValue -= x;
            },
        muitiply: function(x){
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

} )()


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
                    calculator.susruct(number);
                break;
                case 3:
                    calculator.muitiply(number);
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
                if(isNumeric(number)){
                return +number;
                }

                return getNumber('Корректно введите число!!!');
                
                
            };

           function isNumeric(n){
                return !isNaN(parseFloat(n)) && isFinite(n);
            };


            return {startHendler: function(){
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

handler.startHendler();




/*
var calculator = {
        carrentValue: null,

        add: function(x){
            calculator.carrentValue += x;
            },
        susruct: function(x){
            calculator.carrentValue -= x;
            },
        muitiply: function(x){
            calculator.carrentValue *= x;
            },
        divide: function(x){
            if(x===0){
                alert('Делить на 0 нельзя');
                calculator.carrentValue = 0;
            }
            else{
            calculator.carrentValue /= x;
                }
            },
        quadraticRoot: function(x){
            if(x<0){
                alert('Квадратный корень добываться только из положительных чисел')
                calculator.carrentValue = 0;
                }
            else {
                calculator.carrentValue = Math.sqrt(x);

                }
            },
        getResult: function(){
            return calculator.carrentValue
            },
        resetCalc: function(){
            return calculator.carrentValue = null
            }    
}


var handler = {
    operation: null,
    text: '\n1.Сложить\n2.Вычислить\n3.Умножить\n4.Поделить\n5.Получить квадратный корень',

            chooseOperation: function(message){
                var ourOperation = prompt(message);
                var variantOfResult = ['1','2','3','4','5', null];
                   for(var i=0; i<variantOfResult.length; i++){
                        if(ourOperation === variantOfResult[i]){
                           return handler.operation = +ourOperation;    
                        }       

                    }
                    return handler.chooseOperation('****Нельза распознать операцию****\nПолайлуста корректно выберите операцию: '+handler.text);

            },

            peformOperation: function(number){
                switch (handler.operation){
                case 1:
                    calculator.add(number);
                break;
                case 2:
                    calculator.susruct(number);
                break;
                case 3:
                    calculator.muitiply(number);
                break;
                case 4:
                    calculator.divide(number);
                break;
                case 5:
                    calculator.quadraticRoot(number);
                }
            },

            getNumber: function(message){
                var number = prompt(message);
                if(handler.isNumeric(number)){
                return +number;
                }

                return handler.getNumber('Корректно введите число!!!');
                
                
            },

            isNumeric: function(n){
                return !isNaN(parseFloat(n)) && isFinite(n);
            },


            startHendler: function(){
                while(true){
                
                        handler.chooseOperation(' Если хотите воспользоваться калькулятором выберите операцию: '+handler.text);
                        if (handler.operation === 0){
                            break;
                        };   /// поставить параметр на выход при отмене

                        if(calculator.getResult() === null){
                        var a = handler.getNumber('Введите первое число!');
                        calculator.add(a)
                        };


                        if(handler.operation === 5){
                            handler.peformOperation(calculator.getResult());
                        } else{
                        var b = handler.getNumber('Введите второе число!')
                            handler.peformOperation(b);
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
handler.startHendler();  */



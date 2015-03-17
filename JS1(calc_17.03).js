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

}


var hendler = {
    operation: null,

            chooseOperation: function(massege){
                var ourOperation = prompt(massege);
                    if (ourOperation !== null){
                        ourOperation = +ourOperation;
                        if(ourOperation === 1||ourOperation === 2||ourOperation === 3||ourOperation === 4||ourOperation === 5){
                        return hendler.operation = ourOperation;
                        }

                        return hendler.chooseOperation('****Нельза распознать операцию****\nПолайлуста корректно выберите операцию: \n1.Сложить\n2.Вычислить\n3.Умножить\n4.Поделить\n5.Получить квадратный корень');
                        }
                    else {
                       return hendler.operation = 'End';
                    }        
                
            
            },

            peformOperation: function(number){
                switch (hendler.operation){
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
                
                }
            },

            getNumber: function(massege){
                var number = prompt(massege);
                if(hendler.isNumeric(number)){
                return +number;
                }

                return hendler.getNumber('Корректно введите число!!!');
                
                
            },

            isNumeric: function(n){
                return !isNaN(parseFloat(n)) && isFinite(n);
            },

            startHendler: function(){
                while(true){
                
                        hendler.chooseOperation(' Если хотите воспользоваться калькулятором выберите операцию: \n1.Сложить\n2.Вычислить\n3.Умножить\n4.Поделить\n5.Получить квадратный корень');
                        if (hendler.operation === 'End'){
                            break;
                        };   /// поставить параметр на выход при отмене

                        if(calculator.carrentValue === null){
                        var a = hendler.getNumber('Введите первое число!');
                        calculator.add(a)
                        };
                        if(hendler.operation === 5){
                            calculator.quadraticRoot(calculator.carrentValue);
                        } else{
                        var b = hendler.getNumber('Введите второе число!')
                            hendler.peformOperation(b);
                        }

                        var result = confirm('Результат = ' + calculator.carrentValue + '\nЖелаете продолжить?');
                        if(result===false){
                            break;
                        };
                        var memory = confirm('Хотите продолжить с полученным результатом?');
                        if(memory===false){
                            calculator.carrentValue = null;
                        }                      
                }
            }
}
hendler.startHendler();
//jgjhgkjhgjhgj
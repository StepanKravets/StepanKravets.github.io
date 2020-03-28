/* -----1-------*/
let season=prompt("Введіть пору року:");
if((season.substring(0,2)=='Зи') || (season.substring(0,2)=='зи')|| (season.substring(0,2)=='ЗИ')|| (season.substring(0,2)=='зИ')){
    console.log("Зараз зима");
} else if ((season.substring(0,2)=='Ве') || (season.substring(0,2)=='ве')|| (season.substring(0,2)=='ВЕ')|| (season.substring(0,2)=='вЕ')){
    console.log("Зараз весна");
} else if ((season.substring(0,2)=='Лі') || (season.substring(0,2)=='лі')|| (season.substring(0,2)=='ЛІ')|| (season.substring(0,2)=='лІ')){
    console.log("Зараз літо");
} else if ((season.substring(0,2)=='Ос') || (season.substring(0,2)=='ос')|| (season.substring(0,2)=='ОС')|| (season.substring(0,2)=='оС')){
    console.log("Зараз осінь");
} else{
    console.log("Такої пори року, як "+season+" немає!!!");
}

/*------2--------*/

let name=prompt("Введіть ваше імя:");
let sum=+prompt("Введіть суму депозиту:");
let period=+prompt("Введіть строк дії депозиту (кількість місяців):");
let sum2;
let percent;
if (period<=6){
    persent=13;
} else if((period>=6) &&(period<=9)){
    persent=15;
} else if(period>=10){
    persent=17;
}
sum2=(persent*period* sum)/(12*100);
let sum3=sum2+sum;
console.log("Шановний "+name+"! Сума вашого депозиту: "+sum+" грн. Строк дії: "
+period+" місяців. В кінці цього періоду ви отримаєте додатково: "+sum2+" грн. В загальному: " +sum3+" грн");


/*--------3----------*/
let number1=+prompt("Введіть перше число:");
let number2=+prompt("Введіть друге число:");
if(number1>number2){
    console.log("Число "+number1+" більше за "+ number2);
} else if(number2>number1){
    console.log("Число "+number2+" більше за "+ number1);
} else {
    console.log("Числа рівні!");
}

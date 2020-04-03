/* -------1-------*/
let x=+prompt("Введіть перше число: ");
let y=+prompt("Введіть друге число: ");
let z=Boolean(+prompt("Введіть третій параметр (true - 1, false - 0): "));

console.log(" Результат: " +Comparison(x,y,z));

function Comparison(x,y,z)
{
    if((z && (x>=y)) || (!z && (x<=y))) {
        return x;
    } else if ((z && (x<y)) || (!z && (x>y))){
        return y;
    }
}

/* --------2-------*/
let sum=+prompt("Введіть суму покупок:");

console.log("Сума з врахуванням знижки: "+priceWithDiscount(sum));

function priceWithDiscount(sum)
{
    let discount;
        if(sum<1000){
            discount=3;
        }
        else if(sum>=1000 && sum<=5000){
            discount=5;
        }
        else if(sum>5000){
            discount=7;
        }
    return sum - sum*discount/100;
}




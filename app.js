let productsCountEl = document.getElementById("products-count");
//console.log(productsCountEl);

let addToCartButtons = document.querySelectorAll(".add-to-cart")
//console.log(addToCartButtons);

for(let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click",function() {
        let prevProductCount = +productsCountEl.textContent;
        productsCountEl.textContent = prevProductCount + 1;
    })
}

/*-----------------------------------*/

let numbers=[23,45,65,76,234,4,56,1,3455,54,345.6,4566.3];

/*-----------1-----------*/
console.log(numbers[numbers.length-1]);

/*-----------2-----------*/
let sum=0;
for(let i=0;i<numbers.length;i++){
    sum=sum+numbers[i];
}
console.log("Сума: "+ sum);

/*-----------3-----------*/
let max=numbers[0];
for(let i=1;i<numbers.length;i++){
    if(numbers[i]>max){
        max=numbers[i];
    }
}
console.log("Максимальне значення: "+max);

/*-------------------------------------*/


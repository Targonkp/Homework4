
const productEl = document.getElementById('product');
const costEl = document.getElementById('cost');
const clickEl = document.getElementById('clickOn');
const maximumEl = document.getElementById('maximum');


const Shopping = function(name, sum) {
    this.name = name;
    this.sum = sum;
}

let i=0;
const arr=[];

function productAddAll () {
    function pushObject(){
        var shopping = new Shopping (productEl.value, costEl.value);
        arr.push(shopping);
    }
    pushObject();
    const parentElem = document.createElement('p');
    parentElem.innerHTML='Название продукта: ' + arr[i].name+ ', стоимость: '+arr[i].sum+';';
    result.appendChild(parentElem);
    console.log(arr[i]);

    i++;
    function maxValue(){
        let max = arr[0].sum;
        let j = 0;
        for (i=0; i<arr.length; i++){
            if (max<arr[i].sum)
            {j=i;
                max = arr[i].sum;}

        }
        maximumEl.textContent = 'Название товара: ' + arr[j].name+' Стоимость: ' +arr[j].sum;
    }
    maxValue();
}




function rgb()
{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    const rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.body.style.backgroundColor = rgb;
}
setInterval('rgb()',5000);



clickEl.addEventListener (
    'click',
    productAddAll
)


productEl.value = localStorage.getItem('myinput');
productEl.addEventListener(
    'change',
    function () {
        localStorage.setItem('myinput', productEl.value);

    }

)
costEl.value = localStorage.getItem('myinput2');
costEl.addEventListener(
    'change',
    function () {
        localStorage.setItem('myinput2', costEl.value);

    }

);
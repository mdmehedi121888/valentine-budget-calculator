document.getElementById('kitkat-btn').addEventListener('click',function(){  
   const inputValue =  getInputValue('kitkat-input-field');
   const productValue = quantityMultiplePrice('chocolate-price',inputValue);
   const chocolateValue = setInnerText('chocolate',productValue);
   console.log(chocolateValue,productValue);
   const totalValue = setInnerText('total',productValue);
})
document.getElementById('rose-btn').addEventListener('click',function(){  
    const inputValue =  getInputValue('rose-input-field');
   const productValue = quantityMultiplePrice('rose-price',inputValue);
   const roseValue = setInnerText('rose',productValue);
   setInnerText('total',productValue);
})
document.getElementById('diary-btn').addEventListener('click',function(){  
    const inputValue =  getInputValue('diary-input-field');
    const productValue = quantityMultiplePrice('diary-price',inputValue);
    const diaryValue = setInnerText('diary',productValue);
    setInnerText('total',productValue);
})

document.getElementById('apply-btn').addEventListener('click',function(){
    const inputValue = getInputValue('promo-input-field');
    if(inputValue==101){
       const findId = document.getElementById('total');
       const totalInnerText = findId.innerText;
       const totalValue = parseInt(totalInnerText);
       const afterReducing = totalValue - (totalValue*0.1);
       setInnerText('all-cost',afterReducing);
    }
    else
    alert('plz enter a valid promo code');
})

function getInputValue(id){
    const valueInput = document.getElementById(id);
    const inputValue = valueInput.value;
    const value1 =parseInt(inputValue);
    valueInput.value= '';
    return value1;
    
}

function quantityMultiplePrice(id,value){
    const priceText = document.getElementById(id).innerText;
    const price = parseInt(priceText);
     return price*value;
    //console.log(value*price);
}

function setInnerText(id,productValue){
    const previousValueHold = document.getElementById(id);
    const previousTextValue = previousValueHold.innerText;
    const currentValue = parseInt(previousTextValue) + parseInt(productValue);
    //console.log(currentValue);
    previousValueHold.innerText = currentValue;
}

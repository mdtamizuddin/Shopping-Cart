// collect all id and make variable 

const phoneCounter = document.getElementById('phone-counter');
const caseCounter = document.getElementById('case-counter');
const phoneFrice = document.getElementById ('phone-frice');
const caseFrice = document.getElementById('case-frice');
let subTotal = document.getElementById('sub-total');
const tex = document.getElementById('tex');
const total = document.getElementById('total')

// phone Counter  

function phonePlus() {
    phoneCounterValue = parseInt(phoneCounter.value); 
    phoneCounter.value = phoneCounterValue +1; 
    phoneFrice.innerText = phoneCounter.value *1219 ;
    finalCounter()
}
function phoneMinus() {
     phoneCounterValue = parseInt(phoneCounter.value); 
     if (phoneCounterValue > 0) {
     phoneCounter.value = phoneCounterValue - 1;
     phoneFrice.innerText = phoneCounter.value *1219 ;
     finalCounter()
    }
}
//case Counter 

function casePlus(){
     const caseCounterValue = parseInt(caseCounter.value);
     caseCounter.value = caseCounterValue + 1; 
     caseFrice.innerText = caseCounter.value * 59 ;
     finalCounter()
}
function caseMinus(){
     const caseCounterValue = parseInt(caseCounter.value);
     if(caseCounterValue > 0){
     caseCounter.value = caseCounterValue - 1; 
     caseFrice.innerText = caseCounter.value * 59 ;
     finalCounter()
     }
}
function finalCounter() {
     
     const caseValue = parseInt(caseCounter.value);
     let caseFriceS = caseValue * 59 ;

     const phoneValue = parseInt(phoneCounter.value); 
     const phoneFriceS = phoneValue * 1219 ;
     subTotal.innerText = caseFriceS+phoneFriceS;
     const subTotalN = parseInt(subTotal.innerText);
     tex.innerText = subTotalN / 10 ;
     texN =parseInt(tex.innerText)
     total.innerText = subTotalN + texN ;
     
}

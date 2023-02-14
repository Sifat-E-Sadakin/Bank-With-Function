document.getElementById('w').addEventListener('click', function(){

    let wAmount = getInput('w-amount');
    let cb = getText('cb');

    if(cb< wAmount){
        alert('Insufficient Ballance');
        return;
    }

    if(isNaN(wAmount)){
        return;
    }

    let wTotal = getText('w-total');
    let updatedW = wTotal + wAmount;
    setText('w-total', updatedW);
    let updateCb= cb- wAmount;
    setText('cb', updateCb);

})


// document.getElementById('w-amount').addEventListener('keyup', function(event){

//     let v= document.getElementById('w-amount');
//     let value= event.target.value;
//     let val= parseFloat(value);
    

//     let b = document.getElementById('w');

//     if(  val>=-999){
//         b.removeAttribute('disabled');
        
//     }
//     else{
//         b.setAttribute('disabled', true)
//     }
   


// })

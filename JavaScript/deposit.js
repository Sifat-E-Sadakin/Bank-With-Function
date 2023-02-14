
document.getElementById('btn-depo').addEventListener('click', function(){

    let newDepo = getInput('depo-amount');

    if(isNaN(newDepo)){
        return;
    }

    let preDepo = getText('depo-total');
    let updatedDepo = newDepo + preDepo;
    setText('depo-total', updatedDepo);
    let cb = getText('cb');
    let updateCb = cb + newDepo;
    setText('cb', updateCb);

})


// document.getElementById('depo-amount').addEventListener('keyup', function(event){

//     let v= document.getElementById('depo-amount');
//     let value= event.target.value;
//     // let val= parseFloat(value);
    

//     let b = document.getElementById('btn-depo');

//     if(  value != '' ){
//         b.removeAttribute('disabled');
        
        
        
//     }
//     else{
//         b.setAttribute('disabled', true);
        
//     }
   


// })

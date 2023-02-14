// console.log(localStorage.getItem('givenEmail'));
// console.log(localStorage.getItem('givenPass'));

document.getElementById('btn-l').addEventListener('click', function(){

    let email = document.getElementById('email');
    let mail = email.value;
    
    let password = document.getElementById('pass');
    let pass = password.value;

    if (mail== localStorage.getItem('givenEmail') && pass == localStorage.getItem('givenPass')){
        window.location.href= 'bank.html';
        console.log('Welcome Sifat-E-Sadakin');
    }
    else{
        alert('Invalid Email or password')
        console.log('Invalid Email or password');
    }

})
document.getElementById('btn-singUp').addEventListener('click', function(){

    window.location.href= 'singUp.html';

    
    

})
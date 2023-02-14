document.getElementById('btn-singUp').addEventListener('click', function(){

    let email = getTxtInput('email');
    localStorage.setItem('givenEmail', email);
    // console.log(localStorage.getItem('givenEmail'));
    let pass = getTxtInput('pass');
    localStorage.setItem('givenPass', pass);
    // console.log(localStorage.getItem('givenPass'));
    window.location.href = 'index.html';
})
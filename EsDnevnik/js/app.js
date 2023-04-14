//============== [ SETTINGS ] ==============//
let session = new Session();
session = session.getSession();
if(session !== '') {
    window.location.href = 'esdnevnik.html';
}
//===========================================//

//============== [ REGISTER POP-UP ] ==============//

document.querySelector('#openPop-up').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.pop-up').style.top = '50%';
});

document.querySelector('#closePop-up').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.pop-up').style.top = '-200%';
});


//================================================//

//=================== [ LOGIN ] ==================//

document.querySelector('#loginForm').addEventListener('submit', e => {
    e.preventDefault();

    let username = document.querySelector('#login_username').value;
    let password = document.querySelector('#login_password').value;

    let user = new User();
    user.username = username;
    user.password = password;

    user.checkLogin().then(r => {
        if(r === true) {
            user.login();
        } else {
            alert('Upisali ste pogresno sifru ili username!');
        }
    });

});

//================================================//

//================= [ REGISTER ] =================//

document.querySelector('#registerForm').addEventListener('submit', e => {
    e.preventDefault();

    let username = document.querySelector('#register_username').value;
    let password = document.querySelector('#register_password').value;
    
    let user = new User();
    user.username = username;
    user.password = password;

    user.checkRegister().then(r => {
        if(r === true) {
            user.register();
        } else {
            alert('Ovo korisnicko ime vec postoji!');
        }
    })

});

//================================================//
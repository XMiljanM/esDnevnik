let session = new Session();
session = session.getSession();
if(session !== '') {
let user = new User();
   user.setInfo();
   let student = new Student();
   student.loadStudents();
} else {
    window.location.href = 'index.html';
}

//=========================[ LOGOUT ] ============================//
document.querySelector('#logout').addEventListener('click', e => {
    e.preventDefault();

    let user = new User();
    user.logout();
});
//================================================================//


//=========================[ CLOSE POPUP ] =======================//
document.querySelector('#close-popup').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.grade-popup').style.display = 'none';
});
//================================================================//

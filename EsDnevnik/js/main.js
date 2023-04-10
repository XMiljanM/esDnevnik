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

document.querySelector('#logout').addEventListener('click', e => {
    e.preventDefault();

    let user = new User();
    user.logout();
});



let timer = () => {
    timeout = setTimeout(myFunc, 500);
};
const myFunc = () => {
    document.querySelectorAll('.newGradeMath').forEach(btn => {

        btn.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector('.grade-popup').style.display = 'block';

            document.querySelector('#addGrade').addEventListener('click', e => {
                e.preventDefault();
                
                let grade = document.querySelector('.gradeInput').value;
                let student = new Student();
                student.addMathGrade(grade, btn);
            });


        });

        document.querySelector('#close-popup').addEventListener('click', e => {
            e.preventDefault();
            document.querySelector('.grade-popup').style.display = 'none';
        });

    });

    document.querySelectorAll('.newGradeEnglish').forEach(btn => {

        btn.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector('.grade-popup').style.display = 'block';

            document.querySelector('#addGrade').addEventListener('click', e => {
                e.preventDefault();
                
                let grade = document.querySelector('.gradeInput').value;
                let student = new Student();
                student.addEnglishGrade(grade, btn);
            });


        });

        document.querySelector('#close-popup').addEventListener('click', e => {
            e.preventDefault();
            document.querySelector('.grade-popup').style.display = 'none';
        });

    });

}
timer();
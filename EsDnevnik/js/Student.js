class Student {
    api = 'https://642acfce00dfa3b5474fc5c7.mockapi.io/';

    addEnglishGrade(grade, btn) {
        let mainEl = btn.closest('.student');
        let id = mainEl.getAttribute('data-category')
        let data = {
            english_grade: grade
        };
        data = JSON.stringify(data);
        fetch(this.api + '/students/' + id, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: data
        })
        .then(response => response.json())
        .then(data => {
            document.querySelector('.grade-popup').style.display = 'none';
            this.loadStudents();
            });
        }

    addMathGrade(grade, btn) {
    let mainEl = btn.closest('.student');
    let id = mainEl.getAttribute('data-category')
    let data = {
        math_grade: grade
    };
    data = JSON.stringify(data);
    fetch(this.api + '/students/' + id, {
        method: 'PUT',
        headers: {'Content-Type' : 'application/json'},
        body: data
    })
    .then(response => response.json())
    .then(data => {
        document.querySelector('.grade-popup').style.display = 'none';
        this.loadStudents();
        });
    }



    loadStudents() {
        fetch(this.api + '/students')
        .then(response => response.json())
        .then(data => {
            let html = '';
            for(let db_student of data) {
                html += `
                    <div class="student" data-category="${db_student.id}">
                    <h3>${db_student.username}</h3>
                    <div class="line"></div>
                    <div class="box">
                        <h4>Math : <span id="mathGrade" class="grade">${db_student.math_grade}</span></h4>
                        <button class="newGradeMath">new Grade</button>
                    </div>
                    <div class="box">
                        <h4>English : <span id="englishGrade" class="grade">${db_student.english_grade}</span></h4>
                        <button class="newGradeEnglish">new Grade</button>
                    </div>
                </div>               
                `
                document.querySelector('.students-wrapper').innerHTML = html;
            }

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
            });           

        });
    }

}
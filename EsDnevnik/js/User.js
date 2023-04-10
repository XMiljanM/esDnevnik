class User {
    username = '';
    password = '';
    api = 'https://642acfce00dfa3b5474fc5c7.mockapi.io/';

    logout() {
        let session = new Session();
        session.destroySession();
        window.location.href = '/';
    }

    setInfo() {
        let session = new Session();
        session = session.getSession();

        fetch(this.api + '/teachers/' + session)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#usernameInfo').innerText = data.username;
        });
    }

    checkLogin() {
        return fetch(this.api + '/teachers')
        .then(response => response.json())
        .then(data => {
            for(let db_user of data) {
                if(db_user.username === this.username && db_user.password === this.password) {
                    return true;                 
                } 
                else {
                    return false;
                }
            }
        });
    }

  checkRegister() {
    return fetch(this.api + '/teachers')
    .then(response => response.json())
    .then(data => {
        if(Object.keys(data).length === 0) {
            return true;
        }
        for(let db_user of data) {
            if(db_user.username === this.username) {
                return false;
            } else {
                return true;
            }
        }
    })
  }


    login() {
        fetch(this.api + '/teachers')
        .then(response => response.json())
        .then(data => {
            for(let db_user of data) {
                if(db_user.username === this.username && db_user.password === this.password) {
                    let session = new Session();
                    session.user_id = db_user.id;
                    session.startSession();
                    window.location.href = 'esdnevnik.html';                   
                } 
            }
        });
    }

    register() {
        let data = {
            username: this.username,
            password: this.password
        };
        data = JSON.stringify(data);

        fetch(this.api + '/teachers', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: data
        })
        .then(response => response.json())
        .then(data => {
            let session = new Session();
            session.user_id = data.id;
            session.startSession();
            window.location.href = 'esdnevnik.html';
        });
    }
}
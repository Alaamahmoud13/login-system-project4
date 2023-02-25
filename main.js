function logIn() {
    let email = document.getElementById('EmailInput').value;
    let password = document.getElementById('PasswordInput').value;
    let dataUsers = getDataUsers().filter(x => x.uEmail == email && x.pwd == password);
    if (password && email && dataUsers.length > 0) {
        let objuser = { uName: dataUsers[0].uName, uEmail: email }
        if (localStorage.getItem('logInData')) {
            localStorage.removeItem('logInData')
        }
        localStorage.setItem('logInData', JSON.stringify(objuser));
        document.getElementById('PasswordInput').value = ''
        document.getElementById('EmailInput').value = ''
        location.replace(location.origin + '/home.html')
    } else {
        document.getElementById('lblmsg').innerHTML = 'your Email and Password Is not Valid'
    }
}
function getDataUsers() {
    return localStorage.getItem('DataUsers') ? JSON.parse(localStorage.getItem('DataUsers')) : []
}
function logOut() {
    localStorage.removeItem('logInData')
    location.replace(location.origin + '/singin.html')

}
function register() {
    let userName = document.getElementById('UserNameInput').value;
    let email = document.getElementById('UserEmailInput').value;
    let password = document.getElementById('PasswordInput').value;
    let dataUsers = getDataUsers();
    if (userName && email && password) {
        if (!(dataUsers.filter(x => x.uEmail == email).length > 0)) {
            let objuser = { uName: userName, uEmail: email, pwd: password }
            dataUsers.push(objuser)
            localStorage.setItem('DataUsers',JSON.stringify(dataUsers));
            document.getElementById('UserNameInput').value = ''
            document.getElementById('PasswordInput').value = ''
            document.getElementById('UserEmailInput').value = ''
            document.getElementById('lblmsg').style = 'color:#fff;text-alige:center'
            document.getElementById('lblmsg').innerHTML = 'Register Successed'
        } else {
            document.getElementById('lblmsg').style = 'color:red;text-alige:center'
            document.getElementById('lblmsg').innerHTML = 'You already have an account'
        }
    }
}
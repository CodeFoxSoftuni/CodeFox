import requester from './requester';
import observer from './observer';

const user = (function () {
    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authToken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);

        observer.onSessionUpdate();
    }

    function register(username, password, callback) {
        requester.registerUser(username, password).then(registerSuccess)
            .catch((err) => callback(false));

        function registerSuccess(userInfo) {
            observer.showSuccess('Successful registration.');
            saveSession(userInfo);
            callback(true);
        }
    }

    function login(username, password, callback) {
        requester.loginUser(username, password).then(loginSuccess)
            .catch((err) => callback(false));

        function loginSuccess(userInfo) {
            saveSession(userInfo);
            callback(true);
        }
    }

    function logout(callback) {
        requester.logoutUser().then(logoutSuccess);

        function logoutSuccess(response) {
            sessionStorage.clear();
            observer.onSessionUpdate();
            callback(true);
        }
    }

    return {saveSession, register, login, logout};
})();

export default user;
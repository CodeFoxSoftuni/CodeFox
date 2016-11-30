class UserController {
    constructor(model, view, app) {
        this.model = model;
        this.view = view;
        this.app = app;
    }

    registerUser(username, password) {
        this.model.register(username, password)
            .then(registerSuccess.bind(this));

        function registerSuccess(userInfo) {
            this.view.showHomeView();
            this.saveAuthInSession(userInfo);
            this.view.showInfo("User registration successful.");
        }
    }

    loginUser(username, password) {
        this.model.login(username, password)
            .then(loginSuccess.bind(this));

        function loginSuccess(userInfo) {
            this.view.showHomeView();
            this.saveAuthInSession(userInfo);
            this.view.showInfo("User logged in successfully");
        }
    }

    loadRegisterView() {
        this.view.showRegisterView(this.registerUser.bind(this));
    }

    loadLoginView() {
        this.view.showLoginView(this.loginUser.bind(this));
    }

    saveAuthInSession(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('username', userInfo.username);

        // This will update the entire app UI (e.g. the navigation bar)
        this.app.setState({
            username: userInfo.username,
            userId: userInfo._id
        });
    }

    logoutUser() {
        this.model.logout();
        sessionStorage.clear();
        this.app.setState({username: null, userId: null});
        this.view.showHomeView();
        this.view.showInfo('Logout successful.');
    }
}

export default UserController;
class UsersModel {
    constructor(requester) {
        this.requester = requester;
    }

    register(username, password) {
        return this.requester.registerUser(username, password);
    }

    login(username, password) {
        return this.requester.loginUser(username, password);
    }

    logout() {
        return this.requester.logoutUser();
    }
}


export default UsersModel;
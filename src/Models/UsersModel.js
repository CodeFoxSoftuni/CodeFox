class UsersModel {
    constructor(baseUrl, appKey, requester, authorizationService) {
        this.baseUrl = baseUrl;
        this.appKey = appKey;
        this.requester = requester;
        this.authorizationService = authorizationService;
    }

    registerUser(username, password) {
        return this.requester.registerUser(username, password);
    }
}


export default UsersModel;
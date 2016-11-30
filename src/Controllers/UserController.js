class UserController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    register() {
        this.model.register()
            .then(function (userInfo) {
                //TODO: handle the register server success response
                this.view.showHomeView();
                this.view.saveAuthInSession(userInfo);
                this.view.showInfo("User registration successful.");

            })
            .catch(function (err) {
                //TODO: handle the register server error response
                alert('reg error')
            })
    }
}

export default UserController;
class MessageController {
    constructor(model, view, app) {
        this.model = model;
        this.view = view;
        this.app = app;
    }

    createMessage(sender,receiver,message) {
        this.model.create(sender,receiver,message)
            .then(createMessageSuccess.bind(this));

        function createMessageSuccess(response) {
            this.app.showMyMessageView();   // TODO: ...
            this.app.showInfo("Message was sent successfully."); // TODO: Info box not showing after successful query
        }
    }

    loadMessages() {
        let _self = this;
        this.model.loadMessages()
            .then(loadMessageSuccess);

            this.model.loadMessages()
                .then(loadMessageSuccess);

        function loadMessageSuccess(response) {
            _self.app.showMyMessageView(response);
        }
    }

    loadSingleMessage(id) {
        let _self = this;
        this.model.viewSingleMessage(id)
            .then(loadSingleMessageSuccess);

        function loadSingleMessageSuccess(response) {
            _self.app.showDetailedMessage(response);
        }
    }

}

export default MessageController;
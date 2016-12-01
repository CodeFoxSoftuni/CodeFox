class OfferController {
    constructor(model, view, app) {
        this.model = model;
        this.view = view;
        this.app = app;
    }

    createOffer(itemType, image, description) {
        console.log(this.model);
        this.model.create(itemType, image, description) //TODO: here model == undefined, when create offer is clicked
            .then(registerSuccess.bind(this));

        function registerSuccess(response) {
            this.view.showHomeView(); // TODO: Navigate to details page for this offer
            this.view.showInfo("Offer created successfully.");
        }
    }
}

export default OfferController;
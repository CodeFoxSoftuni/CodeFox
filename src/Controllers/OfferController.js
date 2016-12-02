class OfferController {
    constructor(model, view, app) {
        this.model = model;
        this.view = view;
        this.app = app;
    }

    createOffer(itemType, category, image, description, price) {
        this.model.create(itemType, category, image, description, price)
            .then(registerSuccess.bind(this));
        function registerSuccess() {
            this.app.showAllOffersView(); // TODO: returns Exeption this.app.showAllOffersView() is not a function
            this.app.showInfo("Offer created successfully."); // TODO: Not working
        }
    }
}

export default OfferController;
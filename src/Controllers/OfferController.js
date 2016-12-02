class OfferController {
    constructor(model, view, app) {
        this.model = model;
        this.view = view;
        this.app = app;
    }

    createOffer(itemType, category, image, description, price) {
        this.model.create(itemType, category, image, description, price)
            .then(createOfferSuccess.bind(this));
        function createOfferSuccess(response) {
            this.app.showAllOffersView();
            this.app.showInfo("Offer created successfully."); // TODO: Info box not showing after successful query
        }
    }
}

export default OfferController;
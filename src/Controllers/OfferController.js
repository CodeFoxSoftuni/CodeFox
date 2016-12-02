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

    loadOffers(category) {
        let _self = this;
        if(typeof category === 'string') {
            this.model.loadOffers(category)
                .then(loadOffersSuccess);
        } else {
            this.model.loadOffers()
                .then(loadOffersSuccess);
        }


        function loadOffersSuccess(response) {
            _self.app.showAllOffersView(response);
        }
    }

    loadSingleOffer(id) {
        let _self = this;
        this.model.viewDetailed(id)
            .then(loadSingleOfferSuccess);

        function loadSingleOfferSuccess(response) {
            _self.app.showDetailedOffer(response);
        }
    }
}

export default OfferController;
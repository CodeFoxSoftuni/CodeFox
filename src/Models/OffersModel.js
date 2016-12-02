class OffersModel {
    constructor(requester) {
        this.requester = requester;
    }

    create(itemType, category, image, description, price) {
        return this.requester.createClothAdv(itemType, category, image, description, price);
    }

    viewDetailed(id){
        return this.requester.findSingleCloth(id);
    }

    loadOffers(){
        return this.requester.findAllClothes();
    }
}


export default OffersModel;
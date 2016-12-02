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

    loadOffers(category){
        if(category != null){
            return this.requester.findAllClothes(category);
        }
        return this.requester.findAllClothes();
    }
}


export default OffersModel;
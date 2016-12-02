class OffersModel {
    constructor(requester) {
        this.requester = requester;
    }

    create(itemType, category, image, description, price) {
        return this.requester.createClothAdv(itemType, category, image, description, price);
    }

    viewDetailed(){
        //TODO: Implement details page
    }
}


export default OffersModel;
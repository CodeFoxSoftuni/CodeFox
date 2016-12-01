class OffersModel {
    constructor(requester) {
        this.requester = requester;
    }

    create(itemType, image, description) {
        return this.requester.createClothAdv(itemType, image, description);
    }

    viewDetailed(){
        //TODO: Implement details page
    }
}


export default OffersModel;
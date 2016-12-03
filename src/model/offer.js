import requester from './requester';
import observer from './observer';

const offer = (function () {
    function create(itemType, category, image, description, price) {
        return requester.createClothAdv(itemType, category, image, description, price);
    }

    function viewDetailed(id) {
        return requester.findSingleCloth(id);
    }

    function loadOffers(category) {
        if (category != null) {
            return requester.findAllClothes(category);
        }
        else {
            return requester.findAllClothes();
        }
    }

    return {create, viewDetailed, loadOffers};
})();

export default offer;
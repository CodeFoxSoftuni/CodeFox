import $ from 'jquery';

const DatabaseRequester = (function () {
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_rJ88qjizg";
    const appSecret = "78c1d377b95946b1b7f7f4f04f5e275a";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(appKey + ":" + appSecret),
    };

    function loginUser(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/login",
            headers: kinveyAppAuthHeaders,
            data: {username, password}
        });
    }

    function registerUser(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/",
            headers: kinveyAppAuthHeaders,
            data: {username, password}
        });
    }

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }

    function getUserId() {
        return sessionStorage.getItem('userId');
    }

    function logoutUser() {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/_logout",
            headers: getKinveyUserAuthHeaders(),
        });
    }

    function findAllBooks() {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/books",
            headers: getKinveyUserAuthHeaders()
        });
    }

    function findAllClothes(category) {
        if(category != null){
            let query = '?query='+ JSON.stringify({category:category});
            return $.ajax({
                method: "GET",
                url: baseUrl + "appdata/" + appKey + '/clothes/' + query,
                headers: getKinveyUserAuthHeaders()
            });
        }
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/clothes",
            headers: getKinveyUserAuthHeaders()
        });
    }

    function findSingleCloth(id) {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/clothes/" + id,
            headers: getKinveyUserAuthHeaders()
        });
    }

    function createClothAdv(itemType, category, image, description, price) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appKey + "/clothes",
            headers: getKinveyUserAuthHeaders(),
            data: {itemType, category, image, description, price}
        });
    }


    function deleteBook(bookId) {
        return $.ajax({
            method: "DELETE",
            url: baseUrl + "appdata/" + appKey + "/books/" + bookId,
            headers: getKinveyUserAuthHeaders()
        });
    }

    function findMyOffersOnly() {
        let query = '?query='+ JSON.stringify({"_acl.creator":getUserId()});
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + '/clothes/' + query,
            headers: getKinveyUserAuthHeaders()
        });
    }
    function editMyAccountInfo(photo) {
        return $.ajax({
            method: "PUT",
            url: baseUrl + "user/" + appKey + '/' + getUserId(),
            headers: getKinveyUserAuthHeaders(),
            data: {"photo": photo}
        });
    }

    // messages
    function createMessage(sender,receiver,message) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appKey + "/messages",
            headers: getKinveyUserAuthHeaders(),
            data: {sender,receiver,message}
        });
    }

    function findSingleMessage(id) {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/messages/" + id,
            headers: getKinveyUserAuthHeaders()
        });
    }


    function FindMessagesInbox() {
        let query = '?query='+ JSON.stringify({"receiver":getUserId()});
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + '/messages/' + query,
            headers: getKinveyUserAuthHeaders()
        });
    }
    function FindMessagesOutbox() {
        let query = '?query=' + JSON.stringify({"sender": getUserId()});
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + '/messages/' + query,
            headers: getKinveyUserAuthHeaders()
        });
    }

    return {
        loginUser, registerUser, logoutUser, findAllBooks,
        findAllClothes, findSingleCloth, createClothAdv, deleteBook, findMyOffersOnly, editMyAccountInfo,createMessage,findSingleMessage,FindMessagesInbox,FindMessagesOutbox
    }
})();

export default DatabaseRequester;


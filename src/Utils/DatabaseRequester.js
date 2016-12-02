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

    function findAllCars() {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/cars",
            headers: getKinveyUserAuthHeaders()
        });
    }
    // For more categories of products add here method findAll<category>()
    // and below a method create<category>Adv()

    function createBookAdv(title, author, description) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appKey + "/books",
            headers: getKinveyUserAuthHeaders(),
            data: {title, author, description}
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

    function createCarAdv(title, author, description) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appKey + "/cars",
            headers: getKinveyUserAuthHeaders(),
            data: {title, author, description}
        });
    }

    function editBook(bookId, title, author, description) {
        return $.ajax({
            method: "PUT",
            url: baseUrl + "appdata/" + appKey + "/books/" + bookId,
            headers: getKinveyUserAuthHeaders(),
            data: {title, author, description}
        });
    }

    function deleteBook(bookId) {
        return $.ajax({
            method: "DELETE",
            url: baseUrl + "appdata/" + appKey + "/books/" + bookId,
            headers: getKinveyUserAuthHeaders()
        });
    }

    return {
        loginUser, registerUser, logoutUser,
        findAllBooks, createBookAdv, findAllClothes, createClothAdv, findAllCars, createCarAdv, editBook, deleteBook, findSingleCloth
    }
})();

export default DatabaseRequester;


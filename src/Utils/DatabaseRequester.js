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

    function findAllClothes() {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/clothes",
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

    function createClothAdv(itemType, image, description) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appKey + "/clothes",
            headers: getKinveyUserAuthHeaders(),
            data: {itemType, image, description}
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
        findAllBooks, createBookAdv, findAllClothes, createClothAdv, findAllCars, createCarAdv, editBook, deleteBook
    }
})();

export default DatabaseRequester;


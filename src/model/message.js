import requester from './requester';
import observer from './observer';

const message = (function () {
    function create(sender,receiver,message) {
        return requester.createMessage(sender,receiver,message);
    }

    function viewSingleMessage(id) {
        return requester.findSingleMessage(id);
    }


    function loadMyMessagesInbox() {
        return requester.FindMessagesInbox();
    }

    function LoadMyMessagesOutbox() {
        return requester.FindMessagesOutbox();
    }

    return {create, viewSingleMessage, loadMyMessagesInbox, LoadMyMessagesOutbox};
})();

export default message;
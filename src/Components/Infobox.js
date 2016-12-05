import React, {Component} from 'react';
import $ from 'jquery';
import observer from '../model/observer';


export default class Infobox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            style: 'info',
            visible: false
        };
        this.bindEventHandlers();

        // Register in the observer
        observer.showInfo = this.showInfo.bind(this);
        observer.showSuccess = this.showSuccess.bind(this);
        observer.showError = this.showError.bind(this);
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.ajaxStart = this.ajaxStart.bind(this);
        this.hide = this.hide.bind(this);
        this.handleAjaxError = this.handleAjaxError.bind(this);
    }

    componentDidMount() {
        // Attach global AJAX "loading" event handlers
        $(document).on({
            ajaxStart: this.ajaxStart,
            ajaxStop: (() => {
                if (this.state.style === 'info') this.hide();
            })
        });

        // Attach a global AJAX error handler
        $(document).ajaxError(this.handleAjaxError.bind(this));
    }

    ajaxStart() {
        this.setState({message: 'Loading...', style: 'info', visible: true});
    }

    hide() {
        this.setState({visible: false});
    }

    handleAjaxError(event, response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        this.showError(errorMsg);
    }

    showInfo(message) {
        this.setState({message: message, style: 'info', visible: true});
        setTimeout(this.hide, 3000);
    }

    showSuccess(message) {
        this.setState({message: message, style: 'success', visible: true});
        setTimeout(this.hide, 3000);
    }

    showError(errorMsg) {
        this.setState({message: errorMsg, style: 'error', visible: true});
        setTimeout(this.hide, 5000);
    }

    render() {
        if (!this.state.visible) return null;

        let className = '';
        if (this.state.style === 'error') {
            className = 'error';
        }

        return (
            <div id="infoBox" className={className}>
                <span>
                    {this.state.message}
                </span>
            </div>
        )
    }
}

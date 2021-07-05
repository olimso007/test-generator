import React, {Component} from 'react';
import logoIcon from '../../img/muni-logo.png';
import './Header.css';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessage: false
        }
    }

    onButtonClickHandler = () => {
        const show = this.state.showMessage;
        this.setState({showMessage: !show})
    }

    helpMessage = "You need to download an XML file, which contains several topics and questions. Then choose how many questions do you want to have from each topic. Then press generate and as a result, you will get a PDF file for the exam.";
    
    render() {
        return (
        
        <div className="header">
            <img className="logo" src={logoIcon}></img>
            <h2 className="app-name">Exam questions generator</h2>
        </div>
        );
    }
};
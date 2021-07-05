import React, {Component} from 'react';
import './Help.css';
import icon from './../../img/otaznik.png';


export class Help extends Component {

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

    helpMessage = "You need to download an XML file, which contains several topics and questions.\nThen choose how many questions do you want to have from each topic. Then press generate and as a result, you will get a PDF file for the exam.";
    
    render() {
        return (
        
        <div className="description">  
                <button className="help"  onClick={this.onButtonClickHandler}> <img alt="button-question" className="img-help" src={icon}/> </button>
                <div className={(this.state.showMessage) ? "text-help" : "hide"} > {this.state.showMessage && <p>{this.helpMessage}</p>}</div>
        </div>
        );
    }
}
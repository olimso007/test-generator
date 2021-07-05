import React, {Component} from 'react';
import {Generator} from "../../utils/Generator";
import './Generate.css'

export class Generate extends Component{


    generateTest(xml, questions, setTest) {
        Generator.generateTest(xml, questions, setTest)
    }

    render() {
        return (
            <div className={(this.props.show) ? "generate" : "hide" }>
                <span className="uppercase">2) Generate questions for exam</span>
                <button type="button" className="styled-button uppercase" onClick={() => {this.generateTest(this.props.xml, this.props.questionsSelected, this.props.setTest)}}>Generate Test</button>
            </div>
        );
    }
}
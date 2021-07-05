import React, {Component} from 'react';
import './ThemeSelector.css'

export class ThemeSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: 0
        }
    }

    onChangeHandler=event=>{
        this.setState({
            questions: event.target.value
        })
        this.props.setQuestion(this.props.qID, event.target.value)
    }


    render() {
        return (
            <div className="select-topic">
                <span>{this.props.themeName}: </span>
                <input type='number' min='0' value={this.state.questions} max={this.props.maxQuestions} onChange={this.onChangeHandler} />
            </div>
        )
    }


}
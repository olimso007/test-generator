import React, {Component} from 'react';
import {ThemeSelector} from "./ThemeSelector/ThemeSelector";
import "./Body.css"

export class Body extends Component {
    render() {
        return (
            <div className={(this.props.show) ? "body" : "hide" }>
                {this.props.themes.map((theme, index) => {
                    return <div key={theme.attributes.name}>
                        <ThemeSelector themeName={theme.attributes.name} maxQuestions={theme.children.length} qID={index} setQuestion={this.props.selectedQuestionsSet}/>
                        </div>
                })}
            </div>
        );
    }
}
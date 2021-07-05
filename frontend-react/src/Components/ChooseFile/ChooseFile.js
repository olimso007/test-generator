import React, { Component } from 'react';
import './ChooseFile.css';

export class ChooseFile extends Component{

    onChangeHandler=event=>{
        this.props.setFile(event.target.files[0])
    }


    render() {return (
        <div className="choose-file">
            <span className="uppercase">1) Choose XML file with themes and questions  </span>
            <label className="styled-button uppercase">
                <input type="file" name="file" accept="text/xml" onChange={this.onChangeHandler}/>
                choose file
            </label>
        </div>
    );
    }
};
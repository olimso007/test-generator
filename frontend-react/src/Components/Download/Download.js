import React, {Component} from "react";
import './Download.css'
import {Downloader} from "../../utils/Downloader";

export class Download extends Component{
    downloadTest(questions) {
        Downloader.downloadFile(questions)
    }

    render() {
        return (
            <div className={(this.props.show) ? "download" : "hide" }>
                <span className="uppercase">3) Download generated questions</span>
                <button className="styled-button uppercase" onClick={() => {this.downloadTest(this.props.text)}}>Download</button>
            </div>
        );
    }
}
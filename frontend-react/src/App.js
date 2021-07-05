import './App.css';
import {Header} from './Components/Header/Header';
import {ChooseFile} from './Components/ChooseFile/ChooseFile'
import {Body} from './Components/Body/Body'
import {Generate} from './Components/Generate/Generate'
import {Component} from "react";
import {Parser} from "./utils/Parser"
import {Download} from "./Components/Download/Download";
import {Help} from "./Components/Help/Help";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileXML: null,
            questionsSelected: null,
            generatedTest: null
        }
    }

    readFile = (file) => {
        Parser.readFile(file, (xml) => {
            this.setState({
                fileXML: xml
            })
        })
    }

    questionsSelectedSet = (qID, count) => {
        let selected = this.state.questionsSelected
        selected[qID] = count
        this.setState({
            questionsSelected: selected
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state !== prevState) {
            if (prevState.questionsSelected === null && this.state.fileXML !== null) {
                this.setState({
                    questionsSelected: new Array(this.state.fileXML.children.length).fill(0)
                })
            }
        }
    }


    render() {
        return (
            <div className="App">
                <Header />
                <div className="container">
                    <div className="app-body">
                    <ChooseFile setFile = {this.readFile} />
                    <Body show={this.state.fileXML !== null}
                          themes={(this.state.fileXML === null) ? [] : this.state.fileXML.children}
                          selectedQuestionsSet={this.questionsSelectedSet}/>
                    <Generate show={this.state.fileXML !== null}
                              xml={(this.state.fileXML === null) ? {} : this.state.fileXML}
                              questionsSelected={this.state.questionsSelected}
                              setTest={(test) => {this.setState({generatedTest: test})}}/>
                    <Download show={this.state.generatedTest !== null} text={(this.state.generatedTest === null) ? "" : this.state.generatedTest}/>
                    </div>
                    <Help />
                </div>
            </div>
        );
    }

}
export default App;

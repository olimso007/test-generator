let XMLParser = require('react-xml-parser');

export class Parser {

    static readFile(file, setFunction) {
        const reader = new FileReader()
        if (file === null) {
            return;
        }
        reader.readAsText(file);
        reader.onloadend = async (file) => {
            let xml = Parser.parseXML(reader.result)
            setFunction(xml)
        }
    }

    static parseXML(xmlText) {
        let xml = new XMLParser().parseFromString(xmlText)
        return xml;
    }
}

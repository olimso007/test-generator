export class Generator {
    static generateTest(xml, selected, setTest) {
        var questions = xml.children;
        var text = xml.attributes["code"] + "\n\n\n";
        var quest_num = 1;
        var i;
        for (i = 0; i < selected.length; i++) {
            var arr = [];
            var maximum = selected[i];
            if (maximum > questions[i].children.length){
                maximum = questions[i].children.length;
            }
            while(arr.length < maximum){
                var r = Math.floor(Math.random() * questions[i].children.length);
                if(arr.indexOf(r) === -1) arr.push(r);
            }
            var k;
            for (k = 0; k < arr.length; k++){
                text += quest_num + ") " + questions[i].children[arr[k]].value
                    + "  (" +  questions[i].children[arr[k]].attributes["points"] + "points)\n\n";
                quest_num += 1;
            }
        }
        
        setTest(text);
    }
}
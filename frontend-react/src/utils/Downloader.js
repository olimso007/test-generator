import JsPDF from "jspdf";


export class Downloader {
    static downloadFile(questions) {
        var doc = new JsPDF()
        var splitText = doc.splitTextToSize(questions, 180);
        var height = 10;
        for (var i = 0; i < splitText.length; i++) {
            doc.text( splitText[i], 10, height);
            height += 7;
            if ((i + 1) % 41 === 0) {
                doc.addPage();
                height = 10;
            }
        }


        window.open(doc.output('bloburl'))
	}
}
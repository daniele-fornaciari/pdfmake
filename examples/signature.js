var fonts = {
	Roboto: {
		normal: 'fonts/Roboto-Regular.ttf',
		bold: 'fonts/Roboto-Medium.ttf',
		italics: 'fonts/Roboto-Italic.ttf',
		bolditalics: 'fonts/Roboto-MediumItalic.ttf'
	}
};

var pdfmake = require('../js/index');
//var pdfmake = require('../src/index');
pdfmake.setFonts(fonts);


var docDefinition = {
	content: [
		{
			table: {
				body: [
					[ 'Campo di Testo', 'signature', 'text', 'checkbox' ],
					[ {
						text: '1',
					}, {
					    input: {
							type: 'signature',
							name: 'Firma1',
							options: {
								width: 100,
								height: 20
							}
						}
					}, {
					    input: {
							type: 'text',
							name: 'Firma2',
							options: {
								width: 100,
								height: 20
							}
						}
					}, {
					    input: {
							type: 'checkbox',
							name: 'Firma3',
							options: {
								width: 20,
								height: 20
							}
						}
					}]
				]
			}
		}
	],
	styles: {}
};

var _docDefinition = {
	content: [
		{
			input: {
				type: 'signature',
				name: 'Firma3',
				options: {
					width: 100,
					height: 20
				}
			}
		}],
	styles: {}
};

var now = new Date();

var pdf = pdfmake.createPdf(docDefinition);
pdf.write('pdfs/signature.pdf');

console.log(new Date() - now);

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
			"table": {
			        "widths": ["*", 300],
			        "body": [
			            [
			                {
			                    "text": " ",
			                },
			                {
			                    "text": "Milano, 13/05/2020",
			                }
			            ],
			            [
			                {
			                    "text": " ",
			                },
			                {
			                    input: {
			                        type: 'signature',
			                        name: 'FirmaPresaVisione',
			                        options: {
										left: 50,
										top: 30,
			                            width: 300,
			                            height: 50
			                        }
			                    },
			                },
			            ],
			            [
			                {
			                    "text": " ",
			                },
			                {
			                    "text": "Clicca per firmare la presa visione del documento",
			                }
			            ]
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
pdf.write('pdfs/test_signature.pdf');

console.log(new Date() - now);

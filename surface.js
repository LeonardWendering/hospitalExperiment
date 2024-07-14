define(['pipAPI', 'https://leonardwendering.github.io/hospitalExperiment/baseOrg.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
				
			name : 'Internationale Namen', //Will appear in the data.
			title : {
				media : {word : 'Internationale Namen'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Mehmet'},
					{word: 'Aaliyah'},
					{word: 'Hiroshi'},
					{word: 'Abdel'},
					{word: 'Rajesh'},
					{word: 'Jamila'},
					{word: 'Mei'},
					{word: 'Amira'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'}
		},
		category2 :	{
			name : 'Deutsche Namen', //Will appear in the data.
			title : {
				media : {word : 'Deutsche Namen'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Emma'},
					{word: 'Felix'},
					{word: 'Elias'},
					{word: 'Maximilian'},
					{word: 'Moritz'},
					{word: 'Jonas'},
					{word: 'Hannah'},
					{word: 'Laura'}			
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'}
		},
		attribute1 :	{
			name : 'Negative Wörter',
			title : {
				media : {word : 'Negative Wörter'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'furchtbar'},
				{word: 'Versagen'},
				{word: 'Leid'},
				{word: 'verletzt'},
				{word: 'schrecklich'},
				{word: 'entsetzlich'},
				{word: 'fies'},
				{word: 'böse'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Positive Wörter',
			title : {
				media : {word : 'Positive Wörter'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'lachen'},
				{word: 'fröhlich'},
				{word: 'herrlich'},
				{word: 'Freude'},
				{word: 'wunderbar'},
				{word: 'Frieden'},
				{word: 'Vergnügen'},
				{word: 'Liebe'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		leftKeyText : 'Drücken Sie "E" für', 
		rightKeyText : 'Drücken Sie "I" für',
		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		},
		// Add touch-specific instructions in German
	        instAttributePracticeTouch: '<div><p align="center" style="font-size:20px; font-family:arial">' +
	            '<font color="#000000"><u>Teil blockNum von nBlocks </u><br/><br/></p>' +
	            '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
	            'Berühren Sie die <b>linke</b> Seite für Begriffe, die zur Kategorie <font color="#0000ff">leftAttribute</font> gehören.' +
	            '<br/>Berühren Sie die <b>rechte</b> Seite für Begriffe, die zur Kategorie <font color="#0000ff">rightAttribute</font> gehören.<br/><br/>' +
	            'Wenn Sie einen Fehler machen, wird ein rotes <font color="#ff0000"><b>X</b></font> erscheinen. ' +
	            'Berühren Sie die andere Seite zum Fortfahren.<br/>' +
	            '<u>Arbeiten Sie so schnell wie möglich</u> und bleiben dabei exakt.<br/><br/></p>'+
	            '<p align="center">Berühren Sie den <b>unteren</b> grünen Bereich, um zu beginnen.</font></p></div>',
	
	        instCategoriesPracticeTouch: '<div><p align="center" style="font-size:20px; font-family:arial">' +
	            '<font color="#000000"><u>Teil blockNum von nBlocks </u><br/><br/></p>' +
	            '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
	            'Berühren Sie die <b>linke</b> Seite für Begriffe, die zur Kategorie <font color="#336600">leftCategory</font> gehören. ' +
	            '<br/>Berühren Sie die <b>rechte</b> Seite für Begriffe, die zur Kategorie <font color="#336600">rightCategory</font> gehören.<br/>' +
	            'Die Begriffe werden einzeln angezeigt.<br/><br/>' +
	            'Wenn Sie einen Fehler machen, wird ein rotes <font color="#ff0000"><b>X</b></font> erscheinen. ' +
	            'Berühren Sie die andere Seite zum Fortfahren.<br/>' +
	            '<u>Arbeiten Sie so schnell wie möglich</u> und bleiben dabei exakt.<br/><br/></p>'+
	            '<p align="center">Berühren Sie den <b>unteren</b> grünen Bereich, um zu beginnen.</font></p></div>',
	
	        // Add similar touch instructions for other blocks in German
	
	        // Update text elements
	        leftKeyText: 'Berühren Sie LINKS für', 
	        rightKeyText: 'Berühren Sie RECHTS für',
	});
});

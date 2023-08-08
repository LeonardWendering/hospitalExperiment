define(['pipAPI', 'https://leonardwendering.github.io/hospitalExperiment/baseOrg.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Internationale Namen', //Will appear in the data.
			title : {
				media : {word : 'Internationale Namen'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
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
		},	
		category2 :	{
			name : 'Traditionell deutsche Namen', //Will appear in the data.
			title : {
				media : {word : 'Traditionell deutsche Namen'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
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
					{word: 'Laura'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'}
		},

		attribute1 :
			{
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
					{word: 'furchtbar'},
					{word: 'schrecklich'},
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

	});
});

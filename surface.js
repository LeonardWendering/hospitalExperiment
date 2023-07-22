define(['pipAPI', 'https://leonardwendering.github.io/hospitalExperiment/baseOrg.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Dunkelhäutige Menschen', //Will appear in the data.
			title : {
				media : {word : 'Dunkelhäutige Menschen'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'black1.jpg'}, 
    			{image : 'black2.jpg'}, 
    			{image : 'black3.jpg'}, 
    			{image : 'black4.jpg'}, 
    			{image : 'black5.jpg'}, 
    			{image : 'black6.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Hellhäutige Menschen', //Will appear in the data.
			title : {
				media : {word : 'Hellhäutige Menschen'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'yf1.jpg'}, 
    			{image : 'yf4.jpg'}, 
    			{image : 'yf5.jpg'}, 
    			{image : 'ym2.jpg'}, 
    			{image : 'ym3.jpg'}, 
    			{image : 'ym5.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
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
		
		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		},
		//nBlocks : 7, This is not-supported anymore. If you want a 5-block IAT, change blockSecondCombined_nTrials to 0.
		////In each block, we can include a number of mini-blocks, to reduce repetition of same group/response.
		////If you set the number of trials in any block to 0, that block will be skipped.
		blockAttributes_nTrials : 20,
		blockAttributes_nMiniBlocks : 5,
		blockCategories_nTrials : 20,
		blockCategories_nMiniBlocks : 5,
		blockFirstCombined_nTrials : 20,
		blockFirstCombined_nMiniBlocks : 5,
		blockSecondCombined_nTrials : 40, //Change to 0 if you want 5 blocks (you would probably want to increase blockFirstCombined_nTrials).
		blockSecondCombined_nMiniBlocks : 10, 
		blockSwitch_nTrials : 28,
		blockSwitch_nMiniBlocks : 7,


		//Should we randomize which attribute is on the right, and which on the left?
		randomAttSide : false, // Accepts 'true' and 'false'. If false, then attribute2 on the right.

		//Should we randomize which category is on the right first?
		randomBlockOrder : true, //Accepts 'true' and 'false'. If false, then category1 on the left first.
		//Note: the player sends block3Cond at the end of the task (saved in the explicit table) to inform about the categories in that block.
		//In the block3Cond variable: "att1/cat1,att2/cat2" means att1 and cat1 on the left, att2 and cat2 on the right.

		//Show a reminder what to do on error, throughout the task
		remindError : true,

		remindErrorText : '<p align="center" style="font-size:"0.6em"; font-family:arial">' +
		'Wenn Sie einen Fehler machen, erscheint ein rotes <font color="#ff0000"><b>X</b></font>. ' +
		'Drücken Sie die andere Taste, um fortzufahren.<p/>',

		remindErrorTextTouch : '<p align="center" style="font-size:"1.4em"; font-family:arial">' +
		'Wenn Sie einen Fehler machen, erscheint ein rotes <font color="#ff0000"><b>X</b></font>. ' +
		'Berühren Sie die andere Seite, um fortzufahren.<p/>',

		errorCorrection : true, //Should participants correct error responses?
		errorFBDuration : 500, //Duration of error feedback display (relevant only when errorCorrection is false)
		ITIDuration : 250, //Duration between trials.

		fontColor : '#000000', //The default color used for printed messages.
		
		//Text and style for key instructions displayed about the category labels.
		leftKeyText : 'Drücke "E" um', 
		rightKeyText : 'Drücke "I" um', 
		keysCss : {'font-size':'0.8em', 'font-family':'courier', color:'#000000'},
		//Text and style for the separator between the top and bottom category labels.
		orText : 'or', 
		orCss : {'font-size':'1.8em', color:'#000000'},
		
		instWidth : 99, //The width of the instructions stimulus
    
		finalText : 'Drücke Leertaste, um mit der nächsten Aufgabe weiterzumachen', 
		finalTouchText : 'Berühren Sie den unteren grünen Bereich, um mit der nächsten Aufgabe fortzufahren',

		touchMaxStimulusWidth : '50%', 
		touchMaxStimulusHeight : '50%', 
		bottomTouchCss: {}, //Add any CSS value you want for changing the css of the bottom touch area.

		//Instructions text.
		// You can use the following variables and they will be replaced by
		// the name of the categories and the block's number variables:
		// leftCategory, rightCategory, leftAttribute and rightAttribute, blockNum, nBlocks.
		// Notice that this is HTML text.
		instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Teil blockNum von nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
			'Legen Sie einen linken Finger auf die <b>E</b>-Taste für Elemente, die zur Kategorie <font color="#0000ff">leftAttribute.</font> gehören.' +
			'<br/>Legen Sie einen rechten Finger auf die <b>I</b>-Taste für Elemente, die zur Kategorie <font color="#0000ff">>rightAttribute</font> gehören.<br/><br/>' +
			'Wenn Sie einen Fehler machen, erscheint ein rotes <font color="#ff0000"><b>X</b></font>. ' +
			'Drücken Sie die andere Taste, um fortzufahren.<br/>' +
			'<u>Gehen Sie so schnell wie möglich</u>, während Sie genau sind.<br/><br/></p>'+
			'<p align="center">Drücken Sie die <b>Leertaste</b>, wenn Sie bereit sind zu starten.</font></p></div>',

		instAttributePracticeTouch: [
			'<div>',
				'<p align="center">',
					'<u>Teil blockNum of nBlocks</u>',
				'</p>',
				'<p align="left" style="margin-left:5px">',
					'<br/>',
					'Legen Sie einen linken Finger über den <b>linken</b> grünen Bereich für Elemente, die zur Kategorie <font color="#0000ff">leftAttribute</font> gehören.<br/>',
					'Legen Sie einen rechten Finger über den <b>rechten</b> grünen Bereich für Elemente, die zur Kategorie <font color="#0000ff">rightAttribute</font> gehören.<br/>',
					'Die Elemente erscheinen einzeln.<br/>',
					'<br/>',
					'Wenn Sie einen Fehler machen, erscheint ein rotes <font color="#ff0000"><b>X</b></font>. Berühren Sie die andere Seite. <u>Gehen Sie so schnell wie möglich</u>, während Sie genau sind.'
				'</p>',
				'<p align="center">Berühren Sie den <b>lower </b> grünen Bereich zum starten.</p>',
			'</div>'
		].join('\n'),

		instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +		
			'<font color="#000000"><u>Teil blockNum von nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
			'Legen Sie einen linken Finger auf die <b>E</b>-Taste für Elemente, die zur Kategorie <font color="#336600">leftCategory</font> gehören. ' +
			'<br/>Legen Sie einen rechten Finger auf die <b>I</b>-Taste für Elemente, die zur Kategorie <font color="#336600">rightCategory</font> gehören.<br/>' +
			'Die Elemente erscheinen einzeln.<br/><br/>' +
			'Wenn Sie einen Fehler machen, erscheint ein rotes <font color="#ff0000"><b>X</b></font>. ' +
			'Drücken Sie die andere Taste, um fortzufahren.<br/>' +
			'<u>Gehen Sie so schnell wie möglich</u>, während Sie genau sind.<br/><br/></p>'+
			'<p align="center">Drücken Sie die <b>Leertaste</b>, wenn Sie bereit sind zu starten.</font></p></div>',

		instCategoriesPracticeTouch: [
			'<div>',
				'<p align="center">',
					'<u>Teil blockNum of nBlocks</u>',
				'</p>',
				'<p align="left" style="margin-left:5px">',
					'<br/>',
					'Legen Sie einen linken Finger über den <b>linken</b> grünen Bereich für Elemente, die zur Kategorie <font color="#336600">leftCategory</font> gehören.<br/>',
					'Legen Sie einen rechten Finger über den <b>rechten</b> grünen Bereich für Elemente, die zur Kategorie <font color="#336600">rightCategory</font> gehören.<br/>',
					'Die Elemente erscheinen einzeln.<br/>',
					'<br/>',
					'Wenn Sie einen Fehler machen, erscheint ein rotes <font color="#ff0000"><b>X</b></font>. Berühren Sie die andere Seite. <u>Gehen Sie so schnell wie möglich</u>, während Sie genau sind.'

				'</p>',
				'<p align="center">Berühren Sie den <b>lower </b> grünen Bereich zum Starten.</p>',
			'</div>'
		].join('\n'),

		instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Teil blockNum von nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
			'Benutzen Sie die <b>E</b>-Taste für <font color="#336600">leftCategory</font> und für <font color="#0000ff">leftAttribute</font>.<br/>' +
			'Benutzen Sie die <b>I</b>-Taste für <font color="#336600">rightCategory</font> und für <font color="#0000ff">rightAttribute</font>.<br/>' +
			'Jedes Element gehört nur zu einer Kategorie.<br/><br/>' +
			'Wenn Sie einen Fehler machen, erscheint ein rotes <font color="#ff0000"><b>X</b></font>. ' +
			'Drücken Sie die andere Taste, um fortzufahren.<br/>' + 
			'<u>Gehen Sie so schnell wie möglich</u>, während Sie genau sind.<br/><br/></p>' +
			'<p align="center">Drücken Sie die <b>Leertaste</b>, wenn Sie bereit sind zu starten.</font></p></div>',

		instFirstCombinedTouch:[
			'<div>',
				'<p align="center">',
					'<u>Teil blockNum of nBlocks</u>',
				'</p>',
				'<br/>',
				'<br/>',
				'<p align="left" style="margin-left:5px">',
					'Legen Sie einen linken Finger über den <b>linken</b> grünen Bereich für Elemente der <font color="#336600">linkenKategorie</font> und für <font color="#0000ff">leftAttribute</font>.</br>',
					'Legen Sie einen rechten Finger über den <b>rechten</b> grünen Bereich für Elemente der <font color="#336600">rechtenKategorie</font> und für <font color="#0000ff">rightAttribute</font>.</br>',
					'Wenn Sie einen Fehler machen, erscheint ein rotes <font color="#ff0000"><b>X</b></font>. Berühren Sie die andere Seite. <u>Gehen Sie so schnell wie möglich</u>, während Sie genau sind.</br>',
					'</p>',
					'<p align="center">Berühren Sie den <b>unteren</b> grünen Bereich, um zu starten.</p>',
			'</div>'
		].join('\n'),

		instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Teil blockNum von nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
			'Dies ist das Gleiche wie der vorherige Teil.<br/>' +
			'Benutzen Sie die <b>E</b>-Taste für <font color="#336600">leftCategory</font> und für <font color="#0000ff">leftAttribute</font>.<br/>' +
			'Benutzen Sie die <b>I</b>-Taste für <font color="#336600">rightCategory</font> und für <font color="#0000ff">rightAttribute</font>.<br/>' +
			'Jedes Element gehört nur zu einer Kategorie.<br/><br/>' +
			'<u>Gehen Sie so schnell wie möglich</u>, während Sie genau sind.<br/><br/></p>' +
			'<p align="center">Drücken Sie die <b>Leertaste</b>, wenn Sie bereit sind zu starten.</font></p></div>',

		instSecondCombinedTouch:[
			'<div>',
				'<p align="center"><u>Teil blockNum of nBlocks</u></p>',
				'<br/>',
				'<br/>',

				'<p align="left" style="margin-left:5px">',
					'Legen Sie einen linken Finger über den <b>linken</b> grünen Bereich für Elemente der <font color="#336600">linkenKategorie</font> und für <font color="#0000ff">leftAttribute</font>.<br/>',
					'Legen Sie einen rechten Finger über den <b>rechten</b> grünen Bereich für Elemente der <font color="#336600">rechtenKategorie</font> und für <font color="#0000ff">rightAttribute</font>.<br/>',
					'<br/>',
					'<u>Gehen Sie so schnell wie möglich</u>, während Sie genau sind.<br/>',
				'</p>',
				'<p align="center">Berühren Sie den <b>lower </b> grünen Bereich zum Starten.</p>',
			'</div>'
		].join('\n'),

		instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Teil blockNum von nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
			'<b>Achtung, die Beschriftungen haben die Position gewechselt!</b><br/>' +
			'Legen Sie den linken Finger auf die <b>E</b>-Taste für <font color="#336600">leftCategory</font>.<br/>' +
			'Legen Sie den rechten Finger auf die <b>I</b>-Taste für <font color="#336600">rightCategory</font>.<br/><br/>' +
			'<u>Gehen Sie so schnell wie möglich</u>, während Sie genau sind.<br/><br/></p>' +
			'<p align="center">Drücken Sie die <b>Leertaste</b>, wenn Sie bereit sind zu starten.</font></p></div>',

		instSwitchCategoriesTouch: [
			'<div>',
				'<p align="center">',
					'<u>Teil blockNum of nBlocks</u>',
				'</p>',
				'<p align="left" style="margin-left:5px">',
					'<br/>',
					'Watch out, the labels have changed position!<br/>',
						'Legen Sie einen linken Finger über den <b>linken</b> grünen Bereich für Elemente der <font color="#336600">linkenKategorie</font>.<br/>',
						'Legen Sie einen rechten Finger über den <b>rechten</b> grünen Bereich für Elemente der <font color="#336600">rechtenKategorie</font>.<br/>',
						'Die Elemente erscheinen einzeln.',
						'<br/>',
						'Wenn Sie einen Fehler machen, erscheint ein rotes <font color="#ff0000"><b>X</b></font>. Berühren Sie die andere Seite. <u>Gehen Sie so schnell wie möglich</u>, während Sie genau sind.<br/>',
					'</p>',
					'<p align="center">Touch the <b>lower </b> green area to start.</p>',
			'</div>'
		].join('\n'),

		instThirdCombined : 'instFirstCombined', //this means that we're going to use the instFirstCombined property for the third combined block as well. You can change that.
		instFourthCombined : 'instSecondCombined', //this means that we're going to use the instSecondCombined property for the fourth combined block as well. You can change that.
		instThirdCombinedTouch : 'instFirstCombined', //this means that we're going to use the instFirstCombined property for the third combined block as well. You can change that.
		instFourthCombinedTouch : 'instSecondCombined', //this means that we're going to use the instSecondCombined property for the fourth combined block as well. You can change that.

		preDebriefingText : 'Drücken Sie die Leertaste, um Ihr Ergebnis zu sehen', //Text in the trial that comes before showing the debriefing.
		preDebriefingTouchText : 'Berühren Sie den unteren grünen Bereich, um Ihr Ergebnis zu sehen', //Touch version for the text in the trial that comes before showing the debriefing.
		debriefingTextTop : 'Ihr Ergebnis:', //Will be shown above the feedback text.
		//ATTENTION: We do not recommend showing participants their results. The IAT is a typical psychological measure so it is not very accurate. 
		//In Project Implicit's website, you can see that we added much text to explain that there is still much unknown about the meaning of these results.
		//We strongly recommend that you provide all these details in the debriefing of the experiment.
		debriefingTextBottom : 'Dieses Ergebnis ist keine endgültige Bewertung Ihrer Einstellungen. Es dient nur zu Bildungszwecken.  Drücken Sie die Leertaste, um fortzufahren.', //Will be shown below the feedback text. 
	debriefingTextBottomTouch : 'Dieses Ergebnis ist keine endgültige Bewertung Ihrer Einstellungen. Es dient nur zu Bildungszwecken.  Berühren Sie den grünen Bereich, um fortzufahren.',
		//The default feedback messages for each cutoff -
		//attribute1, and attribute2 will be replaced with the name of attribute1 and attribute2.
		//categoryA is the name of the category that is found to be associated with attribute1,
		//and categoryB is the name of the category that is found to be associated with attribute2.
		fb_strong_Att1WithCatA_Att2WithCatB : 'Ihre Antworten deuten auf eine starke automatische Vorliebe für categoryB gegenüber categoryA hin.',
		fb_moderate_Att1WithCatA_Att2WithCatB : 'Ihre Antworten deuten auf eine moderate automatische Vorliebe für categoryB gegenüber categoryA hin.',
		fb_slight_Att1WithCatA_Att2WithCatB : 'Ihre Antworten deuten auf eine leichte automatische Vorliebe für categoryB gegenüber categoryA hin.',
		fb_equal_CatAvsCatB : 'Ihre Antworten deuten auf keine automatische Vorliebe zwischen categoryA und categoryB hin.',

		//Error messages in the feedback
		manyErrors: 'Es wurden zu viele Fehler gemacht, um ein Ergebnis zu ermitteln.',
		tooFast: 'Es gab zu viele schnelle Versuche, um ein Ergebnis zu ermitteln.',
		notEnough: 'Es gab nicht genug Versuche, um ein Ergebnis zu ermitteln.'
	};

	// extend the "current" object with the default
	_.extend(piCurrent, _.defaults(options, iatObj));
	_.extend(API.script.settings, options.settings);
	});
});

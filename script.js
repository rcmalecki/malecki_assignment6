//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    userNamePrompt,
    favoriteSpeechPrompt;
	i = 0;
	j = 0;
	k = 0;
	speechOldest = speechesArray[0].year;
	speechNewest = speechesArray[0].year;
	
while (i < speechesArray.length){
	//This code displays the author of each speech.
	console.log('This speech is written by ' + speechesArray[i].author);
	i++;
}

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');
  for (j = 0; j < speechesArray.length; j++){
	if (speechesArray[j].author === favoriteSpeechPrompt){
	console.log(speechesArray[j].author + ' was ' + speechesArray[j].authorAge + ' during this speech.');
	};
  };
});

for (k = 0; k < speechesArray.length; k++) {
	if (speechesArray[k].year < speechOldest) {
		speechOldest = speechesArray[k].year;
	};
	if (speechesArray[k].year > speechNewest) {
		speechNewest = speechesArray[k].year;
	};
};

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  if (speechesArray[0].year === speechNewest){
	console.log('This is the most recent speech on the page.');
  };
  if (speechesArray[0].year === speechOldest){
	console.log('This is the oldest speech on the page.');
  };
  });

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  if (speechesArray[1].year === speechNewest){
	console.log('This is the most recent speech on the page.');
  };
  if (speechesArray[1].year === speechOldest){
	console.log('This is the oldest speech on the page.');
  };
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
   if (speechesArray[2].year === speechNewest){
	console.log('This is the most recent speech on the page.');
  };
  if (speechesArray[2].year === speechOldest){
	console.log('This is the oldest speech on the page.');
  };
});
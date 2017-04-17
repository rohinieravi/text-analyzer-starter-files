$(function() {
	$('form').submit(function(event) {
		event.preventDefault();

		var text = $('#user-text').val().replace(/\r?\n|\r/g, " ");
		var wordArray = getTokens(text);
		var wordCount = getWordCount(wordArray);

		$('.text-report').removeClass('hidden');
		$('.js-wordcount').text(wordCount);
		$('.js-unique-wordcount').text(getUniqueWordCount(wordArray));
		$('.js-average-wordlength').text(getAverageWordLength(wordArray)+" characters");
	});
});

function getTokens(rawString) {
  return rawString.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function getWordCount(wordArray) {
	return wordArray.length;
}

function getUniqueWordCount(wordArray) {
	var wordLengths = {};

	for ( var i = 0; i < wordArray.length; i++ ) {
		if( !(wordArray[i] in wordLengths) ) {
			wordLengths[wordArray[i]]=wordArray[i].length;
		}
	}
	return Object.keys(wordLengths).length;
}

function getAverageWordLength(wordArray) {
	var totalCharacters = 0;

	for ( var i = 0; i < wordArray.length; i++ ) {
		totalCharacters += wordArray[i].length;
	}
	return (totalCharacters/wordArray.length).toFixed(2);
}
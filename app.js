$(function(){
	$('form').submit(function(event){
		event.preventDefault();
		$('.text-report').removeClass('hidden');
		var text = $('#user-text').val().replace(/\r?\n|\r/g, " ");
		var wordArray = getTokens(text);
		var wordCount =wordArray.length;
		$('.js-wordcount').text(wordCount);
		var wordLengths={};
		var totalCharacters = 0;
		for(var i=0;i<wordArray.length;i++){
			if(wordArray[i] in wordLengths){
				totalCharacters+=wordArray[i].length;
			}
			else{
				wordLengths[wordArray[i]]=wordArray[i].length;
				totalCharacters+=wordArray[i].length;
			}
		}
		var uniqueWords=Object.keys(wordLengths).length;
		$('.js-unique-wordcount').text(uniqueWords);
		var avgLength=totalCharacters/wordCount;
		$('.js-average-wordlength').text(avgLength.toFixed(2)+" characters");
	});
});

function getTokens(rawString) {
  return rawString.toLowerCase().match(/\b[^\s]+\b/g).sort();
}
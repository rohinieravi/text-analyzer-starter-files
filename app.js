$(function(){
	$('form').submit(function(event){
		event.preventDefault();
		$('.text-report').removeClass('hidden');
		var wordArray = getTokens($('#user-text').val());
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
				//alert(word);
			}
		}
		var uniqueWords=Object.keys(wordLengths).length;
		$('.js-unique-wordcount').text(uniqueWords);
		var avgLength=totalCharacters/wordCount;
		$('.js-average-wordlength').text(avgLength.toFixed(2)+" characters");
	});
});

function getTokens(rawString) {
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}
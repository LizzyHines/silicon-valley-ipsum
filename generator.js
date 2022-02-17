//this is how we generate the filler text of SV quotes

const svIpsum = new GenerateNewText();


//adding sentences of text to generate paragraphs from
function GenerateNewText () {
    this.sentences =
        [
            " It’s not magic, it’s talent and sweat.",
            " People like me ensure your packets get delivered unsniffed.",
            " So what do I do? I make sure that one bad config on one key component doesn't bankrupt the entire fucking company.",
            " That’s what the fuck I do."
        ];
}

//generating random sentence from array
GenerateNewText.prototype.getRandomSentence = function() {
    let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
        return (randomSentence);
}

//generating a paragraph of text from the text put in above
GenerateNewText.prototype.getParagraph = function() {
    let paragraph = "";
    //setting minimum number of words
    let minimumCharacterLength = 225;
    let firstSentence = true;
    while (paragraph.length < minimumCharacterLength) {
        if (firstSentence) {
            paragraph = paragraph.concat(this.getRandomSentence());
            firstSentence = false;
        } else {
            paragraph = paragraph.concat(" "+ this.getRandomSentence());
        }
    }
    return paragraph;
}

//function for generating multiple paragraphs at once of filler SV sentences, going off of both sentences in array and paragraph generator above
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
    let allParagraphs = [];
    //generate amount of paragraphs user specifies
    while (allParagraphs.length < numberOfParagraphs) {
        allParagraphs.push(this.getParagraph());
    }
    //and now, convert into HTML string
    let paragraphHTML = "";
    allParagraphs.forEach(function (paragraph) {
        paragraphHTML += "<p>" + paragraph + "</p>";
    });
    return paragraphHTML;
}

module.exports = svIpsum;
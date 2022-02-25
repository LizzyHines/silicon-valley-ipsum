//this is how we generate the filler text of SV quotes

const svIpsum = new GenerateNewText();


//adding sentences of text to generate paragraphs from
function GenerateNewText () {
    this.sentences =
        [
            "We're making the world a better place... through constructing hierarchies for maximum code reuse and extensibility. ",
            "Everybody involved with the music industry is either stealing it or sharing it. They're all a bunch of assholes, especially Radiohead. ",
            "Hooli is about innovative technology that makes a difference, transforming the world as we know it; making the world a better place, through minimal message-oriented transport layers. ",
            "Oh god, the marketing team is having another bike meeting. Douchebags. ",
            "Pied wiper, wide diaper. ",
            "Where have you two been? We're playing the multi-channel router team in five minutes.  ",
            "I'm a LaVeyan Satanist, with some theistic tendencies. ",
            "Bit soup: it's like alphabet soup but it's ones and zeros instead of the letters...cause it's binary, you know, binary is just ones and zeros. ",
            "They always travel in groups of five, these programmers: there's always a tall skinny white guy, short skinny Asian guy, fat guy with a ponytail, some guy with crazy facial hair, and then an East Indian guy. ",
            "I'm sorry if I scared you, I know I have somewhat ghost-like features. My uncle used to say, \"you look like someone starved a virgin to death\". ",
            "Are there any water fountains in your offices? I own ten percent of an app that locates all nearby water fountains. I'd be happy to discuss it with you. ",
            "Richard, if you're not an asshole, it creates this kind of asshole vacuum and that void is filled by other assholes, like Jared. ",
            "You kind of have a...like a king-ish feeling to you. You're like a Norse hero from Valhalla. ",
            "They actually tried to diagnose me with a wasting disease because of my slender frame. ",

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
    let minimumCharacterLength = 325;
    let firstSentence = true;
    while (paragraph.length < minimumCharacterLength) {
        if (firstSentence) {
            paragraph = paragraph.concat(this.getRandomSentence());
            firstSentence = false;
        } else {
            paragraph = paragraph.concat(" " + this.getRandomSentence());
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
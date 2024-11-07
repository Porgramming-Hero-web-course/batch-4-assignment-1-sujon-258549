"use strict";
{
    // Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.
    // 
    const countWordOccurrences = (sentence, word) => {
        const sentenceLowercase = sentence.toLowerCase();
        const wordLowercase = word.toLowerCase();
        const sliceWord = sentenceLowercase.split(/\W+/);
        return sliceWord.filter(singleWord => singleWord === wordLowercase).length;
    };
    //const count = 
    countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
    // console.log(count);
    // 
    // 
}

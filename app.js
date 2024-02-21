"use strict";
const text = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";
const findCountry = text.match(/Spain/g);
console.log(findCountry);
const indexOfCountry = text.matchAll(/(Spain)/g);
console.log(indexOfCountry);
const replaceCountry = text.replace("Spain", "France");
console.log(replaceCountry);
const replaceAllCountry = text.replaceAll(/Spain/gi, "France");
console.log(replaceAllCountry);
const searchText = text.search(/plain/g);
console.log(`the word 'plain' starts at ${searchText}`);

const text: string = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";

const findCountry: RegExpMatchArray | null = text.match(/Spain/g);
console.log(findCountry);

const indexOfCountry: IterableIterator<RegExpMatchArray> | null = text.matchAll(/(Spain)/g)
console.log(indexOfCountry);

const replaceCountry: string = text.replace("Spain", "France");
console.log(replaceCountry);

const replaceAllCountry: string = text.replaceAll(/Spain/gi, "France")
console.log(replaceAllCountry);

const searchText: number | null = text.search(/plain/g)
console.log(`the word 'plain' starts at ${searchText}`)

// let age:any;

// age = '32';
// age = 32;
// console.log(age);


let age: unknown;
age = 5;
if (typeof age === "string") {
    age.toLowerCase()
}
if (typeof age === "number") {
    age.toExponential()
}
console.log(age);

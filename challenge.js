const url = 'https://join.dev.neta.sh/api/interview-tests/vault-of-sweets';
const bearer = 'Bearer '+ `64?`;

fetch(url, {
  method:"GET",
  mode: "no-cors",
  headers:{
    'Authorization': bearer,
    // "Access-Control-Allow-Origin": "*",
    "Candidate-Email": "rodrigosommacal@gmail.com",
  },
})
.then(response => response.text())
.then((data) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, 'text/html');
  const HTMLTags = doc.getElementsByTagName('*');

//1. Get all tagNames in an Array;
const allHTMLTags = Array.prototype.slice.call(HTMLTags);

//2. Adding tagNames as String in array;
const tagNames = [];

tagNamesToString = (tagName) => {
  tagNames.push(tagName.tagName);
}
allHTMLTags.forEach(tagNamesToString);

//3. Creating Object Key = tagName, Value = how many times it repeats;
const tagNamesCounter = {};

tagNames.forEach((i) => {tagNamesCounter[i] = (tagNamesCounter[i] || 0) + 1; });

//4. Sorting Object;
const sortedTagNames = {};

Object.keys(tagNamesCounter).sort().forEach((key) => { sortedTagNames[key] = tagNamesCounter[key] });

//5. Adding tags to array as pair 'keyvalue' + join them lowercase;
const arrayOfTagNames = [];
Object.entries(sortedTagNames).forEach(([k,v]) => { arrayOfTagNames.push(`${k}${v}`)});

const secretKey = arrayOfTagNames.join('').toLocaleLowerCase();
console.log(secretKey);

const result = document.getElementById('result');
result.insertAdjacentHTML('afterend', `<p>${secretKey}</p>`);

});



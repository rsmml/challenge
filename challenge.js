const getHTMLTags = () => {
  const HTMLTags = document.getElementsByTagName('*');
  //1. Get all tagNames in an Array;
  const allHTMLTags = Array.prototype.slice.call(HTMLTags);

  //2. Adding tagNames as String in array;
  const tagNames = [];

  tagNamesToString = (tagName) => { tagNames.push(tagName.tagName); }
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

  const secretKey = arrayOfTagNames.join('');
  return secretKey
}

const uncodeSecretKey = () => {
  const token = getHTMLTags();
  // const key = 'A12BODY1BR8DIV38FOOTER1H12H22H31H44H51HEAD1HTML1IMG1LI7LINK4META4NAV1P8SCRIPT1SECTION3STYLE1TITLE1UL2' // from DOM https://join.dev.neta.sh/api/interview-tests/vault-of-sweets;
  const uncodeSecretKey = atob(token);
  return uncodeSecretKey;
}

const accessEndPoint = () => {
  const url = 'https://join.dev.neta.sh/api/interview-tests/vault-of-sweets';
  const bearer = 'Bearer '+ `${uncodeSecretKey()}`;

  fetch(url, {
    method:'GET',
    mode: 'no-cors',
    headers:{
      'Authorization': bearer,
      'Candidate-Email': 'rodrigosommacal@gmail.com',
    },
  })
    .then(response => response.text())
    .then((data) => {
      console.log(data);
  })
    .catch(err => {
      console.error(err.message);
  });
}
accessEndPoint();

. For this challenge I started by inspecting the DOM on the website
  https://join.dev.neta.sh/api/interview-tests/vault-of-sweets

. After applying the methods on the DOM, that you can find in the getHTMLTags() function
  in challenge.js, I got the key:
    A12BODY1BR8DIV38FOOTER1H12H22H31H44H51HEAD1HTML1IMG1LI7LINK4META4NAV1P8SCRIPT1SECTION3STYLE1TITLE1UL2
  Which is the convination of all HTML tag names + how many times it repeats, ordered alphabetically.

. I create a new function called uncodeSecretKey(); which returns the uncoded 'key' from
  the method above, using base64.

. At the end, I create a function that fetchs the endpoint  https://join.dev.neta.sh/api/interview-tests/vault-of-sweets
  with the requested headers ('Autorization', 'Candidate-Email') interpolating the uncodeSecretKey()
  in the 'bearer variable.

. The problem is that I cannot guaranty access to the endpoint and get all the HTML tags.

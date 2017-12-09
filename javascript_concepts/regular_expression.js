/*
Regular expressions are very powerful and javascript has a good support of methods for it

The string methods match and replace uses regular expressions for matching and replacing strings

Most important notations to remember :
\d - matches a single digit 0-9
\w - matches a single alphanumeric characters [a-zA-Z0-9_]
\s - matches a single space
. - matches a single character
+ - matches the preceding character one or more times
* - matches the preceding character zero or more times
[] - character class matching
{number} - matches preceding expression only when its repeated number of times.
() - capturing group
 */

/*
use of exec() method of a regex javascript object
matching repeated words in a sentence
() - The capturing group is used to capture a subpattern in the main matching pattern
In the example below (\w+) is the sub pattern which can be accessed within the same regular expression using \1 and
available in the
 */
let sentence = 'This is a sentence sentence with repeating words words';
let re = /\s(\w+)\s\1/g;
//let match = re.exec(sentence); // This will match only the first occurrence of repeating words, and set the pointer to the end of the first match
//console.log('matched hybrid object = ' + JSON.stringify(match));
/* Loop over all the matches */
let match = [];
while (match !== null) {
    match = re.exec(sentence);
    if (match !== null) {
        console.log('matched hybrid object = ' + JSON.stringify(match));
    }
}

/*
test() - returns either true or false based on the regex match.
 */
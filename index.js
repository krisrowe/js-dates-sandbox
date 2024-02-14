const moment = require('moment');

function isSunday(dateString) {
  const parsedDate = moment.parseZone(dateString, moment.ISO_8601_STRICT);
  return parsedDate.isValid() && parsedDate.day() === 0;
}

console.log(new Date());

function testInputString(dateString) {
	console.log('------------------------------------');
	console.log('Testing ' + dateString);
        console.log('is Sunday: ' + isSunday(dateString));
	console.log('as JS Date: ' + new Date(dateString));
	var parsed = moment.parseZone(dateString, moment.ISO_8601_STRICT);
        console.log('using moment.parseZone: ' + parsed.format("YYYY-MM-DD"));
	parsed = moment.utc(dateString);
	console.log('using moment.utc: ' + parsed.format('YYYY-DD-MM'));
}

var testString1 = '2018-02-18';
var testString2 = '2024-02-18T00:00:00Z';
var testString3 = '2024-02-18T00:00:00-06:00';

testInputString(testString1);
testInputString(testString2);
testInputString(testString3);

const moment = require('moment');
function isSunday(dateString) {
  const parsedDate = moment.parseZone(dateString, moment.ISO_8601);
  return parsedDate.isValid() && parsedDate.day() === 0;
}

console.log(new Date());

function testInputString(dateString) {
	console.log('------------------------------------');
	console.log('Testing ' + dateString);
	console.log('is Sunday: ' + isSunday(dateString));
	console.log('as JS Date: ' + new Date(dateString));
	var parsed = moment.parseZone(dateString, moment.ISO_8601);
    console.log(`is valid per moment using parseZone: ${parsed.isValid()}`);
	console.log('moment.parseZone then moment.format("YYYY-DD-MM"): ' + parsed.format("YYYY-MM-DD"));
	console.log('moment.parseZone then moment.format("YYYY-MM-DD HH:mm:ss Z"): ' + parsed.format("YYYY-MM-DD HH:mm:ss Z"));
	parsed = moment.utc(dateString, moment.ISO_8601);
	console.log(`is valid per moment using utc: ${parsed.isValid()}`);
	console.log('moment.utc then moment.format("YYYY-DD-MM"): ' + parsed.format("YYYY-MM-DD"));
	console.log('moment.utc then moment.format("YYYY-MM-DD HH:mm:ss Z"): ' + parsed.format("YYYY-MM-DD HH:mm:ss Z"));

}

var testString1 = '2018-02-18';
var testString2 = '2024-02-18T00:00:00Z';
var testString3 = '2024-02-18T00:00:00-06:00';
var testString3 = '2024-02-18T00:00:00-05:00';
var testString4 = "2/18/2024";

testInputString(testString1);
testInputString(testString2);
testInputString(testString3);
testInputString(testString4);
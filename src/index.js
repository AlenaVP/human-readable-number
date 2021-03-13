let tillTeens = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function isDozen(number) {
  return ('' + number).length === 2 && number >= 20 ? true : false;
}

function isHundred(number) {
  return ('' + number).length === 3 ? true : false;
}

function dozen(number) {
  return dozens[Math.floor(number / 10)] + (number % 10 != 0 ? ' ' + tillTeens[number % 10] : '');
}

function hundred(number) {
  return tillTeens[Math.floor(number / 100)] + ' hundred' +
    (number % 100 != 0 ? ' ' + (isDozen(number % 100) ? dozen(number % 100) : tillTeens[number % 100]) : '');
}

module.exports = function toReadable (number) {
  return isHundred(number) ? hundred(number) : (isDozen(number) ? dozen(number) : (number != 0 ? tillTeens[number] : 'zero'));
}

let tillTeens = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable(number) {
  str = '';
  if (number < 20) {
    str += tillTeens[number];
  } else if (('' + number).length === 2) {
    str += dozens[Math.floor(number / 10)] + (number % 10 != 0 ? ' ' + toReadable(number % 10) : '');
  } else if (('' + number).length === 3) {
    str += tillTeens[Math.floor(number / 100)] + ' hundred' + (number % 100 != 0 ? ' ' + toReadable(number % 100) : '');
  }
  return str;
}

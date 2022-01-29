const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '*': ' ',
};

function decode(expr) {
    const sliced_array = [];
    let string = [];
    let newStr = expr.split('');
    for (let i = 0; i < newStr.length; i += 10) {
        if (newStr.slice(i, i + 10).length < 10) {
            sliced_array.push(['0', ...newStr.slice(i, i + 10)]);
        } else if (newStr[i] === '*') {
            sliced_array.push(['*']);
        } else {
            sliced_array.push(newStr.slice(i, i + 10));
        }
    }

    sliced_array.flat();
    let arr = [];
    sliced_array.map((item) => {
        let letter = '';
        for (let i = 0; i < item.length; i += 2) {
            if (item.slice(i, i + 2).join('') == 10) {
                letter += '.';
            }
            if (item.slice(i, i + 2).join('') == 11) {
                letter += '-';
            }
            if (item.slice(i, i + 2).join('') == '*') {
                letter += '*';
            }
        }
        arr.push(letter);
    });
    let result = '';
    arr.map((item) => (result += MORSE_TABLE[item]));

    return result;
}

module.exports = {
    decode,
};
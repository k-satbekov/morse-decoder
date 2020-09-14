const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let startingIndex = 0;
    let decodedMessage = '';

    for (let i = 0; i < expr.length / 10; i++) {
        let decipheredMessage = '';
        let letter = expr.substring(startingIndex, startingIndex + 10);

        startingIndex += 10;

        if (letter === '**********') {
            decodedMessage += ' ';
            continue;
        }

        for (let end = 10; end > 0; end -= 2) {
            let parsed = letter.substring(end - 2, end);
            if (parsed === '10') decipheredMessage += '.';
            else if (parsed === '11') decipheredMessage += '-';
        }

        decodedMessage += MORSE_TABLE[decipheredMessage.split('').reverse().join('')];

    }

    return decodedMessage;
}

module.exports = {
    decode
}
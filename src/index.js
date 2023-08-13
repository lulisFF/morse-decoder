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
    // write your solution here
    const arrSymbols= []
    
    for (let i = 0; i<expr.length; i+=10){
        let transition = expr.slice(i,i+10)
        let str1 = ''
        if(transition==='**********'){
            str1 += ' '
        }else{
            for (let j = 0; j<transition.length;j+=2){
                if(transition.charAt(j)+transition.charAt(j+1)==='10'){
                    str1+='.'
                }
                if(transition.charAt(j)+transition.charAt(j+1)==='11'){
                    str1+='-'
                }
            }
        }
        
        arrSymbols.push(str1)
    }
    const decodeSymbols = arrSymbols.map(e=> ( e === ' ') ? ' ' : MORSE_TABLE[e] )
    return (decodeSymbols.join(''));


    
}

module.exports = {
    decode
}
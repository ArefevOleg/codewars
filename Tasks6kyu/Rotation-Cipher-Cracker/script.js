// Description
// Rotation ciphers (https://en.wikipedia.org/wiki/Caesar_cipher) are very vulnerable to brute force attacks. 
// There are only 25 possible ways to decrypt the message.

// Example Encoded Message:ymjxvznwwjqnxhzyj

// Possible Decoded Messages:

// znkywaoxxkroyiazk, aolzxbpyylspzjbal, bpmaycqzzmtqakcbm,
// cqnbzdraanurbldcn, drocaesbbovscmedo, espdbftccpwtdnfep,
// ftqecguddqxueogfq, gurfdhveeryvfphgr, hvsgeiwffszwgqihs,
// iwthfjxggtaxhrjit, jxuigkyhhubyiskju, kyvjhlziivczjtlkv,
// lzwkimajjwdakumlw, maxljnbkkxeblvnmx, nbymkocllyfcmwony,
// ocznlpdmmzgdnxpoz, pdaomqennaheoyqpa, qebpnrfoobifpzrqb,
// rfcqosgppcjgqasrc, sgdrpthqqdkhrbtsd, thesquirreliscute,
// uiftrvjssfmjtdvuf, vjguswkttgnkuewvg, wkhvtxluuholvfxwh,
// xliwuymvvipmwgyxi


// If you scan through the list you will see only a few that contain an english word longer than two characters. 
// thesquirreliscute is the only one that could be completely seperated into english words to form the message "the squirrel is cute".

// Your job for this kata is to make a function that will give all possible decoded messages given the encoded message and suspected contents.

// UPDATE: the original unshifted alphabet should also be tested for, making it a total of 26 possible ways to decrypt the message.
// Returned results are to be sorted as well. See last line below for an example:


// decode('ymjxvznwwjqnxhzyj','squirrel') // returns ['thesquirreliscute']
// decode('lzwespnsdmwakafxafalq','max')  // returns ['maxftqotenxblbgybgbmr', 'themaxvalueisinfinity']
// decode('pumy','um')  // returns ['pumy']

// Decision: 

function decode(encoded, suspicion){
    let possibilities = [];
    for(let shift = 1; shift <= 26; shift++){
        let decoded = encoded.split('').map(char => {
            let code = char.charCodeAt(0);
            if(code >= 65 && code <= 90){
                return String.fromCharCode((code - 65 + shift) % 26 + 65);
            }
            if(code >= 97 && code <= 122){
                return String.fromCharCode((code - 97 + shift) % 26 + 97);
            }
            return char;
        }).join('');
        if(decoded.includes(suspicion)){
            possibilities.push(decoded);
        }
    }
    return possibilities.sort();
}
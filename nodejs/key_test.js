const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    if (key.name==='q'){
        process.exit()
    }else {
        console.log("Your pressed", key.name )
    }
});

console.log('press any key');

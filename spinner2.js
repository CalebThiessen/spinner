let counter = 100;
let frames = ["|", "/", "-", "\\","|", "/", "-", "\\","|", "/", "-", "\\","|", "/", "-", "\\","|", "/", "-", "\\"]
for (const item of frames) {
    setTimeout(() => {
        process.stdout.write(`\r ${item}`)
    }, counter);
    counter += 200;
}
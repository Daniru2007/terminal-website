const commander = document.getElementById("commander");
const output = document.getElementById("output");

function whoami() {
    console.log("I'm Daniru");
}

const commands = {
    whoami: whoami,
};

function commandEnter(e) {
    if (e.key === "Enter") {
        cmdFunc = commands[commander.value];
        if (cmdFunc) {
            cmdFunc();
        }
        console.log(commander.value);
        commander.value = "";
    }
}

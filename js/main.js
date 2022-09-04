const commander = document.getElementById("commander");
const output = document.getElementById("output");
const cursor = document.getElementById("cursor");

function addLine(text) {
    p = document.createElement("p");
    p.append(text);
    output.appendChild(p);
}

function whoami() {
    addLine("I'm Daniru");
}

function help() {
    addLine("help - get all the list of commands");
    addLine("clear - clear the screen");
    addLine("whoami - details about me");
}

function clear() {
    output.innerHTML = "";
}

const commands = {
    whoami: whoami,
    clear: clear,
    help: help,
};

function commandEnter(e) {
    if (e.key === "Enter") {
        cmdFunc = commands[commander.value];
        if (cmdFunc) {
            addLine(`$ ${commander.value}`);
            cmdFunc();
        } else if (commander.value === "") {
            addLine("$");
        } else {
            addLine(`$ ${commander.value}`);
            addLine(`Error`);
        }
        window.scrollTo(0, document.body.scrollHeight);

        commander.value = "";
    }
}

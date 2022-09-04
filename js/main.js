const commander = document.getElementById("commander");
const output = document.getElementById("output");

function addLine(text) {
    p = document.createElement("p");
    p.append(text);
    output.appendChild(p);
}

function whoami() {
    addLine("I'm Daniru");
}

function clear() {
    output.innerHTML = "";
}

const commands = {
    whoami: whoami,
    clear: clear,
};

function commandEnter(e) {
    if (e.key === "Enter") {
        cmdFunc = commands[commander.value];
        if (cmdFunc) {
            cmdFunc();
        } else if (!(commander.value === "")) {
            addLine("fuck u");
        }
        commander.value = "";
    }
}

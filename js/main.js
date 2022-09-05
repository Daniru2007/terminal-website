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

function help() {
    addLine("help - all the list of last wishes");
    addLine("clear - clear the hell");
    addLine("whoami - details about the devil");
    addLine("bloodfetch - wanna see some blood?");
}

function clear() {
    output.innerHTML = "";
}
function bloodfetch() {
    pre = document.createElement("pre");
    center = document.createElement("center");
    string = [
        "\n",
        "▓█████▄  ▄▄▄       █     █░\n",
        "▒██▀ ██▌▒████▄    ▓█░ █ ░█░\n",
        "░██   █▌▒██  ▀█▄  ▒█░ █ ░█ \n",
        "░▓█▄   ▌░██▄▄▄▄██ ░█░ █ ░█ \n",
        "░▒████▓  ▓█   ▓██▒░░██▒██▓ \n",
        " ▒▒▓  ▒  ▒▒   ▓▒█░░ ▓░▒ ▒  \n",
        " ░ ▒  ▒   ▒   ▒▒ ░  ▒ ░ ░  \n",
        " ░ ░  ░   ░   ▒     ░   ░  \n",
        "   ░          ░  ░    ░    \n",
        " ░                        \n",
    ];
    for (i = 0; i < string.length; i++) {
        pre.append(string[i]);
    }
    pre.classList.add("ascii");
    center.appendChild(pre);
    output.appendChild(center);
}

const commands = {
    whoami: whoami,
    clear: clear,
    help: help,
    bloodfetch: bloodfetch,
};

function commandEnter(e) {
    if (e.key === "Enter") {
        cmdFunc = commands[commander.value];
        if (cmdFunc) {
            addLine(`devil@hell~$ ${commander.value}`);
            cmdFunc();
        } else if (commander.value === "") {
            addLine("devil@hell~$");
        } else {
            addLine(`devil@hell~$ ${commander.value}`);
            addLine(`Error`);
        }
        window.scrollTo(0, document.body.scrollHeight);

        commander.value = "";
    }
}

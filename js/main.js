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
    addLine("where - meet the devil");
    addLine("ls - list of projects");
    addLine("contact - calling devil is illegal!");
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

function where() {
    window.open("https://github.com/Daniru2007");
    addLine("sending to devil...");
}

function addLink(text, desc, link) {
    a = document.createElement("a");
    a.append(`(${text}) [${desc}]`);
    a.setAttribute("href", link);
    a.setAttribute("target", "_blank");
    output.appendChild(a);
    output.appendChild(document.createElement("br"));
}

function ls() {
    addLink(
        "portfolio",
        "My Portfolio",
        "https://github.com/Daniru2007/portfolio"
    );
    addLink(
        "darknights chess website",
        "a chess website for darknights chess academy",
        "https://github.com/Daniru2007/darknights-chess"
    );
    addLink(
        "todolist app",
        "task management app",
        "https://github.com/Daniru2007/todo-list"
    );
    addLink(
        "typing app",
        "typing practice app",
        "https://github.com/Daniru2007/typing-app"
    );
    addLink(
        "fb clone",
        "facebook clone",
        "https://github.com/Daniru2007/fb-clone"
    );
    addLink("tada app", "todo list app", "https://github.com/Daniru2007/tada");
    addLink(
        "github repo cli",
        "automated github project creator",
        "https://github.com/Daniru2007/github-repo-cli"
    );
    addLink(
        "dotfiles",
        "My DotFiles",
        "https://github.com/Daniru2007/DotFiles"
    );
}

function contact() {
    a = document.createElement("a");
    a.append(`github`);
    a.setAttribute("href", "https://github.com/Daniru2007");
    a.setAttribute("target", "_blank");
    output.appendChild(a);
    output.appendChild(document.createElement("br"));
}

const commands = {
    whoami: whoami,
    clear: clear,
    help: help,
    bloodfetch: bloodfetch,
    where: where,
    ls: ls,
    contact: contact,
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
            addLine(`Command not found. For a list of commands, type 'help'.`);
        }
        window.scrollTo(0, document.body.scrollHeight);

        commander.value = "";
    }
}

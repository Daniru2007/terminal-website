const commander = document.getElementById("commander");
const output = document.getElementById("output");

function addLine(text, noAni = false) {
    p = document.createElement("p");
    p.append(text);
    if (!noAni) {
        p.classList.add("loadit");
    }
    output.appendChild(p);
}

function whoami() {
    addLine("I'm Daniru");
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function help() {
    addLine("help - all the list of last wishes");
    await sleep(100);
    addLine("clear - clear the hell");
    await sleep(100);
    addLine("whoami - details about the devil");
    await sleep(100);
    addLine("bloodfetch - wanna see some blood?");
    await sleep(100);
    addLine("where - meet the devil");
    await sleep(100);
    addLine("ls - list of projects");
    await sleep(100);
    addLine("contact - calling devil is illegal!");
}

function clear() {
    output.innerHTML = "";
}
async function bloodfetch() {
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
    center.classList.add("loadit");
    output.appendChild(center);
}

function where() {
    window.open("https://github.com/Daniru2007");
    addLine("sending to devil...");
}

function addLink(text, desc, link) {
    randSize = `${Math.floor(Math.random() * 11)}.${Math.floor(
        Math.random() * 11
    )}.mb`;
    a = document.createElement("a");
    a.append(`.rwxrwx--- ${randSize} ${text}`);
    a.setAttribute("href", link);
    a.setAttribute("target", "_blank");
    output.appendChild(a);
    a.classList.add("loadit");
    output.appendChild(document.createElement("br"));
}

async function ls() {
    addLink(
        "portfolio.html",
        "My Portfolio",
        "https://github.com/Daniru2007/portfolio"
    );
    await sleep(100);
    addLink(
        "darknights chess website.html",
        "a chess website for darknights chess academy",
        "https://github.com/Daniru2007/darknights-chess"
    );
    await sleep(100);
    addLink(
        "todolist app.js",
        "task management app",
        "https://github.com/Daniru2007/todo-list"
    );
    await sleep(100);
    addLink(
        "typing app.py",
        "typing practice app",
        "https://github.com/Daniru2007/typing-app"
    );
    await sleep(100);
    addLink(
        "fb clone.jsx",
        "facebook clone",
        "https://github.com/Daniru2007/fb-clone"
    );
    await sleep(100);
    addLink(
        "tada app.jsx",
        "todo list app",
        "https://github.com/Daniru2007/tada"
    );
    await sleep(100);
    addLink(
        "github repo cli.bat",
        "automated github project creator",
        "https://github.com/Daniru2007/github-repo-cli"
    );
    await sleep(100);
    addLink(
        "dotfiles.*",
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

    a.classList.add("loadit");
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
            addLine(`devil@hell~$ ${commander.value}`, true);
            cmdFunc();
        } else if (commander.value === "") {
            addLine("devil@hell~$", true);
        } else {
            addLine(`devil@hell~$ ${commander.value}`, true);
            addLine(`Command not found. For a list of commands, type 'help'.`);
        }
        window.scrollTo(0, document.body.scrollHeight);

        commander.value = "";
    }
}

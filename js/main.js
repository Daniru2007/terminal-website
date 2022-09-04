const commander = document.getElementById("commander");
const output = document.getElementById("output");

function commandEnter(e) {
    if (e.key === "Enter") {
        console.log(commander.value);
        commander.value = "";
    }
}

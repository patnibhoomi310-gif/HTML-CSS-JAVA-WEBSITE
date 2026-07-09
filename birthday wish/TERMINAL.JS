// ===============================
// Page Navigation
// ===============================

function go(page) {
    window.location.href = page;
}

// ===============================
// Terminal Typing Effect
// ===============================

const terminalText = [
    "> Booting LoveOS v2026...",
    "> Access Granted ✔",
    "> Scanning beautiful memories...",
    "> Loading Heart Database ❤️",
    "> Memory #001 : Our First Talk 💕",
    "> Memory #002 : Our Endless Chats 🌙",
    "> Memory #003 : Cute Fights 😂",
    "> Memory #004 : Beautiful Moments 🥰",
    "> Memory #005 : Falling In Love ❤️",
    "> Searching Soulmate...",
    "> Soulmate Found ✔",
    "> Status : Forever Together ❤️",
    "> Happy Birthday My Love 🎂🎉"
];

const typing = document.getElementById("typing");
const continueBtn = document.getElementById("continueBtn");

if (typing) {

    let line = 0;
    let char = 0;

    function typeWriter() {

        if (line < terminalText.length) {

            if (char < terminalText[line].length) {

                typing.innerHTML += terminalText[line].charAt(char);
                char++;

                setTimeout(typeWriter, 40);

            } else {

                typing.innerHTML += "<br>";

                line++;
                char = 0;

                // Terminal auto scroll
                typing.parentElement.scrollTop = typing.parentElement.scrollHeight;

                setTimeout(typeWriter, 350);

            }

        } else {

            // Show Continue Button
            if (continueBtn) {
                continueBtn.style.display = "inline-block";
            }

        }

    }

    typeWriter();

}
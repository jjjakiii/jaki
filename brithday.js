/* ================= FORM 1 ================= */

const text =
`There is a secret
message for you...`;

const typingText =
document.getElementById("typingText");

const button =
document.getElementById("openBtn");

const form1 =
document.getElementById("form1");

const form2 =
document.getElementById("form2");

const form3 =
document.getElementById("form3");

let index = 0;

button.style.opacity = "0";

button.style.transform = "translateY(20px)";

function typeText(){

    if(index < text.length){

        if(text.charAt(index) === "\n"){

            typingText.innerHTML += "<br>";

        }else{

            typingText.innerHTML += text.charAt(index);

        }

        index++;

        setTimeout(typeText, 120);

    }else{

        setTimeout(() => {

            button.style.transition = "0.5s";

            button.style.opacity = "1";

            button.style.transform = "translateY(0px)";

        }, 300);
    }
}

window.onload = () => {

    typeText();

};

/* PINDAH KE FORM 2 */

button.addEventListener("click", () => {

    form1.style.display = "none";

    form2.style.display = "flex";

});

/* ================= FORM 2 ================= */

const giftBtn =
document.getElementById("giftBtn");

const openingText =
document.getElementById("openingText");

const giftGif =
document.getElementById("giftGif");

const checkBtn =
document.getElementById("checkBtn");

const catGif =
document.getElementById("catGif");

const openingMsg =
"opening gift...";

let giftIndex = 0;

giftBtn.addEventListener("click", () => {

    /* button hilang */

    giftBtn.style.display = "none";

    /* cat hilang */

    catGif.style.display = "none";

    
    /* typing text */

    function typingGift(){

        if(giftIndex < openingMsg.length){

            openingText.innerHTML +=
            openingMsg.charAt(giftIndex);

            giftIndex++;

            setTimeout(typingGift, 120);

        }else{

            /* munculin gift pelan pelan */

            giftGif.style.display = "block";

            giftGif.style.opacity = "0";

            giftGif.style.transform = "translateY(15px)";

            setTimeout(() => {

                giftGif.style.transition = "0.8s";

                giftGif.style.opacity = "1";

                giftGif.style.transform = "translateY(0px)";

            }, 100);

            /* tunggu gif selesai */

            setTimeout(() => {

                checkBtn.style.display = "flex";

                setTimeout(() => {

                    checkBtn.style.opacity = "1";

                    checkBtn.style.transform =
                    "translateY(0px)";

                }, 100);

            }, 2000);
        }
    }

    typingGift();

});

checkBtn.addEventListener("click", () => {

    form2.style.display = "none";

    form3.style.display = "flex";

    startForm3Typing();

});

/* ================= FORM 3 ================= */

const birthdayText =
document.getElementById("birthdayText");

const nextBtn =
document.getElementById("nextBtn");

const birthdayMessage =
`Happy 16th Birthday Elyaa!`;

let birthdayIndex = 0;

/* PINDAH FORM 2 KE FORM 3 */

checkBtn.addEventListener("click", () => {

    form2.style.display = "none";

    form3.style.display = "flex";

    typeBirthdayText();

});

/* TYPING TEXT */

function typeBirthdayText(){

    if(birthdayIndex < birthdayMessage.length){

        if(birthdayMessage.charAt(birthdayIndex)
        === "\n"){

            birthdayText.innerHTML += "<br>";

        }else{

            birthdayText.innerHTML +=
            birthdayMessage.charAt(birthdayIndex);

        }

        birthdayIndex++;

        setTimeout(typeBirthdayText, 120);

    }else{

        /* BUTTON MUNCUL */

        setTimeout(() => {

            nextBtn.style.opacity = "1";

            nextBtn.style.transform =
            "translateY(0px)";

        }, 400);
    }
}


/* ================= FORM 4 ================= */

const form4 =
document.getElementById("form4");

const snoopyText =
document.getElementById("snoopyText");

const snoopyWalk =
document.getElementById("snoopyWalk");

const snoopyNextBtn =
document.getElementById("snoopyNextBtn");

const snoopyMessage =
`sabarr yaa ell,
katanya kucingnya mau nunjukin pesan !!`;

let snoopyIndex = 0;

/* BUTTON FORM 3 */

nextBtn.addEventListener("click", () => {

    form3.style.display = "none";

    form4.style.display = "flex";

    startSnoopyScene();

});

/* START SCENE */

function startSnoopyScene(){

    /* reset */

    snoopyText.innerHTML = "";

    snoopyIndex = 0;

    /* SNOOPY JALAN */

    snoopyWalk.style.transition =
    "8s linear";

    snoopyWalk.style.left = "-220px";

    setTimeout(() => {

        snoopyWalk.style.left = "900px";

    }, 100);

    /* TEXT MUNCUL PELAN */

    typeSnoopyText();

    /* BUTTON MUNCUL PAS SNOOPY KELUAR */

    setTimeout(() => {

        snoopyNextBtn.style.opacity = "1";

        snoopyNextBtn.style.transform =
        "translateX(-50%) translateY(0px)";

    }, 8200);

}

/* TYPING */

function typeSnoopyText(){

    if(snoopyIndex < snoopyMessage.length){

        if(snoopyMessage.charAt(snoopyIndex)
        === "\n"){

            snoopyText.innerHTML += "<br>";

        }else{

            snoopyText.innerHTML +=
            snoopyMessage.charAt(snoopyIndex);

        }

        snoopyIndex++;

        setTimeout(typeSnoopyText, 90);

    }

}


/* ================= FORM 5 ================= */

const form5 =
document.getElementById("form5");

const toText =
document.getElementById("toText");

const loveMessage =
document.getElementById("loveMessage");

const toMessage =
`...to you,
`;

const finalMessage =
`So proud to have met you and to know you, Elyaa. I hope you’re always surrounded by good things wherever you are, and filled with love, laughter, and all the little things that make you happy. Sorry I’m not really good at putting feelings into words like you are, but this is all I can give. Happy Birthday, Elyaaa.
`;

let toIndex = 0;
let finalIndex = 0;

/* BUTTON FORM 4 */

snoopyNextBtn.addEventListener("click", () => {

    form4.style.display = "none";

    form5.style.display = "flex";

    startForm5();

});

/* START FORM 5 */

function startForm5(){

    toText.innerHTML = "";
    loveMessage.innerHTML = "";

    toIndex = 0;
    finalIndex = 0;

    typeToText();

}

/* TEXT KANAN ATAS */

function typeToText(){

    if(toIndex < toMessage.length){

        if(toMessage.charAt(toIndex)
        === "\n"){

            toText.innerHTML += "<br>";

        }else{

            toText.innerHTML +=
            toMessage.charAt(toIndex);

        }

        toIndex++;

        setTimeout(typeToText, 100);

    }else{

        setTimeout(() => {

            typeFinalMessage();

        }, 500);
    }

}

/* PARAGRAPH BAWAH */

function typeFinalMessage(){

    if(finalIndex < finalMessage.length){

        loveMessage.innerHTML +=
        finalMessage.charAt(finalIndex);

        finalIndex++;

        setTimeout(typeFinalMessage, 35);

    }else{

        /* BUTTON MUNCUL */

        const letterBtn =
        document.getElementById("letterBtn");

        letterBtn.style.opacity = "1";

        letterBtn.style.transform =
        "translateY(0px)";
    }

}

/* ================= MUSIC ================= */

const bgMusic =
document.getElementById("bgMusic");

bgMusic.volume = 0.25;

/* COBA AUTO PLAY PAS LOAD */

window.addEventListener("load", () => {

    setTimeout(() => {

        bgMusic.play().catch(() => {

            console.log("autoplay blocked");

        });

    }, 500);

});

/* FALLBACK PAS USER KLIK */

document.addEventListener("click", () => {

    bgMusic.play();

}, { once: true });
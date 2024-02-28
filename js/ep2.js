$("body").hide().fadeIn(1000);
$(".textArea").hide().slideDown(1000);

// COOKIES GETTER AND SETTER
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

/*

    SOUND CONTROLLER

*/
function playSound(soundName) {

    var audio = new Audio(`../sfx/${soundName}.mp3`);

    audio.play();

}

function hideChoices(btn2, btn3, btn4, btn5) {
    if (btn2 === true) {
        $(".btn2").hide();
    } else {
        $(".btn2").show();
    }

    if (btn3 === true) {
        $(".btn3").hide();
    } else {
        $(".btn3").show();
    }

    if (btn4 === true) {
        $(".btn4").hide();
    } else {
        $(".btn4").show();
    }

    if (btn5 === true) {
        $(".btn5").hide();
    } else {
        $(".btn5").show();
    }
}

/*

    SOUND MANAGER: Plays certain sound effects depending on the currentScene.

*/

function eventsManager(key) {
    switch (key) {
        case 3:
            playSound("sus");
            break;
        
        case 5:
            playSound("thunderclapandrain");
            document.querySelector(".ep-name").classList.add("dark-mode-1");
            document.querySelector(".textArea").classList.add("dark-mode-2");
            document.querySelector(".input-container").classList.add("dark-mode-1");
            document.querySelector(".input-container > input").classList.add("dark-mode-2");
            document.querySelectorAll(".option-button")[0].classList.add("dark-mode-btns");
            document.querySelectorAll(".option-button")[1].classList.add("dark-mode-btns");
            document.querySelectorAll(".option-button")[2].classList.add("dark-mode-btns");
            document.querySelectorAll(".option-button")[3].classList.add("dark-mode-btns");
            document.querySelectorAll(".option-button")[4].classList.add("dark-mode-btns");
            break;

        case 6:
            playSound("lambodrivingawaysfx");
            hideChoices(btn2=true, btn3=true, btn4=true, btn5=true);
            break;

        case 8:
            playSound("doorknockingsfx");
            hideChoices(btn2=true, btn3=true, btn4=true, btn5=true);
            break;

        case 12:
            playSound("doorclosingsfx");
            hideChoices(btn2=false, btn3=true, btn4=true, btn5=true);
            break;

        case 14:
            playSound("doorclosingsfx");
            hideChoices(btn2=false, btn3=true, btn4=true, btn5=true);
            break;

        case 16.022:
            playSound("guncockingsfx");
            hideChoices(btn2=true, btn3=true, btn4=true, btn5=true);
            break;

        case 16.03:
            playSound("vasebreakingsfx");
            hideChoices(btn2=false, btn3=true, btn4=true, btn5=true);
            break;

        case 17:
            playSound("guncockingsfx");
            hideChoices(btn2=false, btn3=true, btn4=true, btn5=true);
            break;

        case 17.2:
            playSound("guncockingsfx");
            hideChoices(btn2=true, btn3=true, btn4=true, btn5=true);
            break;
        
        case 22:
            playSound("sus");
            document.querySelector(".ep-name").classList.remove("dark-mode-1");
            document.querySelector(".textArea").classList.remove("dark-mode-2");
            document.querySelector(".input-container").classList.remove("dark-mode-1");
            document.querySelector(".input-container > input").classList.remove("dark-mode-2");
            document.querySelectorAll(".option-button")[0].classList.remove("dark-mode-btns");
            document.querySelectorAll(".option-button")[1].classList.remove("dark-mode-btns");
            document.querySelectorAll(".option-button")[2].classList.add("dark-mode-btns");
            document.querySelectorAll(".option-button")[3].classList.add("dark-mode-btns");
            document.querySelectorAll(".option-button")[4].classList.add("dark-mode-btns");
            break;

        case 7:
        case 14:
        case 16:
        case 16.01:
        case 16.02:
        case 16.03:
        case 16.1:
        case 18:
        case 108:
        case 114:
        case 115:
        case 116:
        case 117.5:
            hideChoices(btn2=false, btn3=true, btn4=true, btn5=true);
            break;

        case 117:
            playSound("doorclosingsfx");
            hideChoices(btn2=false, btn3=false, btn4=false, btn5=false);
            break;
        
        case 117.1:
        case 117.2:
        case 117.4:
            playSound("dooropeningsfx");
            hideChoices(btn2=false, btn3=true, btn4=true, btn5=true);
            break;

        case 117.3:
            playSound("dooropeningsfx");
            hideChoices(btn2=true, btn3=true, btn4=true, btn5=true);
            break;

        case 117.51:
            playSound("dooropeningsfx");
            hideChoices(btn2=false, btn3=true, btn4=true, btn5=true);
            break;

        case 117.6:
            playSound("doorclosingsfx");
            hideChoices(btn2=true, btn3=true, btn4=true, btn5=true);
            break;

        default:
            hideChoices(btn2=true, btn3=true, btn4=true, btn5=true);
            break;
    }
}


/*

    GAME LOGIC

*/

// Variables
var dialogueText = document.querySelector(".textArea > p");
var optionsBtns = document.querySelectorAll(".option-button");
var userInput = document.querySelector(".input-container > input");
var continueButton = document.querySelector(".input-container > button");

let currentScene = [];

window.onload = function () {
    currentScene.push(ep2gameState[0]);
    document.querySelector(".scene-name").textContent = `${currentScene[0].scene}/24`;

    // Uncomment the Code below for release
    hideChoices(btn2=true, btn3=true, btn4=true, btn5=true);
    
    dialogueText.innerHTML = currentScene[0].dialogue;
    optionsBtns[0].innerHTML = `<p>${currentScene[0].options[0].option}</p>`;
    optionsBtns[1].innerHTML = `<p>${currentScene[0].options[1].option}</p>`;

    userInput.disabled = true;
}

/*

    WHEN AN OPTION BUTTON IS PRESSED, THE TEXT CONTENT OF THAT BUTTON
    IS ENTERED AS A VALUE IN THE USER INPUT FIELD.

*/
optionsBtns.forEach((button) => {

    button.addEventListener("click", () => {
        userInput.value = button.textContent;
    });

});


/*

    WHEN THE USER PRESSES THE CONTINUE BUTTON, THE FOLLOWING CODE
    SEARCHES FOR WHICH OPTION YOU CHOSE AND CHANGES THE SCENE
    TO THE APPROPRIATE NEXTSCENE VALUE.

*/
continueButton.addEventListener("click", () => {

    if (currentScene[0].scene === 24) {
        window.location.href = "/";
    }
    
    let currentKey = 0;

    currentScene[0].options.forEach((optionObj) => {

        if (userInput.value == optionObj.option) {

            currentKey = optionObj.nextScene; // Sets the next scene that is going to load as the currentKey to use with the soundManager.

            currentScene.splice(0, 1);

            ep2gameState.forEach((sceneObj) => {

                if (sceneObj.scene == optionObj.nextScene) {
                    currentScene.push(sceneObj);
                }

            });

        }

    });

    eventsManager(currentKey); // Runs sound effects for the scenes specified in the soundManager.

    userInput.value = "";

    document.querySelector(".scene-name").textContent = `${Math.floor(currentScene[0].scene)}/24`;
    dialogueText.innerHTML = currentScene[0].dialogue;
    optionsBtns[0].innerHTML = `<p>${currentScene[0].options[0].option}</p>`;
    optionsBtns[1].innerHTML = `<p>${currentScene[0].options[1].option}</p>`;
    optionsBtns[2].innerHTML = `<p>${currentScene[0].options[2].option}</p>`;
    optionsBtns[3].innerHTML = `<p>${currentScene[0].options[3].option}</p>`;
    optionsBtns[4].innerHTML = `<p>${currentScene[0].options[4].option}</p>`;

});
$("body").hide().fadeIn(1000);
$(".textArea").hide().slideDown(1000);

const storyText = document.querySelector(".textArea > p");
const userInput = document.querySelector(".controls > input");
const enterBtn = document.querySelector(".controls > button");

/*
    FUNCTION DESC:
    This function changes the current "scene"
    and clears the input field.
*/
function changeSceneText(currentScene) {

    storyText.classList.add("fade");

    setTimeout(() => {

        storyText.innerHTML = gameStates[currentScene].text;

    }, 1500);

    setTimeout(() => {

        storyText.classList.remove("fade");
        
    }, 4000);

    userInput.value = "";

}


/*
    FUNCTION DESC:
    This function takes in a parameter called "status", if
    the status is set to true, then the input field will be
    changed to not allow users to type in it. If the status
    is set to false then the user will be allowed to type
    in the input field.
*/
function inputIsLocked (status) {

    if (status === false) {

        userInput.placeholder = "insert text here...";

        userInput.disabled = false;

    } else if (status === true) {

        userInput.placeholder = "🔒  Click Continue";

        userInput.disabled = true;

    }

}

/*
    FUNCTION DESC:
    Makes it easier to instantiate audio for each scene that requires it.
    Basically just shortens the regular method for instantiating audio.
*/
function playSound(soundName) {

    var audio = new Audio(`./sfx/${soundName}.mp3`);

    audio.play();

}

/*
    FUNCTION DESC:
    Fancy name, I know. Basically this function
    exists for the purpose of "killing" or,
    restarting the game upon the user reaching
    a specific scene.
*/
function killSwitches(key) {

    switch (key) {

        case 0:
        case 11:
        case 15:
        case 16:
        case 29:

            setTimeout(() => {

                inputIsLocked(false);

            }, 2000);

            break;
        
        case 3:

            inputIsLocked(true); 

            setTimeout(() => {

                playSound("rotaryphone");

            }, 100);
            
            break;

        case 5:

            inputIsLocked(true);

            setTimeout(() => {

                playSound("phoneputdownsfx");

            }, 4000);

            break;

        case 7:

            inputIsLocked(true);

            setTimeout(() => {

                playSound("dooropeningsfx");

            }, 3000);

            break;

        case 9:

            inputIsLocked(true);

            setTimeout(() => {

                playSound("lamborghinistartup");

            }, 3000);

            break;

        case 12:

            inputIsLocked(true);

            setTimeout(() => {

                playSound("doorknockingsfx");

            }, 3000);

            break;
        
        case 13:

            inputIsLocked(true);

            setTimeout(() => {

                playSound("doorkickdownsfx");

            }, 2000);

            break;
        
        case 38:

            inputIsLocked(true);

            setTimeout(() => {

                playSound("lambodrivingawaysfx");

            }, 2000);

            break;
        
        case 39:

            inputIsLocked(true);

            setTimeout(() => {
                
                $(".textArea > p").hide().removeClass("fade").slideDown(1700);

                playSound("sus");

            }, 2000);

            break;

        case 40:

            inputIsLocked(true);

            break;

        case 41:

            inputIsLocked(true);

            enterBtn.textContent = "Exit";
    
        default:

            inputIsLocked(true);

            break;

    }

}

/*
    FUNCTION DESC:
    This is the main function that runs the whole game.
    When this function is run, which is when the user presses
    the "continue" button, a number of functions are triggered, these
    include the the changeSceneText function and the killSwitches
    function.

*/
var currentScene = gameStates[0].scene;

window.onload = function () {
    document.querySelector(".scene-name").textContent = `${currentScene}/${scenesArray.length}`;
}

const scenesArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41];

storyText.textContent = gameStates[0].text;

enterBtn.addEventListener("click", function () {

    var sceneInput = userInput.value.split(":");

    var sceneNum = Number(sceneInput[1]);

    for (var i = 0; i < gameStates[currentScene].options.length; i++) {

        if (currentScene === 41) {

            window.location.href = "./index.html";

        }

        if (userInput.value.toLowerCase() == gameStates[currentScene].options[i].value) {

            currentScene = gameStates[currentScene].options[i].nextScene;

            changeSceneText(currentScene);

        } else if (userInput.value == "&skScene:" + sceneNum && scenesArray.includes(sceneNum)) {

            currentScene = sceneNum;

            changeSceneText(currentScene);

        }

    }

    document.querySelector(".scene-name").textContent = `${currentScene}/${scenesArray.length}`;

    killSwitches(currentScene);

});

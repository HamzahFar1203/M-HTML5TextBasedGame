$("body").hide().fadeIn(1e3),$(".textArea").hide().slideDown(1e3);const storyText=document.querySelector(".textArea > p"),userInput=document.querySelector(".controls > input"),enterBtn=document.querySelector(".controls > button");var gameStates=[{scene:0,text:"Do you want to start your journey? 'Yes' to get started.",options:[{value:"yes",nextScene:1},]},{scene:1,text:"The snowball effect dictates that anything so little can emerge into pure catastrophe...",options:[{value:"",nextScene:2},]},{scene:2,text:`On <u>April 19th, 2023</u>, beloved cat, Dallas, disappeared spontaneuously from the Faruki mansion.
               The disturbance caused well known celebrity, Mr. Faruki, to take it upon himself to hire a detective.`,options:[{value:"",nextScene:3}]},{scene:3,text:`Location: Office
               <br>
               *You pick up the call*
               <br>
               <span class='side-char'>Mr. Faruki:</span> Listen, you're the best guy I know for the job, and the only person I can count on that knows this stuff.. I'm willing to pay however much you ask for, just help me.
               <br>
               <span class='main-char'>YOU:</span> However much I ask for huh? I'm listening.`,options:[{value:"",nextScene:4}]},{scene:4,text:`<span class='side-char'>Mr. Faruki:</span> M-my cat, he's missing, he was here last night, but I haven't been able to find him since I woke up.
               <br>
               <span class='main-char'>YOU:</span> A cat? are you sure it's not hiding somewhere?
               <br>
               <span class='side-char'>Mr. Faruki:</span> I'm sure! I checked everywhere, but I can't find him.`,options:[{value:"",nextScene:5}]},{scene:5,text:`<span class='main-char'>YOU:</span> Very well then Mr. Faruki. I understand the situation. I'll take care of it from here. I promise I'll find your beloved cat.
               <br>
               <span class='side-char'>Mr. Faruki:</span> Thank Y- *You hang up*`,options:[{value:"",nextScene:6}]},{scene:6,text:`It's time we introduced to you who you are. In this adventure, you will help Detective "Uzi Chan" find Mr. Faruki's lost cat.
               Along the way, YOU will be responsible for the detective's decisions. Ready? Press Continue.`,options:[{value:"",nextScene:7}]},{scene:7,text:"*You slick your hair back and walk out of the office building*",options:[{value:"",nextScene:8}]},{scene:8,text:`[Once you walk out of the office, you're met with heavy rain pouring from the night sky. You look around, taking in the
               lively views of night-time chicago]
               <br><br>
               *You sigh*
               <br>
               <span class='main-char'>YOU:</span> A lost cat huh..`,options:[{value:"",nextScene:9}]},{scene:9,text:"*You get in your lamborghini and drive off to the Faruki Mansion.*",options:[{value:"",nextScene:10}]},{scene:10,text:"[As you drive closer to the mansion, you see a large black gate and, large brick walls surrounding the mansion]",options:[{value:"",nextScene:11}]},{scene:11,text:`Location: Faruki Mansion
               <br>
               *You walk up to the front door of the mansion*
               <br>
               'Knock' or 'Break down'?`,options:[{value:"knock",nextScene:12},{value:"break down",nextScene:13}]},{scene:12,text:`*You knock and wait patiently*
               <br>
               *You hear Mr. Faruki's voice in the distance*
               <br>
               <span class='side-char'>Mr. Faruki:</span> Give me a minute, please.
               <br>
               *Mr. Faruki opens the door and welcomes you in*
               <br>
               <span class='side-char'>Mr. Faruki:</span> I've been waiting for you to get here, how have you been doing?
               <br>
               <span class='main-char'>YOU:</span> I've been doing fine, how about you?
               <br>
               <span class='side-char'>Mr. Faruki:</span> I've been doing fine as well.`,options:[{value:"",nextScene:14}]},{scene:13,text:`*You kick the door down, ripping it off its hinges*
               <br>
               *Mr. Faruki stands on the other side with his eyes wide open*
               <br>
               <span class='side-char'>Mr. Faruki:</span> WHAT DO YOU THINK YOU'RE DOING YOU MAD MAN!
               <br>
               <span class='main-char'>YOU:</span> Making my way in..
               <br>
               *Mr. Faruki picks up the broken door knob*
               <br>
               <span class='side-char'>Mr. Faruki:</span> You see this?! It's called a freaking knob, use it!`,options:[{value:"",nextScene:14}]},{scene:14,text:`<span class='main-char'>YOU:</span> Anyway, show me where you last saw the cat, and anything that has changed.
               <br>
               *Mr. Faruki leads you to the master bedroom*`,options:[{value:"",nextScene:15}]},{scene:15,text:`The room looks spotless, you see no clear evidence of criminal activity.
               <br>
               Where do you want to check first? 'Carpet', 'Bed', 'Window'`,options:[{value:"carpet",nextScene:17},{value:"bed",nextScene:18},{value:"window",nextScene:19}]},{scene:16,text:"Where do you want to check next? 'Carpet', 'Bed', 'Window' or 'Continue' to move on.",options:[{value:"carpet",nextScene:17},{value:"bed",nextScene:18},{value:"window",nextScene:19},{value:"continue",nextScene:20}]},{scene:17,text:`*You look carefully at the carpet and notice that certain spots seem slightly darker
               than others. You look closer and notice that those spots are damp.*`,options:[{value:"",nextScene:16}]},{scene:18,text:`*You look at the bed to search for evidence*
               <br>
               <span class='main-char'>YOU:</span> Does your cat sleep in this room with you?
               <br>
               <span class='side-char'>Mr.Faruki:</span> Yes, Dallas would normally sleep on the floor, no specific spot.`,options:[{value:"",nextScene:16}]},{scene:19,text:`*You look towards the window and notice that it's open. You take note of that.*
               <br>
               <span class='main-char'>YOU:</span> Do you normally keep that window open?
               <br>
               <span class='side-char'>Mr.Faruki:</span> N-no, it's normally always closed..`,options:[{value:"",nextScene:16}]},{scene:20,text:`*Mr.Faruki notices you looking around and immediately interrupts*
               <br>
               <span class='side-char'>Mr.Faruki:</span> I-it's been raining since last night, and the window is open.. that's probably why the carpet is a little wet.
               <br>
               <span class='main-char'>YOU:</span> You're not wrong Mr.Faruki, but you're also not entirely right. You're right about why the carpet is wet but, what about how it got wet? I doubt you keep a window to your room open all night long.`,options:[{value:"",nextScene:21}]},{scene:21,text:`<span class='main-char'>YOU:</span> If you don't mind, could you describe to me how your average night goes?
               <br>
               <span class='side-char'>Mr.Faruki:</span> I normally don't sleep at nights, but I had to do something at 7 in the morning today so I decided to go to sleep early last night.
               I don't know if it will help but, I woke up at 5 am to feed dallas, but then I went back to sleep.`,options:[{value:"",nextScene:0}]},];function changeSceneText(e){storyText.classList.add("fade"),setTimeout(()=>{storyText.innerHTML=gameStates[e].text},1500),setTimeout(()=>{storyText.classList.remove("fade")},4e3),userInput.value=""}function inputIsLocked(e){!1===e?(userInput.placeholder="insert text here...",userInput.disabled=!1):!0===e&&(userInput.placeholder="\uD83D\uDD12  Click Continue",userInput.disabled=!0)}function playSound(e){new Audio(`./sfx/${e}.mp3`).play()}function killSwitches(e){switch(e){case 0:case 11:case 15:case 16:setTimeout(()=>{inputIsLocked(!1)},2e3);break;case 3:inputIsLocked(!0),setTimeout(()=>{playSound("rotaryphone")},100);break;case 5:inputIsLocked(!0),setTimeout(()=>{playSound("phoneputdownsfx")},4e3);break;case 7:inputIsLocked(!0),setTimeout(()=>{playSound("dooropeningsfx")},3e3);break;case 9:inputIsLocked(!0),setTimeout(()=>{playSound("lamborghinistartup")},3e3);break;case 12:inputIsLocked(!0),setTimeout(()=>{playSound("doorknockingsfx")},3e3);break;case 13:inputIsLocked(!0),setTimeout(()=>{playSound("doorkickdownsfx")},2e3);break;default:inputIsLocked(!0)}}var currentScene=gameStates[0].scene;const scenesArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];storyText.textContent=gameStates[0].text,enterBtn.addEventListener("click",function(){for(var e=Number(userInput.value.split(":")[1]),n=0;n<gameStates[currentScene].options.length;n++)userInput.value.toLowerCase()==gameStates[currentScene].options[n].value?changeSceneText(currentScene=gameStates[currentScene].options[n].nextScene):userInput.value=="&skScene:"+e&&scenesArray.includes(e)&&changeSceneText(currentScene=e);killSwitches(currentScene)});
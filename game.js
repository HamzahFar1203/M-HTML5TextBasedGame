$("body").hide().fadeIn(1e3),$(".textArea").hide().slideDown(1e3);const storyText=document.querySelector(".textArea > p"),userInput=document.querySelector(".controls > input"),enterBtn=document.querySelector(".controls > button");var farukiRelationship="good",gameStates=[{scene:0,text:"Do you want to start your journey? 'Yes' to get started.",options:[{value:"yes",nextScene:1},]},{scene:1,text:"The snowball effect dictates that anything so little can emerge into pure catastrophe...",options:[{value:"",nextScene:2},]},{scene:2,text:`On <u>April 19th, 2023</u>, beloved cat, Dallas, disappeared spontaneuously from the Faruki mansion.
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
               <span class='main-char'>YOU:</span> A lost cat huh..`,options:[{value:"",nextScene:9}]},{scene:9,text:"*You get in your lamborghini and drive off to the Faruki Mansion.*",options:[{value:"",nextScene:10}]},{scene:10,text:"[As you drive closer to the mansion, you see a large black gate and, large brick walls surrounding the mansion]",options:[{value:"",nextScene:11}]},{scene:11,text:`*You walk up to the front door of the mansion*
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
               <span class='side-char'>Mr. Faruki:</span> You see this?! It's called a freaking knob, use it!`,options:[{value:"",nextScene:14}]},{scene:14,text:"<span class='main-char'>YOU:</span> Anyway, show me where you last saw the cat, and anything that has changed.",options:[{value:"",nextScene:0}]},];function changeSceneText(e){storyText.classList.add("fade"),setTimeout(()=>{storyText.innerHTML=gameStates[e].text},1500),setTimeout(()=>{storyText.classList.remove("fade")},4e3),userInput.value=""}function killSwitches(e){switch(e){case 1:case 2:case 4:case 6:case 8:case 10:case 12:case 13:case 14:setTimeout(()=>{userInput.placeholder="\uD83D\uDD12  Click Continue",userInput.disabled=!0},4e3);break;case 3:setTimeout(()=>{new Audio("./sfx/rotaryphone.mp3").play()},100),setTimeout(()=>{userInput.placeholder="\uD83D\uDD12  Click Continue",userInput.disabled=!0},4e3);break;case 5:setTimeout(()=>{new Audio("./sfx/phoneputdownsfx.mp3").play()},4e3),setTimeout(()=>{userInput.placeholder="\uD83D\uDD12  Click Continue",userInput.disabled=!0},4e3);break;case 7:setTimeout(()=>{userInput.placeholder="\uD83D\uDD12  Click Continue",userInput.disabled=!0,new Audio("./sfx/dooropeningsfx.mp3").play()},3e3);break;case 9:setTimeout(()=>{userInput.placeholder="\uD83D\uDD12  Click Continue",userInput.disabled=!0,new Audio("./sfx/lamborghinistartup.mp3").play()},3e3);break;default:enterBtn.textContent="Continue",enterBtn.classList.remove("maroonBtn"),userInput.placeholder="insert text here...",userInput.disabled=!1}}var currentScene=gameStates[0].scene;const scenesArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];storyText.textContent=gameStates[0].text,enterBtn.addEventListener("click",function(){for(var e=Number(userInput.value.split(":")[1]),n=0;n<gameStates[currentScene].options.length;n++)userInput.value.toLowerCase()==gameStates[currentScene].options[n].value?changeSceneText(currentScene=gameStates[currentScene].options[n].nextScene):userInput.value=="&skScene:"+e&&scenesArray.includes(e)&&changeSceneText(currentScene=e);killSwitches(currentScene)});
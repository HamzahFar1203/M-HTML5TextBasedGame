var ep2gameState = [
    {
        scene: 1,
        dialogue: `Welcome back to the Ménage Files.. as you may have noticed, things are a little different here this time. Instead of typing your answer out,
        you'll be using the buttons below the input bar to choose your path through the story.`,
        options: [
            {
                option: "next",
                nextScene: 2
            },
            {
                option: "Skip (Dev)",
                nextScene: 1
            }
        ]
    },
    {
        scene: 2,
        dialogue: `The number above is the scene counter, it will help you tell which scene you're on.
                   Keep in mind that some scenes are longer than others, also, there is a route that will
                   'break' the scene counter, it's intentional. The reason why it 'breaks' is because
                   that route is not source canon, it's game canon.`,
        options: [
            {
                option: "next",
                nextScene: 3
            }
        ]
    },
    {
        scene: 3,
        dialogue: `Make sure to adjust your audio to fit your preferences, so that the sound effects don't deafen you.`,
        options: [
            {
                option: "next",
                nextScene: 3.1
            }
        ]
    },
    {
        scene: 3.1,
        dialogue: `The episode should take you 10-20 minutes at most.`,
        options: [
            {
                option: "next",
                nextScene: 4
            }
        ]
    },
    {
        scene: 4,
        dialogue: `Anyway, without further ado, Welcome to Season 1: Episode 2.`,
        options: [
            {
                option: "next",
                nextScene: 5
            }
        ]
    },
    {
        scene: 5,
        dialogue: `The Unraveling.`,
        options: [
            {
                option: "Continue",
                nextScene: 6
            }
        ]
    },
    {
        scene: 6,
        dialogue: `After your conversation with Adam mazboot, you race over to the mazboot household to find Yahir mazboot, michaels older brother.`,
        options: [
            {
                option: "Continue",
                nextScene: 7
            }
        ]
    },
    {
        scene: 7,
        dialogue: `You hastily make your way to the front door of the mazboot household.`,
        options: [
            {
                option: "knock",
                nextScene: 8
            },
            {
                option: "wait for yahir",
                nextScene: 108
            }
        ]
    },
    {
        scene: 8,
        dialogue: `Yahir Mazboot opens the door and looks at you, confused. "What's going on here uzi?
                   you never told me that you were going to visit", he says.`,
        options: [
            {
                option: "I was nearby..",
                nextScene: 9
            }
        ]
    },
    {
        scene: 108,
        dialogue: `As Yahir walks past his door, he sees a dark figure t-posing on his front porch through the frosted windows.
                   Yahir sighs and says, "Not today..", then he swings open the door, bat in hand, ready to strike who he thinks
                   is a burglar, but he immediately realizes that it's you, detective Uzi. "What the hell, Uzi?! why didn't 
                   you ring the bell? I would've knocked you out if I didn't realize it was you", he says.`,
        options: [
            {
                option: "Apologize",
                nextScene: 108.1
            },
            {
                option: "Why should I apologize?",
                nextScene: 108.2
            }
        ]
    },
    {
        scene: 108.1,
        dialogue: `"Oh, I'm sorry, I just got lost in my thoughts, I have a lot on my mind right now", you reply.
                    Yahir looks at you suspiciously and replies, "Sure, anyway, what brings you here this late at night?`,
        options: [
            {
                option: "I was nearby..",
                nextScene: 9
            }
        ]
    },
    {
        scene: 108.2,
        dialogue: `You stand there, quietly staring into the depths of Yahir's soul. Yahir looks at you
                   confusingly and says, "anyway, why are you here?"`,
        options: [
            {
                option: "I was nearby..",
                nextScene: 9
            }
        ]
    },
    {
        scene: 9,
        dialogue: `You try to act like nothing is wrong, "I was nearby so I thought I'd drop by and greet you",
                  you say as you peek into his home from the side of your eyes. "I met adam uncle at the gas 
                  station nearby and he told me you were getting a present for michaels birthday".`,
        options: [
            {
                option: "Continue",
                nextScene: 10
            }
        ]
    },
    {
        scene: 10,
        dialogue: `Yahir starts to get suspicious. "Yeah, and what does it have to do with you?" he replies.`,
        options: [
            {
                option: "Go in",
                nextScene: 11 
            }
        ]
    },
    {
        scene: 11,
        dialogue: `Appalled by Yahir's lack of manners, you say, "Before we get into that.. uh, 
                   can I come in? The rain isn't getting any lighter" you remark. Yahir feels 
                   embarrassed at his lack of hospitality and invites you in.`,
        options: [
            {
                option: "Follow Yahir",
                nextScene: 12
            }
        ]
    },
    {
        scene: 12,
        dialogue: `As Yahir leads you down a hallway, you mention, "Recently I've taken up a case about a stolen 
                   cat, and I know that michael is quite fond of cats himself. Seeing as you're
                   trying to get a 'gift' for hi-", Yahir angrily cuts you off, "are you trying to 
                   insinuate something?"`,
        options: [
            {
                option: "Avoid Violence",
                nextScene: 113
            },
            {
                option: "Gung ho",
                nextScene: 13
            }
        ]
    },
    {
        scene: 13,
        dialogue: `Both of you stop walking and glare at each other, then you say "And what if I am?". Yahir
                   thinks for a moment, and replies "Let's talk about this in my office".`,
        options: [
            {
                option: "Follow Yahir",
                nextScene: 14
            }
        ]
    },
    {
        scene: 14,
        dialogue: `Yahir leads you around the corner into his office, a dimly lit room with papers all over the place and
                   classic mahogany office furniture, nothing short of 'classy'. Yahir sits in his chair and gestures for 
                   you to take a seat in the chair across his desk. He then says, "You mentioned something about a stolen 
                   cat?"`,
        options: [
            {
                option: "Yeah, the cat was stolen..",
                nextScene: 15
            },
            {
                option: "I know you stole it!",
                nextScene: 14.1
            }
        ]
    },
    {
        scene: 14.1,
        dialogue: `"Not just that, I know you stole the cat Yahir! Most likely to give it to michael
                    as a birthday gift. Bring it out already, you can't hide it for long", you respond.
                    In a fit of rage Yahir slams his hands onto his desk and stands up, "How dare you
                    accuse me of theft! I'm a law abiding citizen, a lawyer for gods sake! did you not care
                    to think things through before you came here to accuse me?!" Yahir exclaims.`,
        options: [
            {
                option: "Continue",
                nextScene: 14.2
            }
        ]
    },
    {
        scene: 14.2,
        dialogue: `"And what cat are you talking about? you just show up at my house and accuse me of
                    stealing a cat I don't even know about and you expect me to confess? What kind of
                    a detective are you?!", Yahir says.`,
        options: [
            {
                option: "That's reasonable..",
                nextScene: 14.3
            }
        ]
    },
    {
        scene: 14.3,
        dialogue: `You're shocked by Yahir's passionate response, causing you to begin doubting your original
                   thoughts on Yahir being the culprit. "Maybe you're right, maybe I took coincidences
                   as evidence. I'll tell you as much as I'm legally allowed to say", you respond. As
                   you begin to tell Yahir about the cat, Yahir calms down and goes back into his seat.`,
        options: [
            {
                option: "Continue",
                nextScene: 15
            }
        ]
    },
    {
        scene: 15,
        dialogue: `"Earlier tonight, I got a call from a certain someone in the family, complaining
                    about their stolen cat", you reply. Yahir's eyebrows slightly furrow, he responds,
                    "That's funny, because I got a similar call recently too..". Yahir's eyes
                    widen, he asks, "Uzi.. who hired you?"`,
        options: [
            {
                option: "It's confidential..",
                nextScene: 16
            }
        ]
    },
    {
        scene: 16,
        dialogue: `"You know how it goes yahir, I can't disclose that, it's confidential" you reply.
                    Yahir gets up off his chair and says "so is mine..", you quickly look up at Yahir
                    in shock; just then, Yahir slides across his desk and drop kicks you, forcing you
                    to fall back-first onto the floor with your chair. You quickly roll over to get out
                    of Yahir's way.`,
        options: [
            {
                option: "Spear him!",
                nextScene: 16.1
            },
            {
                option: "Back up",
                nextScene: 16.01
            }
        ]
    },
    {
        scene: 16.01,
        dialogue: `You get on your feet and immediately get into a fighting stance. Both You and Yahir
                   glare at each other, attempting to read each others next moves. Suddenly, Yahir dashes
                   towards you with a right jab.`,
        options: [
            {
                option: "Parry and Lean Left",
                nextScene: 16.02
            },
            {
                option: "Lean back",
                nextScene: 16.011
            }
        ]
    },
    {
        scene: 16.011,
        dialogue: `You quickly lean back, but that proves to be a bad idea as it creates an opening for
                   Yahir to throw a left hook to your abdomen, which he takes advantage of, causing you 
                   to lean forward as you try to cover your abdomen. Yahir immediately follows the left
                   hook with a combo, right jab to the face followed by a left jab to the face, completely 
                   throwing you off.`,
        options: [
            {
                option: "Fight back!",
                nextScene: 16.1
            }
        ]
    },
    {
        scene: 16.02,
        dialogue: `As Yahir's right jab comes flying your way, you parry his right arm with your left hand,
                   you lean left, and throw a heavy right jab to his chest, causing him to be thrown off; you
                   follow it with a left jab to his jaw, causing him to fall down.`,
        options: [
            {
                option: "Walk towards him",
                nextScene: 16.03
            },
            {
                option: "Walk towards Yahir's desk",
                nextScene: 16.021
            }
        ]
    },
    {
        scene: 16.021,
        dialogue: `As Yahir crawls his way to the nearby shelf to pick himself up, you start walking
                   towards his desk, "I know you keep it here somewhere", you say as you start looking
                   through his drawers. After looking through some drawers, you finally find his gun, 
                   a glock.`,
        options: [
            {
                option: "Continue",
                nextScene: 16.022
            }
        ]
    },
    {
        scene: 16.022,
        dialogue: `You make sure the gun is loaded, then you point it at Yahir as he pulls himself up
                   with the aid of his shelf. "It's over Yahir, don't move. It's time to talk. I don't
                   really like fighting, so I don't appreciate the stunt you pulled earlier, but that's
                   besides the point. The bottom line is, I'm not the culprit", you say.`,
        options: [
            {
                option: "Continue",
                nextScene: 16.023
            }
        ]
    },
    {
        scene: 16.023,
        dialogue: `"You're full of crap, think about it for a moment, Uzi, why would the same person hire
                    two different people for the same job? It doesn't make sense.. one of us is lying, 
                    and I know it isn't me", Yahir responds. "I could say the same, I know it isn't me, 
                    but that doesn't necessarily mean it has to be you", you respond.`,
        options: [
            {
                option: "Continue",
                nextScene: 16.024
            }
        ]
    },
    {
        scene: 16.024,
        dialogue: `"Hear me out.. I think this is a misunderstanding, a misunderstanding based on a
                    coincidence. Let's be honest Yahir, neither of us would pull the trigger", you say
                    as you put the gun down, "because we're family". "We'll get to the bottom of this
                    and figure out who the real culprit is. Until then, I need you to trust me, alright?"
                    you say. Yahir nods in agreement.`,
        options: [
            {
                option: "Continue",
                nextScene: 21
            }
        ]
    },
    {
        scene: 16.03,
        dialogue: `As Yahir uses a nearby shelf to pick himself up, you walk towards him.
                   Suddenly, Yahir grabs a vase from the shelf and throws it at your head,
                   luckily, you manage to dodge it. Yahir takes the opportunity created from
                   his distraction to swing his foot into your gut, causing you to fall in
                   agony. "I gotta say, Uzi, you put up a good fight, but I guess I'm the
                   better fighter.. I mean, come on, did you honestly think I'd believe you?
                   you really think I'd fall for such an obvious lie?! you came here to pin
                   your lies on me, didn't you?", yahir gets down, grabs you by the head and 
                   starts pummeling your face with his right fist.`,
        options: [
            {
                option: "Knee him!",
                nextScene: 16.2
            },
            {
                option: "Headbutt him!",
                nextScene: 16.11
            }
        ]
    },
    {
        scene: 16.1,
        dialogue: `Without thinking it through, you run towards Yahir to attempt to spear him; 
                   however, your effort is in vain as Yahir blocks your spear with a knee to 
                   your face, causing you to stumble and fall back onto the floor.
                   Yahir looks down at you and says, "You honestly thought I'd believe you? 
                   you really think I'd fall for that obvious lie?! You probably came here to
                   pin your crimes on me, didn't you?", yahir gets down, grabs you by the head
                   and starts pummeling your face with his right fist.`,
        options: [
            {
                option: "Knee him!",
                nextScene: 16.2
            },
            {
                option: "Headbutt him!",
                nextScene: 16.11
            }
        ]
    },
    {
        scene: 16.11,
        dialogue: `You grab Yahir by the collar of his shirt and swing your head towards
                   his, but Yahir blocks your attempt by grabbing you by the neck and pushing
                   you back down. Now he has you in a chokehold.`,
        options: [
            {
                option: "Knee him!",
                nextScene: 16.2
            }
        ]
    },
    {
        scene: 16.2,
        dialogue: `You take your left knee and slam it into the back of his head, causing him
                   to stumble and fall on his hands and knees. You immediately get up and kick
                   him in his abdomen as hard as you can, causing him to roll over. "What do you
                   even mean? what lie? it's true that I suspect you, but you have no reason to
                   suspect me!" you exclaim.`,
        options: [
            {
                option: "Continue",
                nextScene: 17
            }
        ]
    },
    {
        scene: 17,
        dialogue: `Yahir slowly grabs onto his desk and picks himself up, "You sure about that?
                   think about it for a second, Uzi, why would the same person hire two people for the
                   same job?" Yahir remarks, "It makes no sense. So, it could only mean one thing.. one 
                   of us is lying, and I know it isn't me", "So that's what you meant by 'So is mine'? 
                   Yahir, who hired YOU?" you respond. Yahir smirks and immediately pulls out a glock 
                   from one of his desk drawers and points it at you, then he mockingly says, "You know 
                   how it goes, Uzi, I can't disclose that, it's.. confidential".`,
        options: [
            {
                option: "Try to take the gun away",
                nextScene: 17.1
            },
            {
                option: "Try to de-escalate the situation",
                nextScene: 18
            }
        ]
    },
    {
        scene: 17.1,
        dialogue: `"Calm down Yahir.. there's no need to use guns here, look, I'm unarmed. I can't
                    hurt you", you say to make Yahir feel safe and to distract him. Suddenly, you
                    lunge towards Yahir and grab the glock just before he can process what happened,
                    then you quickly kick him in the stomach to loosen his grip on the gun and to take
                    it away.`,
        options: [
            {
                option: "Continue",
                nextScene: 17.2
            }
        ]
    },
    {
        scene: 17.2,
        dialogue: `You point the gun at Yahir and say, "Now, I need you to listen to me. No more
                   jumping to conclusions. I think we have a misunderstanding here, I'm not the
                   culprit, I can guarantee you that much, and I don't currently have any
                   evidence to prove that you're the culprit either. So how about this, for the
                   time being, you trust me, and I trust you, at least until either one of us
                   gets proven guilty, got it?". Yahir hesitantly agrees, "fine, we'll do it
                   your way for now".`,
        options: [
            {
                option: "Continue",
                nextScene: 21
            }
        ]
    },
    {
        scene: 18,
        dialogue: `"Hands up, it's over", Yahir says. You slowly raise your hands up, "Calm down
                    Yahir.. clearly there's a misunderstanding here". Yahir looks at you in disbelief,
                    "You're still trying to act innocent? don't you have any shame?!".`,
        options: [
            {
                option: "It wasn't me!",
                nextScene: 19
            },
            {
                option: "Try to take the gun away",
                nextScene: 17.1
            }
        ]
    },
    {
        scene: 19,
        dialogue: `"Calm down Yahir, think this through! Your reasoning isn't very reasonable, since we're 
                    the only ones that know of this case as of right now, you're just as likely of 
                    being the culprit as I am. Now, I need you to trust me, and I'll trust you for 
                    the moment too", you reply. You notice that Yahir is hesitant to put down the gun, 
                    "I'll prove to you that all of this is a misunderstanding, just put the gun down. 
                    Besides, I know you won't pull the trigger.. because we're family", you plead.`,
        options: [
            {
                option: "Trust",
                nextScene: 20
            }
        ]
    },
    {
        scene: 20,
        dialogue: `Yahir, still hesitant, puts the gun down slowly. "Fine, I'll trust you for now...
                   but one wrong move and you better believe I won't hesitate next time", Yahir responds.
                   "Noted, I'll keep that in mind", you remark.`,
        options: [
            {
                option: "Mutual Trust",
                nextScene: 21
            }
        ]
    },
    {
        scene: 21,
        dialogue: `"So, what now? how are we gonna figure out who the real culprit is?" Yahir asks.
                    "It's quite simple, Yahir, it's time we call a.. family meeting", you respond.`,
        options: [
            {
                option: "The End",
                nextScene: 22
            }
        ]
    },
    {
        scene: 113,
        dialogue: `"Oh, no no no, I was just asking if the gift you're buying Michael is also a cat? 
                    I didn't mean to insinuate that you stole a cat", you say. “Alright then, lets go
                    to the living room, we can continue our conversation there over a warm drink”, 
                    Yahir says.`,
        options: [
            {
                option: "Follow Yahir",
                nextScene: 114
            }
        ]
    },
    {
        scene: 114,
        dialogue: `You follow Yahir into a fairly dim room, its only source of light is a fireplace that 
                   manages to warm-up the entire room. Yahir gestures for you to take a seat on one of 
                   the sofas, "go ahead and take a seat, I'll get us some drinks. What do you like more, 
                   tea or coffee?" Yahir asks.`,
        options: [
            {
                option: "Tea",
                nextScene: 115
            },
            {
                option: "Coffee",
                nextScene: 115
            }
        ]
    },
    {
        scene: 115,
        dialogue: `"I need it, especially on a night as troublesome as this", you remark. "Great, I'll be 
                    back in a few minutes", Yahir says as he leaves to make the drinks.`,
        options: [
            {
                option: "Investigate the house (Recommended)",
                nextScene: 116
            },
            {
                option: "Wait for Yahir to return",
                nextScene: 115.1
            }
        ]
    },
    {
        scene: 115.1,
        dialogue: `You sit there waiting for Yahir to return, you look around the room as you wait, and see 
                   a burnt empty envelope on the floor right in front of the fireplace. You look at the 
                   envelope up close and see that it reads, "Hire request". You think, "Looks like it was 
                   burnt recently, he probably didn't see this piece fall out. I wonder where the contents 
                   of the envelope are". After a few more minutes, Yahir returns with the drinks.`,
        options: [
            {
                option: "Tell Yahir about the stolen cat",
                nextScene: 118
            }
        ]
    },
    {
        scene: 116,
        dialogue: `Before Yahir leaves the room, you ask, "Do you mind if I look around a bit? I saw some 
                   new decorations on my way in", Yahir thinks about it for a second then responds, "Sure, 
                   why not, just don't break anything, I don't buy cheap", Yahir laughs and walks out of the 
                   room.`,
        options: [
            {
                option: "Look around the living room",
                nextScene: 117.41
            },
            {
                option: "Enter the hallway",
                nextScene: 117
            }
        ]
    },
    {
        scene: 117,
        dialogue: `You enter the hallway`,
        options: [
            {
                option: "Enter the kitchen",
                nextScene: 117.1
            },
            {
                option: "Enter the master bedroom",
                nextScene: 117.2
            },
            {
                option: "Enter the bathroom",
                nextScene: 117.3
            },
            {
                option: "Enter the living room",
                nextScene: 117.4
            },
            {
                option: "Go Upstairs",
                nextScene: 117.5
            },
            
        ]
    },
    {
        scene: 117.1,
        dialogue: `You enter the kitchen and see Yahir making the drinks. Yahir says, "Give me some 
                   time, I'll let you know when I'm done".`,
        options: [
            {
                option: "Look around the kitchen",
                nextScene: 117.11
            },
            {
                option: "Return to the hallway",
                nextScene: 117
            }
        ]
    },
    {
        scene: 117.11,
        dialogue: `You look around the kitchen and you see a rich and glossy hardwood floor, wooden 
                   cabinets with steel handles, smooth wooden counters topped off with a marble 
                   countertop, top of the line stainless steel appliances, and a coffee machine 
                   that looks like it just came out of a coffee shop. All of that, but no evidence. 
                   Yahir looks at you and asks, "Do you need something?", "No thank you", you reply.`,
        options: [
            {
                option: "Return to the hallway",
                nextScene: 117
            }
        ]
    },
    {
        scene: 117.2,
        dialogue: `You walk into the master bedroom and are greeted with the calming scent of white sage.`,
        options: [
            {
                option: "Look around the master bedroom",
                nextScene: 117.21
            },
            {
                option: "Return to the hallway",
                nextScene: 117
            }
        ]
    },
    {
        scene: 117.21,
        dialogue: `You look around the master bedroom for evidence that Yahir is the culprit, you 
                   rush through some drawers, but aren't successful in finding any evidence; however, you 
                   do find the candle that's emitting the wonderful scent, despite the temptation to stea- 
                   'confiscate' it for evidence, you move on.`,
        options: [
            {
                option: "Return to the hallway",
                nextScene: 117
            }
        ]
    },
    {
        scene: 117.3,
        dialogue: `You head into the bathroom thinking, "What could he possibly hide inside the bathroom?". 
                   The bathroom has nothing in it, no drawers to look through, only some cleaning appliances 
                   in the cabinet under the sink.`,
        options: [
            {
                option: "Return to the hallway",
                nextScene: 117
            }
        ]
    },
    {
        scene: 117.4,
        dialogue: `You return to the living room, perhaps there's some evidence here?`,
        options: [
            {
                option: "Look around the living room",
                nextScene: 117.41
            },
            {
                option: "Return to the hallway",
                nextScene: 117
            }
        ]
    },
    {
        scene: 117.41,
        dialogue: `You look around the living room, carefully searching shelves and drawers, 
                   finally, you see a burnt envelope on the ground right in front of the fireplace. 
                   You pick up the envelope and read what's written on it; it reads, "Hire request". 
                   "A request to hire Yahir? He must've burnt it recently since he didn't notice 
                   this piece laying here.. The envelope is empty, he probably took what was inside 
                   it to a private room", you think to yourself.`,
        options: [
            {
                option: "Return to the hallway",
                nextScene: 117
            }
        ]
    },
    {
        scene: 117.5,
        dialogue: `You go up the stairs to the second floor.`,
        options: [
            {
                option: "Go into the Office",
                nextScene: 117.51
            },
            {
                option: "Go downstairs",
                nextScene: 117
            }
        ]
    },
    {
        scene: 117.51,
        dialogue: `You enter Yahir's office; a dimly lit room with classic mahogany office furniture and 
                   lots of papers scattered all over the room. "He must have a lot of clients right now", 
                   you think to yourself, "Since the case is new, If there is any evidence, I bet it's still 
                   on his desk".`,
        options: [
            {
                option: "Search yahir's desk",
                nextScene: 117.52
            },
            {
                option: "Exit the office",
                nextScene: 117.5
            }
        ]
    },
    {
        scene: 117.52,
        dialogue: `You go to Yahir's desk and something immediately catches your eye; it's a picture, "where 
                   have I seen this one before?", you mutter to yourself. You look down and pick up the piece 
                   of paper that the picture was laying on, it's a letter, the letter reads "Hire request". You read 
                   the contents of the letter and mutter, "Who in the world writes a rap as their request to 
                   hire a lawyer?", then you look at the signature, "Oh… nevermind". Just then, you hear Yahir 
                   coming up the stairs. You quickly put everything back where it was.`,
        options: [
            {
                option: "Quickly leave the office",
                nextScene: 117.6
            }
        ]
    },
    {
        scene: 117.6,
        dialogue: `You dash out of the Office into the hallway and start acting like you're admiring a painting. 
                   Yahir comes up the stairs and says "There you are! I prepared the drinks, let's talk in the 
                   living room". You make your way to the living room and take your seat, and so does Yahir.`,
        options: [
            {
                option: "Tell yahir about the stolen cat",
                nextScene: 118
            }
        ]
    },
    {
        scene: 118,
        dialogue: `You take a sip of your drink and say, "It's better if I be direct with you, Yahir. Earlier 
                   today I got a call from someone in the family asking me to take up a case about their stolen 
                   cat. By law I'm not allowed to disclose much information to people that aren't involved, so 
                   I can't tell you as much as I would like to". Yahir looks shocked for a moment, then responds, 
                   "What a coincidence, I got a similar request earlier too".`,
        options: [
            {
                option: "By who?",
                nextScene: 119
            }
        ]
    },
    {
        scene: 119,
        dialogue: `You ask, "By who?". "My situation is similar to yours.. I'm legally obligated to keep my 
                   clients' information a secret, but I think it's fair to assume that we could possibly have the 
                   same cases, don't you think?" Yahir asks. You respond, "Yeah, it's possible, but it raises the 
                   question, why hire two people for the same job..? Or-", Yahir immediately cuts you off and 
                   says, "I know what you're gonna say, that can't be possible, do you realize how much 
                   preparation it would take for one person to pull that off?".`,
        options: [
            {
                option: "Continue",
                nextScene: 120
            }
        ]
    },
    {
        scene: 120,
        dialogue: `You think for a moment then say, "One question leads to another.. There's just too many 
                   questions right now to come to a conclusion on anything". Yahir asks, "Yeah, what do you 
                   think we should do?", you smirk and respond, "Ordinary families have ordinary problems, 
                   fortunately, we're anything but ordinary, things are about to get interesting, Yahir. For 
                   now, there's only one thing we can do, it's time to call.. A Family Meeting”.`,
        options: [
            {
                option: "Continue",
                nextScene: 22
            }
        ]
    },
    {
        scene: 22,
        dialogue: `Congratulations, You finished Episode 2: The Unraveling!`,
        options: [
            {
                option: "Next",
                nextScene: 23
            }
        ]
    },
    {
        scene: 23,
        dialogue: `Coming soon...`,
        options: [
            {
                option: "Next",
                nextScene: 24
            }
        ]
    },
    {
        scene: 24,
        dialogue: `Episode 3: Family Meeting.`,
        options: [
            {
                option: "Exit.",
                nextScene: 1
            }
        ]
    },
];
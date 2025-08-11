---
title: Game Design Troubleshooting - Tier Lists
description: An exercise to help balance your game and a Fateweaver update.
slug: rank-your-x
authors: [kylie]
tags: [studio wtchcrft, fateweaver, game design, video games]
image: /img/fatespinner/fc-tiers.jpg
---

We've been making steady progress on Fateweaver these last few weeks. Hit a big milestone of implementing every single rule we had in paper into the digital version; Parity Milestone!

With the rules and functionality in place we're now moving on to more graphics, sound design, and bug hunting. We have only 2 weeks until one of our grant application deadlines so it's all hands (4) on deck for this last push.

But before getting into Fateweaver updates I wanted to share a game design exercise that helped us identify a problem with our core set up; Tier List your X.

<!--truncate-->

## Tier Lists

Tier lists are a common online ranking system that people use to show their ranking of anything from most powerful characters in a game to best ways to cook a potato. The format has been meme'd to infinity and is often used to get some laughs. But it turns out that what can be it's own fun game that can also help identify balance issues in your game.

In this example people have ranked the items from Mario Kart 8:

![An example of a tier list: items in Mario Kart 8.](/img/mario-tier-list.png)

## Our problem

Something we identified in our paper version of Fateweaver was that the game was too easy. We weren't exactly sure why but we were tracking our win/loss rate in our own games and losses were rare. While it's good for your game to be winnable, we did want our game to be a challenge. We worried that maybe the board (our randomly generated landscapes) were too small or too easy to deal with. That maybe certain cards (Journey cards) were too powerful to let players have at the start of the game. Or that our Fate Cards weren't mean enough.

After multiple discussions on "how to make it harder?" we decided to turn it around and ask "why isn't it hard?". The Fate Cards were the obvious first culprit as they're designed to be the difficulty you're facing in each run. Their role is to make a run more challenging in different ways.

In some of our tracking we had data on how often specific Fate Cards came up and how often someone won or lost against them. This data wasn't enough to give us our answer because there were just too few losses overall. Maybe if we had a digital version of our game that had in-depth tracking to say that most players lost when The Sacrifice card was drawn we'd have some quick answers. But we didn't and building a digital version to fix a paper version isn't an efficient way to approach game design. We couldn't lean on data, so we had to go with our judgement; it was time to be judge and jury to each Fate Card.

## Our solution

We piled up our Fate Cards and assigned categories for each ranking. Traditional format is to start with S Rank (The very best), then do down to A, B, C, D, etc. We weren't ranking based on which cards were the best though, we wanted to rank based on which cards were the worst to play against. So our ranking was:

- Very Bad
- Bad
- Fine
- Good actually

We went through all 20 and ended up with this:
![Photo of our Fate Card rankings](/img/fatespinner/fc-tiers.jpg)

It became instantly clear that we had a heavy bottom. The cards that were supposed to set the difficulty of the game were actually boons that helped the player win.

So... we cut them all.

Of that bottom row of "Good actually" we either re-designed the Fate Card to be something more aggressive or we kept it's good quality and turned it into an Item Card instead. Letting the boons become a bonus the player can choose at the start of a run in hopes of getting an item that will help to deal with the Fate Cards they've been dealt.

This ranking exercise took no more than 10 minutes. And it was fun. We did it together, arguing for a different ranking if we felt strongly but most of the time we were aligned on each cards judgement. 

Re-working the identified problem took more than 10 minutes but even just playing with fewer Fate Cards for a while (The ones deemed Bad Actually by our rankings) it became clear that by removing the bottom row of cards that we had a hard game again. We no longer had to guess at what the problem was, we could move on to solving the problem.

It's a little funny to look back as so much has changed in the 2 months since I took that photo. I'd rank the card very differently now.

I feel like this exercise can work for any feature of a game that has variations. Items, abilities, skills, powerups, cards. I think it will also be interesting to re-do the exercise at certain points, especially when introducing new fate cards.

## Current difficulty

The now digital version of Fateweaver is... hard. It's a combination of adding rogue-like elements (you need to get through 5 rounds with one deck of 40 cards which are "lost" when they are played) and that the computer is better at keeping track of the rules and triggers than our fallible human brains.

Sophie has completed a 5 Thread run of Fateweaver once. I've crashed out on thread 5 a few times now. It takes smart playing and patience, and I'm not great at patience. And I also draw The Dead Man almost every opening hand which doesn't inspire me to have a great run.

There are probably a few tweaks that will change how the difficulty feels. But this is likely to remain for the next few months as we start to share a demo around. It will be fun to see if any friends have the persistence to stick with it and get through 5 Threads.

## Fateweaver progress

My largest recent contribution to Fateweaver was blueprint styles items cards (inspired by our love for Blue Prince) and a character sprite for the anima (the player figure). 

![Some item cards](/img/fatespinner/fw-items.jpg)

The anima is meant to be rather faceless, something a player can project their own meaning onto. Ideally the anima will change over the duration of the game to reflect the progress the player has made, but those are future goals. For now the big goal was to get the figure on the board with a few animations to keep things interesting while the player moves about the board.

![Hooded anima](/img/fatespinner/anima-frames.png)

## Conclusion

Today is the last day of Debut Festival, a Steam festival for studios who have put their first game on Steam. Love in the Time of Spellphage was accepted into this festival making it our first! This has led to our highest Wishlist jump since launching the steam page which is very exciting. Next blog post I'll go into more detail about it as we should see our final numbers tomorrow.
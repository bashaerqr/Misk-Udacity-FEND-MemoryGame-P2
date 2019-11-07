# Memory Game Project
This is a simple game built to test a user's memory. There's a deck of cards with different icons and each icon is shown in two cards.

## Table of Contents

* [Instructions](#instructions)
* [Download](#Download)
* [Dependencies](#Dependencies)
* [CodeAcknowledgements](#CodeAcknowledgements)

## Instructions
Some instructions about how to play the game
In this game The cards are arranged randomly on the grid
* First click a card to display it's icon.
* Then click a second card.
* Memorize each card's location to find a matched card.
* Try to find the corresponding card with the same icon.

If the cards match, both cards stay flipped over also, if the cards do not match, both cards are flipped face down.
The game ends once all cards have been correctly matched.

uctions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Download
Tap this link to start playing the memory game [Github Link](https://github.com/bashaerqr?tab=projects)

## Dependencies
This project used some dependencies that help to get amazing design
* Bootstrap font-awesome.
* Fonts.googleapis.

## Code Acknowledgements
Random disply card list from [Stackoverflow]( https://stackoverflow.com/questions/26072777/randomly-display-list-items).
```
var uls = document.querySelectorAll('.deck');
for (var j = 0; j < uls.length; j++) {
    var ul = uls.item(j);
    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
}
```

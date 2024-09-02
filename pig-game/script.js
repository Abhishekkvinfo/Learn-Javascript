"use strict";

const score0 = document.querySelector("#score1");
const score1 = document.querySelector("#score2");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".newgame");
const btnRoll = document.querySelector(".roll");
const btnHOLD = document.querySelector(".hold");

score0.textContent = "0";
score1.textContent = "0";

dice.classList.remove("dice");

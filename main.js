/* counter section START */
/* counter A */
const scoreA = document.getElementById("playerA-score");

let countA = 20;

const decreaseABtn = document.getElementById("playerA-decrease-btn").addEventListener("click", () => {
    countA -= 1;
    scoreA.textContent = countA;
});

const increaseABtn = document.getElementById("playerA-increase-btn").addEventListener("click", () => {
    countA += 1;
    scoreA.textContent = countA;
});

/* counter B */
const scoreB = document.getElementById("playerB-score");

let countB = 20;

const decreaseBBtn = document.getElementById("playerB-decrease-btn").addEventListener("click", () => {
    countB -= 1;
    scoreB.textContent = countB;
});

const increaseBBtn = document.getElementById("playerB-increase-btn").addEventListener("click", () => {
    countB += 1;
    scoreB.textContent = countB;
});

/* counter section END */
/* ***************************************** */
/* mana section START */

let greenMana = document.querySelectorAll(".mana-green-container");
let whiteMana = document.querySelectorAll(".mana-white-container");
let blueMana = document.querySelectorAll(".mana-blue-container");
let blackMana = document.querySelectorAll(".mana-black-container");
let redMana = document.querySelectorAll(".mana-red-container");

/* colors to create background gradient when mana is picked --coming soon-- */
const colors = {
    green: "#6a994e",
    white: "#fcefb4",
    blue: "#7fc8f8",
    black: "#8b8c89",
    red: "#c75146"
}

greenMana.forEach((item)=>{
    item.addEventListener("click", ()=>{
        item.classList.toggle("active-mana");
    })
})

whiteMana.forEach((item)=>{
    item.addEventListener("click", ()=>{
        item.classList.toggle("active-mana");
    })
})

blueMana.forEach((item)=>{
    item.addEventListener("click", ()=>{
        item.classList.toggle("active-mana");
    })
})

blackMana.forEach((item)=>{
    item.addEventListener("click", ()=>{
        item.classList.toggle("active-mana");
    })
})

redMana.forEach((item)=>{
    item.addEventListener("click", ()=>{
        item.classList.toggle("active-mana");
    })
})

function resetBg() {
    body.style.background = "#333";
}

/* mana section END */
/* ***************************************** */
/* dice section START */

let diceFour = document.querySelector(".dice-four");
let diceSix = document.querySelector(".dice-six");
let diceTwenty = document.querySelector(".dice-twenty");

function rollDiceFour() {
    let randomRollDiceFour = Math.floor(Math.random()*4)+1;

    setTimeout(()=>{
        diceFour.classList.add("dice-animation");
        return diceFour.textContent = randomRollDiceFour;
    },100)

}

let diceFourBtn = document.getElementById("dice-four-btn");

diceFourBtn.addEventListener("click", ()=>{
    diceFour.classList.remove("dice-animation");
    
    rollDiceFour()

    diceFourBtn.disabled = true;
    diceFourBtn.style.background = "#e83f6f";
    setTimeout(()=>{
        diceFourBtn.disabled = false;
        diceFourBtn.style.background = "#333";
    },1000)

})


function rollDiceSix() {
    let randomRollDiceSix = Math.floor(Math.random()*6)+1;

    setTimeout(()=>{
        diceSix.classList.add("dice-animation");
        return diceSix.textContent = randomRollDiceSix;
    },100)

}

let diceSixBtn = document.getElementById("dice-six-btn");

diceSixBtn.addEventListener("click", ()=>{
    diceSix.classList.remove("dice-animation");
    
    rollDiceSix()

    diceSixBtn.disabled = true;
    diceSixBtn.style.background = "#e83f6f";
    setTimeout(()=>{
        diceSixBtn.disabled = false;
        diceSixBtn.style.background = "#333";
    },1000)

})


function rollDiceTwenty() {
    let randomRollDiceTwenty = Math.floor(Math.random()*20)+1;

    setTimeout(()=>{
        diceTwenty.classList.add("dice-animation");
        return diceTwenty.textContent = randomRollDiceTwenty;
    },100)

}

let diceTwentyBtn = document.getElementById("dice-twenty-btn");

diceTwentyBtn.addEventListener("click", ()=>{
    diceTwenty.classList.remove("dice-animation");
    
    rollDiceTwenty()

    diceTwentyBtn.disabled = true;
    diceTwentyBtn.style.background = "#e83f6f";
    setTimeout(()=>{
        diceTwentyBtn.disabled = false;
        diceTwentyBtn.style.background = "#333";
    },1000)

})

/* dice section END*/
/* ***************************************** */
/* flip coin START*/

let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector(".flip-btn");

flipBtn.addEventListener("click", () => {
  let randomFlip = Math.floor(Math.random()*2);
  coin.style.animation = 0;
  if (randomFlip) {
    setTimeout( () => {
    coin.style.animation = "flip-tails 2s forwards"
  }, 200)
  heads++
  } else {
    setTimeout( () => {
      coin.style.animation = "flip-heads 2s forwards"
    }, 200)
    tails++
  }
  disableBtn()
})

function disableBtn() {
  flipBtn.disabled = true
  setTimeout( () => {
    flipBtn.disabled = false
  }, 2000)
}
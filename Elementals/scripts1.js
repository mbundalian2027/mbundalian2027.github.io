document.body.classList.add('pagefadein');
let lifefire = 100,
    lifewater = 120,
    lifeearth = 160,
    lifewind = 110,
    life1 = 0,
    life2 = 0;
let firemoves = ["Hell's Inferno", "Scorching Sun", "Hellfire Incarnate"];
let watermoves = ["Striking Tide", "Hydro Shield", "Drowning Wave"];
let earthmoves = ["Groundbreaker", "Earthen Wall", "Geo Grandia"];
let windmoves = ["Towering Tornado", "Goddess's Breath", "Tempest Drive"];
let moves1 = [];
let moves2 = [];
let mana1 = 100;
let mana2 = 100;
let movework1determine;
let movework2determine;

/*--------------------------------------------------------------------------------------------*/

//SELECTION OF HERO
let p1choice;
function fire1() {
    p1choice = "fire";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
        elem.style.color = "";
    });
    document.getElementById('selectfire1').style.backgroundColor = "rgb(241, 18, 18)";
    document.getElementById('selectfire1').style.color ="white";
    document.getElementById('submit1').style.backgroundColor = "";
}
function water1() {
    p1choice = "water";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
        elem.style.color = "";
    });
    document.getElementById('selectwater1').style.backgroundColor = "rgb(0, 97, 187)";
    document.getElementById('selectwater1').style.color ="white";
    document.getElementById('submit1').style.backgroundColor = "";
}
function earth1() {
    p1choice = "earth";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
        elem.style.color = "";
    });
    document.getElementById('selectearth1').style.backgroundColor = "rgb(56, 18, 18)";
    document.getElementById('selectearth1').style.color ="white";
    document.getElementById('submit1').style.backgroundColor = "";
}
function wind1() {
    p1choice = "wind";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
        elem.style.color = "";
    });
    document.getElementById('selectwind1').style.backgroundColor = "rgb(204, 246, 242)";
    document.getElementById('submit1').style.backgroundColor = "";
}
function turnRedForOneSecond1() {
    document.getElementById('submit1').style.backgroundColor = "rgb(255, 239, 96)";

    setTimeout(() => {
        document.getElementById('submit1').style.backgroundColor = "";
    }, 300);
}
function submit1() {
    if (p1choice) {
        switch (p1choice) {
            case "fire":
                moves1 = firemoves;
                life1 = lifefire;
                console.log("PLAYER 1 CHOSE FIRE");
                document.getElementById('type1').innerHTML = "Fire";
                passive1.innerHTML = "Additional DMG: 0 DMG";
                animationFramesPlayer1 = fireanimation1;
                player1dmgpic = firedmg1;
                break;
            case "water":
                moves1 = watermoves;
                life1 = lifewater;
                console.log("PLAYER 1 CHOSE WATER");
                document.getElementById('type1').innerHTML = "Water";
                passive2.innerHTML = "Passive: Inactive";
                animationFramesPlayer1 = wateranimation1;
                player1dmgpic = waterdmg1;
                break;
            case "earth":
                moves1 = earthmoves;
                life1 = lifeearth;
                console.log("PLAYER 1 CHOSE EARTH");
                document.getElementById('type1').innerHTML = "Earth";
                passive1.innerHTML = "Passive: Inactive";
                animationFramesPlayer1 = earthanimation1;
                player1dmgpic = earthdmg1;
                break;
            case "wind":
                moves1 = windmoves;
                life1 = lifewind;
                console.log("PLAYER 1 CHOSE WIND");
                document.getElementById('type1').innerHTML = "Wind";
                passive1.innerHTML = "Lifesteal: 50%";
                animationFramesPlayer1 = windanimation1;
                player1dmgpic = winddmg1;
                break;
        }

        document.getElementById('submit1').style.backgroundColor = "black";
        setTimeout(() => {
            document.getElementById('pvp2').classList.remove('hidden');
            document.querySelectorAll('button.indivmoves2').forEach(elem => {
                elem.disabled = true;
            });
        }, 500);

        //      DISABLE BACK BUTTON
        document.getElementById('backtoindex').style.display = "none";
        document.getElementById('backtopvp').style.display = "block";

        console.log("Player 1 moves\n" + moves1);
        console.log("Life: " + life1 + "\n\n");
    } else {
        turnRedForOneSecond1();
    }

}
//-----------------------------
let p2choice;
function fire2() {
    p2choice = "fire";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
        elem.style.color = "";
    });
    document.getElementById('selectfire2').style.backgroundColor = "rgb(241, 18, 18)";
    document.getElementById('selectfire2').style.color ="white";
    document.getElementById('submit2').style.backgroundColor = "";
}
function water2() {
    p2choice = "water";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
        elem.style.color = "";
    });
    document.getElementById('selectwater2').style.backgroundColor = "rgb(0, 97, 187)";
    document.getElementById('selectwater2').style.color ="white";
    document.getElementById('submit2').style.backgroundColor = "";
}
function earth2() {
    p2choice = "earth";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
        elem.style.color = "";
    });
    document.getElementById('selectearth2').style.backgroundColor = "rgb(56, 18, 18)";
    document.getElementById('selectearth2').style.color ="white";
    document.getElementById('submit2').style.backgroundColor = "";
}
function wind2() {
    p2choice = "wind";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
        elem.style.color = "";
    });
    document.getElementById('selectwind2').style.backgroundColor = "rgb(204, 246, 242)";
    document.getElementById('submit2').style.backgroundColor = "";
}
function turnRedForOneSecond2() {
    document.getElementById('submit2').style.backgroundColor = "rgb(255, 239, 96)";

    setTimeout(() => {
        document.getElementById('submit2').style.backgroundColor = "";
    }, 300);
}
function submit2() {
    if (life1 != 0){
        if (p2choice) {
            switch (p2choice) {
                case "fire":
                    moves2 = firemoves;
                    life2 = lifefire;
                    console.log("PLAYER 2 CHOSE FIRE");
                    document.getElementById('type2').innerHTML = "Fire";
                    passive2.innerHTML = "Additional DMG: 0 DMG";
                    animationFramesPlayer2 = fireanimation2;
                    player2dmgpic = firedmg2;
                    break;
                case "water":
                    moves2 = watermoves;
                    life2 = lifewater;
                    console.log("PLAYER 2 CHOSE WATER");
                    document.getElementById('type2').innerHTML = "Water";
                    passive2.innerHTML = "Passive: Inactive";
                    animationFramesPlayer2 = wateranimation2;
                    player2dmgpic = waterdmg2;
                    break;
                case "earth":
                    moves2 = earthmoves;
                    life2 = lifeearth;
                    console.log("PLAYER 2 CHOSE EARTH");
                    document.getElementById('type2').innerHTML = "Earth";
                    passive1.innerHTML = "Passive: Inactive";
                    animationFramesPlayer2 = earthanimation2;
                    player2dmgpic = earthdmg2;
                    break;
                case "wind":
                    moves2 = windmoves;
                    life2 = lifewind;
                    console.log("PLAYER 2 CHOSE WIND");
                    document.getElementById('type2').innerHTML = "Wind";
                    passive2.innerHTML = "Lifesteal: 50%";
                    animationFramesPlayer2 = windanimation2;
                    player2dmgpic = winddmg2;
                    break;
            }
            console.log("Player 2 moves\n" + moves2);
            console.log("Life: " + life2);
            document.getElementById('submit2').style.backgroundColor = "black";

            if (life1 != 0 && life2 != 0){
                setTimeout(() => {
                    document.getElementById('pvpchoosecontainer').style.display = "none";
                    document.getElementById('turns').style.display = "block";
                    document.getElementById('screen').style.display = "block";
                    document.getElementById('left').style.display ="none";
                    

                    //WHITE SCREEN DASH ANIMATION
                    document.getElementById("whitebar").style.display = "block";   
                    document.getElementById('backgroundMusic').pause();
                    kokonut = 1;
                    setTimeout(() => {
                        document.getElementById('fightaudio').play();
                    }, 500);
                    setTimeout(() => {
                        document.getElementById("whitebar").style.animation = "whitebar 1s ease forwards";
                        document.getElementById("fight").style.display = "block";
                        document.body.style.backgroundImage = "url('pics/bg1.jpg')"
                    }, 1900);
                    
                    setTimeout(function() {
                        document.getElementById("fight").style.display = "none";
                        document.getElementById('fightingmusic').play();
                        toknow = 0;
                    }, 3000);

                    setTimeout(() => {

                    }, 6000);
                    startAnimation1();
                    startAnimation2();  
                    currentlifeofplayer1 = life1;
                    currentlifeofplayer2 = life2;
                    player1turn();
                    
                }, 10);
            } else{
                turnRedForOneSecond2();
            }
            console.log("--------------------------------------------\n\n");
            disableButton2();

        } else {
            turnRedForOneSecond2();
        }
    } else {
        turnRedForOneSecond2();
    }

}
//MOVE BUTTONS
function move1(){
    document.getElementById('pvp2').style.animation = "toPlayer2 .5s ease forwards";
    document.getElementById('pvp1').style.animation = "exitPlayer1 1s ease forwards";
    document.getElementById('left').style.display ="block";
    document.getElementById('right').style.display ="none";
}
function move2(){
    document.getElementById('pvp2').style.animation = "exitPlayer2 1s ease forwards";
    document.getElementById('pvp1').style.animation = "toPlayer1 .5s ease forwards";
    document.getElementById('right').style.display ="block";
    document.getElementById('left').style.display ="none";
}

//DAMAGE PER MOVE
let dmgf1 = 12,
    dmgf2 = 17,
    dmgf3 = 40,

    dmgw1 = 10,
    healw2 = 30,
    dmgw3 = 25,

    dmge1 = 7,
    heale2 = 50,
    dmge3 = 20,

    dmgwi1 = 15,
    healwi2 = 20,
    dmgwi3 = 30

let manaf2 = 25,
    manaf3 = 80,

    manaw2 = 20,
    manaw3 = 45,

    manae2 = 40,
    manae3 = 45,

    manawi2 = 30,
    manawi3 = 50

let passive1 = document.getElementById('passive1');
let passive2 = document.getElementById('passive2');




/*--------------------------------------------------------------------------------------------*/

//-------------------PLAYER 1---------------------
//FIRE
function p1fire1() {
    life2 = life2 - (dmgf1 + (0.25 * (lifefire - life1)));
    movework1determine = "yes";

    addmana1();
        disableButton1();
        player1turn();
    work1();
}
function p1fire2() {
    if (mana1 < manaf2) {
        console.log("INSUFFICIENT MANA");
        movework1determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 79) {
            life2 = life2 - (dmgf2 + (0.25 * (lifefire - life1)));
            mana1 -= manaf2;
            movework1determine = "yes";
        }
        disableButton1();
        player1turn();
    }
    work1();
}
function p1fire3() {
    if (mana1 < manaf3) {
        console.log("INSUFFICIENT MANA");
        movework1determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 69) {
            life2 = life2 - (dmgf3 + (0.25 * (lifefire - life1)));
            mana1 -= manaf3;
            movework1determine = "yes";
        }
        disableButton1();
        player1turn();
    }
    work1();
}

//WATER
function p1water1() {
    life2 -= dmgw1;
    movework1determine = "yes";

    mana1 += 10;
    addmana1();
        disableButton1();
        player1turn();
    work1();
}
function p1water2() {
    if (mana1 < manaw2) {
        console.log("INSUFFICIENT MANA");
        movework1determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 79) {
            if (life1 <= 30) {
                life1 += 10;
            }
            life1 += healw2;
            mana1 -= manaw2;
            movework1determine = "yes";
        }
        disableButton1();
        player1turn();
    }
    work1();

}
function p1water3() {
    if (mana1 < manaw3) {
        console.log("INSUFFICIENT MANA");
        movework1determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 89) {
            life2 = life2 - (dmgw3 + (0.1*life2)) ;
            mana1 -= manaw3;
            movework1determine = "yes";
        }
        disableButton1();
        player1turn();
    }
    work1();

}


//EARTH
function p1earth1() {
    life2 -= dmge1;
    movework1determine = "yes";

    addmana1();
        disableButton1();
        player1turn();
    work1();


}
function p1earth2() {
    if (life1 <= 50){
        const randomnumber = Math.floor(Math.random() * 100);
    
        if (randomnumber <= 69) {
            life1 += heale2;
            movework1determine = "yes";
        }
        disableButton1();
        player1turn();
    } else{
        if (mana1 < manae2) {
            console.log("INSUFFICIENT MANA");
            movework1determine = "nomana";
        } else {
            const randomnumber = Math.floor(Math.random() * 100);
    
            if (randomnumber <= 64) {
                life1 += heale2;
                mana1 -= manae2;
                movework1determine = "yes";
            }
            player1turn();
            disableButton1();
        }
    }
    work1();
}
function p1earth3() {
    if (mana1 < manae3) {
        console.log("INSUFFICIENT MANA");
        movework1determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 94) {
            life2 -= dmge3;
            mana1 -= manae3;
            movework1determine = "yes";
        }
        disableButton1();
        player1turn();
    }
    work1();
}

//WIND
function p1wind1() {
    life2 -= dmgwi1;
    life1 += (0.35*dmgwi1);
    movework1determine = "yes";

    addmana1();
        disableButton1();
        player1turn();
    work1();
}
function p1wind2() {
    if (mana1 < manawi2) {
        console.log("INSUFFICIENT MANA");
        movework1determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 89) {
            life1 += healwi2;
            mana1 -= manawi2;
            movework1determine = "yes";
        }
        disableButton1();
        player1turn();
    }
    work1();
}
function p1wind3() {
    if (mana1 < manawi3) {
        console.log("INSUFFICIENT MANA");
        movework1determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 94) {
            life2 -= dmgwi3;
            life1 += (0.35*dmgwi3);
            mana1 -= manawi3;
            movework1determine = "yes";
        }

        disableButton1();
        player1turn();
    }
    work1();
}

//-------------------PLAYER 2---------------------
//FIRE
function p2fire1() {
    life1 = life1 - (dmgf1 + (0.25 * (lifefire - life2)));
    movework2determine = "yes";

    addmana2();
        disableButton2();
        player2turn();
    work2();
}
function p2fire2() {
    if (mana2 < manaf2) {
        console.log("INSUFFICIENT MANA");
        movework2determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 79) {
            life1 = life1 - (dmgf2 + (0.25 * (lifefire - life2)));
            mana2 -= manaf2;
            movework2determine = "yes";
        }
        disableButton2();
        player2turn();
    }
    work2();
}
function p2fire3() {
    if (mana2 < manaf3) {
        console.log("INSUFFICIENT MANA");
        movework2determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 69) {
            life1 = life1 - (dmgf3 + (0.25 * (lifefire - life2)));
            mana2 -= manaf3;
            movework2determine = "yes";
        }
        disableButton2();
        player2turn();
    }
    work2();
}

//WATER
function p2water1() {
    life1 -= dmgw1;
    movework2determine = "yes";
     
    mana2 += 10;
    addmana2();
        disableButton2();
        player2turn();
    work2();
}
function p2water2() {
    if (mana2 < manaw2) {
        console.log("INSUFFICIENT MANA");
        movework2determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 79) {
            if (life2 <= 30) {
                life2 += 10;
            }
            life2 += healw2;
            mana2 -= manaw2;
            movework2determine = "yes";
        }
        disableButton2();
        player2turn();
    }
    work2();
}
function p2water3() {
    if (mana2 < manaw3) {
        console.log("INSUFFICIENT MANA");
        movework2determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 89) {
            life1 = life1 - (dmgw3 + (0.1*life1)) ;
            mana2 -= manaw3;
            movework2determine = "yes";
        }
        disableButton2();
        player2turn();
    }
    work2();
}


//EARTH
function p2earth1() {
    life1 -= dmge1;
    movework2determine = "yes";

    addmana2();
        disableButton2();
        player2turn();
    work2();
}
function p2earth2() {

    if (life2 <= 50){
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 69) {
            life2 += heale2;
            movework2determine = "yes";
        }
        disableButton2();
        player2turn();

    } else{
        if (mana2 < manae2) {
            console.log("INSUFFICIENT MANA");
            movework2determine = "nomana";
        } else {
            const randomnumber = Math.floor(Math.random() * 100);
    
            if (randomnumber <= 64) {
                life2 += heale2;
                mana2 -= manae2;
                movework2determine = "yes";
            }
            player2turn();
            disableButton2();
        }
    }
    
    work2();
}
function p2earth3() {
    if (mana2 < manae3) {
        console.log("INSUFFICIENT MANA");
        movework2determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 94) {
            life1 -= dmge3;
            mana2 -= manae3;
            movework2determine = "yes";
        }
        disableButton2();
        player2turn();
    }
    work2();
}

//WIND
function p2wind1() {
    life1 -= dmgwi1;
    life2 += (0.35*dmgwi1);
    movework2determine = "yes";
    
    addmana2();
        disableButton2();
        player2turn();
    work2();
}
function p2wind2() {
    if (mana2 < manawi2) {
        console.log("INSUFFICIENT MANA");
        movework2determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 89) {
            life2 += healwi2;
            mana2 -= manawi2;
            movework2determine = "yes";
        }
        disableButton2();
        player2turn();
    }
    work2();
}
function p2wind3() {
    if (mana2 < manawi3) {
        console.log("INSUFFICIENT MANA");
        movework2determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 94) {
                life1 -= dmgwi3;
                life2 += (0.35*dmgwi3);
                mana2 -= manawi3;
                movework2determine = "yes";
        }
    
        disableButton2();
        player2turn();
    }
    work2();
}
/*--------------------------------------------------------------------------------------------*/




//OPERATIONS
function addmana1() {
    mana1 += 10;
    if (mana1 >= 100) {
        mana1 = 100;
    }
}
function work1() {
    //move work determine
    if (movework1determine === "nomana") {
        document.getElementById('movework1').innerHTML = "INSUFFICIENT MANA";
        document.getElementById('movework1').style.color = "";
        player1turn();
    } else if (movework1determine === "yes") {
        document.getElementById('movework1').style.color = "rgb(6, 99, 1)";
        document.getElementById('movework1').innerHTML = "MOVE WAS EFFECTIVE";
    } else {
        document.getElementById('movework1').style.color = "rgb(255, 68, 68)";
        document.getElementById('movework1').innerHTML = "MOVE WAS INEFFECTIVE";
    }
    movework1determine = "no";
}
function disableButton1() {
    document.querySelectorAll('button.indivmoves1').forEach(elem => {
        elem.disabled = true;
    });
    setTimeout(function() {
        document.querySelectorAll('button.indivmoves2').forEach(elem => {
            elem.disabled = false;
        });
    }, 700);
    currentlifeofplayer1 = life1;
}

function addmana2() {
    mana2 += 10;
    if (mana2 >= 100) {
        mana2 = 100;
    }
}
function work2() {
    //move work determine
    if (movework2determine === "nomana") {
        document.getElementById('movework2').innerHTML = "INSUFFICIENT MANA";
        document.getElementById('movework2').style.color = "";
        player2turn();
    } else if (movework2determine === "yes") {
        document.getElementById('movework2').style.color = "rgb(6, 99, 1)";
        document.getElementById('movework2').innerHTML = "MOVE WAS EFFECTIVE";
    } else {
        document.getElementById('movework2').style.color = "rgb(255, 68, 68)";
        document.getElementById('movework2').innerHTML = "MOVE WAS INEFFECTIVE";
    }
    movework2determine = "no";
}
function disableButton2() {
    document.querySelectorAll('button.indivmoves2').forEach(elem => {
        elem.disabled = true;
    });
    setTimeout(function() {
        document.querySelectorAll('button.indivmoves1').forEach(elem => {
            elem.disabled = false;
        });
    }, 700);
    currentlifeofplayer2 = life2;
}




//TURN BASED
let roundnumber = 0;
var currentlifeofplayer1 = 0;
var currentlifeofplayer2 = 0;
function roundanalyzer() {
    if (movework2determine !== "nomana") {
        roundnumber++;
    }
    console.log(
        "\n-----------------------\nROUND " + roundnumber + "\n\n" +
        "--PLAYER 1-- \nLife: " + life1 + "\nMana: " + mana1 + "\n\n\n" +
        "--PLAYER 2-- \nLife: " + life2 + "\nMana: " + mana2 + "\n-----------------------\n\n");
}
function updateHealth1(currentHealth, baseHealth) {
    const healthPercentage = (currentHealth / baseHealth) * 100;
  
    const clampedHealthPercentage = Math.max(0, Math.min(healthPercentage, 100));
  
    const healthLevel = document.getElementById('health1');
    healthLevel.style.width = clampedHealthPercentage + '%';
}
function updateHealth2(currentHealth, baseHealth) {
    const healthPercentage = (currentHealth / baseHealth) * 100;
  
    const clampedHealthPercentage = Math.max(0, Math.min(healthPercentage, 100));
  
    const healthLevel = document.getElementById('health2');
    healthLevel.style.width = clampedHealthPercentage + '%';
}
function player1turn() {
    //PLAYER 1 TURN

    //ANIMATON
    if (life2 < currentlifeofplayer2){
        pauseAnimation2();
        document.getElementById('ouchie').play();
        document.getElementById('ouchie').volume = .3;
        animationElementPlayer2.src = player2dmgpic;
        setTimeout(() => {
            startAnimation2();
        }, 400);
        currentlifeofplayer2 = life2;
    } else{
        currentlifeofplayer2 = life2;
    }

    document.getElementById('movework2').innerHTML = "";
    document.getElementById('movework1').style.color = "black";
    switch (p1choice) {
        case "fire":
            updateHealth1(life1, lifefire);
            document.getElementById('firemoves1').style.display = "block";
            passive1.innerHTML = "Additional DMG: " + (0.25 * (lifefire - life1)).toFixed(0) + " DMG";
                    if (life1 > lifefire){
                        life1 = lifefire;
                    }
            break;
        case "water":
            updateHealth1(life1, lifewater);
            document.getElementById('watermoves1').style.display = "block";
            if (life1 <= 30) {
                passive1.innerHTML = "Passive: Active (+10 HP)";
            } else {
                passive1.innerHTML = "Passive: Inactive";
            }
                    if (life1 > lifewater){
                        life1 = lifewater;
                    }
            break;
        case "earth":
            updateHealth1(life1, lifeearth);
            document.getElementById('earthmoves1').style.display = "block";
            if (life1 <= 50) {
                passive1.innerHTML = "Passive: Active (Heal doesn't use mana)";
            } else {
                passive1.innerHTML = "Passive: Inactive";
            }
                    if (life1 > lifeearth){
                        life1 = lifeearth;
                    }
            break;
        case "wind":
            updateHealth1(life1, lifewind);
            document.getElementById('windmoves1').style.display = "block";
                passive1.innerHTML = "Lifesteal 35%";
                    if (life1 > lifewind){
                        life1 = lifewind;
                    }
            break;
            
    }

    switch (p2choice) {
        case "fire":
            updateHealth2(life2, lifefire);
            document.getElementById('firemoves2').style.display = "block";
            passive2.innerHTML = "Additional DMG: " + (0.25 * (lifefire - life2)).toFixed(0) + " DMG";
                    if (life2 > lifefire){
                        life2 = lifefire;
                    }
            break;
        case "water":
        updateHealth2(life2, lifewater);
            document.getElementById('watermoves2').style.display = "block";
            if (life2 <= 30) {
                passive2.innerHTML = "Passive: Active (+10 HP)";
            } else {
                passive2.innerHTML = "Passive: Inactive";
            }
                    if (life2 > lifewater){
                        life2 = lifewater;
                    }
            break;
        case "earth":
            updateHealth2(life2, lifeearth);
            document.getElementById('earthmoves2').style.display = "block";
            if (life2 <= 50) {
                passive2.innerHTML = "Passive: Active (Heal doesn't use mana)";
            } else {
                passive2.innerHTML = "Passive: Inactive";
            }
                    if (life2 > lifeearth){
                        life2 = lifeearth;
                    }
            break;
        case "wind":
            updateHealth2(life2, lifewind);
            document.getElementById('windmoves2').style.display = "block";
            passive2.innerHTML = "Lifesteal 35%";
                    if (life2 > lifewind){
                        life2 = lifewind;
                    }
            break;
    }

    //LIFE AND MANA UPDATE 
    document.getElementById('p2life').innerHTML = life2.toFixed(0);
    document.getElementById('p2mana').innerHTML = mana2;

    //player 1
    document.getElementById('p1life').innerHTML = life1.toFixed(0);
    if (mana1 <= 0) {
        mana1 = 0;
    }
    document.getElementById('p1mana').innerHTML = mana1;

    analyzeloop = 1;

    if (life1 <= 0 || life2 <= 0) {
        if (life1 <= 0) {
            console.log("PLAYER 2 WINS");
            document.getElementById('fightingmusic').pause();
            document.getElementById('winmusic').play();
            document.getElementById('lahat').style.display = "none";
            document.getElementById('p2win').style.display = "block";
        } else if (life2 <= 0) {
            console.log("PLAYER 1 WINS");
            document.getElementById('fightingmusic').pause();
            document.getElementById('winmusic').play();
            document.getElementById('lahat').style.display = "none";
            document.getElementById('p1win').style.display = "block";
        }
        else {
            player2turn();
        }
    }
    
}
function player2turn() {
    //PLAYER 2 TURN

    //ANIMATION
    if (life1 < currentlifeofplayer1){
        pauseAnimation1();
        document.getElementById('ouchie').play();
        document.getElementById('ouchie').volume = .3;
        animationElementPlayer1.src = player1dmgpic;
            setTimeout(() => {
                startAnimation1();
            }, 400);
        currentlifeofplayer1 = life1;
    } else{
        currentlifeofplayer1 = life1;
    }

    document.getElementById('movework1').innerHTML = "";
    document.getElementById('movework2').style.color = "black";
    switch (p1choice) {
        case "fire":
            updateHealth1(life1, lifefire);
            document.getElementById('firemoves1').style.display = "block";
            passive1.innerHTML = "Additional DMG: " + (0.25 * (lifefire - life1)).toFixed(0) + " DMG";
                    if (life1 > lifefire){
                        life1 = lifefire;
                    }
            break;
        case "water":
            updateHealth1(life1, lifewater);
            document.getElementById('watermoves1').style.display = "block";
            if (life1 <= 30) {
                passive1.innerHTML = "Passive: Active (+10 HP)";
            } else {
                passive1.innerHTML = "Passive: Inactive";
            }
                    if (life1 > lifewater){
                        life1 = lifewater;
                    }
            break;
        case "earth":
            updateHealth1(life1, lifeearth);
            document.getElementById('earthmoves1').style.display = "block";
            if (life1 <= 50) {
                passive1.innerHTML = "Passive: Active (Heal doesn't use mana)";
            } else {
                passive1.innerHTML = "Passive: Inactive";
            }
                    if (life1 > lifeearth){
                        life1 = lifeearth;
                    }
            break;
        case "wind":
            updateHealth1(life1, lifewind);
            document.getElementById('windmoves1').style.display = "block";
                passive1.innerHTML = "Lifesteal 35%";
                    if (life1 > lifewind){
                        life1 = lifewind;
                    }
            break;
            
    }

    switch (p2choice) {
        case "fire":
            updateHealth2(life2, lifefire);
            document.getElementById('firemoves2').style.display = "block";
            passive2.innerHTML = "Additional DMG: " + (0.25 * (lifefire - life2)).toFixed(0) + " DMG";
                    if (life2 > lifefire){
                        life2 = lifefire;
                    }
            break;
        case "water":
        updateHealth2(life2, lifewater);
            document.getElementById('watermoves2').style.display = "block";
            if (life2 <= 30) {
                passive2.innerHTML = "Passive: Active (+10 HP)";
            } else {
                passive2.innerHTML = "Passive: Inactive";
            }
                    if (life2 > lifewater){
                        life2 = lifewater;
                    }
            break;
        case "earth":
            updateHealth2(life2, lifeearth);
            document.getElementById('earthmoves2').style.display = "block";
            if (life2 <= 50) {
                passive2.innerHTML = "Passive: Active (Heal doesn't use mana)";
            } else {
                passive2.innerHTML = "Passive: Inactive";
            }
                    if (life2 > lifeearth){
                        life2 = lifeearth;
                    }
            break;
        case "wind":
            updateHealth2(life2, lifewind);
            document.getElementById('windmoves2').style.display = "block";
            passive2.innerHTML = "Lifesteal 35%";
                    if (life2 > lifewind){
                        life2 = lifewind;
                    }
            break;
    }

    //LIFE AND MANA UPDATE FOR BOTH SIDES
    document.getElementById('p1life').innerHTML = life1.toFixed(0);
    document.getElementById('p1mana').innerHTML = mana1;

    //player 2
    document.getElementById('p2life').innerHTML = life2.toFixed(0);
    if (mana2 <= 0) {
        mana2 = 0;
    }
    document.getElementById('p2mana').innerHTML = mana2;

    roundanalyzer();


    if (life1 <= 0 || life2 <= 0) {
        if (life1 <= 0) {
            console.log("PLAYER 2 WINS");
            document.getElementById('fightingmusic').pause();
            document.getElementById('winmusic').play();
            document.getElementById('lahat').style.display = "none";
            document.getElementById('p2win').style.display = "block";
        } else if (life2 <= 0) {
            console.log("PLAYER 1 WINS");
            document.getElementById('fightingmusic').pause();
            document.getElementById('winmusic').play();
            document.getElementById('lahat').style.display = "none";
            document.getElementById('p1win').style.display = "block";
        }
        else {
            player1turn();
        }
    }
}




//INDEX SETTINGS
function rules(){
    document.getElementById('text1').style.display = "block";
    document.getElementById('index').style.display = "none";
    document.body.style.backgroundImage="url('pics/dungeon.png')";
    document.getElementById('rules').style.display = "block";
    document.body.style.overflowY="scroll";
    document.getElementById('text1').style.animation = "scrolling 2s linear forwards";
}
function dev(){
    document.getElementById('text2').style.display = "block";
    document.getElementById('index').style.display = "none";
    document.body.style.backgroundImage="url('pics/bbg.png')";
    document.body.style.backgroundPosition= "center";
    document.getElementById('aboutus').style.display = "block";
    document.body.style.overflowY="scroll";
    document.getElementById('text2').style.animation = "scrolling 3s linear forwards";
}
function backhome(){
    document.getElementById('index').style.display = "block";
    document.body.style.backgroundImage="url('pics/intro.png')";
    document.body.style.overflow="hidden";
    document.body.style.backgroundPosition= "center bottom";
    document.getElementById('rules').style.display = "none";
    document.getElementById('aboutus').style.display = "none";
    document.getElementById('text1').style.display = "none";
    document.getElementById('text2').style.display = "none";
}
function clickanywhere(){
    document.getElementById('menu').style.display = "block";
    document.getElementById('menu').style.animation = "drop 1s ease forwards";
    document.getElementById('clickanywhere').style.animation = "drop2 2s ease forwards";
    setTimeout(function(){
        document.getElementById('clickanywhere').style.display = "none";
    }, 3000);
    
    backgroundMusic.play();
    toknow = 0;
}
function pvp(){
    document.getElementById('lahat').style.display = "block";
    document.getElementById('choosemuna').style.display = "none";
    kokonut = 0;
    
    document.getElementById('backgroundMusic').play();
    toknow = 0;
}




//SOUND
var toknow = 1;
var backgroundMusic = document.getElementById("backgroundMusic");
var kokonut = 0;

function sound(){

    if (toknow == 1){
        document.getElementById("mute").style.display="none";
        document.getElementById("unmute").style.display="block";
        
        if (kokonut == 1){
            document.getElementById('fightingmusic').play();
        } else{
            backgroundMusic.play();
        }

        toknow = 0;

    } else if (toknow == 0){
        document.getElementById("mute").style.display="block";
        document.getElementById("unmute").style.display="none";
        backgroundMusic.pause();

        document.querySelectorAll('audio.background').forEach(elem => {
            elem.pause();
        });
        toknow = 1;
    }
}
function reload(){
    window.location.reload();
}
function louder() {
    document.querySelectorAll('audio.background').forEach(elem => {
        if (elem.volume < 1) {
            elem.volume = Math.min(1, parseFloat((elem.volume + 0.1).toFixed(1)));
        }
    });
}
function weaker() {
    document.querySelectorAll('audio.background').forEach(elem => {
        if (elem.volume > 0) {
            elem.volume = Math.max(0, parseFloat((elem.volume - 0.1).toFixed(1)));
        }
    });
}




//ANIMATION
let currentFrameIndexPlayer1 = 0;
let currentFrameIndexPlayer2 = 0;

let fireanimation1 = ["pics/animations/fireR.png"],
    firedmg1 = "pics/animations/redfireR.png";
let wateranimation1 = ["pics/animations/waterR.png"],
    waterdmg1 = "pics/animations/redwaterR.png";
let earthanimation1 = ["pics/animations/earthR.png"],
    earthdmg1 = "pics/animations/redearthR.png";
let windanimation1 = ["pics/animations/windR.png"],
    winddmg1 = "pics/animations/redwindR.png";



let fireanimation2 = ["pics/animations/fireL.png"],
    firedmg2 = "pics/animations/redfireL.png";
let wateranimation2 = ["pics/animations/waterL.png"],
    waterdmg2 = "pics/animations/redwaterL.png";
let earthanimation2 = ["pics/animations/earthL.png"],
    earthdmg2 = "pics/animations/redearthL.png";
let windanimation2 = ["pics/animations/windL.png"],
    winddmg2 = "pics/animations/redwindL.png";


let animationFramesPlayer1 = [], 
    player1dmgpic = 0;
let animationFramesPlayer2 = [],
    player2dmgpic = 0;

let animationElementPlayer1 = document.getElementById('player1hero');
let animationElementPlayer2 = document.getElementById('player2hero');

function p1animation() {
    animationElementPlayer1.src = animationFramesPlayer1[currentFrameIndexPlayer1];
    currentFrameIndexPlayer1 = (currentFrameIndexPlayer1 + 1) % animationFramesPlayer1.length;
}
function p2animation() {
    animationElementPlayer2.src = animationFramesPlayer2[currentFrameIndexPlayer2];
    currentFrameIndexPlayer2 = (currentFrameIndexPlayer2 + 1) % animationFramesPlayer2.length;
}



let animationIntervalPlayer1;
let animationIntervalPlayer2;

function startAnimation1() {
    animationIntervalPlayer1 = setInterval(p1animation, 200);
}
function startAnimation2() {
    animationIntervalPlayer2 = setInterval(p2animation, 200);
}
function pauseAnimation1() {
    clearInterval(animationIntervalPlayer1);
}
function pauseAnimation2() {
    clearInterval(animationIntervalPlayer2);
}

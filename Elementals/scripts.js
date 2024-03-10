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

//PLAYER 1
document.body.classList.add('pagefadein');
let p1choice;

function fire1() {
    p1choice = "fire";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
        elem.style.color = "";
    });
    document.getElementById('selectfire1').style.backgroundColor = "rgb(220, 0, 0)";
    document.getElementById('selectfire1').style.color ="white";
}
function water1() {
    p1choice = "water";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
        elem.style.color = "";
    });
    document.getElementById('selectwater1').style.backgroundColor = "rgb(8, 51, 115)";
    document.getElementById('selectwater1').style.color ="white";
}
function earth1() {
    p1choice = "earth";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
        elem.style.color = "";
    });
    document.getElementById('selectearth1').style.backgroundColor = "rgb(71, 46, 46)";
    document.getElementById('selectearth1').style.color ="white";
}
function wind1() {
    p1choice = "wind";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
        elem.style.color = "";
    });
    document.getElementById('selectwind1').style.backgroundColor = "rgb(204, 246, 242)";
}

function turnRedForOneSecond1() {
    document.getElementById('submit1').style.backgroundColor = "rgb(180, 0, 0)";

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
                break;
            case "water":
                moves1 = watermoves;
                life1 = lifewater;
                console.log("PLAYER 1 CHOSE WATER");
                document.getElementById('type1').innerHTML = "Water";
                passive2.innerHTML = "Passive: Inactive";
                break;
            case "earth":
                moves1 = earthmoves;
                life1 = lifeearth;
                console.log("PLAYER 1 CHOSE EARTH");
                document.getElementById('type1').innerHTML = "Earth";
                passive1.innerHTML = "Passive: Inactive";
                break;
            case "wind":
                moves1 = windmoves;
                life1 = lifewind;
                console.log("PLAYER 1 CHOSE WIND");
                document.getElementById('type1').innerHTML = "Wind";
                passive1.innerHTML = "Lifesteal: 30%";
                break;
        }
        document.getElementById('submit1').style.backgroundColor = "rgb(3, 33, 15)";
        setTimeout(() => {
            document.getElementById('pvp1').style.display = "none";
            document.getElementById('pvp2').style.display = "block";
            document.querySelectorAll('button.indivmoves2').forEach(elem => {
                elem.disabled = true;
            });
        }, 500);

        console.log("Player 1 moves\n" + moves1);
        console.log("Life: " + life1 + "\n\n");
    } else {
        turnRedForOneSecond1();
    }

}


//PLAYER 2
let p2choice;

function fire2() {
    p2choice = "fire";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
        elem.style.color = "";
    });
    document.getElementById('selectfire2').style.backgroundColor = "rgb(220, 0, 0)";
    document.getElementById('selectfire2').style.color ="white";
}
function water2() {
    p2choice = "water";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
        elem.style.color = "";
    });
    document.getElementById('selectwater2').style.backgroundColor = "rgb(8, 51, 115)";
    document.getElementById('selectwater2').style.color ="white";
}
function earth2() {
    p2choice = "earth";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
        elem.style.color = "";
    });
    document.getElementById('selectearth2').style.backgroundColor = "rgb(71, 46, 46)";
    document.getElementById('selectearth2').style.color ="white";
}
function wind2() {
    p2choice = "wind";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
        elem.style.color = "";
    });
    document.getElementById('selectwind2').style.backgroundColor = "rgb(204, 246, 242)";
}
function turnRedForOneSecond2() {
    document.getElementById('submit2').style.backgroundColor = "rgb(180, 0, 0)";

    setTimeout(() => {
        document.getElementById('submit2').style.backgroundColor = "";
    }, 300);
}

function submit2() {
    if (p2choice) {
        switch (p2choice) {
            case "fire":
                moves2 = firemoves;
                life2 = lifefire;
                console.log("PLAYER 2 CHOSE FIRE");
                document.getElementById('type2').innerHTML = "Fire";
                passive2.innerHTML = "Additional DMG: 0 DMG";
                break;
            case "water":
                moves2 = watermoves;
                life2 = lifewater;
                console.log("PLAYER 2 CHOSE WATER");
                document.getElementById('type2').innerHTML = "Water";
                passive2.innerHTML = "Passive: Inactive";
                break;
            case "earth":
                moves2 = earthmoves;
                life2 = lifeearth;
                console.log("PLAYER 2 CHOSE EARTH");
                document.getElementById('type2').innerHTML = "Earth";
                passive1.innerHTML = "Passive: Inactive";
                break;
            case "wind":
                moves2 = windmoves;
                life2 = lifewind;
                console.log("PLAYER 2 CHOSE WIND");
                document.getElementById('type2').innerHTML = "Wind";
                passive2.innerHTML = "Lifesteal: 30%";
                break;
        }
        console.log("Player 2 moves\n" + moves2);
        console.log("Life: " + life2);
        document.getElementById('submit2').style.backgroundColor = "rgb(3, 33, 15)";
        setTimeout(() => {
            document.getElementById('pvpchoosecontainer').style.display = "none";
            document.getElementById('turns').style.display = "block";
        }, 500);
        console.log("--------------------------------------------\n\n");
        player1turn();
    } else {
        turnRedForOneSecond2();
    }

}

//GAME
//DAMAGE PER MOVE
let dmgf1 = 12,
    dmgf2 = 17,
    dmgf3 = 40,

    dmgw1 = 10,
    healw2 = 30,
    dmgw3 = 20,

    dmge1 = 7,
    heale2 = 50,
    dmge3 = 20,

    dmgwi1 = 15,
    healwi2 = 20,
    dmgwi3 = 30

let manaf2 = 25,
    manaf3 = 80,

    manaw2 = 25,
    manaw3 = 35,

    manae2 = 40,
    manae3 = 45,

    manawi2 = 30,
    manawi3 = 50

let passive1 = document.getElementById('passive1');
let passive2 = document.getElementById('passive2');
//-----------------------------PLAYER 1----------------------------------
//FIRE

function p1fire1() {
    life2 = life2 - (dmgf1 + (0.2 * (lifefire - life1)));
    movework1determine = "yes";

    addmana1();
    player1turn();
    disableButton1();
    work1();
}
function p1fire2() {
    if (mana1 < manaf2) {
        console.log("INSUFFICIENT MANA");
        movework1determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 79) {
            life2 = life2 - (dmgf2 + (0.2 * (lifefire - life1)));
            mana1 -= manaf2;
            movework1determine = "yes";
        }
        player1turn();
        disableButton1();
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
            life2 = life2 - (dmgf3 + (0.2 * (lifefire - life1)));
            mana1 -= manaf3;
            movework1determine = "yes";
        }
        player1turn();
        disableButton1();
    }
    work1();
}

//WATER
function p1water1() {
    life2 -= dmgw1;
    movework1determine = "yes";

    mana1 += 10;
    addmana1();
    player1turn();
    disableButton1();
    work1();
}
function p1water2() {
    if (mana1 < manaw2) {
        console.log("INSUFFICIENT MANA");
        movework1determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 79) {
            life1 += healw2;
            if (life1 <= 30) {
                life1 += 10;
            }
            mana1 -= manaw2;
            movework1determine = "yes";
        }
        player1turn();
        disableButton1();
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
        player1turn();
        disableButton1();
    }
    work1();

}


//EARTH
function p1earth1() {
    life2 -= dmge1;
    movework1determine = "yes";

    addmana1();
    player1turn();
    disableButton1();
    work1();
}
function p1earth2() {
    if (life1 <= 50){
        const randomnumber = Math.floor(Math.random() * 100);
    
        if (randomnumber <= 69) {
            life1 += heale2;
            mana1 += 10;
            movework1determine = "yes";
        }
        player1turn();
        disableButton1();
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
        player1turn();
        disableButton1();
    }
    work1();
}

//WIND
function p1wind1() {
    life2 -= dmgwi1;
    life1 += (0.3*dmgwi1);
    movework1determine = "yes";

    addmana1();
    player1turn();
    disableButton1();
    work1();
}
function p1wind2() {
    if (mana1 < manawi2) {
        console.log("INSUFFICIENT MANA");
        movework1determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 79) {
            life1 += healwi2;
            mana1 -= manawi2;
            movework1determine = "yes";
        }
        player1turn();
        disableButton1();
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
            life1 += (0.3*dmgwi3);
            mana1 -= manawi3;
            movework1determine = "yes";
        }

        player1turn();
        disableButton1();
    }
    work1();
}

//-----------------------------PLAYER 2----------------------------------
//FIRE
function p2fire1() {
    life1 = life1 - (dmgf1 + (0.2 * (lifefire - life2)));
    movework2determine = "yes";

    addmana2();
    player2turn();
    disableButton2();
    work2();
}
function p2fire2() {
    if (mana2 < manaf2) {
        console.log("INSUFFICIENT MANA");
        movework2determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 79) {
            life1 = life1 - (dmgf2 + (0.2 * (lifefire - life2)));
            mana2 -= manaf2;
            movework2determine = "yes";
        }
        player2turn();
        disableButton2();
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
            life1 = life1 - (dmgf3 + (0.2 * (lifefire - life2)));
            mana2 -= manaf3;
            movework2determine = "yes";
        }
        player2turn();
        disableButton2();
    }
    work2();
}

//WATER
function p2water1() {
    life1 -= dmgw1;
    movework2determine = "yes";
     
    mana2 += 10;
    addmana2();
    player2turn();
    disableButton2();
    work2();
}
function p2water2() {
    if (mana2 < manaw2) {
        console.log("INSUFFICIENT MANA");
        movework2determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 79) {
            life2 += healw2;
            if (life2 <= 30) {
                life2 += 10;
            }
            mana2 -= manaw2;
            movework2determine = "yes";
        }
        player2turn();
        disableButton2();
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
        player2turn();
        disableButton2();
    }
    work2();
}


//EARTH
function p2earth1() {
    life1 -= dmge1;
    movework2determine = "yes";

    addmana2();
    player2turn();
    disableButton2();
    work2();
}
function p2earth2() {

    if (life2 <= 50){
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 69) {
            life2 += heale2;
            mana2 += 10;
            movework2determine = "yes";
        }
        player2turn();
        disableButton2();

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
        player2turn();
        disableButton2();
    }
    work2();
}

//WIND
function p2wind1() {
    life1 -= dmgwi1;
    life2 += (0.3*dmgwi1);
    movework2determine = "yes";
    
    addmana2();
    player2turn();
    disableButton2();
    work2();
}
function p2wind2() {
    if (mana2 < manawi2) {
        console.log("INSUFFICIENT MANA");
        movework2determine = "nomana";
    } else {
        const randomnumber = Math.floor(Math.random() * 100);

        if (randomnumber <= 79) {
            life2 += healwi2;
            mana2 -= manawi2;
            movework2determine = "yes";
        }
        player2turn();
        disableButton2();
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
                life2 += (0.3*dmgwi3);
                mana2 -= manawi3;
                movework2determine = "yes";
        }
    
        player2turn();
        disableButton2();
    }
    work2();
}


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
    setTimeout(() => {
        document.querySelectorAll('button.indivmoves1').forEach(elem => {
            elem.disabled = true;
        });
        document.querySelectorAll('button.indivmoves2').forEach(elem => {
            elem.disabled = false;
        });
    }, 1000);
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
    setTimeout(() => {
        document.querySelectorAll('button.indivmoves1').forEach(elem => {
            elem.disabled = false;
        });
        document.querySelectorAll('button.indivmoves2').forEach(elem => {
            elem.disabled = true;
        });
    }, 1000);
}

//-------------------------------------------------------------------------------

let roundnumber = 0;
function roundanalyzer() {
    if (movework2determine !== "nomana") {
        roundnumber++;
    }
    console.log(
        "\n-----------------------\nROUND " + roundnumber + "\n\n" +
        "--PLAYER 1-- \nLife: " + life1 + "\nMana: " + mana1 + "\n\n\n" +
        "--PLAYER 2-- \nLife: " + life2 + "\nMana: " + mana2 + "\n-----------------------\n\n");
}

function player1turn() {
    //PLAYER 1 TURN
    disableButton2();
    document.getElementById('movework2').innerHTML = "";
    document.getElementById('movework1').style.color = "black";
    switch (p1choice) {
        case "fire":
            document.getElementById('firemoves1').style.display = "block";
            passive1.innerHTML = "Additional DMG: " + (0.2 * (lifefire - life1)).toFixed(0) + " DMG";
                    if (life1 > lifefire){
                        life1 = lifefire;
                    }
            break;
        case "water":
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
            document.getElementById('windmoves1').style.display = "block";
                passive1.innerHTML = "Lifesteal 30%";
                    if (life1 > lifewind){
                        life1 = lifewind;
                    }
            break;
            
    }

    switch (p2choice) {
        case "fire":
            document.getElementById('firemoves2').style.display = "block";
            passive2.innerHTML = "Additional DMG: " + (0.2 * (lifefire - life2)).toFixed(0) + " DMG";
                    if (life2 > lifefire){
                        life2 = lifefire;
                    }
            break;
        case "water":
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
            document.getElementById('windmoves2').style.display = "block";
            passive2.innerHTML = "Lifesteal 30%";
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
            document.body.innerHTML = "PLAYER 2 WINS";
        } else if (life2 <= 0) {
            console.log("PLAYER 1 WINS");
            document.body.innerHTML = "PLAYER 1 WINS";
        }
        else {
            player2turn();
        }
    }

}


function player2turn() {
    //PLAYER 2 TURN
    document.getElementById('movework1').innerHTML = "";
    document.getElementById('movework2').style.color = "black";
    switch (p1choice) {
        case "fire":
            document.getElementById('firemoves1').style.display = "block";
            passive1.innerHTML = "Additional DMG: " + (0.2 * (lifefire - life1)).toFixed(0) + " DMG";
                    if (life1 > lifefire){
                        life1 = lifefire;
                    }
            break;
        case "water":
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
            document.getElementById('windmoves1').style.display = "block";
                passive1.innerHTML = "Lifesteal 30%";
                    if (life1 > lifewind){
                        life1 = lifewind;
                    }
            break;
            
    }

    switch (p2choice) {
        case "fire":
            document.getElementById('firemoves2').style.display = "block";
            passive2.innerHTML = "Additional DMG: " + (0.2 * (lifefire - life2)).toFixed(0) + " DMG";
                    if (life2 > lifefire){
                        life2 = lifefire;
                    }
            break;
        case "water":
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
            document.getElementById('windmoves2').style.display = "block";
            passive2.innerHTML = "Lifesteal 30%";
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
            document.body.innerHTML = "PLAYER 2 WINS";
        } else if (life2 <= 0) {
            console.log("PLAYER 1 WINS");
            document.body.innerHTML = "PLAYER 1 WINS";
        }
        else {
            player1turn();
        }
    }
}





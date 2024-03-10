let lifefire = 100,
    lifewater = 120,
    lifeearth = 160,
    lifewind = 110,
    life1 = 0,
    life2 = 0;
let firemoves = ["Hell's Inferno", "Scorching Sun", "Hellfire Incarnate"];
let watermoves = ["Striking Tide", "Hydro Shield", "Drowning Wave"];
let earthmoves = ["Groundbreaker", "Earthen Wall", "Geo Grandia"];
let windmoves = ["Towering Tornado","Goddess's Breath", "Tempest Drive"];
let moves1 = [];
let moves2 = [];
let mana1 = 100;
let mana2 = 100;
let movework1determine;
let movework2determine;

//PLAYER 1
document.body.classList.add('pagefadein');
let p1choice;

function fire1(){
    p1choice = "fire";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
    });
    document.getElementById('selectfire1').style.backgroundColor = "rgb(232, 48, 7)";
}
function water1(){
    p1choice = "water";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
    });
    document.getElementById('selectwater1').style.backgroundColor = "rgb(15, 80, 171)";
}
function earth1(){
    p1choice = "earth";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
    });
    document.getElementById('selectearth1').style.backgroundColor = "rgb(118, 98, 61)";
}
function wind1(){
    p1choice = "wind";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
    });
    document.getElementById('selectwind1').style.backgroundColor = "rgb(204, 246, 242)";
}

function turnRedForOneSecond1() {
    document.getElementById('submit1').style.backgroundColor = "rgb(180, 0, 0)";

    setTimeout(() => {
        document.getElementById('submit1').style.backgroundColor = "";
    }, 300);
}

function submit1(){
    if(p1choice){
        switch (p1choice) {
            case "fire":
                moves1 = firemoves;
                life1 = lifefire;
                console.log("PLAYER 1 CHOSE FIRE");
                document.getElementById('type1').innerHTML="Fire";
                break;
            case "water":
                moves1 = watermoves;
                life1 = lifewater;
                console.log("PLAYER 1 CHOSE WATER");
                document.getElementById('type1').innerHTML="Water";
                break;
            case "earth":
                moves1 = earthmoves;
                life1 = lifefire;
                console.log("PLAYER 1 CHOSE EARTH");
                document.getElementById('type1').innerHTML="Earth";
                break;
            case "wind":
                moves1 = windmoves;
                life1 = lifewind;
                console.log("PLAYER 1 CHOSE WIND");
                document.getElementById('type1').innerHTML="Wind";
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
    }else{
        turnRedForOneSecond1();
    }
    
}


//PLAYER 2
let p2choice;

function fire2(){
    p2choice = "fire";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
    });
    document.getElementById('selectfire2').style.backgroundColor = "rgb(232, 48, 7)";
}
function water2(){
    p2choice = "water";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
    });
    document.getElementById('selectwater2').style.backgroundColor = "rgb(15, 80, 171)";
}
function earth2(){
    p2choice = "earth";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
    });
    document.getElementById('selectearth2').style.backgroundColor = "rgb(118, 98, 61)";
}
function wind2(){
    p2choice = "wind";
    document.querySelectorAll('button.selection1').forEach(elem => {
        elem.style.backgroundColor = "";
    });
    document.getElementById('selectwind2').style.backgroundColor = "rgb(204, 246, 242)";
}
function turnRedForOneSecond2() {
    document.getElementById('submit2').style.backgroundColor = "rgb(180, 0, 0)";

    setTimeout(() => {
        document.getElementById('submit2').style.backgroundColor = "";
    }, 300);
}

function submit2(){
    if (p2choice){
        switch (p2choice) {
            case "fire":
                moves2 = firemoves;
                life2 = lifefire;
                console.log("PLAYER 2 CHOSE FIRE");
                document.getElementById('type2').innerHTML="Fire";
                break;
            case "water":
                moves2 = watermoves;
                life2 = lifewater;
                console.log("PLAYER 2 CHOSE WATER");
                document.getElementById('type2').innerHTML="Water";
                break;
            case "earth":
                moves2 = earthmoves;
                life2 = lifefire;
                console.log("PLAYER 2 CHOSE EARTH");
                document.getElementById('type2').innerHTML="Earth";
                break;
            case "wind":
                moves2 = windmoves;
                life2 = lifewind;
                console.log("PLAYER 2 CHOSE WIND");
                document.getElementById('type2').innerHTML="Wind";
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
    }else{
        turnRedForOneSecond2();
    }

}

//GAME
//DAMAGE PER MOVE
let dmgf1 = 12,
    dmgf2 = 17,
    dmgf3 = 25,

    dmgw1 = 7,
    healw2 = 20,
    dmgw3 = 17,

    dmge1 = 5,
    heale2 = 50,
    dmge3 = 15,

    dmgwi1 = 10,
    healwi2 = 15,
    dmgwi3 = 20

let manaf2 = 30,
    manaf3 = 50,

    manaw2 = 40,
    manaw3 = 35,

    manae2 = 40,
    manae3 = 30,

    manawi2 = 30,
    manawi3 = 40
//-----------------------------PLAYER 1----------------------------------
//FIRE
function p1fire1(){
    const randomnumber = Math.floor(Math.random() * 100);
    
    if (randomnumber <= 79 ){
        life2 -= dmgf1;
        movework1determine = "yes";
    }

    addmana1();
    player1turn();
    disableButton1();
    work1();
}
function p1fire2(){
    if (mana1 < manaf2){
        console.log("INSUFFICIENT MANA");
        movework1determine = "nomana";
    }else{
        const randomnumber = Math.floor(Math.random() * 100);
        
        if (randomnumber <= 79 ){
        life2 -= dmgf2;
        mana1 -= manaf2;
        movework1determine = "yes";
        }
        player1turn();
        disableButton1();
    }
    work1();
}
function p1fire3(){
    if (mana1 < manaf3){
        console.log("INSUFFICIENT MANA");
        movework1determine = "nomana";
    }else{
        const randomnumber = Math.floor(Math.random() * 100);
        
        if (randomnumber <= 79 ){
        life2 -= dmgf3;
        mana1 -= manaf3;
        movework1determine = "yes";
        }
        player1turn();
        disableButton1();
    }
    work1();
}

//WATER
function p1water1(){
    const randomnumber = Math.floor(Math.random() * 100);
    
    if (randomnumber <= 79 ){
    life2 -= dmgw1;
    movework1determine = "yes";
    }
        
    addmana1();
    player1turn();
    disableButton1();
    work1();
}
function p1water2(){
    if (mana1 < manaw2){
        console.log("INSUFFICIENT MANA");
        movework1determine = "nomana";
    }else{
        const randomnumber = Math.floor(Math.random() * 100);
        
        if (randomnumber <= 79 ){
        life1 += healw2;
        mana1 -= manaw2;
        movework1determine = "yes";
        }
        player1turn();
        disableButton1();
    }
    work1();
    
}
function p1water3(){
    if (mana1 < manaw3){
        console.log("INSUFFICIENT MANA");
        movework1determine = "nomana";
    }else{
        const randomnumber = Math.floor(Math.random() * 100);
        
        if (randomnumber <= 79 ){
        life2 -= dmgw3;
        mana1 -= manaw3;
        movework1determine = "yes";
        }
        player1turn();
        disableButton1();
    }
    work1();

}


//EARTH
function p1earth1(){
    const randomnumber = Math.floor(Math.random() * 100);
    
    if (randomnumber <= 79 ){
    life2 -= dmge1;
    movework1determine = "yes";
    }
        
    addmana1();
    player1turn();
    disableButton1();
    work1();
}
function p1earth2(){
    if (mana1 < manae2){
        console.log("INSUFFICIENT MANA");
        movework1determine = "nomana";
    }else{
        const randomnumber = Math.floor(Math.random() * 100);
        
        if (randomnumber <= 79 ){
        life1 += heale2;
        mana1 -= manae2;
        movework1determine = "yes";
        }
        player1turn();
        disableButton1();
    }
    work1();
}
function p1earth3(){
    if (mana1 < manae3){
        console.log("INSUFFICIENT MANA");
        movework1determine = "nomana";
    }else{
        const randomnumber = Math.floor(Math.random() * 100);
        
        if (randomnumber <= 79 ){
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
function p1wind1(){
    const randomnumber = Math.floor(Math.random() * 100);
    
    if (randomnumber <= 79 ){
    life2 -= dmgwi1;
    movework1determine = "yes";
    }
    
    addmana1();
    player1turn();
    disableButton1();
    work1();
}
function p1wind2(){
    if (mana1 < manawi2){
        console.log("INSUFFICIENT MANA");
        movework1determine = "nomana";
    }else{
        const randomnumber = Math.floor(Math.random() * 100);
        
        if (randomnumber <= 79 ){
        life1 += healwi2;
        mana1 -= manawi2;
        movework1determine = "yes";
        }
        player1turn();
        disableButton1();
    }
    work1();
}
function p1wind3(){
    if (mana1 < manawi3){
        console.log("INSUFFICIENT MANA");
        movework1determine = "nomana";
    }else{
        const randomnumber = Math.floor(Math.random() * 100);
        
        if (randomnumber <= 79 ){
        life2 -= dmgwi3;
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
function p2fire1(){
    const randomnumber = Math.floor(Math.random() * 100);
    
    if (randomnumber <= 79 ){
        life1 -= dmgf1;
        movework2determine = "yes";
    }
    
    addmana2();
    player2turn();
    disableButton2();
    work2();
}
function p2fire2(){
    if (mana2 <manaf2){
        console.log("INSUFFICIENT MANA");
        movework2determine = "nomana";
    }else{
        const randomnumber = Math.floor(Math.random() * 100);
        
        if (randomnumber <= 79 ){
        life1 -= dmgf2;
        mana2 -= manaf2;
        movework2determine = "yes";
        }
        player2turn();
        disableButton2();
    }
    work2();
}
function p2fire3(){
    if (mana2 < manaf3){
        console.log("INSUFFICIENT MANA");
        movework2determine = "nomana";
    }else{
        const randomnumber = Math.floor(Math.random() * 100);
        
        if (randomnumber <= 79 ){
        life1 -= dmgf3;
        mana2 -= manaf3;
        movework2determine = "yes";
        }
        player2turn();
        disableButton2();
    }
    work2();
}

//WATER
function p2water1(){
    const randomnumber = Math.floor(Math.random() * 100);
    
    if (randomnumber <= 79 ){
    life1 -= dmgw1;
    movework2determine = "yes";
    }
    
    addmana2();
    player2turn();
    disableButton2();
    work2();
}
function p2water2(){
    if (mana2 < manaw2){
        console.log("INSUFFICIENT MANA");
        movework2determine = "nomana";
    }else{
        const randomnumber = Math.floor(Math.random() * 100);
        
        if (randomnumber <= 79 ){
        life2 += healw2;
        mana2 -= manaw2;
        movework2determine = "yes";
        }
        player2turn();
        disableButton2();
    }
    work2();
}
function p2water3(){
    if (mana2 < manaw3){
        console.log("INSUFFICIENT MANA");
        movework2determine = "nomana";
    }else{
        const randomnumber = Math.floor(Math.random() * 100);
        
        if (randomnumber <= 79 ){
        life1 -= dmgw3;
        mana2 -= manaw3;
        movework2determine = "yes";
        }
        player2turn();
        disableButton2();
    }
    work2();
}


//EARTH
function p2earth1(){
    const randomnumber = Math.floor(Math.random() * 100);
    
    if (randomnumber <= 79 ){
    life1 -= dmge1;
    movework2determine = "yes";
    }
    addmana2();
    player2turn();
    disableButton2();
    work2();
}
function p2earth2(){
    if (mana2 < manae2){
        console.log("INSUFFICIENT MANA");
        movework2determine = "nomana";
    }else{
        const randomnumber = Math.floor(Math.random() * 100);
        
        if (randomnumber <= 79 ){
        life2 += heale2;
        mana2 -= manae2;
        movework2determine = "yes";
        }
        player2turn();
        disableButton2();
    }
    work2();
}
function p2earth3(){
    if (mana2 < manae3){
        console.log("INSUFFICIENT MANA");
        movework2determine = "nomana";
    }else{
        const randomnumber = Math.floor(Math.random() * 100);
        
        if (randomnumber <= 79 ){
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
function p2wind1(){
    const randomnumber = Math.floor(Math.random() * 100);
    
    if (randomnumber <= 79 ){
    life1 -= dmgwi1;
    movework2determine = "yes";
    }
    addmana2();
    player2turn();
    disableButton2();
    work2();
}
function p2wind2(){
    if (mana2 < manawi2){
        console.log("INSUFFICIENT MANA");
        movework2determine = "nomana";
    }else{
        const randomnumber = Math.floor(Math.random() * 100);
        
        if (randomnumber <= 79 ){
        life2 += healwi2;
        mana2 -= manawi2;
        movework2determine = "yes";
        }
        player2turn();
        disableButton2();
    }
    work2();
}
function p2wind3(){
    if (mana2 < manawi3){
        console.log("INSUFFICIENT MANA");
        movework2determine = "nomana";
    }else{
        const randomnumber = Math.floor(Math.random() * 100);
        
        if (randomnumber <= 79 ){
        life1 -= dmgwi3;
        mana2 -= manawi3;
        movework2determine = "yes";
        }
        player2turn();
        disableButton2();
    }
    work2();
}


//OPERATIONS
function addmana1(){
    mana1 += 10;
    if (mana1 >= 100){
        mana1 = 100;
    }
}
function work1(){
    //move work determine
    if (movework1determine === "nomana"){
        document.getElementById('movework1').innerHTML="INSUFFICIENT MANA";
        document.getElementById('movework1').style.color = "red";
        player1turn();
    }else if (movework1determine === "yes" ){
        document.getElementById('movework1').innerHTML="MOVE WAS EFFECTIVE";
    }else{
        document.getElementById('movework1').innerHTML="MOVE WAS NOT EFFECTIVE";
    }
    movework1determine = "no";
}
function disableButton1(){
    setTimeout(() => {
        document.querySelectorAll('button.indivmoves1').forEach(elem => {
            elem.disabled = true;
        });
        document.querySelectorAll('button.indivmoves2').forEach(elem => {
            elem.disabled = false;
        });
    }, 1000);
}


function addmana2(){
    mana2 += 10;
    if (mana2 >= 100){
        mana2 = 100;
    }
}
function work2(){
    //move work determine
    if (movework2determine === "nomana"){
        document.getElementById('movework2').innerHTML="INSUFFICIENT MANA";
        document.getElementById('movework2').style.color = "red";
        player2turn();
    }else if (movework2determine === "yes" ){
        document.getElementById('movework2').innerHTML="MOVE WAS EFFECTIVE";
    }else{
        document.getElementById('movework2').innerHTML="MOVE WAS NOT EFFECTIVE";
    }
    movework2determine = "no";
}
function disableButton2(){
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
function roundanalyzer(){
    if (movework2determine !== "nomana"){
        roundnumber ++;
    }
    console.log(
    "\n-----------------------\nROUND " + roundnumber + "\n\n" +
    "--PLAYER 1-- \nLife: " + life1 + "\nMana: " + mana1 + "\n\n\n" + 
    "--PLAYER 2-- \nLife: " + life2 + "\nMana: " + mana2 + "\n-----------------------\n\n");
}

function  player1turn(){
    //PLAYER 1 TURN
    disableButton2();
    document.getElementById('movework2').innerHTML="";
    document.getElementById('movework1').style.color = "black";
    switch (p1choice) {
        case "fire":
            document.getElementById('firemoves1').style.display="block";
            break;
        case "water":
            document.getElementById('watermoves1').style.display="block";
            break;
        case "earth":
            document.getElementById('earthmoves1').style.display="block";;
            break;
        case "wind":
            document.getElementById('windmoves1').style.display="block";
            break;
    }

    switch (p2choice) {
        case "fire":
            document.getElementById('firemoves2').style.display="block";
            break;
        case "water":
            document.getElementById('watermoves2').style.display="block";
            break;
        case "earth":
            document.getElementById('earthmoves2').style.display="block";;
            break;
        case "wind":
            document.getElementById('windmoves2').style.display="block";
            break;
    }

    //LIFE AND MANA UPDATE 
    document.getElementById('p2life').innerHTML = life2;
    document.getElementById('p2mana').innerHTML = mana2;

    //player 1
    document.getElementById('p1life').innerHTML = life1;
    if (mana1 <= 0){
        mana1 = 0;
    } 
    document.getElementById('p1mana').innerHTML = mana1;

    analyzeloop = 1;

    if (life1 <= 0 || life2 <=0){
        if (life1 <= 0){
            console.log("PLAYER 2 WINS");
            document.body.innerHTML="PLAYER 2 WINS";
        } else if (life2 <=0){
            console.log("PLAYER 1 WINS");
            document.body.innerHTML="PLAYER 1 WINS";
        }
        else{
            player2turn();
        }
    } 

}


function  player2turn(){
    //PLAYER 2 TURN
    document.getElementById('movework1').innerHTML="";
    document.getElementById('movework2').style.color = "black";
    switch (p1choice) {
        case "fire":
            document.getElementById('firemoves1').style.display="block";
            break;
        case "water":
            document.getElementById('watermoves1').style.display="block";
            break;
        case "earth":
            document.getElementById('earthmoves1').style.display="block";;
            break;
        case "wind":
            document.getElementById('windmoves1').style.display="block";
            break;
    }

    switch (p2choice) {
        case "fire":
            document.getElementById('firemoves2').style.display="block";
            break;
        case "water":
            document.getElementById('watermoves2').style.display="block";
            break;
        case "earth":
            document.getElementById('earthmoves2').style.display="block";
            break;
        case "wind":
            document.getElementById('windmoves2').style.display="block";
            break;
    }


    //LIFE AND MANA UPDATE FOR BOTH SIDES
    document.getElementById('p1life').innerHTML = life1;
    document.getElementById('p1mana').innerHTML = mana1;

    //player 2
    document.getElementById('p2life').innerHTML = life2;
    if (mana2 <= 0){
        mana2 = 0;
    }
    document.getElementById('p2mana').innerHTML = mana2;
    
    roundanalyzer();

    if (life1 <= 0 || life2 <=0){
        if (life1 <= 0){
            console.log("PLAYER 2 WINS");
            document.body.innerHTML="PLAYER 2 WINS";
        } else if (life2 <=0){
            console.log("PLAYER 1 WINS");
            document.body.innerHTML="PLAYER 1 WINS";
        }
        else{
            player1turn();
        }
    } 
}
    




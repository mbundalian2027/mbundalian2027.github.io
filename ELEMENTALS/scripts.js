
    let choice;
    let lifefire = 100,
        lifewater = 120,
        lifeearth = 160,
        lifewind = 110,
        life1 = 0,
        life2 = 0;
    let firemoves = ["Hell's Inferno (20 DMG)", "Scorching Sun (18 DMG)", "Firestorm (19 DMG)", "Hellfire Incarnate (17 DMG)", "Fire Fist (16 DMG)"];
    let watermoves = ["Striking Tide (14 DMG)", "Water Wheel (12 DMG)", "Drowning Wave (15 DMG)", "Hydro Shield (20 HP)", "Sea Dragon's Roar (16 DMG)"];
    let earthmoves = ["Groundbreaker (8 DMG)", "Earthen Wall (12 HP)", "Terraform Destroy (12 DMG)", "Geo Grandia (11 DMG)", "Stone Bullet (9 DMG)"];
    let windmoves = ["Goddess's Breath (12 HP)", "Towering Tornado (17 DMG)", "Wind Blade Shower (12 DMG)", "Swift White Bow (15 DMG)", "Tempest Drive (16 DMG)"];
    let moves1 = [];
    let moves2 = [];

    function pvp(){
        choice = "pvp";
        document.getElementById('menucontainer').style.display = "none";
    }
    function ai(){
        choice = "ai";
        document.getElementById('menucontainer').style.display = "none";
    }

    //PLAYER 1
    let p1choice;

    function fire1(){
        p1choice = "fire";
    }
    function water1(){
        p1choice = "water";
    }
    function earth1(){
        p1choice = "earth";
    }
    function wind1(){
        p1choice = "wind";
    }

    function submit1(){
        switch (p1choice) {
            case "fire":
                moves1 = firemoves;
                life1 = lifefire;
                console.log("PLAYER 1 CHOSE FIRE");
                break;
            case "water":
                moves1 = watermoves;
                life1 = lifewater;
                console.log("PLAYER 1 CHOSE WATER");
                break;
            case "earth":
                moves1 = earthmoves;
                life1 = lifefire;
                console.log("PLAYER 1 CHOSE EARTH");
                break;
            case "wind":
                moves1 = windmoves;
                life1 = lifewind;
                console.log("PLAYER 1 CHOSE WIND");
                break;
        }
        console.log("Player 1 moves\n" + moves1);
        console.log("Life: " + life1);

        document.getElementById('pvp1').style.display = "none";
        document.getElementById('pvp2').style.display = "block";
    }


    //PLAYER 2
    let p2choice;
    
    function fire2(){
        p2choice = "fire";
    }
    function water2(){
        p2choice = "water";
    }
    function earth2(){
        p2choice = "earth";
    }
    function wind2(){
        p2choice = "wind";
    }

    function submit2(){
        switch (p2choice) {
            case "fire":
                moves2 = firemoves;
                life2 = lifefire;
                console.log("PLAYER 2 CHOSE FIRE");
                break;
            case "water":
                mmoves2 = watermoves;
                life2 = lifewater;
                console.log("PLAYER 2 CHOSE WATER");
                break;
            case "earth":
                moves2 = earthmoves;
                life2 = lifefire;
                console.log("PLAYER 2 CHOSE EARTH");
                break;
            case "wind":
                moves2 = windmoves;
                life2 = lifewind;
                console.log("PLAYER 2 CHOSE WIND");
                break;
        }
        console.log("Player 2 moves\n" + moves2);
        console.log("Life: " + life2);
        document.getElementById('pvp2').style.display = "none";
    }
    
    //GAME
    let rchoice;
    function randomizer() {
        const randomnumber = Math.floor(Math.random() * 100);
        
        if (randomnumber <= 69 ){
            rchoice = 1;
        } else{
            rchoice = 0;
        }
    }
    if (choice === "pvp"){
        fire1();
        water1();
        earth1();
        wind1();
        submit1();

        fire2();
        water2();
        earth2();
        wind2();
        submit2();

        if (life1 <= 0 || life2 <=0){
            if (life1 = 0){
                console.log("PLAYER 2 WINS");
            } else{
                console.log("PLAYER 1 WINS");
            }
        } else{
            
        }

        
    } else if (choice === "ai"){

    }

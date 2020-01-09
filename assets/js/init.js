
$(function() {

    //Initialisation du plateau vide
    for(var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            let place = $('<div class="case" id="case'+i+j+'" ></div>');
            $(place).appendTo($('#plateau'));
        }
    }

    //Création des block
    var listBlock = [];
    var listNumb = [];
    for (var k = 0; k < 12; k++) {
        let numb;
        let block;
        do {
            numb = Math.floor(Math.random()*100);
            if (numb < 10) {
                numb = '0'+numb;
            }
            block = 'block'+numb;
        } while (listBlock.includes(block));
        listBlock.push(block);
        listNumb.push(numb);
    }
    //Intégration des block
    for (k = 0; k < 12; k++) {
        let clone = $('<div class="block" id="'+listBlock[k]+'"></div>');
        clone.appendTo($('#case'+listNumb[k]));
    }

    //Initialisation des positions d'armes
    var listGuns = [];
    var gunsNumb = [];
    for (k = 0; k < 4; k++) {
        let numb;
        let gun;
        do {
            numb = Math.floor(Math.random()*100);
            if (numb < 10) {
                numb = '0'+numb;
            }
            gun = 'img'+numb;
        } while (listNumb.includes(numb) || gunsNumb.includes(numb));
        listGuns.push(gun);
        gunsNumb.push(numb);
    }
    
    //Création des armes
    var weapons = {
        Sniper: 15,
        Assault: 20,
        AK47: 18,
        Fusil: 13,
    }
    var guns = [];
    guns.push($('<img class="guns sniper" src="assets/img/sniper.svg">'))
    guns.push($('<img class="guns assault" src="assets/img/assault.svg">'))
    guns.push($('<img class="guns ak47" src="assets/img/ak47.svg">'))
    guns.push($('<img class="guns fusil" src="assets/img/fusil.svg">'))
    
    //Intégration des armes à la map
    for (k = 0; k < 4; k++) {
        guns[k].appendTo('#case'+gunsNumb[k]);
    }

    //Initialisation des positions des joueurs
    do {
        var playersNumb = [];
        for (k = 0; k < 2; k++) {
            let numb;
            let player;
            do {
                numb = Math.floor(Math.random()*100);
                if (numb < 10) {
                    numb = '0'+numb;
                }
            } while (listNumb.includes(numb) || gunsNumb.includes(numb) || playersNumb.includes(numb));
            playersNumb.push(numb);
        }
    } while (verifPlacement(playersNumb));
    
    //Création des joueurs
    function verifPlacement(playersNumb) {
        let numb1 = playersNumb[0].toString();
        let numb2 = playersNumb[1].toString();
        let player1 = {
            x: numb1[0],
            y: numb1[1]
        };
        let player2 = {
            x: numb2[0],
            y: numb2[1]
        };
        let player1Int = {
            x: parseInt(numb1[0]),
            y: parseInt(numb1[1])
        };
        let player2Int = {
            x: parseInt(numb2[0]),
            y: parseInt(numb2[1])
        };
        
        if (player1.x === player2.x || (player1Int.x + 1) === player2Int.x || (player1Int.x - 1) === player2Int.x) {
            return true;
        } else if (player1.y === player2.y || (player1Int.y + 1) === player2Int.y || (player1Int.y - 1) === player2Int.y) {
            return true;
        } else {
            return false;
        }
    }

    players = [];
    players.push($('<div class="player-container"><img class="player" id="player1" src="assets/img/P1.svg"></div>'))
    players.push($('<div class="player-container"><img class="player" id="player2" src="assets/img/P2.svg"></div>'))


    
    //Intégration des joueurs à la map
    for (k = 0; k < 2; k++) {
        players[k].appendTo('#case'+playersNumb[k]);
    }

    //Intégration de l'arme de base
    $('<img class="gun" src="assets/img/gun.svg">').appendTo($('#case'+playersNumb[0]));
    $('<img class="gun" src="assets/img/gun.svg">').appendTo($('#case'+playersNumb[1]));

    //initialisation des infos
    dealer = 1;
    info = new window.Info(dealer, 100, 10, 100, 10);

})
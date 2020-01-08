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
        } while (listNumb.includes(numb));
        listGuns.push(gun);
        gunsNumb.push(numb);
    }
    
    //Création des armes
    guns = [];
    guns.push($('<img class="guns" src="assets/img/sniper.svg">'))
    guns.push($('<img class="guns" src="assets/img/assault.svg">'))
    guns.push($('<img class="guns" src="assets/img/ak47.svg">'))
    guns.push($('<img class="guns" src="assets/img/fusil.svg">'))
    
    //Intégration des armes à la map
    for (k = 0; k < 4; k++) {
        guns[k].appendTo('#case'+gunsNumb[k]);
    }

    console.log(listGuns)

})
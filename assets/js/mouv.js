$(function() {

    //Lance la partie
    tour();

    //Gestion principal d'un tour
    function tour() {
        deUnderlineCases();
        let placementP1 = localizePlayer('#player1');
        let placementP2 = localizePlayer('#player2');
        switch(dealer) {
            case 1:
                underlineCase(placementP1);
                eventMove('#player1');
                dealer = 2;
                //info.tour = 1;
                switchTour();
                break;
            case 2:
                underlineCase(placementP2);
                eventMove('#player2');
                dealer = 1;
                //info.tour = 2;
                switchTour();
                break;
        }
    }

    function switchTour() {
        if (dealer === 2) {
            info.tour = 1;
            $('#tour-display').css('backgroundColor', 'rgba(255,0,0,0.6)');
         } else {
            info.tour = 2;
            $('#tour-display').css('backgroundColor', 'rgba(0,0,255,0.6');
         } 
    }

    //Vérifie si un combat doit avoir lieu
    function verifFight(event) {
        var numCase = $(event).attr('id').replace('case', '');
        let numb = numCase.toString();
        let playerStr = {
            x: numb[0],
            y: numb[1]
        };
        let playerInt = {
            x: parseInt(numb[0]),
            y: parseInt(numb[1])
        };
        let cases = {
            1: [(playerInt.x - 1), playerInt.y],
            2: [playerInt.x, (playerInt.y + 1)],
            3: [(playerInt.x + 1), playerInt.y],
            4: [playerInt.x, (playerInt.y - 1)],
        }
        for(var place in cases) {
            let square = '#case' + ((cases[place][0].toString())) + ((cases[place][1].toString()));
            if ($(square).children().hasClass('player-container')) {
                return true;
            }
        }
        return false;
    }

    //Surlignage des cases pour le déplacement du joueur
    function underlineCase(player) {
        let numb = player.toString();
        let playerStr = {
            x: numb[0],
            y: numb[1]
        };
        let playerInt = {
            x: parseInt(numb[0]),
            y: parseInt(numb[1])
        };
        //Initialisation des cases
        let cases = {
            1: [(playerInt.x - 1), playerInt.y],
            2: [(playerInt.x - 2), playerInt.y],
            3: [(playerInt.x - 3), playerInt.y],
            4: [playerInt.x, (playerInt.y + 1)],
            5: [playerInt.x, (playerInt.y + 2)],
            6: [playerInt.x, (playerInt.y + 3)],
            7: [(playerInt.x + 1), playerInt.y],
            8: [(playerInt.x + 2), playerInt.y],
            9: [(playerInt.x + 3), playerInt.y],
            10: [playerInt.x, (playerInt.y - 1)],
            11: [playerInt.x, (playerInt.y - 2)],
            12: [playerInt.x, (playerInt.y - 3)],
        }
        //Placement des cases
        var place = 1;
        for (var i = 1; i <= 4; i++) {
            var j = 0;
            while (j < 3) {
                let square = '#case' + ((cases[place][0].toString())) + ((cases[place][1].toString()));
                place++;
                if (verifBlock(square)) {
                    let modulo = (i * 3) - place;
                    place += (modulo + 1);
                    break;
                }
                j++;
                $(square).addClass('underline');
            }
        }
    }

    //Vérification qu'aucun bloc n'entrave le passage du joueur jusqu'à la 3ème case
    function verifBlock(square) {
        if ($(square).children().hasClass('block')) {
            return true;
        }
        if ($(square).children().hasClass('player-container')) {
            return true;
        }
    }

    //Affecte un évenement sur une case surligné
    function eventMove(player) {
        $('.underline').on('click', (e) => {
            $(e.currentTarget).prepend($(player).parent().parent().children('.player-container, .gun'));
            deEvent();
            switchGuns(e.currentTarget);
            toggleGuns($(e.currentTarget).attr('id'));
            if (!verifFight(e.currentTarget)) {
                tour();
            } else {
                alert('Sento Kaishi!');
                deUnderlineCases();
                fight();
            }
        });
    }

    
    //Enlève les évenements de toutes les cases du jeux (pour passer au tour suivant et éviter les beugs)
    function deEvent() {
        $('.case').off();
    }

    //Désurlignage des cases lorsqu'on passe au tour suivant
    function deUnderlineCases() {
        $('.underline').removeClass('underline');
    }

    //Permet de géolocaliser un joueur sur le terrain
    function localizePlayer(player) {
        let square = $(player).parent().parent().attr('id');
        return square.replace('case', '');
    }

    //Permet d'échanger son arme avec celle qui se trouve dans la case où le joueur rencontre la nouvelle arme
    function switchGuns(event) {
        if ($(event).children().hasClass('guns')) {
            $(event).children('img:first').toggleClass('gun').toggleClass('guns');
            $(event).children('img:last').toggleClass('gun').toggleClass('guns');
        }
    }

    //Function UI permettant d'harmoniser l'affichage lorsqu'il y'a une arme de dispo sur une case et un joueur qui vient s'y placer avec sa propre arme
    function toggleGuns(event) {
        if ($('#'+event).children().hasClass('player-container') && $('#'+event).children().hasClass('guns')) {
            $('#'+event).children('img:first').addClass('toShow').addClass('d-none');
            var joueur = info.tour;
            var arme = $('#'+event).children('img:last').attr('alt');
            var joueurs = ['', info.pd1, info.pd2];
            (info.tour === 2) ? info.pd2 = arme : info.pd1 = arme;
        } else if ($('.toShow').length) {
            $('.toShow').removeClass('toShow');
        } else if ($('.d-none')) {
            $('.d-none').removeClass('d-none');
        }
    }

})
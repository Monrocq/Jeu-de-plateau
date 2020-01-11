$(function() {

    function deUnderlineCases() {
        $('.underline').removeClass('underline');
    }

    function verifBlock(square) {
        if ($(square).children().hasClass('block')) {
            return true;
        }
        if ($(square).children().hasClass('player-container')) {
            return true;
        }
    }

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

    function localizePlayer(player) {
        let square = $(player).parent().parent().attr('id');
        return square.replace('case', '');
    }

    function eventMove(player) {
        $('.underline').on('click', (e) => {
            $(e.currentTarget).prepend($(player).parent().parent().children('.player-container, .gun'));
            deEvent();
            switchGuns(e.currentTarget);
            toggleGuns($(e.currentTarget).attr('id'));
            tour();
        });
    }

    function deEvent() {
        $('.case').off();
    }

    function switchGuns(event) {
        if ($(event).children().hasClass('guns')) {
            $(event).children('img:first').toggleClass('gun').toggleClass('guns');
            $(event).children('img:last').toggleClass('gun').toggleClass('guns');
        }
    }

    function toggleGuns(event) {
        console.log(event);
        if ($('#'+event).children().hasClass('player-container') && $('#'+event).children().hasClass('guns')) {
            $('#'+event).children('img:first').addClass('toShow').addClass('d-none');
        } else if ($('.toShow').length) {
            $('.toShow').removeClass('toShow');
        } else if ($('.d-none')) {
            $('.d-none').removeClass('d-none');
        }
    }

    dealer = 1;

    function tour() {
        deUnderlineCases();
        let placementP1 = localizePlayer('#player1');
        let placementP2 = localizePlayer('#player2');
        switch(dealer) {
            case 1:
                underlineCase(placementP1);
                eventMove('#player1');
                dealer = 2;
                break;
            case 2:
                underlineCase(placementP2);
                eventMove('#player2');
                dealer = 1;
                break;
        }
    }

    tour();

    function mouv() {

    }
})
$(function() {

    function verifBlock(square) {
        if ($(square).children().hasClass('block')) {
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

    let placementP1 = localizePlayer('#player1');
    let placementP2 = localizePlayer('#player2');

    underlineCase(placementP1);
    underlineCase(placementP2);

    function mouv() {

    }

})
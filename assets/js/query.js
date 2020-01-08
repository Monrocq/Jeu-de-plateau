$(function() {

    //Initialisation du plateau vide
    for(var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            let place = $('<div class="case" id="case'+i+j+'" ></div>');
            $(place).appendTo($('#plateau'));
        }
    }

    //Remplissage des block
    var listBlock = [];
    var listNumb = [];
    for (var k = 0; k < 12; k++) {
        let numb;
        let block;
        do {
            numb = Math.floor(Math.random()*100);
            block = 'block'+numb;
        } while (listBlock.includes(block));
        listBlock.push(block);
        listNumb.push(numb);
    }
    
    
    for (k = 0; k < 12; k++) {
        let clone = $('<div class="block" id="'+listBlock[k]+'"></div>');
        clone.appendTo($('#case'+listNumb[k]));
    }
    
})
$(function() {

    //Rend par défault l'affichage d'un évenement qui vient de se produire, caché dès l'initialisation de la partie.
    $('#etat').hide();

    //Nommage de la fonction de combat afin de pouvoir l'appeler lorsque qu'une detection de combat survient dans mouv.js
    fight = () => {
        
        //Change les paramètres d'environnements pour passer le jeux en mode Combat
        info.tour = dealer;
        $('#statut').html('Fight!')
        $('.bouton').prop('disabled', false);

        //Débute le mode combat
        main();

        //Module central de la gestion du combat
        function main() {
            disableDef();
            eventing();
        }

        //Permet de savoir qui a la main dans le jeux
        function noDealer() {
            if (info.tour === 2) {
                return 1;
            } else {
                return 2;
            }
        }

        //Ajoute des évenements sur les boutons d'attaque et de défense
        function eventing() {
            $('.bouton').off();
            $('#attack-btn').one('click', () => {
                let pd = ['', (info.def2) ? info.pd1/2 : info.pd1, (info.def1) ? info.pd2/2 : info.pd2];
                $('#etat-content').html('Bam -'+(pd[info.tour]) +' contre l\'adversaire!');
                $('#etat').slideDown().delay(2000).slideUp();
                (info.tour === 2) ? info.pv1 -= pd[info.tour] : info.pv2 -= pd[info.tour];
                
                (finish()) ? alert('Rechargez la page si vous souhaitez recommencer') : setTimeout(switchTour, 2000);;
            });
            $('#defense-btn').one('click', () => {
                $('#etat-content').html('Bim, bouclier déployé!')
                $('#etat').slideDown().delay(2000).slideUp();
                if (info.tour === 2) {
                    info.enableDef2() 
                } else {
                    info.enableDef1();
                } 
                setTimeout(switchTour, 2000);
                
            });
        }

        //Permet de faire le changement de tour
        function switchTour() {
            (info.tour === 2) ? info.tour = 1 : info.tour = 2;
            main();
        }

        //Désactive la défense si elle était activé le tour précédent
        function disableDef() {
            let defs = ['', info.def1, info.def2];
            if (info.tour === 2) {
                info.def2 = false;
            } else {
                info.def1 = false;
            }
        }

        //Gestion de la fin du jeux
        function finish() {
            if (info.pv1 <= 0 || info.pv2 <= 0) {
                if (info.pv1 <= 0) {
                    var vainqueur = 'Joueur2';
                } else {
                    var vainqueur = 'Joueur1'
                }
                alert('Fin de la partie.')
                if (window.confirm('Voulez vous recommencer?')) {
                    location.reload()
                }
            } else {
                return false;
            }
        }

    }


})
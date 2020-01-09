$(function() {

    $('#etat').hide();

    fight = () => {
        
        info.tour = dealer;
        $('#statut').html('Fight!')
        $('.bouton').prop('disabled', false);

        function noDealer() {
            if (info.tour === 2) {
                return 1;
            } else {
                return 2;
            }
        }

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

        function switchTour() {
            (info.tour === 2) ? info.tour = 1 : info.tour = 2;
            main();
        }

        function disableDef() {
            let defs = ['', info.def1, info.def2];
            if (info.tour === 2) {
                info.def2 = false;
            } else {
                info.def1 = false;
            }
        }

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

        function main() {
            disableDef();
            eventing();
        }

        main();
        
    }


})
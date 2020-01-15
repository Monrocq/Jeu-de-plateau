
    //Unification des classes autour d'un seul et même tableau de bord pour simplifier la gestion du jeux
    class Info {
        constructor(tour, pv1, pd1, pv2, pd2) {
            this._tour = tour;
            this._p1 = new Joueur(pv1, pd1);
            this._p2 = new Joueur(pv2, pd2);
            this._def1 = false;
            this._def2 = false;
            this.majInfo();
        }

        get tour() {
            return this._tour;
        }

        set tour(tour) {
            this._tour = tour;
            $('#tour').html(tour);
        }

        get pv1() {
            return this._p1.pv;
        }

        set pv1(pv1) {
            this._p1.pv = pv1;
            $('#pv1').html(pv1);
        }

        get pv2() {
            return this._p2.pv;
        }

        set pv2(pv2) {
            this._p2.pv = pv2;
            $('#pv2').html(pv2);
        }

        get pd1() {
            return this._p1.pd;
        }

        set pd1(pd1) {
            this._p1.pd = pd1;
            $('#pd1').html(this._p1.pd);
        }

        get pd2() {
            return this._p2.pd;
        }

        set pd2(pd2) {
            this._p2.pd = pd2;
            $('#pd2').html(this._p2.pd);
        }

        get def1() {
            return this._def1;
        }

        set def1(value) {
            this._def1 = value;
        }

        enableDef1() {
            this._def1 = !this._def1;
        }

        get def2() {
            return this._def2;
        }

        set def2(value) {
            this._def2 = value;
        }

        enableDef2() {
            this._def2 = !this._def2;
        }

        majInfo() {
            $('#tour').html(this._tour);
            $('#pv1').html(this._p1.pv);
            $('#pv2').html(this._p2.pv);
            $('#pd1').html(this._p1.pd);
            $('#pd2').html(this._p2.pd);
        }
    }    

    //Prévention d'insertion de la classe Info dans les variables globales
    //window.Info = Info;
    

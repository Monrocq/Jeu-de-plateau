
    //Création de la classe arme qui servira a équiper un joueur
    class Arme {
        constructor(arme) {
            this._pd = weapons[arme];
        }

        get pd() {
            return this._pd;
        }

        set pd(pd) {
            this._pd = weapons[pd];
        }

    }

    window.Arme = Arme;

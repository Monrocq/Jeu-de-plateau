
    //Création de la classe joueur avec ses points de vies et ses points de dégats
    class Joueur {
        constructor(pv, weapon) {
            this._pv = pv;
            this._weapon = new Arme(weapon);
        }

        get pv() {
            return this._pv;
        }

        set pv(pv) {
            this._pv = pv;
        }

        get pd() {
            return this._weapon.pd;
        }

        set pd(arme) {
            this._weapon.pd = arme;

        }
    }

    //window.Joueur = Joueur;

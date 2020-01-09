$(function() {
    class Info {
        constructor(tour, pv1, pd1, pv2, pd2) {
            this._tour = tour;
            this._pv1 = pv1;
            this._pd1 = pd1;
            this._pv2 = pv2;
            this._pd2 = pd2;
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
            return this._pv1;
        }

        set pv1(pv1) {
            this._pv1 = pv1;
            $('#pv1').html(pv1);
        }

        get pv2() {
            return this._pv2;
        }

        set pv2(pv2) {
            this._pv2 = pv2;
            $('#pv2').html(pv2);
        }

        get pd1() {
            return this._pd1;
        }

        set pd1(pd1) {
            this._pd1 = pd1;
            $('#pd1').html(pd1);
        }

        get pd2() {
            return this._pd2;
        }

        set pd2(pd2) {
            this._pd2 = pd2;
            $('#pd2').html(pd2);
        }

        majInfo() {
            $('#tour').html(this._tour);
            $('#pv1').html(this._pv1);
            $('#pv2').html(this._pv2);
            $('#pd1').html(this._pd1);
            $('#pd2').html(this._pd2);
        }
    }

    window.Info = Info;
})
var monEspaceNoms = monEspaceNoms || {};
(function (monEspaceNoms) {
    let Produit = monEspaceNoms.Produit;

    let Jeu = function(el) {
        this.el = el;
        Produit.call(this, this.el);

        let html = '';
        if(this.rabais) {
            html = `
            <p><small>Titre : </small>${this.titre}</p>
            <p><small>Sujet : </small>${this.sujet}</p>
            <p><small>Prix : </small>${this.prix}&nbsp$<small> (&nbsp${this.rabais}%&nbsp)</small></p>
            <p><small>Éditeur : </small>${this.editeur}</p>
            `;
        } else {
            html = `
            <p><small>Titre : </small>${this.titre}</p>
            <p><small>Sujet : </small>${this.sujet}</p>
            <p><small>Prix : </small>${this.prix}&nbsp$</p>
            <p><small>Éditeur : </small>${this.editeur}</p>
            `;   
        };
        
        this.el.addEventListener("click", function(el){
                currentEl = el.currentTarget;
                Produit.prototype.injection(currentEl, html);
            })
    };
    Jeu.prototype = Object.create(Produit.prototype);
    monEspaceNoms.Jeu = Jeu;
})(monEspaceNoms);

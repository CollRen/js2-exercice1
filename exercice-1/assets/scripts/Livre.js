var monEspaceNoms = monEspaceNoms || {};
(function (monEspaceNoms) {
    let Produit = monEspaceNoms.Produit;

    let Livre = function(el) {
        this.el = el;
        Produit.call(this, this.el);
        console.log(this.rabais);
        let html = '';
        if(this.rabais) {
            html = `
            <p><small>Titre : </small>${this.titre}</p>
            <p><small>Sujet : </small>${this.sujet}</p>
            <p><small>Prix : </small>${this.prix}&nbsp$<small> (&nbsp${this.rabais}%&nbsp)</small></p>
            <p><small>Auteur : </small>${this.auteur}</p>
            <p><small>Éditeur : </small>${this.editeur}</p>
            <p><small>Pages : </small>${this.pages}</p>
            `;
        } else {
            html = `
            <p><small>Titre : </small>${this.titre}</p>
            <p><small>Sujet : </small>${this.sujet}</p>
            <p><small>Prix : </small>${this.prix}&nbsp$</p>
            <p><small>Auteur : </small>${this.auteur}</p>
            <p><small>Éditeur : </small>${this.editeur}</p>
            <p><small>Pages : </small>${this.pages}</p>
            `;
            
        }
        

        this.el.addEventListener("click", function(el){
                currentEl = el.currentTarget;
                Produit.prototype.injection(currentEl, html);
            })
    };

    Livre.prototype = Object.create(Produit.prototype);
    monEspaceNoms.Livre = Livre;
})(monEspaceNoms);

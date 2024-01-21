var monEspaceNoms = monEspaceNoms || {};
(function (monEspaceNoms) {
    let Produit = monEspaceNoms.Produit;
    let Livre = function(el) {
        this.el = el;
        Produit.call(this, this.el);

        this.html += `
            <p><small>Auteur : </small>${this.auteur}</p>
            <p><small>Éditeur : </small>${this.editeur}</p>
            <p><small>Pages : </small>${this.pages}</p>
            `;
            const html = this.html; // de façon a pouvoir accès à this.html à l'intérieur du addEventListener
            this.el.addEventListener("click", function(el){
                currentEl = el.currentTarget;
                Produit.prototype.injection(currentEl, html);
            })
    };
    Livre.prototype = Object.create(Produit.prototype);
    monEspaceNoms.Livre = Livre;
})(monEspaceNoms);

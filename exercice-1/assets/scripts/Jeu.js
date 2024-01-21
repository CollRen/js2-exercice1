var monEspaceNoms = monEspaceNoms || {};
(function (monEspaceNoms) {
    let Produit = monEspaceNoms.Produit;

    let Jeu = function(el) {
        this.el = el;
        Produit.call(this, this.el);

        this.html += `

        <p><small>Éditeur : </small>${this.editeur}</p>
        `;
        const html = this.html; // de façon a pouvoir accès à this.html à l'intérieur du addEventListener
        this.el.addEventListener("click", function(el){
            currentEl = el.currentTarget;
            Produit.prototype.injection(currentEl, html);
        })
    };
    Jeu.prototype = Object.create(Produit.prototype);
    monEspaceNoms.Jeu = Jeu;
})(monEspaceNoms);

var monEspaceNoms = monEspaceNoms || {};

(function (monEspaceNoms) {
    let Produit = monEspaceNoms.Produit;
    function injection(el, html) {
        let ouInjecter = el.querySelector("[data-js-produit-detail]");
        console.log(ouInjecter);
        ouInjecter.innerHTML = html;
        ouInjecter.classList.toggle("produit__detail--ferme");
        ouInjecter.classList.toggle("produit__detail--ouvert");
    };
    
    let Livre = function(el) {
        this.el = el;
        Produit.call(this, this.el);
        //this.elementViser = this.el.currentTarget;
        const elHtml = this.el.querySelector("[data-js-produit-detail]");
        let html = `
        <p><small>Titre : </small>${this.titre}</p>
        <p><small>Sujet : </small>${this.sujet}</p>
        <p><small>Prix : </small>${this.prix}</p>
        <p><small>Auteur : </small>${this.auteur}</p>
        <p><small>Éditeur : </small>${this.editeur}</p>
        <p><small>Pages : </small>${this.pages}</p>
        `;
        injection(this.el, html);
    };


  


    Livre.prototype = Object.create(Produit.prototype);
    monEspaceNoms.Livre = Livre;
})(monEspaceNoms);

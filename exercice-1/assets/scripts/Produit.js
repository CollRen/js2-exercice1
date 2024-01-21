var monEspaceNoms = monEspaceNoms || {};
(function (monEspaceNoms) {
    function calculRabais(prix, rabais) {
        return prix - (prix * rabais / 100);
    };

    function injection(el, html) {
        const elHtml = el.querySelector("[data-js-produit-detail]");
        elHtml.innerHTML = html;
        elHtml.classList.toggle("produit__detail--ferme");
        elHtml.classList.toggle("produit__detail--ouvert");
    };

    let Produit = function (el) {
        this.el = el;
        let str = this.el.dataset.jsProduit.split("|");
        let categorie = str[0];
        let index = str[1];
        this.html = '';

        if(categorie === 'livres') {
            this.titre = produits.livres[index].titre;  // Ici j'aurais aimé produits.`${categorie}`[index].titre;
            this.sujet = produits.livres[index].sujet;
            this.auteur = produits.livres[index].auteur;
            this.editeur = produits.livres[index].editeur;
            this.pages = produits.livres[index].pages;
            this.rabais = produits.livres[index].rabais;
            this.prix = produits.livres[index].prix;
            if (this.rabais) {
                this.prix = calculRabais(this.prix, this.rabais);}
        };
        if(categorie === 'jeux') {
            this.titre = produits.jeux[index].titre;
            this.sujet = produits.jeux[index].sujet;
            this.prix = produits.jeux[index].prix;
            this.rabais = produits.jeux[index].rabais;
            this.editeur = produits.jeux[index].editeur;
            if (this.rabais) {
                this.prix = calculRabais(this.prix, this.rabais);}
        };
        this.html = `
        <p><small>Titre : </small>${this.titre}</p>
        <p><small>Sujet : </small>${this.sujet}</p>
        <p><small>Prix : </small>${this.prix} $${this.rabais ? '&nbsp<small> (&nbsp'+this.rabais+'%&nbsp)</small>' : ''}</p>`;
    };

    Produit.prototype = {
        injection,
    };
    monEspaceNoms.Produit = Produit;
})(monEspaceNoms);

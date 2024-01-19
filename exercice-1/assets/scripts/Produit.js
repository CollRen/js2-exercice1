
/* Les objets Livre et Jeu héritent donc de l’objet Produit:
- Définition des propriétés communes à tous les produits (titre, sujet,prix,rabais(voir références pour l'affichage),editeur)
- Fonctionnalité de calculer un potentiel rabais
************
- *******Gestionnaire d’événement clic *********
************/

var monEspaceNoms = monEspaceNoms || {};
(function (monEspaceNoms) {
    function calculRabais(prix, rabais) {
        
        return prix - (prix * rabais / 100);
    };

    function injection(el, html) {
        const elHtml = el.querySelector("[data-js-produit-detail]");
        console.log(elHtml);
        elHtml.innerHTML = html;
        elHtml.classList.toggle("produit__detail--ferme");
        elHtml.classList.toggle("produit__detail--ouvert");
    };

    let Produit = function (el) {
        this.el = el;
        let str = this.el.dataset.jsProduit.split("|");
        let categorie = str[0];
        let index = str[1];

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
        };
    };

    Produit.prototype = {
        setRabais: function (rabais) {
            this.rabais = rabais;
        },
        setPrix: function (prix) {
            this.prix = prix;
        },
        calculRabais: calculRabais,
        injection: injection
    };
    monEspaceNoms.Produit = Produit;
})(monEspaceNoms);

/* 
Élément <p> pour chaque propriété à injecter dans l’élément data-js-produit-detail
Exemple : <p><small>Titre : </small>${this.titre}</p> */

/* 
Les objets Livre et Jeu héritent donc de l’objet Produit:

- Définition des propriétés communes à tous les produits (titre, sujet,prix,rabais,editeur)
- Fonctionnalité de calculer un potentiel rabais
- Gestionnaire d’événement clic
si le détail est fermé injectez le DOM du détail dans l’élément data-js-produit-detail affichez-le

si le détail est ouvert 
cachez l’élément précédemment affiché
*/

/* 
placez à l’intérieur d’une méthode publique la partie commune aux chaînes DOM de Livre
et Jeu
titre, sujet et prix
Celle-ci sera appelée pour construire la partie initiale partagée par les deux détails à injecter
*/

/* Gestion RABAIS  dans une méthode privée de
Produit.  (voir références pour l'affichage)
prix initial - (prix initial * taux pourcentage / 100) */

var monEspaceNoms = monEspaceNoms || {};

(function (monEspaceNoms) {
    // Méthodes privées
    function methodePrive() {
        console.log("methodePrivée");
    }

    function calculRabais() {
        return (this.prix * this.rabais) / 100; // On retourne this.prix!?
    }

    function injection(el, html) {
        console.log(el);
        const elHtml = el.querySelector("[data-js-produit-detail]");
        elHtml.innerHTML = html;
        elHtml.classList.toggle("produit__detail--ferme");
        elHtml.classList.toggle("produit__detail--ouvert");
    };

    //Constructeur
    let Produit = function (el) {
        this.el = el;
        let str = this.el.dataset.jsProduit.split("|");
        let categorie = str[0];
        let index = str[1];

        if(categorie === 'livres') {
            this.titre = produits.livres[index].titre;
            this.sujet = produits.livres[index].sujet;
            this.prix = produits.livres[index].prix;
            this.rabais = produits.livres[index].rabais;
            this.editeur = produits.livres[index].editeur;
           this.auteur = produits.livres[index].auteur;
           this.pages = produits.livres[index].pages;
           console.log(this.auteur);
           console.log(this.titre);
        };

/*         this.titre = this.el.titre;
        this.sujet = this.el.sujet;
        this.prix = this.el.prix;
        this.rabais = this.el.rabais; */
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

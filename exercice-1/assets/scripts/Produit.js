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

    //Constructeur
    let Produit = function (titre, sujet, prix, rabais, editeur) {
        this.titre = titre;
        this.sujet = sujet;
        this.prix = prix;
        this.rabais = rabais;
        this.editeur = editeur;
    };
})(monEspaceNoms);
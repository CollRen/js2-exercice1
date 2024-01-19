/* lancez les comportements pour chaque noeud DOM.
Après avoir récupéré sur tous les éléments data-js-produit, bouclez
sur chacun afin de vérifier sa catégorie (livres ou jeux) puis instancier
l’objet correspondant en passant en argument l’élément courant. */


    (function (monEspaceNoms) {

    let Produit = monEspaceNoms.Produit;
    let Livre = monEspaceNoms.Livre;
    let elsProduit = document.querySelectorAll("[data-js-produit]");

    

    for (let i = 0, l = elsProduit.length; i < l; i++) {
        elsProduit[i].addEventListener('click', function(el){
            elCurrTarget = el.currentTarget;
            new Livre(elCurrTarget);
        });


       /*  else if (categorie === 'jeux') {
            console.log(`Jeux ${index}:`, categorie );
        } */

        


/*      let titre = 
        let sujet = 
        let prix = 
        let rabais = 
        let editeur =  */
        /*         new Etats(elsProduits[i]); */
    }
})(monEspaceNoms);


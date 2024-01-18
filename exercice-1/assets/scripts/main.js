/* lancez les comportements pour chaque noeud DOM.
Après avoir récupéré sur tous les éléments data-js-produit, bouclez
sur chacun afin de vérifier sa catégorie (livres ou jeux) puis instancier
l’objet correspondant en passant en argument l’élément courant. */

window.addEventListener("DOMContentLoaded", function () {
    let elsProduit = document.querySelectorAll("[data-js-produit]");

    for (let i = 0, l = elsProduit.length; i < l; i++) {
        let str = elsProduit[i].dataset.jsProduit.split("|");
        let categorie = str[0];
        let index = str[1];
        if(categorie === 'livres') {
            let titre = produits.livres[i].titre;
            let sujet = produits.livres[i].sujet;
            let prix = produits.livres[i].prix;
            let rabais = produits.livres[i].rabais;
            let editeur = produits.livres[i].editeur;
           let auteur = produits.livres[i].auteur;
           new Produit(titre, sujet, prix, rabais, editeur)
  
        } else if (categorie === 'jeux') {
            console.log(`Jeux ${index}:`, categorie );
        }

        


/*      let titre = 
        let sujet = 
        let prix = 
        let rabais = 
        let editeur =  */
        /*         new Etats(elsProduits[i]); */
    }

    //Pour savoir la catégorie, ainsi que l'index du livre duquel afficher l'informations
    let str = "livres|1";
    const testSplit = str.split("|");
    console.log(testSplit[1]);
});

(function (monEspaceNoms) {

    let Produit = monEspaceNoms.Produit;
    let Livre = monEspaceNoms.Livre;
    let elsProduit = document.querySelectorAll("[data-js-produit]");

    for (let i = 0, l = elsProduit.length; i < l; i++) {
        let str = elsProduit[i].dataset.jsProduit.split("|");
        let categorie = str[0];
        let index = str[1];
        if(categorie === 'livres') {
            new Livre(elsProduit[i]);
        /* } else {
            new Jeu(elsProduit[i]); */
        };
    };
})(monEspaceNoms);


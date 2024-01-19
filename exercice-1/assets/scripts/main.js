(function (monEspaceNoms) {

    let Produit = monEspaceNoms.Produit;
    let Livre = monEspaceNoms.Livre;
    let elsProduit = document.querySelectorAll("[data-js-produit]");

    for (let i = 0, l = elsProduit.length; i < l; i++) {
        elsProduit[i].addEventListener('click', function(el){
            elCurrTarget = el.currentTarget;
            new Livre(elCurrTarget);
        });
    };
})(monEspaceNoms);


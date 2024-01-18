var monEspaceNoms = monEspaceNoms || {};

(function (monEspaceNoms) {
    let Produit = monEspaceNoms.Produit;
    
    let Livre = function(titre, sujet, prix) {
        Produit.call(this, titre, sujet, prix);   
    };


    //Livre.prototype = Object.create(Produit.prototype);
    monEspaceNoms.Livre = Livre;
})(monEspaceNoms);

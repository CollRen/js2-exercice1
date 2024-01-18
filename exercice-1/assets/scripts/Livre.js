var monEspaceNoms = monEspaceNoms || {};

(function (monEspaceNoms) {
    let Produit = monEspaceNoms.Produit;
    
    let Livre = function(el) {
        Produit.call(this, el);
    };


    Livre.prototype = Object.create(Produit.prototype);
    monEspaceNoms.Livre = Livre;
})(monEspaceNoms);

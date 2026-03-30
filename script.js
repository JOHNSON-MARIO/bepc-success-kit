document.addEventListener('DOMContentLoaded', function() {
    const btnAchat = document.getElementById('btnAchat');
    
    btnAchat.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (confirm('✅ Accès PDFs/vidéos immédiat après paiement Maketou.\nPrêt à réussir ton BEPC ?')) {
            // Remplacez par VOTRE vrai lien Maketou
            const lienMaketou = 'https://maketou.com/votre-produit-geometrie-competence1';
            window.open(lienMaketou, '_blank');
        }
    });
});

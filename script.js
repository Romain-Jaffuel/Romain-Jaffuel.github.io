// Ouvrir la modale et afficher le projet
document.querySelectorAll('.logo-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Récupérer l'ID du projet à afficher (l'ID est extrait de l'attribut href)
        const projectId = this.getAttribute('href').substring(1); // Récupère l'id (sans #)
        const projectContent = document.getElementById(projectId); // Récupère le contenu du projet depuis la section cachée

        // Mettre à jour les détails du projet dans la modale
        const projectDetails = document.getElementById('project-details');
        projectDetails.innerHTML = projectContent.innerHTML; // Copie le contenu du projet dans la modale

        // Afficher la modale
        document.getElementById('project-modal').style.display = 'block';

        // Scroll jusqu'à la modale
        document.getElementById('project-modal').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fermer la modale lorsque l'utilisateur clique sur le bouton "fermer"
document.getElementById('close-modal').addEventListener('click', function () {
    document.getElementById('project-modal').style.display = 'none';
});

// Fermer la modale lorsqu'on clique en dehors de la boîte modale
window.onclick = function (event) {
    if (event.target === document.getElementById('project-modal')) {
        document.getElementById('project-modal').style.display = 'none';
    }
};

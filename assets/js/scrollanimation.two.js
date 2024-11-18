document.addEventListener("DOMContentLoaded", () => {
    // Alle Bilder mit der Klasse "image" auswählen
    const images = document.querySelectorAll('.image');

    // Optionen für den Observer
    const observerOptions = {
        root: null, // Das Sichtfenster ist das gesamte Browserfenster
        threshold: 0.05 // Mindestens 5% des Elements müssen sichtbar sein (frühere Auslösung)
    };

    // Intersection Observer erstellen
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Sichtbar machen
                observer.unobserve(entry.target); // Beobachtung beenden
            }
        });
    }, observerOptions);

    // Jedes Bild beobachten
    images.forEach(image => {
        observer.observe(image);
    });
});

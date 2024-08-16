document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            // Generate a random color with reduced opacity
            const randomColor = 'rgba(' +
                Math.floor(Math.random() * 256) + ',' +
                Math.floor(Math.random() * 256) + ',' +
                Math.floor(Math.random() * 256) + ',0.8)'; // 80% opacity
            section.style.backgroundColor = randomColor;
        });

        section.addEventListener('mouseout', () => {
            // Reset to the semi-transparent background color
            section.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        });
    });
});

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', () => {
    document.querySelectorAll('.project').forEach(sibling => {
        if (sibling !== project) {
        sibling.classList.add('transparent');
        }
    });
    });

    project.addEventListener('mouseleave', () => {
    document.querySelectorAll('.project').forEach(sibling => {
        sibling.classList.remove('transparent');
    });
    });
});
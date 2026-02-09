export const scrollToSection = (targetId, callback) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        if (callback) callback();
    }
};

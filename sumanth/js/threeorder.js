function toggleExpanded(button) {
    const card = button.closest('.order-card');
    const expanded = card.querySelector('.order-expanded');

    // Close other expanded cards
    document.querySelectorAll('.order-expanded.active').forEach(el => {
        if (el !== expanded) {
            el.classList.remove('active');
        }
    });

    expanded.classList.toggle('active');
}

// Close expanded content when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.order-card')) {
        document.querySelectorAll('.order-expanded.active').forEach(el => {
            el.classList.remove('active');
        });
    }
});

function init() {
   
        lightGallery(document.getElementById('lightgallery'), {
            licenseKey: '0000-0000-000-0000',
        });
    
        const filterButtons = document.querySelectorAll('.filter-button');
        
        const handleFilterClick = (button) => {
            
                const filter = button.getAttribute('data-filter');

                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const galleryItems = document.querySelectorAll('.gallery-item');
    
                galleryItems.forEach(item => {
                    const tags = item.getAttribute('data-tags') ? item.getAttribute('data-tags').split(' ') : [];
    
                    if (filter === 'all' || tags.includes(filter)) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
        };
    
        filterButtons.forEach(button => {
            button.addEventListener('click', () => handleFilterClick(button));
        });
}
document.addEventListener("DOMContentLoaded", init());


// Modal selection functionality
function selectSimulation(type) {
    // Store the selected simulation type
    localStorage.setItem('selectedSimulation', type);
    
    // Navigate to the first page of the selected simulation
    switch(type) {
        case 'riveting-process':
            window.location.href = 'riveting-process.html';
            break;
        case 'rivet-forming':
            window.location.href = 'rivet-forming.html';
            break;
        case 'split-riveting':
            window.location.href = 'split-riveting.html';
            break;
        case 'flat-riveting':
            window.location.href = 'flat-riveting.html';
            break;
    }
}

// Back to selection functionality
function backToSelection() {
    localStorage.removeItem('selectedSimulation');
    window.location.href = 'index.html';
}

// Check if on index page and handle modal display
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-overlay');
    
    // If modal exists (on index page), show it
    if (modal) {
        modal.style.display = 'flex';
    }
    
    // If on a subpage, show the sidebar
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        const selectedSimulation = localStorage.getItem('selectedSimulation');
        if (selectedSimulation) {
            sidebar.style.display = 'block';
            
            // Show the appropriate navigation section
            const navSection = document.getElementById(selectedSimulation + '-nav');
            if (navSection) {
                navSection.style.display = 'block';
            }
        }
    }
});


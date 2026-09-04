const navDrawer = document.getElementById('navDrawer');
const navOverlay = document.getElementById('navOverlay');

function openNavDrawer() {
    navDrawer.classList.add('active');
    navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeNavDrawer() {
    navDrawer.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function openSearchPage() {
    window.location.href = 'search.html';
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function showHomePage() {
    document.getElementById('homeSection').style.display = 'flex';
    document.getElementById('gamesSection').style.display = 'none';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    showNotification('🏠 Home page opened');
}

function showAllGames() {
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('gamesSection').style.display = 'block';
    
    const gamesTitle = document.getElementById('gamesTitle');
    gamesTitle.textContent = 'All Games';
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    showNotification('🎮 All Games opened');
}

function filterGames(category) {
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('gamesSection').style.display = 'block';
    
    const gamesTitle = document.getElementById('gamesTitle');
    
    const categoryNames = {
        'all': 'All Games',
        'action': 'Action Games',
        'strategy': 'Strategy Games',
        'racing': 'Racing Games',
        'sports': 'Sports Games',
        'puzzle': 'Puzzle Games',
        'shooter': 'Shooter Games'
    };
    
    gamesTitle.textContent = categoryNames[category] || 'Games';
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    showNotification('🎮 ' + categoryNames[category] + ' - Coming Soon!');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
    
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(15, 15, 26, 1)';
    } else {
        header.style.background = 'rgba(15, 15, 26, 0.95)';
    }
});

console.log('🎮 GameZone loaded successfully!');
 
 document.addEventListener('DOMContentLoaded', () => {
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    const searchRoomBtn = document.getElementById('search-room');
    const  filtradoEstado = document.getElementById('filtro-estado');

    function abrirMenu() {
        sidebar.style.transform = 'translateX(0)';
        sidebarOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        menuToggleBtn.setAttribute('aria-expanded', 'true');
        closeMenuBtn.style.display = 'flex';
    }

    function cerrarMenu() {
        sidebar.style.transform = 'translateX(-100%)';
        sidebarOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
        menuToggleBtn.setAttribute('aria-expanded', 'false');
        closeMenuBtn.style.display = 'none';
    }
    function filtrarEstado() {
        const estado = filtradoEstado.value;
        if (estado === 'todos') {
            console.log('todos');
        } else if (estado === 'pendiente') {
            console.log('pendiente');
        } else if (estado === 'confirmada') {
            console.log('confirmada');
        } else if (estado === 'cancelada') {
            console.log('cancelada');
        } else if (estado === 'check-in') {
            console.log('check-in');
        } else if (estado === 'check-out') {
            console.log('check-out');
        }
    }

    menuToggleBtn.addEventListener('click', abrirMenu);
    searchRoomBtn.addEventListener('click', searchRoom);
    filtradoEstado.addEventListener('change', filtrarEstado);
    closeMenuBtn.addEventListener('click', cerrarMenu);
    sidebarOverlay.addEventListener('click', cerrarMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                cerrarMenu();
            }
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            cerrarMenu();
        }
    });
});

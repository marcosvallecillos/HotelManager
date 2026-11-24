 
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
        console.log("Menu abierto",estado);
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

const clientes = [
    {
        id: 1,
        nombre: "Carlos",
        apellidos: "García López",
        email: "carlos@gmail.com",
        telefono: "612345678",
        dni: "12345678A"
    },
    {
        id: 2,
        nombre: "Laura",
        apellidos: "Martínez Pérez",
        email: "laura@gmail.com",
        telefono: "623456789",
        dni: "23456789B"
    },
    {
        id: 3,
        nombre: "Alejandro",
        apellidos: "Sánchez Ruiz",
        email: "alejandro@gmail.com",
        telefono: "634567890",
        dni: "34567890C"
    },
    {
        id: 4,
        nombre: "Marta",
        apellidos: "Fernández Torres",
        email: "marta@gmail.com",
        telefono: "645678901",
        dni: "45678901D"
    },
    {
        id: 5,
        nombre: "David",
        apellidos: "Navarro Gómez",
        email: "david@gmail.com",
        telefono: "656789012",
        dni: "56789012E"
    }
];

function searchRoom() {
    const searchInput = document.getElementById('search-room-input');
    const searchTerm = searchInput.value.trim().toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
    console.log("Buscando habitación:", searchTerm);
}

   const tabla = document.getElementById("tablaClientes");

  for (let i = 0; i < clientes.length; i++) {
    tabla.innerHTML += `
    
        <tr>
            <td>${clientes[i].id}</td>
            <td>${clientes[i].nombre}</td>
            <td>${clientes[i].apellidos}</td>
            <td>${clientes[i].email}</td>
            <td>${clientes[i].telefono}</td>
            <td>${clientes[i].dni}</td>
        </tr>
    `;
console.log(clientes.length)


}

document.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // MENÚ LATERAL
    // ==============================

    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    const navLinks = document.querySelectorAll('.sidebar-nav a');

    function abrirMenu() {
        if (!sidebar) return;

        sidebar.style.transform = 'translateX(0)';

        if (sidebarOverlay) {
            sidebarOverlay.style.display = 'block';
        }

        document.body.style.overflow = 'hidden';

        menuToggleBtn?.setAttribute('aria-expanded', 'true');

        if (closeMenuBtn) {
            closeMenuBtn.style.display = 'flex';
        }

        console.log('Menú abierto');
    }

    function cerrarMenu() {
        if (!sidebar) return;

        sidebar.style.transform = 'translateX(-100%)';

        if (sidebarOverlay) {
            sidebarOverlay.style.display = 'none';
        }

        document.body.style.overflow = 'auto';

        menuToggleBtn?.setAttribute('aria-expanded', 'false');

        if (closeMenuBtn) {
            closeMenuBtn.style.display = 'none';
        }
    }

    menuToggleBtn?.addEventListener('click', abrirMenu);
    closeMenuBtn?.addEventListener('click', cerrarMenu);
    sidebarOverlay?.addEventListener('click', cerrarMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                cerrarMenu();
            }
        });
    });



    const filtradoEstado = document.getElementById('filtro-estado');

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

    filtradoEstado?.addEventListener('change', filtrarEstado);



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

    const tablaClientes = document.getElementById('tablaClientes');

    if (tablaClientes) {
        tablaClientes.innerHTML = '';

        clientes.forEach(cliente => {
            tablaClientes.innerHTML += `
                <tr>
                    <td>${cliente.id}</td>
                    <td>${cliente.nombre}</td>
                    <td>${cliente.apellidos}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.telefono}</td>
                    <td>${cliente.dni}</td>
                </tr>
            `;
        });
    }


// MODAL LLEGADAS

const btnVerMas = document.getElementById('btnVerMas');
const contenedorModal = document.getElementById('contenedorModal');

const llegadas = [
    { cliente: "Alfreds Futterkiste", hora: "12:30" },
    { cliente: "Centro comercial Moctezuma", hora: "18:30" },
    { cliente: "Ana García", hora: "19:00" },
    { cliente: "Carlos López", hora: "20:00" },
    { cliente: "María Fernández", hora: "21:00" }
];


btnVerMas?.addEventListener('click', async () => {

    try {
        // Cargar el archivo modal.html
        const respuesta = await fetch('modal_llegadas.html');

        if (!respuesta.ok) {
            throw new Error('No se pudo cargar modal.html');
        }

        const html = await respuesta.text();

        // Insertar el modal en el index
        contenedorModal.innerHTML = html;

        const modal = document.getElementById('modalLlegadas');
        const tabla = document.getElementById('tablaTodasLlegadas');
        const btnCerrar = document.getElementById('cerrarModal');

        // Mostrar todas las llegadas
        llegadas.forEach(llegada => {

            const fila = document.createElement('tr');

            fila.innerHTML = `
                <td>
                    <div class="cliente-info">
                        <div class="cliente-avatar-fallback">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <span class="cliente-nombre">
                            ${llegada.cliente}
                        </span>
                    </div>
                </td>

                <td>
                    <span class="hora-badge">
                        <i class="fa-regular fa-clock"></i>
                        ${llegada.hora}
                    </span>
                </td>

                <td>
                    <button class="checkin" type="button">
                        <i class="fa-solid fa-check"></i> Check in
                    </button>
                </td>
            `;

            tabla.appendChild(fila);
        });

        // Cerrar modal
        btnCerrar.addEventListener('click', () => {
            contenedorModal.innerHTML = '';
        });

        // Cerrar al pulsar fuera
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                contenedorModal.innerHTML = '';
            }
        });

        modal.style.display = 'flex';

    } catch (error) {
        console.error('Error al cargar el modal:', error);
    }

});
// MODAL INCIDENCIAS

const indicendias = [
    { habitacion: "Hab. 101", gestion: "Fontanería", estado: "Alta" },
    { habitacion: "Hab. 205", gestion: "Aire acondicionado", estado: "Media" },
    { habitacion: "Hab. 213", gestion: "Mantenimiento", estado: "Alta" },
    { habitacion: "Hab. 108", gestion: "Limpieza", estado: "Baja" },
    { habitacion: "Hab. 302", gestion: "Electricidad", estado: "Alta" },
    { habitacion: "Hab. 115", gestion: "Mobiliario", estado: "Media" },
    { habitacion: "Hab. 207", gestion: "Televisión", estado: "Baja" }
];

const btnVerMasIncidencias = document.getElementById('btnVerMasIncidencias');
const contenedorModalIncidencias = document.getElementById('contenedorModalIncidencias');




btnVerMasIncidencias?.addEventListener('click', async () => {

    try {
        console.log("abriendo modal");
        // Cargar el archivo modal.html
        const respuesta = await fetch('modal_incidencias.html');

        if (!respuesta.ok) {
            throw new Error('No se pudo cargar modal.html');
        }

        const html = await respuesta.text();

        // Insertar el modal en el index
        contenedorModalIncidencias.innerHTML = html;

        const modal = document.getElementById('modalincidencias');
        const tabla = document.getElementById('tablaTodasincidencias');
        const btnCerrar = document.getElementById('cerrarModal');

        // Mostrar todas las llegadas
        indicendias.forEach(indicendia => {

            const fila = document.createElement('tr');

            fila.innerHTML = `
                <td>
                    <div class="habitacion-info">
                       <span class="numero_habitacion">
                            ${indicendia.habitacion}
                        </span>
                    </div>
                </td>

                <td>
                    <span class="gestion-badge">
                        ${indicendia.gestion}
                    </span>
                </td>
                <td>
                    <span class="estado-badge">
                        ${indicendia.estado}
                    </span>
                </td>

                <td>
                    <button class="btn-eliminar" type="button">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </td>
            `;

            tabla.appendChild(fila);
        });

        // Cerrar modal
        btnCerrar.addEventListener('click', () => {
            contenedorModalIncidencias.innerHTML = '';
        });

        // Cerrar al pulsar fuera
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                contenedorModalIncidencias.innerHTML = '';
            }
        });

        modal.style.display = 'flex';

    } catch (error) {
        
        console.log("cer modal");
        console.error('Error al cargar el modal:', error);
    }

});



    // Cerrar con Escape
    document.addEventListener('keydown', (event) => {

        if (event.key === 'Escape' && modal) {
            modal.style.display = 'none';
        }

        if (event.key === 'Escape') {
            cerrarMenu();
        }

    });


    console.log('JavaScript cargado correctamente');

});

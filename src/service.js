const apiUrl = 'http://localhost:4000/images';

//Cargar imágenes al iniciar
fetchImages();
 //A PARTIR DE AQUÍ ES ES OTRO CÓDIGO

async function fetchImages() {
    const response = await fetch(apiUrl);
    const images = await response.json();
    document.getElementById('gallery').innerHTML = ''; // Limpiar galería antes de cargar
    images.forEach(image => {
        addImageToGallery(image);
    });
}

// Función para agregar una imagen a la galería
function addImageToGallery(image) {
    const gallery = document.getElementById('gallery');
    const item = document.createElement('div');
    item.classList.add('masonry-item');

    item.innerHTML = `
        <img src="${image.imageUrl}" alt="${image.client}">
        <h3>Cliente: ${image.client}</h3>
        <p>${image.description}</p>
        <button onclick="editClient('${image.id}')">Editar Nombre</button>
        <button onclick="editDescription('${image.id}')">Editar Descripción</button>
        <button onclick="editImage('${image.id}')">Editar Imagen</button>
        <button onclick="deleteImage('${image.id}')">Eliminar</button>
    `;

    gallery.appendChild(item);
}

// Función para agregar una nueva imagen
document.getElementById('imageForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const client = document.getElementById('client').value;
    const description = document.getElementById('description').value;
    const fileInput = document.getElementById('imageFile');
    const file = fileInput.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(event) {
        const imageUrl = event.target.result;

        const newImage = {
            client: client,
            description: description,
            imageUrl: imageUrl
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newImage)
        }).then(response => {
            if (response.ok) {
                addImageToGallery(newImage);
                document.getElementById('imageForm').reset(); 
            }
        });
    };

    reader.readAsDataURL(file);
});

// Editar el nombre del cliente
function editClient(id) {
    const newClient = prompt("Nuevo nombre del cliente:");
    
    if (newClient) {
        fetch(`${apiUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client: newClient
            })
        }).then(response => {
            if (response.ok) {
                fetchImages(); // Recargar la galería
            }
        });
    }
}

// Editar la descripción
function editDescription(id) {
    const newDescription = prompt("Nueva descripción del diseño:");
    
    if (newDescription) {
        fetch(`${apiUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description: newDescription
            })
        }).then(response => {
            if (response.ok) {
                fetchImages(); // Recargar la galería
            }
        });
    }
}

// Editar la imagen
function editImage(id) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    
    fileInput.onchange = function(event) {
        const file = event.target.files[0];
        
        if (file) {
            const reader = new FileReader();

            reader.onload = function(event) {
                const imageUrl = event.target.result;

                fetch(`${apiUrl}/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        imageUrl: imageUrl
                    })
                }).then(response => {
                    if (response.ok) {
                        fetchImages(); // Recargar la galería
                    }
                });
            };

            reader.readAsDataURL(file);
        }
    };

    fileInput.click(); // Simula el click en el input file
}

// Eliminar una imagen
function deleteImage(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    }).then(response => {
        if (response.ok) {
            fetchImages(); // Recargar la galería
        }
    });
}

// Recargar la galería manualmente
document.getElementById('reloadButton').addEventListener('click', fetchImages);

// Cargar imágenes al inicio
fetchImages();

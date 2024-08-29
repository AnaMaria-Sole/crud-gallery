
# Hi, I'm Katherine! 👋

Hi! My name is Ana. I created this little project while participating in a Full Stack Development bootcamp. I'm excited about reaching my goals in programming with my studies and wanted to apply what I've learned to build this CRUD-based image gallery.
# Masonry Image Gallery

## Overview

This project is a web application that provides a CRUD (Create, Read, Update, Delete) interface for managing a masonry-style image gallery. Users can upload new images, update existing images, and delete images from the gallery. The application interacts with a REST API to perform these operations.

## Features
Fetch Images: Load and display images from a local API.
Add New Images: Upload new images with client name and description.
Edit Images: Update client names, descriptions, or image files.
Delete Images: Remove images from the gallery.
Manual Refresh: Reload the gallery manually.
## Getting Started
### Prerequisites
A local server running on port 3000 with an API endpoint /images that supports GET, POST, PATCH, and DELETE requests.


## Installation


git clone https://github.com/username/repository-name.git

1. Clone the Repository
```bash
 git clone https://github.com/username/repository-name.git

```
2. Navigate to the Project Directory
```bash
cd repository-name

```
3. Open `index.html`

Open the index.html file in your browser to see the gallery in action.

## Configuration
### 1. API Endpoint

Make sure that the `apiUrl` in the code points to your local server's API endpoint:
```
const apiUrl = 'http://localhost:3000/images';
```
### 2. Local Server

Ensure your local server is configured to handle requests at the endpoint specified. The server should be capable of:

- Returning a list of images (GET)
- Adding a new image (POST)
- Updating an image's details (PATCH)
- Deleting an image (DELETE)

## Usage
### 1. Adding Images

Fill out the form with the client name, description, and select an image file.
Submit the form to add the image to the gallery.
### 2. Editing Images

Click the "Editar Nombre" button to update the client name.
Click the "Editar Descripción" button to update the description.
Click the "Editar Imagen" button to upload a new image.
### 3. Deleting Images

Click the "Eliminar" button to remove the image from the gallery.
### 4. Refreshing the Gallery

Click the "Recargar" button to reload the gallery manually.
### 5. Code Explanation
- fetchImages(): Fetches images from the API and updates the gallery.
- addImageToGallery(image): Adds an image to the gallery HTML.
- editClient(id): Prompts for a new client name and updates the image.
- editDescription(id): Prompts for a new description and updates the image.
- editImage(id): Allows uploading a new image file and updates the image.
- deleteImage(id): Deletes the image from the gallery.
- Event Listeners: Handles form submission and manual refresh button clicks.




    
## License

This project is licensed under the MIT License - see the license file for details
[MIT](https://choosealicense.com/licenses/mit/)
## Acknowledgements

 - [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for making HTTP requests
 - Learn more about [CRUD](https://developer.mozilla.org/en-US/docs/Glossary/CRUD) 
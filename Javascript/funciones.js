function agregarElemento() {
    const galleryContainer = document.getElementById('gallery-container');
    const newGalleryItem = document.createElement('div');
    newGalleryItem.classList.add('gallery_item');
    newGalleryItem.innerHTML = `
      <a href=""><img class="gallery_img" src="/Imagenes/artescircenses.jpg" alt=""></a>
      <a href=""><h2 class="gallery_title">Artes Circenses</h2></a>
    `;
    galleryContainer.appendChild(newGalleryItem);
  }
  
  
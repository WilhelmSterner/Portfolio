function toggleImage(id, button) {
    const img = document.getElementById(id);
    if (img.style.display === 'none' || img.style.display === '') {
      img.style.display = 'block';
      button.textContent = 'Dölj bild';
    } else {
      img.style.display = 'none';
      button.textContent = 'Visa bild';
    }
  }
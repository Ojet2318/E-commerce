const searchInput = document.getElementById('searchBar');
const productContainers = document.getElementsByClassName('product-container');

searchInput.addEventListener('keyup', (e) => {
  const searchText = e.target.value.toLowerCase();
  for (let i = 0; i < productContainers.length; i++) {
    const productName = productContainers[i].getElementsByClassName('product-title')[0].innerText.toLowerCase();
    if (productName.includes(searchText)) {
      productContainers[i].style.display = 'block';
    } else {
      productContainers[i].style.display = 'none';
    }
  }
});

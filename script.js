document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez tous les boutons "+"
  const increaseButtons = document.querySelectorAll(".increase-btn");
  // Sélectionnez tous les boutons "-"
  const decreaseButtons = document.querySelectorAll(".decrease-btn");
  // Sélectionnez tous les boutons "Supprimer"
  const deleteButtons = document.querySelectorAll(".delete-btn");
  // Sélectionnez tous les boutons "Cœur"
  const likeButtons = document.querySelectorAll(".like-btn");
  // Sélectionnez l'élément du prix total
  const totalPriceElement = document.querySelector(".total");

  // Fonction pour mettre à jour le prix total
  function updateTotalPrice() {
    let totalPrice = 0;
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
      const price = parseFloat(item.getAttribute("data-price"));
      const quantity = parseInt(item.querySelector(".quantity").textContent);
      totalPrice += price * quantity;
    });
    totalPriceElement.textContent = totalPrice.toFixed(2) + " $";
  }

  // Ajouter des écouteurs d'événements aux boutons "+"
  increaseButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const quantityElement = button.parentElement.querySelector(".quantity");
      let quantity = parseInt(quantityElement.textContent);
      quantity++;
      quantityElement.textContent = quantity;
      updateTotalPrice();
    });
  });

  // Ajouter des écouteurs d'événements aux boutons "-"
  decreaseButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const quantityElement = button.parentElement.querySelector(".quantity");
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
        updateTotalPrice();
      }
    });
  });

  // Ajouter des écouteurs d'événements aux boutons "Supprimer"
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const item = button.closest(".item");
      item.remove();
      updateTotalPrice();
    });
  });

  // Ajouter des écouteurs d'événements aux boutons "Cœur"
  likeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      button.classList.toggle("liked");
    });
  });

  // Mettre à jour le prix total au chargement de la page
  updateTotalPrice();
});

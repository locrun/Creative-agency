$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
  });
});

const ratingItemsList = document.querySelectorAll(".rating__item");
const ratingItemsArray = Array.from(ratingItemsList);

ratingItemsArray.forEach((item) => {
  item.addEventListener("click", () => {
    const { ItemValue } = item.dataset;
    item.parentNode.dataset.totalValue = item.dataset.itemValue;
  });
});

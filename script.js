const sellingPrice = document.getElementById("sellingPrice");
const discount = document.getElementById("discount");
const calculate = document.querySelector("[data-calcButton]");
const discountedPriceDisplay = document.getElementById(
  "discountedPriceDisplay"
);

//click event and discount calculation
calculate.addEventListener("click", () => {
  discountedPriceDisplay.innerHTML = `Discounted Price is: $${parseFloat(
    sellingPrice.value * (1 - discount.value / 100)
  ).toFixed(2)}`;
});

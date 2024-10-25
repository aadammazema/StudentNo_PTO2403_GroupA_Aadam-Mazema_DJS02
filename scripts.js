const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Validation when values are missing
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  // Check if inputs are numbers
  const dividendNum = Number(dividend);
  const dividerNum = Number(divider);

  // Non-numeric input handling
  if (isNaN(dividendNum) || isNaN(dividerNum)) {
    console.error(new Error("Non-numeric input provided."));
    document.body.innerHTML = "Something critical went wrong. Please reload the page";
    return;
  }

});
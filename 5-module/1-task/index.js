
function hideSelf() {
  let hiddenButton = document.querySelector('[class="hide-self-button"]');
    hiddenButton.addEventListener("click", function() {
      hiddenButton.hidden = true;
  });
}
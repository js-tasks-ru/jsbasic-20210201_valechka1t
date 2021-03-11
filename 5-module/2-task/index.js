function toggleText() {
    let toggleTextButton = document.querySelector('[class="toggle-text-button"]');
    let toggleText = document.querySelector('[id="text"]');
    let numOfClicks = 0;
    toggleTextButton.addEventListener("click", function() {
      ++numOfClicks;
      if (numOfClicks % 2 !== 0) {
        toggleText.hidden = true;
        } else {
        toggleText.hidden = false;
      }
    });
}

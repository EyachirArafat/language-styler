function isBengali(text) {
  const bengaliRegex = /[\u0980-\u09FF]/;
  return bengaliRegex.test(text);
}

function processText() {
  const textContainer = document.getElementById("textContainer");
  const originalText = textContainer.innerText;

  const words = originalText.split(/(\s+)/);

  let newContent = "";

  words.forEach((word) => {
    if (isBengali(word)) {
      newContent += `<span class="bengali-text cols">${word}</span>`;
    } else {
      newContent += `<span class="english-text">${word}</span>`;
    }
  });

  textContainer.innerHTML = newContent;
}

window.onload = processText;

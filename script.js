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
    let processedWord = "";
    for (let char of word) {
      if (isBengali(char)) {
        processedWord += `<span class="bengali-text cols">${char}</span>`;
      } else {
        processedWord += `<span class="english-text">${char}</span>`;
      }
    }
    newContent += processedWord;
  });

  textContainer.innerHTML = newContent;
}

window.onload = processText;

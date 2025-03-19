function isBengali(text) {
  const bengaliRegex = /[\u0980-\u09FF]/;
  return bengaliRegex.test(text);
}

function processText() {
  const textContainer = document.getElementById("textContainer");
  const originalText = textContainer.innerText;
  const words = originalText.split(/(\s+)/);
  console.log(words);

  let newContent = "";

  words.forEach((word) => {
    if (word.trim() === "" || word === "\n") {
      newContent += word;
      return;
    }
    let processedWord = "";
    for (let char of word) {
      if (isBengali(char)) {
        processedWord += `<span class="bengali-text colors">${char}</span>`;
      } else {
        processedWord += `<span class="english-text">${char}</span>`;
      }
    }
    newContent += processedWord;
  });

  textContainer.innerHTML = newContent;
}
window.onload = processText();

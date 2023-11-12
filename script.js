document.addEventListener("DOMContentLoaded", () => {
  const sourceLanguageSelect = document.getElementById("source-language");
  const targetLanguageSelect = document.getElementById("target-language");
  const sourceText = document.getElementById("source-text");
  const translateButton = document.getElementById("translate-button");
  const translatedText = document.getElementById("translated-text");
  const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key

  translateButton.addEventListener("click", () => {
    const sourceLang = sourceLanguageSelect.value;
    const targetLang = targetLanguageSelect.value;
    const textToTranslate = sourceText.value;

    fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          q: textToTranslate,
          source: sourceLang,
          target: targetLang,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const translated = data.data.translations[0].translatedText;
        translatedText.textContent = translated;
      })
      .catch((error) => {
        console.error("Translation error:", error);
      });
  });
});

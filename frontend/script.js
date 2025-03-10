let selectedImage = null;

document
  .getElementById("search-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const query = document.getElementById("search-input").value;
    if (query.trim() === "") return;
    try {
      const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      const data = await res.json();
      displayImages(data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
      alert("Alas! An error hath occurred whilst fetching images.");
    }
  });

function displayImages(images) {
  const imageResults = document.getElementById("image-results");
  imageResults.innerHTML = "";
  images.forEach((image) => {
    const imgElem = document.createElement("img");
    imgElem.src = image.urls.thumb;
    imgElem.alt = image.alt_description || "Image";
    imgElem.addEventListener("click", () => {
      document
        .querySelectorAll("#image-results img")
        .forEach((img) => img.classList.remove("selected"));
      imgElem.classList.add("selected");
      selectedImage = image.urls.regular;
      loadImageToCanvas(selectedImage);
    });
    imageResults.appendChild(imgElem);
  });
}

document
  .getElementById("upload-input")
  .addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (event) {
      selectedImage = event.target.result;
      loadImageToCanvas(selectedImage);
    };
    reader.readAsDataURL(file);
  });

function loadImageToCanvas(src) {
  const canvas = document.getElementById("meme-canvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
  };
  img.src = src;
}

document.getElementById("generate-btn").addEventListener("click", function () {
  if (!selectedImage) {
    alert("Pray, select or upload an image first!");
    return;
  }
  const topText = document.getElementById("top-text").value;
  const bottomText = document.getElementById("bottom-text").value;
  addTextToMeme(topText, bottomText);
});

function addTextToMeme(topText, bottomText) {
  const canvas = document.getElementById("meme-canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = "50px Impact";
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.textAlign = "center";

  ctx.textBaseline = "top";
  ctx.fillText(topText.toUpperCase(), canvas.width / 2, 10);
  ctx.strokeText(topText.toUpperCase(), canvas.width / 2, 10);

  ctx.textBaseline = "bottom";
  ctx.fillText(bottomText.toUpperCase(), canvas.width / 2, canvas.height - 10);
  ctx.strokeText(
    bottomText.toUpperCase(),
    canvas.width / 2,
    canvas.height - 10
  );
}

document.getElementById("download-btn").addEventListener("click", function () {
  const canvas = document.getElementById("meme-canvas");
  const link = document.createElement("a");
  link.download = "meme.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});

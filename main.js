import "./style.css";
const $root = document.querySelector("#app");
window.onload = function () {
  const btn = document.querySelector(".container")
  const color = document.querySelector(".color")

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  btn.addEventListener('click', function () {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandom()];
    
    }
    color.textContent = hexColor;
    color.style.color = hexColor;
    document.body.style.backgroundColor = hexColor
  })

  function getRandom() {
    return Math.floor(Math.random() * hex.length)
  }
}
$root.insertAdjacentHTML(
  "beforeend",
    /*html*/ `
    <div>
      <h1>COLORS</h1>
      <div class="linha"></div>
      <section class='container'>
        <h2><span onselectstart="return false;">Background-Color:</span> <span class="color"></span></h2>
      </section>
      <footer class="footer">
        
        <a href="https://github.com/Mulittlee" target="_blank">GitHub/Mulittlee</a>

      </footer>
    </div>
  ` 
);

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`;
  }
  document.getElementById("colorButton").onclick = function (){
    document.body.style.backgroundColor = getRandomColor();
  }


  
window.onload = function () {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      images[i].onmouseover = showAnswer;
      images[i].onmouseout = blurAnswer;
    
    }
  };
  
  function showAnswer(event) {
    let image = event.target;
    let name = image.id;
    name = name + ".jpg";
    image.src = "img/" + name;
  }
  function  blurAnswer(event) {
    let image = event.target;
    let name = image.id;
    name = name + "blur" + ".jpg";
    image.src = "img/" + name;
  }

 
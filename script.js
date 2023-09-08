"use strict";


let ajax = new XMLHttpRequest();
ajax.open("GET", "https://h2o-space.com/htmlbook/images.php")
ajax.responseType = "json";
ajax.send(null);


ajax.onreadystatechange = function() {
  if(ajax.readyState === XMLHttpRequest.DONE && ajax.status === 200) {
    ajax.response.forEach((element, i) => {
      // console.log(element["path"]);
      let img = document.createElement("img");
      img.setAttribute("src", element["path"]);
      
    })
  }
}














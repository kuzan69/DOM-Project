function colorGenerator() {
  const hex = '0123456789ABCDEF';
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor()
{
  document.body.style.backgroundColor = colorGenerator();
}

function addHeader() {
  var header = document.getElementById('addHeader');

  if(header.style.display == "none") {
    header.style.display = "block";
  }

  else {
    header.style.display = "none";
  }
}

function showTime() {
  const date = document.getElementById("date");
  date.style.display = (date.style.display == "none" || date.style.display == "") ? (date.innerHTML = new Date(), "block") : (date.innerHTML = "", "none");
}

function changeImage() {
  var img = document.getElementById('image');

  if (img.src.match('kuzan1.png')) {
    img.src = 'kuzan1(2).png'
  }

  else {
    img.src = 'kuzan1.png'
  }
}

function removeImage() {
  if (document.getElementById) 
    document.getElementById('image').style.visibility = 'hidden'; 
}

function showImage() {
  if (document.getElementById) 
    document.getElementById('image').style.visibility = 'visible'; 
}

// Styling för min header
function changeHeader() {
  const header = document.getElementById("header");
  const reset = header.style.backgroundColor == "gray";
  
  if (reset) {
    header.style.backgroundColor = "";
    header.style.alignItems = "";
    document.getElementById("image").style.border = "";
    document.getElementById("addHeader").style.display = "";
    document.getElementById("addHeader").style.color = "";
    document.getElementById("date").style.display = "";
    document.getElementById("date").innerHTML = "";
    document.getElementById("date").style.color = "";
  } 
  
  else {
    header.style.backgroundColor = "gray";
    header.style.alignItems = "center";
    document.getElementById("image").style.border = ".5vw solid green";
    document.getElementById("addHeader").style.display = "block";
    document.getElementById("addHeader").style.color = "white";
    document.getElementById("date").style.display = "block";
    document.getElementById("date").innerHTML = new Date();
    document.getElementById("date").style.color = "white";
  }
}

function removeHeader() {
  document.getElementById("header").style.display = "none";
}

function showHeader() {
  document.getElementById("header").style.display = "flex";
  document.getElementById("addHeader").style.display = "block";
  document.getElementById("date").style.display = "block";
  document.getElementById("image").style.display = "block";
  document.getElementById("thanksMsg").innerHTML = "Thanks for using my website!"
}
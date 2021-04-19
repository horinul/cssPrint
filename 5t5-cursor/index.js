function isMax(e) {
  if (!document.getElementById('link')) {
    var newEle = document.createElement('link')
    newEle.setAttribute("rel", "stylesheet");
    newEle.setAttribute("type", "text/css");
    newEle.setAttribute('id', 'link')
    document.body.appendChild(newEle)
  }
  if (e.pageX <= 10) {
    var newEle = document.createElement('img')
    newEle.setAttribute("href", "./1.ico");
    document.getElementById('link').setAttribute("href", chrome.extension.getURL('./left.css'));

    document.body.appendChild(newEle)
  } else if (e.pageX >= window.innerWidth - 45) {
    document.getElementById('link').setAttribute("href", chrome.extension.getURL('./right.css'));
  } else if (e.pageY <= 10) {
    document.getElementById('link').setAttribute("href", chrome.extension.getURL('./top.css'));
  } else if (e.pageY >= window.innerHeight - 45) {
    document.getElementById('link').setAttribute("href", chrome.extension.getURL('./bottom.css'));
  } else {
    document.getElementById('link').setAttribute("href", chrome.extension.getURL('./default.css'));
  }
}

document.addEventListener('mousemove', isMax)
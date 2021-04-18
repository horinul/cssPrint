    function isMax(e) {
      if (e.pageX <= 10) {
        if (document.getElementById('left')) {
          return null
        }
        let newEle = document.createElement('link')
        newEle.setAttribute("rel", "stylesheet");
        newEle.setAttribute("type", "text/css");
        newEle.setAttribute("href", "left.css");
        newEle.setAttribute('id', 'left')
        document.body.appendChild(newEle);
      }
      else if (e.pageX >= window.innerWidth - 45) {
        if (document.getElementById('right')) {
          return null
        }
        let newEle = document.createElement('link')
        newEle.setAttribute("rel", "stylesheet");
        newEle.setAttribute("type", "text/css");
        newEle.setAttribute("href", "right.css");
        newEle.setAttribute('id', 'right')
        document.body.appendChild(newEle);
      } else if (e.pageY <=10) {
        if (document.getElementById('top')) {
          return null
        }
        let newEle = document.createElement('link')
        newEle.setAttribute("rel", "stylesheet");
        newEle.setAttribute("type", "text/css");
        newEle.setAttribute("href", "top.css");
        newEle.setAttribute('id', 'top')
        document.body.appendChild(newEle);
      }
       else if (e.pageY >= window.innerHeight - 45) {
        if (document.getElementById('bottom')) {
          return null
        }
        let newEle = document.createElement('link')
        newEle.setAttribute("rel", "stylesheet");
        newEle.setAttribute("type", "text/css");
        newEle.setAttribute("href", "bottom.css");
        newEle.setAttribute('id', 'bottom')
        document.body.appendChild(newEle);
      }
      else {
        if (document.getElementsByTagName('link').length !== 0) {
          for (let i = 0; i < document.getElementsByTagName('link').length; i++) {
            let tmp = document.getElementsByTagName('link')[i]
            document.body.removeChild(tmp)
          }
        }
      }
    }

    document.addEventListener('mousemove', isMax)
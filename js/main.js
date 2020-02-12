document.addEventListener('DOMContentLoaded', function () {
  // Входные данные
  let selectorValue = prompt('Введите class через "." или id через "#" (без ковычек)', '.block');
  let heightValue = prompt('Введите высоту квадрата. Например: 200px', '200px');
  let widthValue = prompt('Введите ширину квадрата. Например: 200px', '200px');
  let bgColorValue = prompt('Введите цвет фона квадрата HEX кодом Например: "#00FF7F"', '#fcb58a');

  // Класс
  function DomElement (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }

  // Объект на основе класса
  let domElem1 = new DomElement (selectorValue, heightValue, widthValue, bgColorValue, '28px');

  // Новый метод класса
  DomElement.prototype.createElem = function() {
    let tagSelectors = this.selector;

    if (this.selector[0] === '.') {

      tag = document.createElement('div');
      tag.className = `${this.selector.slice(1, this.selector.length)}`;
    }
    if (this.selector[0] === '#') {

      tag = document.createElement('p');
      tag.id = `${this.selector.slice(1, this.selector.length)}`;
    }

    tag.style.cssText = `height: ${this.height};
                         width: ${this.width};
                         background: ${this.bg};
                         font-size: ${this.fontSize};
                         text-align: center;
                         margin: 10px;
                         display: flex;
                         align-items: center;
                         justify-content: center;
                         position: absolute;`

    if (this.selector === '#' + selectorValue.slice(1, selectorValue.length)) {
      let tagCode = 'paragraph';
      tag.innerText = 'Test is ' + tagCode;
    }
    if (this.selector === '.' + selectorValue.slice(1, selectorValue.length)) {
      let tagCode = 'div';
      tag.innerText = 'Test is ' + tagCode;
    }
    
    document.body.append(tag);

    document.addEventListener('keydown', function(e) {
      let tagClassOrId = document.querySelector(tagSelectors);
      let cs = window.getComputedStyle(tagClassOrId);
      let keyleft = parseInt(cs.left);
      let keyUp = parseInt(cs.top);

      switch(e.keyCode){
        case 37:
          if (keyleft > 0) // если нажата клавиша влево
            tagClassOrId.style.left = keyleft - 10 + 'px';
            break;
        case 38:
          if (keyUp > 0) // если нажата клавиша вверх
            tagClassOrId.style.top = keyUp - 10 + 'px';
            break;
        case 39:   // если нажата клавиша вправо
          if(keyleft < document.documentElement.clientWidth - 100)
            tagClassOrId.style.left = keyleft + 10 + 'px';
            break;
        case 40:   // если нажата клавиша вниз
            if(keyUp < document.documentElement.clientHeight - 100)
            tagClassOrId.style.top = keyUp + 10 + 'px';
            break;
      }
      
    });
  };

  domElem1.createElem();

});
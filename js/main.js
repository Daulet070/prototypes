document.addEventListener('DOMContentLoaded', function(){
  function DomElement (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }

  DomElement.prototype.createElem = function() {
    if (this.selector[0] === '.') {
      console.log('this.selector: ', this.selector);
      let div = document.createElement('div');
      div.className = `${this.selector.slice(1, this.selector.length)}`;
      console.log('div.className: ', div.className);
      div.style.height = this.height;
      div.style.width = this.width;
      div.style.background = this.bg;
      div.style.fontSize = this.fontSize;
      div.style.textAlign = 'center';
      div.style.display = 'flex';
      div.style.alignItems = 'center';
      div.style.justifyContent = 'center';
      div.style.margin = 'auto';
      div.style.position = 'absolute';
      div.innerText = 'Test is div';
      document.body.append(div);
      document.addEventListener('keydown', function(e) {
        if (e.keyCode == 37) { // left arrow
          div.style.right = '10px';
          div.style.left = '-10px';
        } else if (e.keyCode == 38) { // up arrow
          div.style.bottom = '10px';
          div.style.top = '-10px';

        } else if (e.keyCode == 39) { // right arrow
          div.style.left = '10px';
          div.style.right = '-10px';

        } else if (e.keyCode == 40) { // down arrow
          div.style.top = '10px';
          div.style.bottom = '-10px';
        }
        
      });
    }
    if(this.selector[0] === '#'){
      console.log('this.selector: ', this.selector);
      let p = document.createElement('p');
      p.id = `${this.selector.slice(1, this.selector.length)}`;
      console.log('p.idName : ', p.id );
      p.style.height = this.height;
      p.style.width = this.width;
      p.style.background = this.bg;
      p.style.fontSize = this.fontSize;
      p.style.textAlign = 'center';
      p.style.display = 'flex';
      p.style.alignItems = 'center';
      p.style.justifyContent = 'center';
      p.style.margin = 'auto';
      p.style.position = 'absolute';
      p.innerText = 'Test is paragraph';
      document.body.append(p);

    }
  };
  let domElem1 = new DomElement ('.block', '100px', '100px', '#fcb58a', '28px');
  console.log('domElem1: ', domElem1);

  domElem1.createElem();
  console.log('isPrototypeOf: ', DomElement.prototype.isPrototypeOf(domElem1));

  
});
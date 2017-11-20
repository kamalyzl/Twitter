
window.addEventListener('load', function() {
  // VARIABLES GLOBALES
  var txtArea = document.getElementById('textArea');
  var button = document.getElementById('buton');
  var newSection = document.getElementById('box-tree');

  // Agregar los links
  button.addEventListener('click', function(event) {
    if (txtArea.value.length > 140 || txtArea.value.length <= 0) {
      event.preventDefault();
    } else {
      addLinks(txtArea.value);
      txtArea.value = '';
      document.getElementById('count-js').value = 0;
      document.getElementById('count-js').style.color = 'black';
    }
  });

  function addLinks(text) {
    var newParagraph = document.createElement('p');
    var d = new Date();
    var x = d.getHours() + ': ' + d.getMinutes() + ' horas';
    newParagraph.textContent = text;
    // newParagraph.classList.add('Paragraph');
    newSection.appendChild(newParagraph);
    var hour = document.createElement('p');
    //  hour.classList.add('Paragraph');
    hour.textContent = d.getHours() + ': ' + d.getMinutes() + ' horas';
    newParagraph.appendChild(hour);
  }

  txtArea.addEventListener('keydown', function(event) {
    var count = document.getElementById('count-js');
    var longitud = 140;
    var rest = '';
    var el = this;
    var lonTxt = document.getElementById('textArea').value.length;
    rest = longitud - lonTxt;       

    if (rest < 140) {
      count.style.color = 'black';
    } if (rest < 130) {
      count.style.color = 'red';
    } if (rest < 120) {
      count.style.color = 'blue';
    } if (rest < 0) {
      count.style.color = 'grey';
      //   event.preventDefault(); Opcional, en caso querer detener el tipeo al llegar al limite
      //  y no afecte el crecimiento de la caja, ya que a mas texto ira aumentando el textArea
    }
    count.value = rest;
        
    setTimeout(function() {
      el.style.cssText = 'height:auto; padding:0';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
  });
});
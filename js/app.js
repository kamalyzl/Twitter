
window.addEventListener('load', function () {
    var txtArea = document.getElementById('textArea');
    var button = document.getElementById('buton');
    var newSection = document.getElementById('box-tree');

    //creando el contador
    var count = document.createElement('p');
    var dadCount = document.getElementById('box-twojs');
    count.textContent = 140;
    dadCount.appendChild(count);




    //Agregar los links 

    button.addEventListener('click', function (event) {
        var countParagraph = document.getElementById('textArea').value;
        var lengPara = countParagraph.length;
        if (lengPara > 0) {
            addLinks(txtArea.value)
        } else {
            event.preventDefault();
        }
    })

    function addLinks(text) {
        var newParagraph = document.createElement('p');
        var d = new Date();
        var x = d.getHours() + ': ' + d.getMinutes() + ' horas';
        newParagraph.textContent = text;
        //newParagraph.classList.add('Paragraph');
        newSection.appendChild(newParagraph);
        var hour = document.createElement('p');
        //  hour.classList.add('Paragraph');
        hour.textContent = d.getHours() + ': ' + d.getMinutes() + ' horas';
        newParagraph.appendChild(hour);


    }

    



})
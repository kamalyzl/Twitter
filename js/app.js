
window.addEventListener('load', function () {
    //VARIABLES GLOBALES
    var txtArea = document.getElementById('textArea');
    var button = document.getElementById('buton');
    var newSection = document.getElementById('box-tree');
    var lengthTxtArea = txtArea.value.length;

    //Agregar los links 

    button.addEventListener('click', function (event) {
        if (lengthTxtArea > 0) {
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

    txtArea.addEventListener('keydown', function ( ) {
        var count=document.getElementById('count-js');
        var longitud = 140;
        var rest='';
        var lonTxt= document.getElementById('textArea').value.length;
        rest= longitud-lonTxt;

        if (rest<120){
            count.style.color='red';
        }
        count.value
        =rest;
    })

})
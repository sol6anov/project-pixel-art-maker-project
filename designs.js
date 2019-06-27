// When size is submitted by the user, call makeGrid()

function makeGrid(event) {

// Select size input & tableCanvas

    event.preventDefault();


    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    var tableCanvas = document.getElementById("pixelCanvas");

// To clear the table 

    tableCanvas.innerHTML = "";


    for (var i = 0; i < height;  i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < width; j++) {
            var cell = document.createElement("td");
            row.appendChild(cell); 
        }
        tableCanvas.appendChild(row);
    }

}

// To select color input

function colorCell(event) {

    if (event.target.nodeName == "TD") {
        var pickedColor = document.getElementById("colorPicker").value;
        event.target.style.backgroundColor = pickedColor;   
    }
}



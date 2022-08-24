let buttonId = document.getElementById('btn').addEventListener('click', clickButton => {
    console.log('clicked');
    setInterval(function () {
        if (document.getElementById('red').style.color == 'red') {
            var color1 = "black";
        }
        else {
            color1 = 'red';
        }
        document.getElementById('red').style.color = color1;
        if (document.getElementById('yellow'.style.color == 'yellow')) {
            let color2 = "black";
        }
        else {
            color2 = "yellow";
        }
        document.getElementById('yellow').style.color = color2;
    }, 1000);
})
let screen = document.querySelector('.square__screen');
let inpX = document.querySelector('.inp1');
let inpY = document.getElementsByClassName('inp2');
let btn = document.querySelector('.btn');

btn.addEventListener('click', getValues)

function getValues(){
    render(inpX.value, inpY[0].value);
}

function render(x, y){
    screen.innerHTML = '<div class="screen__element">P</div>';
    document.querySelector('.screen__element').style = `
        text-align: center;
        line-height: ${y}px;

        width: ${x}px;
        height: ${y}px;
        margin: 20px auto;

        border: 2px dashed yellow;
        
        font-size: ${(+y / 10) * 7}px;
    `;
}


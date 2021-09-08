function handleCalcula() {
    let num1 = document.getElementById('campoNum1').value;
    let num2 = document.getElementById('campoNum2').value;
    let num3 = document.getElementById('campoNum3').value;
    let num4 = document.getElementById('campoNum4').value;
    let num5 = document.getElementById('campoNum5').value;
    let num6 = document.getElementById('campoNum6').value;

    let media = document.getElementById('media');
    let somatorio = document.getElementById('somatorio');
    let media1 = document.getElementById('media1');
    let somatorio1 = document.getElementById('somatorio1');

    let cabecalho = document.getElementById('cabecalho');
    let linha1 = document.getElementById('linha1');
    let linha2 = document.getElementById('linha2');

    let nums = [2, 3, 7, 2, 6, 9];
    let numsU = [num1, num2, num3, num4, num5, num6];

    let calcSomatorio = 0;
    let calcMedia = 0;

    for (var i = 0; i < nums.length; i++) {
        calcMedia = calcMedia + nums[i];
        calcSomatorio = calcSomatorio + nums[i];
    }

    calcMedia = calcMedia / nums.length;

    cabecalho.style.backgroundColor = "brown"
    linha1.style.backgroundColor = "cyan"
    linha2.style.backgroundColor = "gray"

    media.innerHTML = calcMedia;
    somatorio.innerHTML = calcSomatorio / moda(numsU);
    media1.innerHTML = calcMedia;
    somatorio1.innerHTML = calcSomatorio / moda(numsU);
}

function moda(arr) {
    return arr.sort((a, b) =>
        arr.filter(v => v === a).length
        - arr.filter(v => v === b).length
    ).pop();
}
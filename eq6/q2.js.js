function handleInserir() {
    const campoNum = document.getElementById('campoNum').value;

    let table = document.getElementById("tabela");

    let tableSize = table.rows.length;
    let row = table.insertRow(tableSize);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    row.id = tableSize;

    cell2.style.backgroundColor = "#2a9df4";
    cell3.style.backgroundColor = "#bbbbbb";
    cell4.style.backgroundColor = "#52307c";

    cell1.innerHTML = campoNum;
    cell2.innerHTML = calculaFatorial(campoNum);
    cell3.innerHTML = calculaQuadradoCubo(campoNum);
    cell4.innerHTML = calculaRaiz(campoNum);
}

function calculaFatorial(n) {
    let resultado = n;
    for (var i = 1; i < n; i++) {
        resultado *= i;
    }
    return resultado;
}

function calculaQuadradoCubo(n) {
    let quadrado = Math.pow(n, 2);
    let cubo = Math.pow(n, 3);
    let resultado = quadrado + cubo;

    return resultado;
}

function calculaRaiz(n) {
    let resultado = Math.sqrt(n);

    resultado = round(resultado, 1)

    return resultado;
}

const round = (num, places) => {
    if (!("" + num).includes("e")) {
        return +(Math.round(num + "e+" + places) + "e-" + places);
    } else {
        let arr = ("" + num).split("e");
        let sig = ""
        if (+arr[1] + places > 0) {
            sig = "+";
        }

        return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + places)) + "e-" + places);
    }
}
function verificar(){
    var signo = new Array();
    signo[0] = "Aries"
    signo[1] = "Touro"
    signo[2] = "Gemeos"
    signo[3] = "Cancer"
    signo[4] = "Leao"
    signo[5] = "Virgem"
    signo[6] = "Libra"
    signo[7] = "Escorpiao"
    signo[8] = "Sargitario"
    signo[9] = "Capricornio"
    signo[10] = "Aquario"
    signo[11] = "Peixe"


    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var numero3 = document.getElementById("numero3").value;
    var numero4 = document.getElementById("numero4").value;
    var numero5 = document.getElementById("numero5").value;
    var numero6 = document.getElementById("numero6").value;
    var numero7 = document.getElementById("numero7").value;
    var numero8 = document.getElementById("numero8").value;

    document.getElementById("maiorn").innerHTML = "O maior número é: " + numero8 + ".";
    document.getElementById("maiorn").innerHTML = "O menor número é: " + numero1 + ".";
    document.getElementById("meion").innerHTML = "O número do meio é: " + numero4 + ".";
    if (numero1<1) 
        document.getElementById("s1").innerHTML = "O Signo do 1º número é Dormir";
    if (numero1>12) 
        document.getElementById("s1").innerHTML = "O Signo do 1º número é Dormir";
    if (numero1==1) 
        document.getElementById("s1").innerHTML = "O Signo do 1º número é Áries";
    if (numero1==2) 
        document.getElementById("s1").innerHTML = "O Signo do 1º número é Touro";
    if (numero1==3) 
        document.getElementById("s1").innerHTML = "O Signo do 1º número é Gêmeos";
    if (numero1==4) 
        document.getElementById("s1").innerHTML = "O Signo do 1º número é Câncer";
    if (numero1==5) 
        document.getElementById("s1").innerHTML = "O Signo do 1º número é Leão";
    if (numero1==6) 
        document.getElementById("s1").innerHTML = "O Signo do 1º número é Virgem";
    if (numero1==7) 
        document.getElementById("s1").innerHTML = "O Signo do 1º número é Libra";
    if (numero1==8) 
        document.getElementById("s1").innerHTML = "O Signo do 1º número é Escorpião";
    if (numero1==9) 
        document.getElementById("s1").innerHTML = "O Signo do 1º número é Sargitário";
    if (numero1==10) 
        document.getElementById("s1").innerHTML = "O Signo do 1º número é Capricórnio";
    if (numero1==11) 
        document.getElementById("s1").innerHTML = "O Signo do 1º número é Aquário";
    if (numero1==12) 
        document.getElementById("s1").innerHTML = "O Signo do 1º número é Peixes";

    if (numero2<1) 
        document.getElementById("s2").innerHTML = "O Signo do 2º número é Dormir";
    if (numero2>12)
        document.getElementById("s2").innerHTML = "O Signo do 2º número é Dormir";
    if (numero2==1) 
        document.getElementById("s2").innerHTML = "O Signo do 2º número é Áries";
    if (numero2==2) 
        document.getElementById("s2").innerHTML = "O Signo do 2º número é Touro";
    if (numero2==3) 
        document.getElementById("s2").innerHTML = "O Signo do 2º número é Gêmeos";
    if (numero2==4) 
        document.getElementById("s2").innerHTML = "O Signo do 2º número é Câncer";
    if (numero2==5) 
        document.getElementById("s2").innerHTML = "O Signo do 2º número é Leão";
    if (numero2==6) 
        document.getElementById("s2").innerHTML = "O Signo do 2º número é Virgem";
    if (numero2==7) 
        document.getElementById("s2").innerHTML = "O Signo do 2º número é Libra";
    if (numero2==8) 
        document.getElementById("s2").innerHTML = "O Signo do 2º número é Escorpião";
    if (numero2==9) 
        document.getElementById("s2").innerHTML = "O Signo do 2º número é Sargitário";
    if (numero2==10) 
        document.getElementById("s2").innerHTML = "O Signo do 2º número é Capricórnio";
    if (numero2==11) 
        document.getElementById("s2").innerHTML = "O Signo do 2º número é Aquário";
    if (numero2==12) 
        document.getElementById("s2").innerHTML = "O Signo do 2º número é Peixes";

    if (numero3<1) 
        document.getElementById("s3").innerHTML = "O Signo do 3º número é Dormir";
    if (numero3>12)
        document.getElementById("s3").innerHTML = "O Signo do 3º número é Dormir";
    if (numero3==1) 
        document.getElementById("s3").innerHTML = "O Signo do 3º número é Áries";
    if (numero3==2) 
        document.getElementById("s3").innerHTML = "O Signo do 3º número é Touro";
    if (numero3==3) 
        document.getElementById("s3").innerHTML = "O Signo do 3º número é Gêmeos";
    if (numero3==4) 
        document.getElementById("s3").innerHTML = "O Signo do 3º número é Câncer";
    if (numero3==5) 
        document.getElementById("s3").innerHTML = "O Signo do 3º número é Leão";
    if (numero3==6) 
        document.getElementById("s3").innerHTML = "O Signo do 3º número é Virgem";
    if (numero3==7) 
        document.getElementById("s3").innerHTML = "O Signo do 3º número é Libra";
    if (numero3==8) 
        document.getElementById("s3").innerHTML = "O Signo do 3º número é Escorpião";
    if (numero3==9) 
        document.getElementById("s3").innerHTML = "O Signo do 3º número é Sargitário";
    if (numero3==10) 
        document.getElementById("s3").innerHTML = "O Signo do 3º número é Capricórnio";
    if (numero3==11) 
        document.getElementById("s3").innerHTML = "O Signo do 3º número é Aquário";
    if (numero3==12) 
        document.getElementById("s3").innerHTML = "O Signo do 3º número é Peixes";

    if (numero4<1) 
        document.getElementById("s4").innerHTML = "O Signo do 4º número é Dormir";
    if (numero4>12)
        document.getElementById("s4").innerHTML = "O Signo do 4º número é Dormir";
    if (numero==1) 
        document.getElementById("s4").innerHTML = "O Signo do 4º número é Áries";
    if (numero4==2) 
        document.getElementById("s4").innerHTML = "O Signo do 4º número é Touro";
    if (numero4==3) 
        document.getElementById("s4").innerHTML = "O Signo do 4º número é Gêmeos";
    if (numero4==4) 
        document.getElementById("s4").innerHTML = "O Signo do 4º número é Câncer";
    if (numero4==5) 
        document.getElementById("s4").innerHTML = "O Signo do 4º número é Leão";
    if (numero4==6) 
        document.getElementById("s4").innerHTML = "O Signo do 4º número é Virgem";
    if (numero4==7) 
        document.getElementById("s4").innerHTML = "O Signo do 4º número é Libra";
    if (numero4==8) 
        document.getElementById("s4").innerHTML = "O Signo do 4º número é Escorpião";
    if (numero4==9) 
        document.getElementById("s4").innerHTML = "O Signo do 4º número é Sargitário";
    if (numero4==10) 
        document.getElementById("s4").innerHTML = "O Signo do 4º número é Capricórnio";
    if (numero4==11) 
        document.getElementById("s4").innerHTML = "O Signo do 4º número é Aquário";
    if (numero4==12) 
        document.getElementById("s4").innerHTML = "O Signo do 4º número é Peixes";

    if (numero5<1) 
        document.getElementById("s5").innerHTML = "O Signo do 5º número é Dormir";
    if (numero5>12)
        document.getElementById("s5").innerHTML = "O Signo do 5º número é Dormir";
    if (numero5==1) 
        document.getElementById("s5").innerHTML = "O Signo do 5º número é Áries";
    if (numero5==2) 
        document.getElementById("s5").innerHTML = "O Signo do 5º número é Touro";
    if (numero5==3) 
        document.getElementById("s5").innerHTML = "O Signo do 5º número é Gêmeos";
    if (numero5==4) 
        document.getElementById("s5").innerHTML = "O Signo do 5º número é Câncer";
    if (numero5==5) 
        document.getElementById("s5").innerHTML = "O Signo do 5º número é Leão";
    if (numero5==6) 
        document.getElementById("s5").innerHTML = "O Signo do 5º número é Virgem";
    if (numero5==7) 
        document.getElementById("s5").innerHTML = "O Signo do 5º número é Libra";
    if (numero5==8) 
        document.getElementById("s5").innerHTML = "O Signo do 5º número é Escorpião";
    if (numero5==9) 
        document.getElementById("s5").innerHTML = "O Signo do 5º número é Sargitário";
    if (numero5==10) 
        document.getElementById("s5").innerHTML = "O Signo do 5º número é Capricórnio";
    if (numero5==11) 
        document.getElementById("s5").innerHTML = "O Signo do 5º número é Aquário";
    if (numero5==12) 
        document.getElementById("s5").innerHTML = "O Signo do 5º número é Peixes";

    if (numero6<1) 
        document.getElementById("s6").innerHTML = "O Signo do 6º número é Dormir";
    if (numero6>12)
        document.getElementById("s6").innerHTML = "O Signo do 6º número é Dormir";
    if (numero6==1) 
        document.getElementById("s6").innerHTML = "O Signo do 6º número é Áries";
    if (numero6==2) 
        document.getElementById("s6").innerHTML = "O Signo do 6º número é Touro";
    if (numero6==3) 
        document.getElementById("s6").innerHTML = "O Signo do 6º número é Gêmeos";
    if (numero6==4) 
        document.getElementById("s6").innerHTML = "O Signo do 6º número é Câncer";
    if (numero6==5) 
        document.getElementById("s6").innerHTML = "O Signo do 6º número é Leão";
    if (numero6==6) 
        document.getElementById("s6").innerHTML = "O Signo do 6º número é Virgem";
    if (numero6==7) 
        document.getElementById("s6").innerHTML = "O Signo do 6º número é Libra";
    if (numero6==8) 
        document.getElementById("s6").innerHTML = "O Signo do 6º número é Escorpião";
    if (numero6==9) 
        document.getElementById("s6").innerHTML = "O Signo do 6º número é Sargitário";
    if (numero6==10) 
        document.getElementById("s6").innerHTML = "O Signo do 6º número é Capricórnio";
    if (numero6==11) 
        document.getElementById("s6").innerHTML = "O Signo do 6º número é Aquário";
    if (numero6==12) 
        document.getElementById("s6").innerHTML = "O Signo do 6º número é Peixes";

    if (numero7<1)
        document.getElementById("s7").innerHTML = "O Signo do 7º número é Dormir";
    if (numero7>12)
        document.getElementById("s7").innerHTML = "O Signo do 7º número é Dormir";
    if (numero7==1) 
        document.getElementById("s7").innerHTML = "O Signo do 7º número é Áries";
    if (numero7==2) 
        document.getElementById("s7").innerHTML = "O Signo do 7º número é Touro";
    if (numero7==3) 
        document.getElementById("s7").innerHTML = "O Signo do 7º número é Gêmeos";
    if (numero7==4) 
        document.getElementById("s7").innerHTML = "O Signo do 7º número é Câncer";
    if (numero7==5) 
        document.getElementById("s7").innerHTML = "O Signo do 7º número é Leão";
    if (numero7==6) 
        document.getElementById("s7").innerHTML = "O Signo do 7º número é Virgem";
    if (numero7==7) 
        document.getElementById("s7").innerHTML = "O Signo do 7º número é Libra";
    if (numero7==8) 
        document.getElementById("s7").innerHTML = "O Signo do 7º número é Escorpião";
    if (numero7==9) 
        document.getElementById("s7").innerHTML = "O Signo do 7º número é Sargitário";
    if (numero7==10) 
        document.getElementById("s7").innerHTML = "O Signo do 7º número é Capricórnio";
    if (numero7==11) 
        document.getElementById("s7").innerHTML = "O Signo do 7º número é Aquário";
    if (numero7==12) 
        document.getElementById("s7").innerHTML = "O Signo do 7º número é Peixes";

    if (numer8<1)
        document.getElementById("s8").innerHTML = "O Signo do 8º número é Dormir";
    if (numero8>12)
        document.getElementById("s8").innerHTML = "O Signo do 8º número é Dormir";
    if (numero8==1) 
        document.getElementById("s8").innerHTML = "O Signo do 8º número é Áries";
    if (numero8==2) 
        document.getElementById("s8").innerHTML = "O Signo do 8º número é Touro";
    if (numero8==3) 
        document.getElementById("s8").innerHTML = "O Signo do 8º número é Gêmeos";
    if (numero8==4) 
        document.getElementById("s8").innerHTML = "O Signo do 8º número é Câncer";
    if (numero8==5) 
        document.getElementById("s8").innerHTML = "O Signo do 8º número é Leão";
    if (numero8==6) 
        document.getElementById("s8").innerHTML = "O Signo do 8º número é Virgem";
    if (numero8==7) 
        document.getElementById("s8").innerHTML = "O Signo do 8º número é Libra";
    if (numero8==8) 
        document.getElementById("s8").innerHTML = "O Signo do 8º número é Escorpião";
    if (numero8==9) 
        document.getElementById("s8").innerHTML = "O Signo do 8º número é Sargitário";
    if (numero8==10) 
        document.getElementById("s8").innerHTML = "O Signo do 8º número é Capricórnio";
    if (numero8==11) 
        document.getElementById("s8").innerHTML = "O Signo do 8º número é Aquário";
    if (numero8==12) 
        document.getElementById("s8").innerHTML = "O Signo do 8º número é Peixes";
}
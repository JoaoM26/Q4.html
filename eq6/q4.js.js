function verificar() {
	var votar= 0
  var aposentar= 0
 	var presa= 0
 	var menor= 0
  try{
  	var idade1= document.getElementById("Idade1").value;
    if (idade1=="")
    	throw "Todos os campos devem ser preenchidos"
    if (idade1<0)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
    if (idade1>150)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
  	if (idade1>=16)
    	votar = votar + 1
  	if (idade1>=65)
    	aposentar = aposentar + 1
  	if (idade1>=18)
    	presa = presa + 1
  	if (idade1<18)
    	menor = menor + 1
      
  	var idade2= document.getElementById("Idade2").value;
  	if (idade2=="")
    	throw "Todos os campos devem ser preenchidos"
    if (idade2<0)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
    if (idade2>150)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
  	if (idade2>=16)
   		votar = votar + 1
  	if (idade2>=65)
	    aposentar = aposentar + 1
  	if (idade2>=18)
    	presa = presa + 1
  	if (idade2<18)
    	menor = menor + 1
      
  	var idade3= document.getElementById("Idade3").value;
  	if (idade3=="")
    	throw "Todos os campos devem ser preenchidos"
    if (idade3<0)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
    if (idade3>150)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
    if (idade3>=16)
    	votar = votar + 1
  	if (idade3>=65)
    	aposentar = aposentar + 1
  	if (idade3>=18)
    	presa = presa + 1
  	if (idade3<18)
    	menor = menor + 1
      
  	var idade4= document.getElementById("Idade4").value;
  	if (idade4=="")
    	throw "Todos os campos devem ser preenchidos"
    if (idade4<0)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
    if (idade4>150)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
    if (idade4>=16)
  		votar = votar + 1
  	if (idade4>=65)
    	aposentar = aposentar + 1
  	if (idade4>=18)
	    presa = presa + 1
	  if (idade4<18)
  	  menor = menor + 1
      
  	var idade5= document.getElementById("Idade5").value;
  	if (idade5=="")
    	throw "Todos os campos devem ser preenchidos"
    if (idade5<0)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
    if (idade5>150)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
    if (idade5>=16)
	    votar = votar + 1
  	if (idade5>=65)
	    aposentar = aposentar + 1
	  if (idade5>=18)
	   	presa = presa + 1
	  if (idade5<18)
	   	menor = menor + 1
	      
	  var idade6= document.getElementById("Idade6").value;
	  if (idade6=="")
    	throw "Todos os campos devem ser preenchidos"
    if (idade6<0)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
    if (idade6>150)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
    if (idade6>=16)
	   	votar = votar + 1
	  if (idade6>=65)
	    aposentar = aposentar + 1
  	if (idade6>=18)
	   	presa = presa + 1
	  if (idade6<18)
	   	menor = menor + 1
      
	  var idade7= document.getElementById("Idade7").value;
	  if (idade7=="")
    	throw "Todos os campos devem ser preenchidos"
    if (idade7<0)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
    if (idade7>150)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
    if (idade7>=16)
	   	votar = votar + 1
	  if (idade7>=65)
	   	aposentar = aposentar + 1
	  if (idade7>=18)
	   	presa = presa + 1
	  if (idade7<18)
	   	menor = menor + 1
      
	  var idade8= document.getElementById("Idade8").value;
	  if (idade8=="")
    	throw "Todos os campos devem ser preenchidos"
    if (idade8<0)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
    if (idade8>150)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
    if (idade8>=16)
	   	votar = votar + 1
	  if (idade8>=65)
	   	aposentar = aposentar + 1
	  if (idade8>=18)
	   	presa = presa + 1
	  if (idade8<18)
	   	menor = menor + 1
      
	  var idade9= document.getElementById("Idade9").value;
	  if (idade9=="")
    	throw "Todos os campos devem ser preenchidos"
    if (idade9<0)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
    if (idade9>150)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
	  if (idade9>=16)
	  	votar = votar + 1
	  if (idade9>=65)
	    aposentar = aposentar + 1
	  if (idade9>=18)
	   	presa = presa + 1
	  if (idade9<18)
	    menor = menor + 1
	      
	  var idade10= document.getElementById("Idade10").value;
	  if (idade10=="")
    	throw "Todos os campos devem ser preenchidos"
    if (idade10<0)
    	throw "Uma ou mais idade(s) adicionada(s) não existe(m)"
    if (idade10>150)
    	throw "Uma ou mais idade(s) adicionada(s) não existe(m)"
    if (idade10>=16)
	   	votar = votar + 1
	  if (idade10>=65)
	   	aposentar = aposentar + 1
	  if (idade10>=18)
	   	presa = presa + 1
  	if (idade10<18)
	    menor = menor + 1
	      
	  var idade11= document.getElementById("Idade11").value;
	  if (idade11=="")
    	throw "Todos os campos devem ser preenchidos"
    if (idade11<0)
    	throw "Uma ou mais idades adicionadas não existe"
    if (idade11>150)
    	throw "Uma ou mais idade(s) adicionada(s) não existe"
    if (idade11>=16)
	   	votar = votar + 1
	  if (idade11>=65)
	   	aposentar = aposentar + 1
	  if (idade11>=18)
	   	presa = presa + 1
  	if (idade11<18)
	   	menor = menor + 1
	      
	  document.getElementById("voto").innerHTML = "Número de pessoas alistáveis:" + votar + ".";
  	document.getElementById("pres").innerHTML = "Número de pessoas que já podem ser presas:" + presa + ".";
  	document.getElementById("men").innerHTML = "Número de pessoas que são menor de idade:" + menor + ".";
  	document.getElementById("msn").innerHTML = "Número de pessoas que podem se aposentar:" + aposentar + ".";
    /* Alistáveis são pessoas que podem votar*/
  }catch (err){
  	var y = document.getElementById("Erro");
    y.innerHTML = "Erro: " + err + ".";
  }
  }    
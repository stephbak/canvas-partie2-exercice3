var c = document.getElementById( "house" );
var ctx = c.getContext("2d");
//corps
ctx.beginPath();  //début du chemin
ctx.moveTo(80,130);
ctx.lineTo(320,130);
ctx.lineTo(320,160);
ctx.lineTo(240,160);
ctx.lineTo(240,320);
ctx.lineTo(210,320);
ctx.lineTo(210,280);
ctx.lineTo(190,280);
ctx.lineTo(190,320);
ctx.lineTo(160,320);
ctx.lineTo(160,160);
ctx.lineTo(80,160);
ctx.lineTo(80,130);
ctx.closePath();//fermeture du chemin
ctx.fillStyle = "#976f0f"; // Définition de la couleur de remplissage
ctx.fill();
//arrondie des bras
ctx.beginPath();
ctx.moveTo(80,160);
ctx.quadraticCurveTo(60,145,80,130);
ctx.lineWidth = 2;
ctx.fillStyle="#976f0f";
ctx.fill();
ctx.beginPath();
ctx.moveTo(320,130);
ctx.quadraticCurveTo(340,145,320,160);
ctx.lineWidth = 2;
ctx.fillStyle="#976f0f";
ctx.fill();
//arrondie des jambes
ctx.beginPath();
ctx.moveTo(160,320);
ctx.quadraticCurveTo(175,340,190,320);
ctx.lineWidth = 2;
ctx.fillStyle="#976f0f";
ctx.fill();
ctx.beginPath();
ctx.moveTo(210,320);
ctx.quadraticCurveTo(225,340,240,320);
ctx.lineWidth = 2;
ctx.fillStyle="#976f0f";
ctx.fill();
//arrondie de l'entrejambe
ctx.beginPath();
ctx.moveTo(190,280);
ctx.quadraticCurveTo(200,260,210,280);
ctx.lineWidth = 2;
ctx.fillStyle="white";
ctx.fill();
//tête
ctx.beginPath()
ctx.arc(200,100,50,0,Math.PI*2,true);
ctx.fillStyle = "#976f0f";
ctx.fill();
//boutons
ctx.beginPath()
ctx.arc(200,180,8,0,Math.PI*2,true);
ctx.fillStyle = "#7a2976";
ctx.fill();
ctx.beginPath()
ctx.arc(200,220,8,0,Math.PI*2,true);
ctx.fillStyle = "#7a2976";
ctx.fill();
//yeux
ctx.beginPath()
ctx.arc(180,90,8,0,Math.PI*2,true);
ctx.fillStyle = "white";
ctx.fill();
ctx.beginPath()
ctx.arc(220,90,8,0,Math.PI*2,true);
ctx.fillStyle = "white";
ctx.fill();
//bouche
ctx.beginPath();
ctx.moveTo(180,110);//point de départ(x, y)
ctx.quadraticCurveTo(200,115,220,110);/*(point x de la courbe, point y de la courbe,
  point d'arrivée x, point d'arrivée y)*/
  ctx.lineWidth = 2;
  ctx.strokeStyle="#de2103";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(180,110);//point de départ(x, y)
  ctx.quadraticCurveTo(200,130,220,110);/*(point x de la courbe, point y de la courbe,
    point d'arrivée x, point d'arrivée y)*/
    ctx.lineWidth = 2;
    ctx.strokeStyle="#de2103";
    ctx.stroke();
    //cils
    ctx.beginPath();
    ctx.moveTo(170,75);
    ctx.quadraticCurveTo(180,65,190,75);
    ctx.lineWidth = 2;
    ctx.strokeStyle="white";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(210,75);
    ctx.quadraticCurveTo(220,65,230,75);
    ctx.lineWidth = 2;
    ctx.strokeStyle="white";
    ctx.stroke();

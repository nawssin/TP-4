function calcul(){
    var taille = +document.getElementbyId ('taille').value
    var masse = +document.getElementbyId ('masse').value

   
        var IMC =  masse/taille**2
        var commentaire = ""
        console.log ('voici la taille: ${taille}')
        console.log ('voici la masse: ${masse}')
        console.log (IMC)
       

        if (IMC < 18){
            commentaire ="maigreur"

            
        } else if (IMC > 25){
              commentaire ="surpoids"
        } else { 
            commentaire ="normal"
            
        }
        var section_résultat = +document.getElementbyId ('résultat')
        section_résultat.textContent = 'Votre IMC est de ${IMC.toFixed(1)}. Vous êtes en ${commentaire}'          
}

document.getElementbyId ('taille').addEventListener('onclick',nouveau_calcul());

var mesure_poids= document.getElementbyId ('masse');
mesure_poids.addEventListener('input',nouveau_calcul);

var mesure_taille = document.getElementbyId ('taille');
mesure_taille.addEventListener('input',nouveau_calcul);

function nouveau_calcul(){
    var taille = +document.getElementbyId('taille').value
    var poids = +document.getElementbyId('poids').value
    if(taille.value !=""& masse.value !=""){
     var IMC =  masse/taille**2
     var commentaire = ""
        console.log ('voici la taille: ${taille}')
        console.log ('voici la masse: ${masse}')
        console.log (IMC)
       

        if (IMC < 18){
            commentaire ="maigreur"  
        } else if (IMC > 25){
            commentaire ="surpoids"
        } else { 
            commentaire ="normal"
        } else  if (IMC > 30){  
            commentaire ="obésité"
        
        
        var section_résultat = document.getElementbyId ('résultat')
        section_résultat.textContent = 'Votre IMC est de ${IMC.toFixed(1)}. Vous êtes en ${commentaire}'          
}
        
    
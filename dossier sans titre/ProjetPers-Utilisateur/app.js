

const btnInscription = document.querySelector('.btn-inscription');
const btnConnection = document.querySelector('.btn-connection');
const deco = document.querySelector('#btn-deco');




const formInscription = document.querySelector('.form-inscription');
const emailInscription = document.querySelector('.email-inscription');
const mdpInscription = document.querySelector('.mdp-inscription');

const formConnection = document.querySelector('.form-connection');

btnInscription.addEventListener('click', () => {

    if(formConnection.classList.contains('apparition')){
        formConnection.classList.remove('apparition');
        var examens = document.getElementById("examens").style.display = "nome";
    }
    formInscription.classList.toggle('apparition');

})

function ouvrir(){
 var a = document.getElementById("mauvais");
        a.style.display = "block";
}
function fermer(){
    var a = document.getElementById("mauvais");
           a.style.display = "none";
   }

   function ouvrirs(){
    var a = document.getElementById("btn-deco");
           a.style.display = "block";
    var x = document.getElementById("jours");
           x.style.display = "block";
   }
   function af(){
    var a = document.getElementById("btn-deco");
           if (a.style.display === "block"){
            a.style.display = "none";
           }
    var x = document.getElementById("jours");
        if (x.style.display === "block"){
        x.style.display = "none";
        }
   }

 
  


////////////////////////////////////////         Gestion du contenu pour les liens    ////////////////////////////////////////////

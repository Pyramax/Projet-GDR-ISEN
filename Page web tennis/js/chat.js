'use strict';

//recuperer dans une variable l'élement html qui correspond au bouton login

// ici on associe à un id une action js
document.getElementById("login").addEventListener('click',compareValue);
document.getElementById("lienleg").addEventListener('click',affichageleg);
document.getElementById("bouton-retour-accueil").addEventListener('click',affichageleg);
document.getElementById("bouton-retour-code").addEventListener('click',compareValue);
document.getElementById("btnverifcode").addEventListener('click',verifcode);

function toggle(id)
{
    //alert('coucou');
    let element = document.getElementById(id);
    element.classList.toggle('d-none'); //ajoute d-none si il n'est pas dans la liste des class
}

function addtoggle(id)
{
    //alert('coucou');
    let element = document.getElementById(id);
    element.classList.add('d-none'); //ajoute d-none si il n'est pas dans la liste des class
}


function compareValue(event)
{
    event.preventDefault();
    // Sélectionner l'élément input et récupérer sa valeur
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var horaire = document.getElementById("horaire").value;
    var checkbox1 = document.getElementById("checkbox1").checked;
    var checkbox2 = document.getElementById("checkbox2").checked;

    // Afficher la valeur
    //alert("Bonjour "+prenom+" "+nom+" inscrit au créneau n°"+horaire);
    /*if (nom == '' || prenom == '' || horaire == "Sélectionnez votre horaire")
    {
        alert("Veuillez remplir les champs ci-dessous");
    }

    if (checkbox1 == false || checkbox2 == false)
    {
        alert("Veuillez prendre connaisance de notre législation et d'accepter l'enregistrement de votre séance");
    }

    if (nom != '' && prenom != '' && horaire != "Sélectionnez votre horaire" && checkbox1 != false && checkbox2 != false)
    {
        // alert("Tout est ok");
        toggle('accueil');
        toggle('code');
        toggle('retour-accueil');
        toggle('retour-code');

    }*/

    if (nom != '')
    {
        // alert("Tout est ok");
        toggle('accueil');
        toggle('code');
        toggle('retour-accueil');
        toggle('retour-code');

    }
}

function affichageleg(event)
{
    event.preventDefault();
    
    toggle('accueil');
    toggle('legislation');
    toggle('retour-accueil');
    toggle('retour-legislation');

}

function verifcode(event)
{
    event.preventDefault();
    // Sélectionner l'élément input et récupérer sa valeur
    var code = document.getElementById("codeperso").value;

    // Afficher la valeur

    addtoggle('codebon');
    addtoggle('codefaux');

    if (code == "1234")
    {
        //alert("Code bon");
        toggle('codebon');
    }

    else
    {
        //alert("Code faux");
        toggle('codefaux');
    }
}
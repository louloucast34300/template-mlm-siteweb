import { formation } from "../data/formations.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = parseInt(urlParams.get('formation'));

const section1 = document.getElementById('s-1-d');
const section2 = document.getElementById('s-2-d');
const prerequis = document.getElementById('prerequis');
const detailModule = document.getElementById('detail-module');



const formationArray = formation;



const getData = () =>{
const array = [];
    for(let i = 0; i < formationArray.length; i++){
       for(let b = 0; b < formationArray[i].formation.length; b++){
        array.push(formationArray[i].formation[b])
       }
    }
    const data = array.filter(el => el.id_forma === id )

    const module = data[0].content.modules;
    const resume = data[0].content.resume

    let mapModule = module.map((item,index)=>{
        return(
            `<p class="module">${item}</p>
            <p class="resume">${resume[index]}</p>`
        )
    }).join('');

    const titleCompetence = data[0].competence.title;
    const resumeCompetence = data[0].competence.resume;

    let mapCompetence = titleCompetence.map((item, index)=>{
        return(
            `<p class="competence">${item}</p>
            <p>${resumeCompetence[index]}</p>`
        )
    }).join('');

    let formationModule = `
        <h5 class="title-detail"><i class="fas fa-book-reader"></i> CONTENU</h5>
        ${mapModule}
        <h5 class="title-detail"><i class="fab fa-whmcs"></i>COMPÉTENCE</h5>
        ${mapCompetence}
    `
    detailModule.innerHTML = formationModule;
    

    let formationTitle = `
    <h5 class="organisme">APPICITY FORMATION</h5>
    <h1>ANGLAIS A1-C2 <br> Compréhension Orale et Écrite</h1>
    <h1><strong>${data[0].title}</strong></h1>`
    section1.innerHTML = formationTitle;



    let formationInfo = `
    <div class="container">
    <div class="row">
        <div class="col-lg-9">
            <div class="left-block">
                  <div class="info-container">
                <div class="flex-info">
                      <i class="fa fa-bookmark"></i>
                      <p>Appicity Formation</p>
                </div>
                <div class="flex-info">
                    <i class="fas fa-align-justify"></i>
                    <p>4 semaines + Certification</p>
              </div>
            </div>
            <img src=${data[0].img} alt="">
            <p class="text-forma">La formation est ouverte à toutes les personnes dont l’anglais n’est pas la langue maternelle et qui souhaitent améliorer leurs compétences d’écoute et de lecture aﬁn de renforcer leur employabilité.</p>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="right-block">
                <a href="#" class="btn-inscription text-center"> S'INSCRIRE</a>
            <div class="flex-info">
                <p>Catégorie:</p>
                <p><strong>${data[0].type}</strong></p>
                <i class="fas fa-chalkboard"></i>
            </div>
            <div class="flex-info">
                <p>Durée:</p>
                <p><strong>${data[0].nb_hours}h</strong></p>
                <i class="fas fa-hourglass-end"></i>
            </div>
            <div class="flex-info">
                <p>Niveau:</p>
                <p><strong>${data[0].level}</strong></p>
                <i class="fas fa-signal"></i>
            </div>
            </div>
        </div>
    </div>
</div>`
section2.innerHTML = formationInfo;

let formationPrerequis = `
<div class="details">
    <h5 class="title-detail"><i class="fas fa-user-friends"></i> PUBLIC VISÉ</h5>
    <p>${data[0].info.public_target}</p>
</div>
<div class="details">
    <h5 class="title-detail"><i class="fas fa-check-square"></i> PRÉREQUIS</h5>
    <p><span>Niveau à l’entrée:</span> ${data[0].info.level_entry}</p>
    <p><span>Expérience professionnelle:</span>${data[0].info.xp_pro}</p>
    <p><span>Langue:</span>${data[0].info.langue}</p>
    <p><span>Matériel:</span> ${data[0].info.stuff}</p>
</div>
<div class="details">
    <h5 class="title-detail"><i class="fas fa-map-pin"></i> LIEU DE FORMATION</h5>
    <p>La formation se déroule entièrement à distance.</p>
</div>
<div class="details">
    <h5 class="title-detail"><i class="fas fa-user-friends"></i> ACCESSIBILITÉ</h5>
    <p>Dans une démarche d’inclusion, nous étudierons les possibilités d’aménagement selon les besoins.</p>
</div>
<div class="details">
    <h5 class="title-detail"><i class="fas fa-clock"></i> PÉRIODE DE RÉALISATION</h5>
    <p><span>Date d'entrée:</span> selon les besoins de l'apprenant.</p>
    <p><span>Durée:</span> durée estimée à ${data[0].nb_hours} heures.</p>
    <p><span>Rythme:</span> la formation peut être suivie sur un rythme libre,
    nous recommandons néanmoins de mobiliser 1h de travail personnel par jour.</p>
</div>
<div class="details">
    <h5 class="title-detail"><i class="fas fa-euro-sign"></i> CONDITIONS TARIFAIRES</h5>
    <p><span>Prix de la formation:</span> ${data[0].price} TTC (le prix peut être ajusté après l'étude des besoins du stagiaire).</p>
    <p><span>Financement:</span> ${data[0].info.financement}</p>
</div>
<div class="details">
    <h5 class="title-detail"><i class="fas fa-unlock-alt"></i> MODALITÉS D'ACCÈS</h5>
    <p><span>Condition d'accès:</span> après la contractualisation, une mail est envoyé avec l’identiﬁant et le mot de passe
        permettant d’accéder à la plateforme.</p>
    <p><span>Délai d'accès:</span> 11 jours ouvrés après la contractualisation, les modules de formation sont débloqués et le stagiaire peut débuter la formation.</p>
</div>
<div class="details">
    <h5 class="title-detail"><i class="far fa-list-alt"></i> CONDITIONS GÉNÉRALES DE VENTE</h5>
    <p>${data[0].info.CGV}</p>
</div>
<div class="details">
    <h5 class="title-detail"><i class="far fa-list-alt"></i> MODALITÉS D'ACCOMPAGNEMENT</h5>
    <p>${data[0].info.accompagnement}</p>
</div>
<div class="details">
    <h5 class="title-detail"><i class="fas fa-pencil-ruler"></i>MODALITÉS PÉDAGOGIQUES</h5>
    <p><span>Approche pédagogique:</span> cette formation s’appuie sur une approche par compétences afin d’articuler l’acquisition de savoirs théoriques et pratiques réellement impliquées dans le monde professionnel autour d’objectifs formalisés.</p>
    <p><span>Activités pédagogiques:</span>vidéos, ressources utiles, visioconférence avec un formateur.</p>
</div>
<div class="details">
    <h5 class="title-detail"><i class="fas fa-pencil"></i>MODALITÉS D'ÉVALUATION</h5>
    <p>${data[0].info.evaluation}</p>
</div>
<div class="details">
    <h5 class="title-detail"><i class="fas fa-medal"></i>MODALITÉS DE CERTIFICATION</h5>
    <p><span>Justificatif de développement des compétences:</span> certificat de réalisation.</p>
    <p><span>Certification préparée:</span>${data[0].info.certificat}</p>
    <p><span>Frais d’inscription: </span>inclus dans le prix de la formation.</p>
    <p><span>Possibilité de validation partielle: </span> ${data[0].info.validation_partielle}</p>
    <p><span>Équivalences, passerelles, suites de parcours: </span> ${data[0].info.equivalence}</p>
    <p><span>Niveau de sortie: </span> ${data[0].info.level_end}</p>
</div>
<div class="details">
    <h5 class="title-detail"><i class="fas fa-plus-square"></i>LES PLUS D'APPICITY</h5>
    <p>La possibilité de se former à son rythme.</p>
    <p>Pas de contrainte géographique.</p>
    <p>Un accompagnement tout au long de la formation par une équipe à l’écoute et soucieuse de la réussite des apprenants.</p>
</div>

`
prerequis.innerHTML = formationPrerequis;

}
getData();
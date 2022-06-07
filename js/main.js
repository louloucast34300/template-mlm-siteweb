import { formation } from "../data/formations.js";
import { user } from "../data/user.js";
import { accueilFormation } from "../data/accueilFormation.js";

const containerFormation = document.getElementById("container-formation");
const containerFooter = document.getElementById("container-footer");
const containerFormationAccueil = document.getElementById("list-formation-accueil");
const containerContact = document.getElementById("container-contact");

const userInfo = user;
const forma = formation;
const formaAccueil = accueilFormation;



/*contact info*/
const infoHTML = () => {
  let info = `
  <div class="info-group">
     <img class="img-profil" src="${userInfo.img}"/>
  </div>
    <div class="info-group">
    <i class="fa fa-phone"></i>
       <p><strong>Téléphone :</strong><br>${userInfo.phone}</p>
    </div>
    <div class="info-group">
        <i class="fa fa-envelope-open"></i>
        <p><strong>Email :</strong><br>${userInfo.email}</p>
    </div>
    <div class="info-group">
        <i class="fa fa-home"></i>
        <p><strong>Adresse postale :</strong><br>${userInfo.postal}</p>
    </div>
    `;
    containerContact.innerHTML = info;
};

/* MAPPING FORMATION pour formation.html*/
const mapData = () => {
  let listeFormation = forma
    .map((item, index) => {
      let formation = item.formation
        .map((item, index) => {
          return ` <div key=${index} class="col-lg-4">
                <div class="forma-card">
                    <h4 >${item.title}</h4>
                    <a href=${`/pages/formationDetail.html?formation=${item.id_forma}`}><img src=${item.img} alt="#"></a>
                    <p class="type-forma">${item.type}</p>
                    <div class="info">
                        <p class="nb-hours"><i class="far fa-clock"></i>${item.nb_hours} heures</p>
                        <p class="price">${item.price}</p>
                    </div>
                    <div class="btn-formation-list text-center">
                        <a class="btn-mlm" href=${`/pages/formationDetail.html?formation=${item.id_forma}`}>Prévisualisez ce cours</a>
                    </div>
                </div>
            </div>`;
        })
        .join("");
      return `<div key=${index} class="row forma-block"  >
                    <div class="col-lg-12" id=${item.type}>
                        <h3 id="formation-langue" class=" title-forma text-center">${item.type}</h3>
                        <div class="row">
                        ${formation}
                        </div>
                    </div>
                </div>`;
    })
    .join("");
  containerFormation.innerHTML = listeFormation;
};

/*footer*/
const FooterHTML = () => {
  let footer = `<div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <h4>Conseiller ${userInfo.username} ${userInfo.lastname}</h4>
                        <img class="img-profil" src="${userInfo.img}"/>
                    </div>
                    <div class="col-lg-4">
                        <h4>MENU</h4>
                        <ul>
                            <li><a href="/pages/formation.html">NOS FORMATIONS</a></li>
                            <li><a href="/pages/marketingReseau.html">MARKETING DE RÉSEAU</a></li>
                            <li><a href="/pages/contact.html">CONTACT</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4">
                        <h4>CONTACT</h4>
                        <ul>
                            <li><i class="fa fa-user"></i>${userInfo.username} ${userInfo.lastname}</li>
                            <li><i class="fa fa-envelope-open"></i>${userInfo.email}</li>
                            <li><i class="fa fa-mobile"></i>${userInfo.phone}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
  containerFooter.innerHTML = footer;
};

/*MAPPING FORMATION PAGE D'ACCUEIL*/
const DataAccueil = () => {
  let listeFormation = formaAccueil
    .map((item, index) => {
      return `<div key=${index} class="col-lg-4">
                <div class="container-formation text-center">
                    <h3>${item.name}</h3>
                    <a href=${`pages/formation.html#${item.name}`}><img src=${
        item.img
      } alt=""></a>
                <div class="btn-formation-list"><a class="btn-mlm" href=${`pages/formation.html#${item.name}`}>Voir les formations</a></div>
                </div>
            </div>`;
    })
    .join("");
  containerFormationAccueil.innerHTML = listeFormation;
};

const path = window.location.pathname;
switch(path){
    case '/':
        DataAccueil();
        FooterHTML();
        break;
    case '/pages/formation.html':
        mapData();
        FooterHTML();
        break;
    case '/pages/contact.html':
        infoHTML();
        FooterHTML();
        break;
    default:
        FooterHTML();
        console.log("pas de fct")
}
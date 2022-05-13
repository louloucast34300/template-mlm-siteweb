const RESUME_ECOMMERCE = [
    "- Acquérir les bases du CMS",
    "- Installer le CMS",
    "- Éditer la structure du site",
    "- Éditer le contenu du site",
    "- Utiliser des extensions",
    "- Travailler le référencement naturel",
    "- Appréhender l’aspect légalité",
    "- Sécuriser un site web",
    "- Optimiser la performance",
    "- Résoudre les bugs courants",
    "- Sauvegarder et migrer un site",
    "- Éditer un thème graphique",
    "- Transformer un site internet en site e-commerce",
    "- Commercialiser les produits e-commerce",
    "- Gérer les ventes des produits e-commerce",
    "- Opérer une veille informationnelle",
    "- Gérer la performance d’un site e-commerce",
    "- Promouvoir un site"
]

const RESUME_VITRINE = [
"- Acquérir les bases du CMS",
"- Installer le CMS",
"- Éditer la structure du site",
"- Éditer le contenu du site",
"- Utiliser des extensions",
"- Travailler le référencement naturel",
"- Appréhender l’aspect légalité",
"- Sécuriser un site web",
"- Optimiser la performance",
"- Résoudre les bugs courants",
"- Sauvegarder et migrer un site",
"- Éditer un thème graphique"
]

const RESUME_WEB =[
    "Acquérir les bases du CMS",
    "Installer le CMS",
    "Éditer la structure du site",
    "Éditer le contenu du site",
    "Utiliser des extensions"
]


export const wordpress = [
    {
        id_forma:19,
        title:'Créer un site e-commerce avec WordPress et WooCommerce.',
        sub_title: '',
        nb_hours : 62,
        price:'3.600€',
        type: 'DIGITAL',
        level:'Débutant',
        img:'../images/formations/wp1.png',
        page_detail:'/formationDetail.html',
        page_CPF:"#",
        info:{
            ref:'site3',
            version:'28/04/2022',
            public_target:'La formation est ouverte à toute personne qui souhaite créer un site internet',//
            level_entry:'pas de prérequis',
            xp_pro:'pas de prérequis',
            langue:'pas de prérequis',
            stuff:`disposer d’un ordinateur, d’une connexion internet et d'une webcam.`,
            financement:'par le CPF dans le cadre du parcours d’achat direct sur Mon Compte Formation',
            rythme:'À définir avec le bénéficiaire',
            accompagnement:`Dans le cadre de notre prestation, vous êtes accompagné par une équipe composée d'un référent pédagogique et administratif, d'un référent technique et d'un référent handicap.`,
            pedagogie : `<br/>Conseillère dédiée pour favoriser la réussite de la formation avec un accompagnement pédagogique :<br/>
            - Par téléphone et par mail<br/>
            - Dans un délai de 24h<br/>
            - Du lundi au vendredi de 9h à 17h<br/>
            - Supports de cours téléchargeables<br/>
            - Plateforme avec accès à vie + mises à jour de la formation<br/>
            - Contenus additionnels d'aide à la valorisation des compétences`,
            evaluation:{
                avant:'évaluation des besoins lors d’un entretien en phase préliminaire',
                pendant:`questionnaires d'évaluation formative des connaissances`,
                fin:`évaluation sommative des connaissances questionnaire de satisfaction à chaud`,
                apres:'questionnaire de satisfaction à froid',
            },
            certificat:`Utilisation d’un logiciel d’édition de site web (ICDL-PCIE)`,
            validation_partielle:'non',
            equivalence:'aucune',
            level_end:'sans niveau spécifique'
        },
        content:{
           nb_module:22,
           modules:[
                "Module 1 : Présentation de WordPress",
                "Module 2 : Installation de WordPress en local",
                "Module 3 : L'environnement WordPress", 
                "Module 4 : Structure du site",
                "Module 5 : Contenu page et article",
                "Module 6 : Editeur Elementor 1",
                "Module 7 : Editeur Elementor 2",
                "Module 8 : Responsive design et formulaire",
                "Module 9 : Le référencement naturel",
                "Module 10 : La légalité",
                "Module 11 : La sécurité",
                "Module 12 : La performance",
                "Module 13 : Les bugs",
                "Module 14 : La sauvegarde et la migration",
                "Module 15 : Les thèmes sur WordPress",
                "Module 16 : L'e-commerce",
                "Module 17 : Les produits",
                "Module 18 : Menu et catégories produits",
                "Module 19 : Les ventes",
                "Module 20 : La veille et la performance",
                "Module 21 : La promotion",
                "Module 22 : Mise en ligne d'un Wordpress"
            ],
            resume : []
        },
        competence:{
            title:[
                "CMS",
                "",
                "",
                "",
                "",
                "CMS AVANCÉ",
                "",
                "",
                "",
                "",
                "",
                "",
                "E-COMMERCE",
                "",
                "",
                "",
                "",
                "",
            ],
            resume: RESUME_ECOMMERCE,
        }
    },
    {
        id_forma:20,
        title:'Créer un site vitrine avec WordPress',
        sub_title: '',
        nb_hours : 38,
        price:'2.400€',
        type: 'DIGITAL',
        level:'Débutant',
        img:'../images/formations/wp2.png',
        page_detail:'/formationDetail.html',
        page_CPF:"#",
        info:{
            ref:'site2',
            version:'28/04/2022',
            public_target:'La formation est ouverte à toute personne qui souhaite créer un site internet',//
            level_entry:'pas de prérequis',
            xp_pro:'pas de prérequis',
            langue:'pas de prérequis',
            stuff:`disposer d’un ordinateur, d’une connexion internet et d'une webcam.`,
            financement:'par le CPF dans le cadre du parcours d’achat direct sur Mon Compte Formation',
            rythme:'À définir avec le bénéficiaire',
            accompagnement:`Dans le cadre de notre prestation, vous êtes accompagné par une équipe composée d'un référent pédagogique et administratif, d'un référent technique et d'un référent handicap.`,
            pedagogie : `<br/>Conseillère dédiée pour favoriser la réussite de la formation avec un accompagnement pédagogique :<br/>
            - Par téléphone et par mail<br/>
            - Dans un délai de 24h<br/>
            - Du lundi au vendredi de 9h à 17h<br/>
            - Supports de cours téléchargeables<br/>
            - Plateforme avec accès à vie + mises à jour de la formation<br/>
            - Contenus additionnels d'aide à la valorisation des compétences`,
            evaluation:{
                avant:'évaluation des besoins lors d’un entretien en phase préliminaire',
                pendant:`questionnaires d'évaluation formative des connaissances`,
                fin:`évaluation sommative des connaissances questionnaire de satisfaction à chaud`,
                apres:'questionnaire de satisfaction à froid',
            },
            certificat:`Utilisation d’un logiciel d’édition de site web (ICDL-PCIE)`,
            validation_partielle:'non',
            equivalence:'aucune',
            level_end:'sans niveau spécifique'
        },
        content:{
            nb_module:16,
            modules:[
                 "Module 1 : Présentation de WordPress",
                 "Module 2 : Installation de WordPress en local",
                 "Module 3 : L'environnement WordPress", 
                 "Module 4 : Structure du site",
                 "Module 5 : Contenu page et article",
                 "Module 6 : Editeur Elementor 1",
                 "Module 7 : Editeur Elementor 2",
                 "Module 8 : Responsive design et formulaire",
                 "Module 9 : Le référencement naturel",
                 "Module 10 : La légalité",
                 "Module 11 : La sécurité",
                 "Module 12 : La performance",
                 "Module 13 : Les bugs",
                 "Module 14 : La sauvegarde et la migration",
                 "Module 15 : Les thèmes sur WordPress",
                 "Module 16 : Mise en ligne d'un Wordpress"
             ],
             resume : []
        },
        competence:{
            title:[
                "CMS",
                "",
                "",
                "",
                "",
                "VITRINE",
                "",
                "",
                "",
                "",
                "",
                ""
            ],
            resume: RESUME_VITRINE,
        }
    },
    {
        id_forma:21,
        title:'Administrer un site web avec WordPress',
        sub_title: '',
        nb_hours : 25,
        price:'1.200€',
        type: 'DIGITAL',
        level:'Débutant',
        img:'../images/formations/wp4.png',
        page_detail:'/formationDetail.html',
        page_CPF:"#",
        info:{
            ref:'site1',
            version:'28/04/2022',
            public_target:'La formation est ouverte à toute personne qui souhaite créer un site internet',//
            level_entry:'pas de prérequis',
            xp_pro:'pas de prérequis',
            langue:'pas de prérequis',
            stuff:`disposer d’un ordinateur, d’une connexion internet et d'une webcam.`,
            financement:'par le CPF dans le cadre du parcours d’achat direct sur Mon Compte Formation',
            rythme:'À définir avec le bénéficiaire',
            accompagnement:`Dans le cadre de notre prestation, vous êtes accompagné par une équipe composée d'un référent pédagogique et administratif, d'un référent technique et d'un référent handicap.`,
            pedagogie : `<br/>Conseillère dédiée pour favoriser la réussite de la formation avec un accompagnement pédagogique :<br/>
            - Par téléphone et par mail<br/>
            - Dans un délai de 24h<br/>
            - Du lundi au vendredi de 9h à 17h<br/>
            - Supports de cours téléchargeables<br/>
            - Plateforme avec accès à vie + mises à jour de la formation<br/>
            - Contenus additionnels d'aide à la valorisation des compétences`,
            evaluation:{
                avant:'évaluation des besoins lors d’un entretien en phase préliminaire',
                pendant:`questionnaires d'évaluation formative des connaissances`,
                fin:`évaluation sommative des connaissances questionnaire de satisfaction à chaud`,
                apres:'questionnaire de satisfaction à froid',
            },
            certificat:`Utilisation d’un logiciel d’édition de site web (ICDL-PCIE)`,
            validation_partielle:'non',
            equivalence:'aucune',
            level_end:'sans niveau spécifique'
        },
        content:{
            nb_module:9,
            modules:[
                 "Module 1 : Présentation de WordPress",
                 "Module 2 : Installation de WordPress en local",
                 "Module 3 : L'environnement WordPress", 
                 "Module 4 : Structure du site",
                 "Module 5 : Contenu page et article",
                 "Module 6 : Editeur Elementor 1",
                 "Module 7 : Editeur Elementor 2",
                 "Module 8 : Responsive design et formulaire",
                 "Module 9 : Mise en ligne d'un Wordpress"
             ],
             resume : []
        },
        competence:{
            title:[
                "CMS",
                "",
                "",
                "",
                "",
            ],
            resume: RESUME_WEB,
        }
    },
]
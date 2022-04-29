const word = [
    "- Acquérir les fondamentaux permettant de créer, de mettre en forme et d’imprimer des courriers simples et courts. <br/>",
    "- Comprendre le principe du traitement de texte vis-à-vis à des outils de saisie et de mise en forme. <br/>",
    "- Utiliser les fonctions avancées Word pour optimiser leur pratique. <br/>",
    "- Créer des envois en nombre, des publipostages. <br/>",
    "- Créer des documents composites style journal. <br/>",
    "- Insérer des images, des illustrations. <br/>",
    "- Gérer le multicolonnage. <br/>",
].join('');

const excel = [
    "- Acquérir les fondamentaux permettant de créer, de mettre en forme et d’imprimer des tableaux simples. <br/>",
    "- Comprendre le principe du tableur vis-à-vis des formules et des fonctions de calcul. <br/>",
    "- Aller plus loin dans l’utilisation des fonctions de calcul. <br/>",
    "- Utiliser plusieurs feuilles du même classeur, lier des cellules de différentes feuilles et de différents classeurs. <br/>",
    "- Faire des tableaux de synthèse. <br/>",
    "- Créer et choisir le graphique le plus adapté. <br/>"
].join('');

const powerpoint = [
    "- Acquérir les fondamentaux permettant de créer, de mettre en forme des diapositives et des présentations simples. <br/>",
    "- Comprendre la structure des objets dans une diapositive. <br/>",
    "- Insérer et modifier des formes et objets externes. <br/>",
    "- Réaliser les diapositives d’une présenter. <br/>",
    "- Gérer des objets provenant de différentes sources d’une même diapositive. <br/>",
].join('');

const outlook = [
    "- Savoir créer un email. <br/>",
    "- Savoir créer un évènement ou réunion dans le calendrier. <br/>",
    "- Savoir classer des emails. <br/>",
    "- Savoir créer une fiche contact. <br/>"
].join('');

const access = [
    "- Savoir créer et gérer une base de données. <br/>",
    "- Savoir créer des tables. <br/>",
    "- Savoir créer des requêtes. <br/>",
    "- Savoir créer des formulaires. <br/>",
    "- Savoir créer des rapports. <br/>"
].join('');

export const bureautique = [
    {
        id_forma:22,
        title:'Formation Word + Excel + PowerPoint + Outlook + Access',
        sub_title: '',
        nb_hours : 54,
        price:'2.400€',
        type: 'BUREAUTIQUE',
        level:'Débutant',
        img:'../images/formations/bureautique1.png',
        page_detail:'/formationDetail.html',
        page_CPF:"#",
        info:{
            ref:'WEPOA_APP',
            version:'28/04/2022',
            public_target:'La formation est ouverte à toute personne qui souhaite améliorer ses compétences en bureautique.',
            level_entry:'pas de prérequis',
            xp_pro:'pas de prérequis',
            langue:'pas de prérequis',
            stuff:'disposer d’un ordinateur et d’une connexion internet.',
            financement:'par le CPF',
            CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
            accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
            evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
            certificat:'Utilisation d’un logiciel de tableur (ICDL – PCIE) – RS5590.',
            validation_partielle:'non',
            equivalence:'aucune',
            level_end:'sans niveau spécifique'
        },
        content:{
           nb_module:20,
           modules:[
               "EXCEL Module 1 : Initiation Excel",
               "EXCEL Module 2 : Dialoguer avec Excel",
               "EXCEL Module 3 : Mettre en forme les données",
               "EXCEL Module 4 : Manipuler la structure",
               "EXCEL Module 5 : Éditer le classeur",
               "WORD Module 1 : Initiation Word",
               "WORD Module 2 : Dialoguer avec Word",
               "WORD Module 3 : Mettre en forme le document",
               "WORD Module 4 : Préparer le document",
               "POWERPOINT Module 1 : Initiation PowerPoint",
               "POWERPOINT Module 2 : Dialoguer avec PowerPoint",
               "POWERPOINT Module 3 : Insérer du contenu 1",
               "POWERPOINT Module 4 : Insérer du contenu 2",
               "POWERPOINT Module 5 : Office 365",
               "OUTLOOK Module 1 : Initiation Outlook",
               "OUTLOOK Module 2 : La messagerie",
               "OUTLOOK Module 3 : Le calendrier",
               "ACCESS Module 1 : Initiation Access",
               "ACCESS Module 2 : Utiliser et interroger une base Access 1",
               "ACCESS Module 3 : Utiliser et interroger une base Access 2",
            ],
            resume : []
        },
        competence:{
            title:[
                "WORD",
                "EXCEL", 
                "POWERPOINT",
                "OUTLOOK",
                "ACCESS"
            ],
            resume: [word, excel, powerpoint, outlook, access],
        }
 
    },
    {
        id_forma:23,
        title:'Formation Word + Excel + PowerPoint + Outlook',
        sub_title: '',
        nb_hours : 49,
        price:'2.200€',
        type: 'BUREAUTIQUE',
        level:'Débutant',
        img:'../images/formations/bureautique2.png',
        page_detail:'/formationDetail.html',
        page_CPF:"#",
        info:{
            ref:'WEPO_APP',
            version:'28/04/2022',
            public_target:'La formation est ouverte à toute personne qui souhaite améliorer ses compétences en bureautique.',
            level_entry:'pas de prérequis',
            xp_pro:'pas de prérequis',
            langue:'pas de prérequis',
            stuff:'disposer d’un ordinateur et d’une connexion internet.',
            financement:'par le CPF',
            CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
            accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
            evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
            certificat:'Utilisation d’un logiciel de tableur (ICDL – PCIE) – RS5590.',
            validation_partielle:'non',
            equivalence:'aucune',
            level_end:'sans niveau spécifique'
        },
        content:{
            nb_module:17,
            modules:[
                "EXCEL Module 1 : Initiation Excel",
                "EXCEL Module 2 : Dialoguer avec Excel",
                "EXCEL Module 3 : Mettre en forme les données",
                "EXCEL Module 4 : Manipuler la structure",
                "EXCEL Module 5 : Éditer le classeur",
                "WORD Module 1 : Initiation Word",
                "WORD Module 2 : Dialoguer avec Word",
                "WORD Module 3 : Mettre en forme le document",
                "WORD Module 4 : Préparer le document",
                "POWERPOINT Module 1 : Initiation PowerPoint",
                "POWERPOINT Module 2 : Dialoguer avec PowerPoint",
                "POWERPOINT Module 3 : Insérer du contenu 1",
                "POWERPOINT Module 4 : Insérer du contenu 2",
                "POWERPOINT Module 5 : Office 365",
                "OUTLOOK Module 1 : Initiation Outlook",
                "OUTLOOK Module 2 : La messagerie",
                "OUTLOOK Module 3 : Le calendrier",
             ],
             resume : []
        },
        competence:{
            title:[
                "WORD",
                "EXCEL", 
                "POWERPOINT",
                "OUTLOOK",
             
            ],
            resume: [word, excel, powerpoint, outlook],
        }
    },
    {
        id_forma:24,
        title:'Formation Word + Excel + PowerPoint + Access',
        sub_title: '',
        nb_hours : 45,
        price:'2.000€',
        type: 'BUREAUTIQUE',
        level:'Débutant',
        img:'../images/formations/bureautique3.png',
        page_detail:'/formationDetail.html',
        page_CPF:"#",
        info:{
            ref:'WEPA_APP',
            version:'28/04/2022',
            public_target:'La formation est ouverte à toute personne qui souhaite améliorer ses compétences en bureautique.',
            level_entry:'pas de prérequis',
            xp_pro:'pas de prérequis',
            langue:'pas de prérequis',
            stuff:'disposer d’un ordinateur et d’une connexion internet.',
            financement:'par le CPF',
            CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
            accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
            evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
            certificat:'Utilisation d’un logiciel de tableur (ICDL – PCIE) – RS5590.',
            validation_partielle:'non',
            equivalence:'aucune',
            level_end:'sans niveau spécifique'
        },
        content:{
            nb_module:17,
            modules:[
                "EXCEL Module 1 : Initiation Excel",
                "EXCEL Module 2 : Dialoguer avec Excel",
                "EXCEL Module 3 : Mettre en forme les données",
                "EXCEL Module 4 : Manipuler la structure",
                "EXCEL Module 5 : Éditer le classeur",
                "WORD Module 1 : Initiation Word",
                "WORD Module 2 : Dialoguer avec Word",
                "WORD Module 3 : Mettre en forme le document",
                "WORD Module 4 : Préparer le document",
                "POWERPOINT Module 1 : Initiation PowerPoint",
                "POWERPOINT Module 2 : Dialoguer avec PowerPoint",
                "POWERPOINT Module 3 : Insérer du contenu 1",
                "POWERPOINT Module 4 : Insérer du contenu 2",
                "POWERPOINT Module 5 : Office 365",
                "ACCESS Module 1 : Initiation Access",
                "ACCESS Module 2 : Utiliser et interroger une base Access 1",
                "ACCESS Module 3 : Utiliser et interroger une base Access 2",
             ],
             resume : []
        },
        competence:{
            title:[
                "WORD",
                "EXCEL", 
                "POWERPOINT",
                "ACCESS",
             
            ],
            resume: [word, excel, powerpoint, access],
        }
    },
    {
        id_forma:25,
        title:'Formation Word + Excel + PowerPoint',
        sub_title: '',
        nb_hours : 40,
        price:'1.800€',
        type: 'BUREAUTIQUE',
        level:'Débutant',
        img:'../images/formations/bureautique4.png',
        page_detail:'/formationDetail.html',
        page_CPF:"#",
        info:{
            ref:'WEP_APP',
            version:'28/04/2022',
            public_target:'La formation est ouverte à toute personne qui souhaite améliorer ses compétences en bureautique.',
            level_entry:'pas de prérequis',
            xp_pro:'pas de prérequis',
            langue:'pas de prérequis',
            stuff:'disposer d’un ordinateur et d’une connexion internet.',
            financement:'par le CPF',
            CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
            accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
            evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
            certificat:'Utilisation d’un logiciel de tableur (ICDL – PCIE) – RS5590.',
            validation_partielle:'non',
            equivalence:'aucune',
            level_end:'sans niveau spécifique'
        },
        content:{
            nb_module:14,
            modules:[
                "EXCEL Module 1 : Initiation Excel",
                "EXCEL Module 2 : Dialoguer avec Excel",
                "EXCEL Module 3 : Mettre en forme les données",
                "EXCEL Module 4 : Manipuler la structure",
                "EXCEL Module 5 : Éditer le classeur",
                "WORD Module 1 : Initiation Word",
                "WORD Module 2 : Dialoguer avec Word",
                "WORD Module 3 : Mettre en forme le document",
                "WORD Module 4 : Préparer le document",
                "POWERPOINT Module 1 : Initiation PowerPoint",
                "POWERPOINT Module 2 : Dialoguer avec PowerPoint",
                "POWERPOINT Module 3 : Insérer du contenu 1",
                "POWERPOINT Module 4 : Insérer du contenu 2",
                "POWERPOINT Module 5 : Office 365",
             ],
             resume : []
        },
        competence:{
            title:[
                "WORD",
                "EXCEL", 
                "POWERPOINT",
            ],
            resume: [word, excel, powerpoint],
        }
    },
    {
        id_forma:26,
        title:'Formation Word + Excel',
        sub_title: '',
        nb_hours : 36,
        price:'1.600€',
        type: 'BUREAUTIQUE',
        level:'Débutant',
        img:'../images/formations/bureautique5.png',
        page_detail:'/formationDetail.html',
        page_CPF:"#",
        info:{
            ref:'WE_APP',
            version:'28/04/2022',
            public_target:'La formation est ouverte à toute personne qui souhaite améliorer ses compétences en bureautique.',
            level_entry:'pas de prérequis',
            xp_pro:'pas de prérequis',
            langue:'pas de prérequis',
            stuff:'disposer d’un ordinateur et d’une connexion internet.',
            financement:'par le CPF',
            CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
            accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
            evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
            certificat:'Utilisation d’un logiciel de tableur (ICDL – PCIE) – RS5590.',
            validation_partielle:'non',
            equivalence:'aucune',
            level_end:'sans niveau spécifique'
        },
        content:{
            nb_module:9,
            modules:[
                "EXCEL Module 1 : Initiation Excel",
                "EXCEL Module 2 : Dialoguer avec Excel",
                "EXCEL Module 3 : Mettre en forme les données",
                "EXCEL Module 4 : Manipuler la structure",
                "EXCEL Module 5 : Éditer le classeur",
                "WORD Module 1 : Initiation Word",
                "WORD Module 2 : Dialoguer avec Word",
                "WORD Module 3 : Mettre en forme le document",
                "WORD Module 4 : Préparer le document",
             ],
             resume : []
        },
        competence:{
            title:[
                "WORD",
                "EXCEL", 
            ],
            resume: [word, excel],
        }
    },
    {
        id_forma:27,
        title:'Formation Excel + PowerPoint',
        sub_title: '',
        nb_hours : 32,
        price:'1.400€',
        type: 'BUREAUTIQUE',
        level:'Débutant',
        img:'../images/formations/bureautique6.png',
        page_detail:'/formationDetail.html',
        page_CPF:"#",
        info:{
            ref:'WE_APP',
            version:'28/04/2022',
            public_target:'La formation est ouverte à toute personne qui souhaite améliorer ses compétences en bureautique.',
            level_entry:'pas de prérequis',
            xp_pro:'pas de prérequis',
            langue:'pas de prérequis',
            stuff:'disposer d’un ordinateur et d’une connexion internet.',
            financement:'par le CPF',
            CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
            accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
            evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
            certificat:'Utilisation d’un logiciel de tableur (ICDL – PCIE) – RS5590.',
            validation_partielle:'non',
            equivalence:'aucune',
            level_end:'sans niveau spécifique'
        },
        content:{
            nb_module:10,
            modules:[
                "EXCEL Module 1 : Initiation Excel",
                "EXCEL Module 2 : Dialoguer avec Excel",
                "EXCEL Module 3 : Mettre en forme les données",
                "EXCEL Module 4 : Manipuler la structure",
                "EXCEL Module 5 : Éditer le classeur",
                "POWERPOINT Module 1 : Initiation PowerPoint",
                "POWERPOINT Module 2 : Dialoguer avec PowerPoint",
                "POWERPOINT Module 3 : Insérer du contenu 1",
                "POWERPOINT Module 4 : Insérer du contenu 2",
                "POWERPOINT Module 5 : Office 365",
             ],
             resume : []
        },
        competence:{
            title:[
                
                "EXCEL", 
                "POWERPOINT"
            ],
            resume: [excel, powerpoint],
        }
    },
    {
        id_forma:28,
        title:'Formation Word + PowerPoint',
        sub_title: '',
        nb_hours : 27,
        price:'1.200€',
        type: 'BUREAUTIQUE',
        level:'Débutant',
        img:'../images/formations/bureautique7.png',
        page_detail:'/formationDetail.html',
        page_CPF:"#",
        info:{
            ref:'WP_APP',
            version:'28/04/2022',
            public_target:'La formation est ouverte à toute personne qui souhaite améliorer ses compétences en bureautique.',
            level_entry:'pas de prérequis',
            xp_pro:'pas de prérequis',
            langue:'pas de prérequis',
            stuff:'disposer d’un ordinateur et d’une connexion internet.',
            financement:'par le CPF',
            CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
            accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
            evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
            certificat:'Utilisation d’un logiciel de tableur (ICDL – PCIE) – RS5590.',
            validation_partielle:'non',
            equivalence:'aucune',
            level_end:'sans niveau spécifique'
        },
        content:{
            nb_module:9,
            modules:[
                "WORD Module 1 : Initiation Word",
                "WORD Module 2 : Dialoguer avec Word",
                "WORD Module 3 : Mettre en forme le document",
                "WORD Module 4 : Préparer le document",
                "POWERPOINT Module 1 : Initiation PowerPoint",
                "POWERPOINT Module 2 : Dialoguer avec PowerPoint",
                "POWERPOINT Module 3 : Insérer du contenu 1",
                "POWERPOINT Module 4 : Insérer du contenu 2",
                "POWERPOINT Module 5 : Office 365",
             ],
             resume : []
        },
        competence:{
            title:[
                
                "WORD", 
                "POWERPOINT"
            ],
            resume: [word, powerpoint],
        }
    },
    {
        id_forma:29,
        title:'Formation Excel',
        sub_title: '',
        nb_hours : 22,
        price:'1.000€',
        type: 'BUREAUTIQUE',
        level:'Débutant',
        img:'../images/formations/bureautique8.png',
        page_detail:'/formationDetail.html',
        page_CPF:"#",
        info:{
            ref:'WP_APP',
            version:'28/04/2022',
            public_target:'La formation est ouverte à toute personne qui souhaite améliorer ses compétences en bureautique.',
            level_entry:'pas de prérequis',
            xp_pro:'pas de prérequis',
            langue:'pas de prérequis',
            stuff:'disposer d’un ordinateur et d’une connexion internet.',
            financement:'par le CPF',
            CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
            accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
            evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
            certificat:'Utilisation d’un logiciel de tableur (ICDL – PCIE) – RS5590.',
            validation_partielle:'non',
            equivalence:'aucune',
            level_end:'sans niveau spécifique'
        },
        content:{
            nb_module:5,
            modules:[
                "EXCEL Module 1 : Initiation Excel",
                "EXCEL Module 2 : Dialoguer avec Excel",
                "EXCEL Module 3 : Mettre en forme les données",
                "EXCEL Module 4 : Manipuler la structure",
                "EXCEL Module 5 : Éditer le classeur",
             ],
             resume : []
        },
        competence:{
            title:[
                "EXCEL", 
            ],
            resume: [excel],
        }
    },
    {
        id_forma:30,
        title:'Formation Word',
        sub_title: '',
        nb_hours : 17,
        price:'800€',
        type: 'BUREAUTIQUE',
        level:'Débutant',
        img:'../images/formations/bureautique9.png',
        page_detail:'/formationDetail.html',
        page_CPF:"#",
        info:{
            ref:'W_APP',
            version:'28/04/2022',
            public_target:'La formation est ouverte à toute personne qui souhaite améliorer ses compétences en bureautique.',
            level_entry:'pas de prérequis',
            xp_pro:'pas de prérequis',
            langue:'pas de prérequis',
            stuff:'disposer d’un ordinateur et d’une connexion internet.',
            financement:'par le CPF',
            CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
            accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
            evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
            certificat:'Utilisation d’un logiciel de tableur (ICDL – PCIE) – RS5590.',
            validation_partielle:'non',
            equivalence:'aucune',
            level_end:'sans niveau spécifique'
        },
        content:{
            nb_module:4,
            modules:[
                "WORD Module 1 : Initiation Word",
                "WORD Module 2 : Dialoguer avec Word",
                "WORD Module 3 : Mettre en forme le document",
                "WORD Module 4 : Préparer le document",
             ],
             resume : []
        },
        competence:{
            title:[
                "WORD", 
            ],
            resume: [word],
        }
    },
    {
        id_forma:31,
        title:'Formation PowerPoint',
        sub_title: '',
        nb_hours : 14,
        price:'600€',
        type: 'BUREAUTIQUE',
        level:'Débutant',
        img:'../images/formations/bureautique10.png',
        page_detail:'/formationDetail.html',
        page_CPF:"#",
        info:{
            ref:'P_APP',
            version:'28/04/2022',
            public_target:'La formation est ouverte à toute personne qui souhaite améliorer ses compétences en bureautique.',
            level_entry:'pas de prérequis',
            xp_pro:'pas de prérequis',
            langue:'pas de prérequis',
            stuff:'disposer d’un ordinateur et d’une connexion internet.',
            financement:'par le CPF',
            CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
            accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
            evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
            certificat:'Utilisation d’un logiciel de tableur (ICDL – PCIE) – RS5590.',
            validation_partielle:'non',
            equivalence:'aucune',
            level_end:'sans niveau spécifique'
        },
        content:{
            nb_module:5,
            modules:[
                "POWERPOINT Module 1 : Initiation PowerPoint",
                "POWERPOINT Module 2 : Dialoguer avec PowerPoint",
                "POWERPOINT Module 3 : Insérer du contenu 1",
                "POWERPOINT Module 4 : Insérer du contenu 2",
                "POWERPOINT Module 5 : Office 365",
             ],
             resume : []
        },
        competence:{
            title:[
                "POWERPOINT", 
            ],
            resume: [powerpoint],
        }
    },
]
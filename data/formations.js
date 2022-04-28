const RESUME_ANGLAIS = [
    "Analyser une communication orale courte ou longue, en identiﬁant les informations clés (sens, contexte, situation…) et spéciﬁques (opinions, attitudes, intentions, accords, désaccords…) et en prenant en compte le vocabulaire, le rythme de parole, la diction et le langage, aﬁn de les exploiter dans un contexte de vie quotidienne et professionnelle.",
"– Le candidat peut reconnaître des mots familiers et des expressions quotidiennes ainsi que des énoncés très simples visant à satisfaire des besoins concrets lorsque les interlocuteurs parlent lentement et distinctement.",
"– Le candidat peut comprendre des expressions et du vocabulaire fréquemment utilisés dans des domaines le concernant – par exemple toutes les informations personnelles et familiales simples, les achats, l’environnement proche et le travail. <br/> – Le candidat peut saisir le sujet principal des messages et annonces clairs et simples.",
"– Le candidat peut comprendre les points essentiels quand un langage clair et standard est utilisé et s’il s’agit de choses familières dans par exemple le travail, l’école, les loisirs, etc.<br/> – Le candidat peut comprendre les points essentiels de la plupart des émissions de radio ou de télévision sur l’actualité ou des sujets d’intérêt personnel ou professionnel lorsque la diction est relativement lente et claire.",
"– Le candidat peut comprendre un discours étendu et des conférences et suivre même des lignes d’argumentation complexes à condition que le sujet soit raisonnablement familier. <br/>– Le candidat peut comprendre la plupart des programmes d’actualité et des journaux télévisés ainsi que la majorité des ﬁlms en langage classique.",
"– Le candidat peut comprendre un discours étendu même lorsqu’il n’est pas clairement structuré et que les articulations sont implicites et non signalées explicitement. <br/> – Le candidat peut comprendre les programmes de télévision et les ﬁlms sans trop d’efforts.",
"– Le candidat peut comprendre avec aisance n’importe quel type de langage parlé que ce soit en direct ou diffusé ou même lorsque l’on parle vite, à condition qu’il y ait une familiarité avec l’accent."
]

const RESUME_DIETETIQUE = [
    "Analyser et évaluer les besoins nutritionnels des populations bien portantes aux différents stades de la vie",
    "Acquérir des connaissances spécifiques et analyser la composition des aliments et leurs effets sur la santé",
    "Sélectionner les aliments pour promouvoir la santé des individus ou des groupes",
    "Organiser et évaluer l’alimentation pour des individus ou groupes de population en utilisant les outils et ressources dans le domaine de la nutrition et l’alimentation humaine"
]

const RESUME_PHOTOSHOP = [
    "Maîtriser les grands concepts liés aux images et à leurs propriétés pour mieux appréhender leur traitement",
    "Maîtriser la numérisation et l’enregistrement d’une image en vue d’en assurer sa modification",
    "Utiliser efficacement les fonctions de base du logiciel pour réaliser la création et le traitement d’une image",
    "Créer et utiliser des calques, du texte et des effets pour réaliser des modifications sur une image",
    "Maîtriser les outils de dessin et de peinture du logiciel",
    "Préparer les images pour l’impression ou la publication"
]

const RESUME_MANAGEMENT = [
    "Accompagner dans le parcours professionnel",
    "Contribuer à l’amélioration de la qualité de vie au travail",
    "Collaborer aux relations sociales",
    "Participer à la performance sociale"
]

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

export const formation = [
    {
        id:1,
        type:'LANGUES',
        formation:[
            {   
                id_forma:1,
                title:'Améliorer son anglais (niveau débutant) 2h de visio',
                sub_title: 'ANGLAIS A1-C2<br/>Compréhension Orale et Écrite',
                nb_hours : 20,
                price:'1.600€',
                type: 'LANGUES',
                level:'Débutant',
                img:'../images/formations/Anglais1.png',
                page_detail:'/formationDetail.html',
                page_CPF:'#',
                info:{
                    ref:'ANGLAISDEB2_APP',
                    version:'03/01/2022',
                    public_target:'La formation est ouverte à toutes les personnes dont l’anglais n’est pas la langue maternelle et qui souhaitent améliorer leurs compétences d’écoute et de lecture aﬁn de renforcer leur employabilité.',//
                    level_entry:'pas de prérequis',
                    xp_pro:'pas de prérequis',
                    langue:'pas de prérequis',
                    stuff:'disposer d’un ordinateur, d’une webcam, d’un micro et d’une connexion internet.',
                    financement:'par le CPF',
                    CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
                    accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
                    evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM et lors des temps d’échanges en anglais avec le formateur <br> La certiﬁcation des compétences se déroule lors d’un test adaptatif d’une heure réalisé à distance avec une surveillance en ligne.',
                    certificat:'Certiﬁcation en anglais LanguageCert Test of English LTE (écouter, lire) – niveaux A1-C2 (RS5453).',
                    validation_partielle:'non',
                    equivalence:'aucune',
                    level_end:'sans niveau spécifique'
                },
                content:{
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
                },
                competence:{
                    title:[
                        "Compétence 1 ",
                        "A1 (Score 10-19)",
                        "A2 (Score 20-39)",
                        "B1 (Score 40-59)",
                        "B2 (Score 60-74)",
                        "C1 (Score 75-89)",
                        "C2 (Score 90-100)"
                    ],
                    resume: RESUME_ANGLAIS,
                }
            },
            {
                id_forma:2,
                title:'Améliorer son anglais (niveau débutant) 4h de visio',
                sub_title: 'ANGLAIS A1-C2<br/>Compréhension Orale et Écrite',
                nb_hours : 25,
                price:'2.800€',
                type: 'LANGUES',
                level:'Débutant',
                img:'../images/formations/Anglais2.png',
                page_detail:'/formationDetail.html',
                page_CPF:"#",
                info:{
                    ref:'ANGLAISDEB4_APP',
                    version:'03/01/2022',
                    public_target:'La formation est ouverte à toutes les personnes dont l’anglais n’est pas la langue maternelle et qui souhaitent améliorer leurs compétences d’écoute et de lecture aﬁn de renforcer leur employabilité.',//
                    level_entry:'pas de prérequis',
                    xp_pro:'pas de prérequis',
                    langue:'pas de prérequis',
                    stuff:'disposer d’un ordinateur, d’une webcam, d’un micro et d’une connexion internet.',
                    financement:'par le CPF',
                    CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
                    accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
                    evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM et lors des temps d’échanges en anglais avec le formateur <br> La certiﬁcation des compétences se déroule lors d’un test adaptatif d’une heure réalisé à distance avec une surveillance en ligne.',
                    certificat:'Certiﬁcation en anglais LanguageCert Test of English LTE (écouter, lire) – niveaux A1-C2 (RS5453).',
                    validation_partielle:'non',
                    equivalence:'aucune',
                    level_end:'sans niveau spécifique'
                },
                content:{
                    modules:[
                         "module 1 : un test",
                         "module 2 : un autre test",
                         "module 3: jjjj", 
                         "module : 4"],
                     resume : [
                         "Apprendre les bases de l'anglais",
                         "devenir un véritable pro en Anglais",
                         "" , 
                         "un test"]
                 },
                competence:{
                    title:[
                        "Compétence 1 ","A1 (Score 10-19)",
                        "A2 (Score 20-39)","B1 (Score 40-59)",
                        "B2 (Score 60-74)",
                        "C1 (Score 75-89)",
                        "C2 (Score 90-100)"
                    ],
                    resume:RESUME_ANGLAIS,
                }
            },
            {
                id_forma:3,
                title:'Améliorer son anglais (niveau débutant) 6h de visio',
                sub_title: 'ANGLAIS A1-C2<br/>Compréhension Orale et Écrite',
                nb_hours : 30,
                price:'3.800€',
                type: 'LANGUES',
                level:'Débutant',
                img:'../images/formations/Anglais3.png',
                page_detail:'/fomationDetail.html',
                page_CPF:"#",
                info:{
                    ref:'ANGLAISDEB6_APP',
                    version:'03/01/2022',
                    public_target:'La formation est ouverte à toutes les personnes dont l’anglais n’est pas la langue maternelle et qui souhaitent améliorer leurs compétences d’écoute et de lecture aﬁn de renforcer leur employabilité.',//
                    level_entry:'pas de prérequis',
                    xp_pro:'pas de prérequis',
                    langue:'pas de prérequis',
                    stuff:'disposer d’un ordinateur, d’une webcam, d’un micro et d’une connexion internet.',
                    financement:'par le CPF',
                    CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
                    accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
                    evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM et lors des temps d’échanges en anglais avec le formateur <br> La certiﬁcation des compétences se déroule lors d’un test adaptatif d’une heure réalisé à distance avec une surveillance en ligne.',
                    certificat:'Certiﬁcation en anglais LanguageCert Test of English LTE (écouter, lire) – niveaux A1-C2 (RS5453).',
                    validation_partielle:'non',
                    equivalence:'aucune',
                    level_end:'sans niveau spécifique'
                },
                content:{
                    modules:[
                         "module 1 : un test",
                         "module 2 : un autre test",
                         "module 3: jjjj", 
                         "module : 4"],
                     resume : [
                         "Apprendre les bases de l'anglais",
                         "devenir un véritable pro en Anglais",
                         "" , 
                         "un test"]
                 },
                competence:{
                    title:[
                        "Compétence 1 ","A1 (Score 10-19)",
                        "A2 (Score 20-39)","B1 (Score 40-59)",
                        "B2 (Score 60-74)",
                        "C1 (Score 75-89)",
                        "C2 (Score 90-100)"
                    ],
                    resume: RESUME_ANGLAIS,
                }
            },
        ]
    },
    {
        id:2,
        type:'DIETETIQUE',
        formation:[
            {
                id_forma:4,
                title:'Alimentation et nutrition: Découvrez les bases scientifiques de la diététique',
                sub_title: '',
                nb_hours : 25,
                price:'1.600€',
                type: 'SANTÉ & BEAUTÉ​',
                level:'Débutant',
                img:'../images/formations/dietetique1.png',
                page_detail:'/formationDetail.html',
                page_CPF:"#",
                info:{
                    ref:'DIETETIQUE1_APP',
                    version:'03/01/2022',
                    public_target:'La formation est ouverte à toute personne qui souhaite se former sur les bases scientifiques de la diététique.',
                    level_entry:'pas de prérequis',
                    xp_pro:'pas de prérequis',
                    langue:'pas de prérequis',
                    stuff:'disposer d’un ordinateur et d’une connexion internet.',
                    financement:'par le CPF',
                    CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
                    accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
                    evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
                    certificat:'Bloc 5 du BTS diététique – épreuve E1B.',
                    validation_partielle:'non',
                    equivalence:'aucune',
                    level_end:'sans niveau spécifique'
                },
                content:{
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
                },
                competence:{
                    title:[
                        "Compétence n°1 : ",
                        "Compétence n°2 :",
                        "Compétence n°3 :",
                        "Compétence n°4 :",
                    ],
                    resume: RESUME_DIETETIQUE,
                }
               
            },
            {
                id_forma:5,
                title:'Alimentation et nutrition : Bases scientifiques de la diététique et application des concepts',
                sub_title: '',
                nb_hours : 30,
                price:'2.400€',
                type: 'SANTÉ & BEAUTÉ​',
                level:'Débutant',
                img:'../images/formations/dietetique2.png',
                page_detail:'/formationDetail.html',
                page_CPF:"#",
                info:{
                    ref:'DIETETIQUE2_APP',
                    version:'03/01/2022',
                    public_target:'La formation est ouverte à toute personne qui souhaite se former sur les bases scientifiques de la diététique.',
                    level_entry:'pas de prérequis',
                    xp_pro:'pas de prérequis',
                    langue:'pas de prérequis',
                    stuff:'disposer d’un ordinateur et d’une connexion internet.',
                    financement:'par le CPF',
                    CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
                    accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
                    evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
                    certificat:'Bloc 5 du BTS diététique – épreuve E1B.',
                    validation_partielle:'non',
                    equivalence:'aucune',
                    level_end:'sans niveau spécifique'
                },
                content:{
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
                },
                competence:{
                    title:[
                        "Compétence n°1 : ",
                        "Compétence n°2 :",
                        "Compétence n°3 :",
                        "Compétence n°4 :",
                    ],
                    resume: RESUME_DIETETIQUE,
                }
            },
            {
                id_forma:6,
                title:'Alimentation et nutrition : Bases scientifiques et simulation de bilan diététique',
                sub_title: '',
                nb_hours : 35,
                price:'3.000€',
                type: 'SANTÉ & BEAUTÉ​',
                level:'Débutant',
                img:'../images/formations/dietetique3.png',
                page_detail:'/formationDetail.html',
                page_CPF:"#",
                info:{
                    ref:'DIETETIQUE3_APP',
                    version:'03/01/2022',
                    public_target:'La formation est ouverte à toute personne qui souhaite se former sur les bases scientifiques de la diététique.',
                    level_entry:'pas de prérequis',
                    xp_pro:'pas de prérequis',
                    langue:'pas de prérequis',
                    stuff:'disposer d’un ordinateur et d’une connexion internet.',
                    financement:'par le CPF',
                    CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
                    accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
                    evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
                    certificat:'Bloc 5 du BTS diététique – épreuve E1B.',
                    validation_partielle:'non',
                    equivalence:'aucune',
                    level_end:'sans niveau spécifique'
                },
                content:{
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
                },
                competence:{
                    title:[
                        "Compétence n°1 : ",
                        "Compétence n°2 :",
                        "Compétence n°3 :",
                        "Compétence n°4 :",
                    ],
                    resume: RESUME_DIETETIQUE,
                }
            },
        ]
    },
    {
        id:3,
        type:'PHOTOSHOP',
        formation:[
            {
                id_forma:7,
                title:'Se former au design graphique avec Photoshop - 1h de visio',
                sub_title: '',
                nb_hours : 18,
                price:'1.600€',
                type: 'PHOTOSHOP',
                level:'Débutant',
                img:'../images/formations/ps1.png',
                page_detail:'/formationDetail.html',
                page_CPF:"#",
                info:{
                    ref:'PHOTOSHOP1_APP',
                    version:'03/01/2022',
                    public_target:'La formation est ouverte à toute personne qui souhaite créer et retoucher des images avec Photoshop.',
                    level_entry:'pas de prérequis',
                    xp_pro:'pas de prérequis',
                    langue:'pas de prérequis',
                    stuff:'disposer d’un ordinateur, d’une connexion internet et de Photoshop.',
                    financement:'par le CPF',
                    CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
                    accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
                    evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
                    certificat:'Utilisation d’un logiciel d’édition d’images (RS5588).',
                    validation_partielle:'non',
                    equivalence:'aucune',
                    level_end:'sans niveau spécifique'
                },
                content:{
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
                },
                competence:{
                    title:[
                        "Compétence n°1 : ",
                        "Compétence n°2 :",
                        "Compétence n°3 :",
                        "Compétence n°4 :",
                        "Compétence n°5 :",
                        "Compétence n°6 :",
                    ],
                    resume: RESUME_PHOTOSHOP,
                }
            },
            {
                id_forma:8,
                title:`S'améliorer dans le design graphique avec Photoshop - 2h de visio`,
                sub_title: '',
                nb_hours : 22,
                price:'1.800€',
                type: 'PHOTOSHOP',
                level:'Débutant',
                img:'../images/formations/ps2.png',
                page_detail:'/formationDetail.html',
                page_CPF:"#",
                info:{
                    ref:'PHOTOSHOP2_APP',
                    version:'03/01/2022',
                    public_target:'La formation est ouverte à toute personne qui souhaite créer et retoucher des images avec Photoshop.',
                    level_entry:'pas de prérequis',
                    xp_pro:'pas de prérequis',
                    langue:'pas de prérequis',
                    stuff:'disposer d’un ordinateur, d’une connexion internet et de Photoshop.',
                    financement:'par le CPF',
                    CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
                    accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
                    evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
                    certificat:'Utilisation d’un logiciel d’édition d’images (RS5588).',
                    validation_partielle:'non',
                    equivalence:'aucune',
                    level_end:'sans niveau spécifique'
                },
                content:{
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
                },
                competence:{
                    title:[
                        "Compétence n°1 : ",
                        "Compétence n°2 :",
                        "Compétence n°3 :",
                        "Compétence n°4 :",
                        "Compétence n°5 :",
                        "Compétence n°6 :",
                    ],
                    resume: RESUME_PHOTOSHOP,
                }
            },
            {
                id_forma:9,
                title:'Se perfectionner dans le design graphique avec Photoshop - 3h de visio',
                sub_title: 'ANGLAIS A1-C2<br/>Compréhension Orale et Écrite',
                nb_hours : 30,
                price:'2.200€',
                type: 'PHOTOSHOP',
                level:'Débutant',
                img:'../images/formations/ps3.png',
                page_detail:'/formationDetail.html',
                page_CPF:"#",
                info:{
                    ref:'PHOTOSHOP3_APP',
                    version:'03/01/2022',
                    public_target:'La formation est ouverte à toute personne qui souhaite créer et retoucher des images avec Photoshop.',
                    level_entry:'pas de prérequis',
                    xp_pro:'pas de prérequis',
                    langue:'pas de prérequis',
                    stuff:'disposer d’un ordinateur, d’une connexion internet et de Photoshop.',
                    financement:'par le CPF',
                    CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
                    accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
                    evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
                    certificat:'Utilisation d’un logiciel d’édition d’images (RS5588).',
                    validation_partielle:'non',
                    equivalence:'aucune',
                    level_end:'sans niveau spécifique'
                },
                content:{
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
                },
                competence:{
                    title:[
                        "Compétence n°1 : ",
                        "Compétence n°2 :",
                        "Compétence n°3 :",
                        "Compétence n°4 :",
                        "Compétence n°5 :",
                        "Compétence n°6 :",
                    ],
                    resume: RESUME_PHOTOSHOP,
                }
            },
        ]
    },
    {
        id:4,
        type:'MANAGEMENT',
        formation:[
            {
                id_forma:10,
                title:'Management et leadership',
                sub_title: '',
                nb_hours : 10,
                price:'1.600€',
                type: 'MANAGEMENT',
                level:'Débutant',
                img:'../images/formations/mana1.png',
                page_detail:'/formationDetail.html',
                page_CPF:"#",
                info:{
                    ref:'MANAGEMENT1_APP',
                    version:'03/01/2022',
                    public_target:'La formation est ouverte à toute personne qui souhaite se former au management et développer le leadership afin de collaborer à la gestion des ressources humaines.',
                    level_entry:'pas de prérequis',
                    xp_pro:'pas de prérequis',
                    langue:'pas de prérequis',
                    stuff:'disposer d’un ordinateur et d’une connexion internet.',
                    financement:'par le CPF',
                    CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
                    accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
                    evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
                    certificat:'Bloc 3 du BTS SAM – épreuve E6.',
                    validation_partielle:'non',
                    equivalence:'aucune',
                    level_end:'sans niveau spécifique'
                },
                content:{
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
                },
                competence:{
                    title:[
                        "Compétence n°1 : ",
                        "Compétence n°2 :",
                        "Compétence n°3 :",
                        "Compétence n°4 :",
                    ],
                    resume: RESUME_MANAGEMENT,
                }
            },
            {
                id_forma:11,
                title:'Management et leadership: gestion du temps et du stress',
                sub_title: '',
                nb_hours : 15,
                price:'2.400€',
                type: 'MANAGEMENT',
                level:'Débutant',
                img:'../images/formations/mana2.png',
                page_detail:'/formationDetail.html',
                page_CPF:"#",
                info:{
                    ref:'MANAGEMENT2_APP',
                    version:'03/01/2022',
                    public_target:'La formation est ouverte à toute personne qui souhaite se former au management et développer le leadership afin de collaborer à la gestion des ressources humaines.',
                    level_entry:'pas de prérequis',
                    xp_pro:'pas de prérequis',
                    langue:'pas de prérequis',
                    stuff:'disposer d’un ordinateur et d’une connexion internet.',
                    financement:'par le CPF',
                    CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
                    accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
                    evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
                    certificat:'Bloc 3 du BTS SAM – épreuve E6.',
                    validation_partielle:'non',
                    equivalence:'aucune',
                    level_end:'sans niveau spécifique'
                },
                content:{
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
                },
                competence:{
                    title:[
                        "Compétence n°1 : ",
                        "Compétence n°2 :",
                        "Compétence n°3 :",
                        "Compétence n°4 :",
                    ],
                    resume: RESUME_MANAGEMENT,
                }
            },
            {
                id_forma:12,
                title:'Management et leadership: gestion des conflits et médiation',
                sub_title: '',
                nb_hours : 20,
                price:'3.000€',
                type: 'MANAGEMENT',
                level:'Débutant',
                img:'../images/formations/mana3.png',
                page_detail:'/formationDetail.html',
                page_CPF:"#",
                info:{
                    ref:'MANAGEMENT3_APP',
                    version:'03/01/2022',
                    public_target:'La formation est ouverte à toute personne qui souhaite se former au management et développer le leadership afin de collaborer à la gestion des ressources humaines.',
                    level_entry:'pas de prérequis',
                    xp_pro:'pas de prérequis',
                    langue:'pas de prérequis',
                    stuff:'disposer d’un ordinateur et d’une connexion internet.',
                    financement:'par le CPF',
                    CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
                    accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
                    evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
                    certificat:'Bloc 3 du BTS SAM – épreuve E6.',
                    validation_partielle:'non',
                    equivalence:'aucune',
                    level_end:'sans niveau spécifique'
                },
                content:{
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
                },
                competence:{
                    title:[
                        "Compétence n°1 : ",
                        "Compétence n°2 :",
                        "Compétence n°3 :",
                        "Compétence n°4 :",
                    ],
                    resume: RESUME_MANAGEMENT,
                }
            },
        ]
    },
    {
        id:5,
        type:'DIGITAL',
        formation:[
            {
                id_forma:13,
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
                    ref:'ECOMMERCE_APP',
                    version:'03/01/2022',
                    public_target:'La formation est ouverte à toute personne qui souhaite améliorer ses compétences en bureautique.',
                    level_entry:'pas de prérequis',
                    xp_pro:'pas de prérequis',
                    langue:'pas de prérequis',
                    stuff:'disposer d’un ordinateur et d’une connexion internet.',
                    financement:'par le CPF',
                    CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
                    accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
                    evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
                    certificat:'Utilisation d’un logiciel d’édition de site web (RS5596).',
                    validation_partielle:'non',
                    equivalence:'aucune',
                    level_end:'sans niveau spécifique'
                },
                content:{
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
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
                id_forma:14,
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
                    ref:'VITRINE_APP',
                    version:'03/01/2022',
                    public_target:'La formation est ouverte aux personnes qui souhaitent créer un site vitrine.',
                    level_entry:'pas de prérequis',
                    xp_pro:'pas de prérequis',
                    langue:'pas de prérequis',
                    stuff:'disposer d’un ordinateur et d’une connexion internet.',
                    financement:'par le CPF',
                    CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
                    accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
                    evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
                    certificat:'Utilisation d’un logiciel d’édition de site web (RS5596).',
                    validation_partielle:'non',
                    equivalence:'aucune',
                    level_end:'sans niveau spécifique'
                },
                content:{
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
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
                id_forma:15,
                title:'Développer et déployer une stratégie webmarketing',
                sub_title: '',
                nb_hours : 20,
                price:'2.100€',
                type: 'MANAGEMENT',
                level:'Débutant',
                img:'../images/formations/wp3.jpeg',
                page_detail:'/formationDetail.html',
                page_CPF:"#",
                info:{
                    ref:'WEB_APP',
                    version:'03/01/2022',
                    public_target:'La formation est ouverte aux personnes qui souhaitent créer un site vitrine.',
                    level_entry:'pas de prérequis',
                    xp_pro:'pas de prérequis',
                    langue:'pas de prérequis',
                    stuff:'disposer d’un ordinateur et d’une connexion internet.',
                    financement:'par le CPF',
                    CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
                    accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
                    evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
                    certificat:'Utilisation d’un logiciel d’édition de site web (RS5596).',
                    validation_partielle:'non',
                    equivalence:'aucune',
                    level_end:'sans niveau spécifique'
                },
                content:{
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
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
            {
                id_forma:16,
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
                    ref:'WEB_APP',
                    version:'03/01/2022',
                    public_target:'La formation est ouverte aux personnes qui souhaitent créer un site vitrine.',
                    level_entry:'pas de prérequis',
                    xp_pro:'pas de prérequis',
                    langue:'pas de prérequis',
                    stuff:'disposer d’un ordinateur et d’une connexion internet.',
                    financement:'par le CPF',
                    CGV:'Les Conditions Générales de Vente (incluant les conditions d’utilisation de la plateforme) sont librement accessibles sur notre site internet et sont communiquées pour signature par email au moment de la contractualisation.',
                    accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
                    evaluation:'L’évaluation des compétences en cours de formation s’effectue par QCM.',
                    certificat:'Utilisation d’un logiciel d’édition de site web (RS5596).',
                    validation_partielle:'non',
                    equivalence:'aucune',
                    level_end:'sans niveau spécifique'
                },
                content:{
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
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
    },
    {
        id:6,
        type:'BUREAUTIQUE',
        formation:[
            {
                id_forma:17,
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
                    version:'03/01/2022',
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
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
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
                id_forma:18,
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
                    version:'03/01/2022',
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
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
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
                id_forma:19,
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
                    version:'03/01/2022',
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
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
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
                id_forma:20,
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
                    version:'03/01/2022',
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
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
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
                id_forma:21,
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
                    version:'03/01/2022',
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
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
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
                id_forma:22,
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
                    version:'03/01/2022',
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
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
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
                id_forma:23,
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
                    version:'03/01/2022',
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
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
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
                id_forma:24,
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
                    version:'03/01/2022',
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
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
                },
                competence:{
                    title:[
                        "EXCEL", 
                    ],
                    resume: [excel],
                }
            },
            {
                id_forma:25,
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
                    version:'03/01/2022',
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
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
                },
                competence:{
                    title:[
                        "WORD", 
                    ],
                    resume: [word],
                }
            },
            {
                id_forma:26,
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
                    version:'03/01/2022',
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
                   nb_module:0,
                   modules:[
                        "module 1 : un test",
                        "module 2 : un autre test",
                        "module 3: jjjj", 
                        "module 4: encore un test "],
                    resume : [
                        "Apprendre les bases de l'anglais",
                        "devenir un véritable pro en Anglais",
                        "" , 
                        "un test"]
                },
                competence:{
                    title:[
                        "POWERPOINT", 
                    ],
                    resume: [powerpoint],
                }
            },
        ]
    },
   
]
  


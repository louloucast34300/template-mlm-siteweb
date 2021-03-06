const RESUME_ANGLAIS = [
    "Analyser une communication orale courte ou longue, en identiﬁant les informations clés (sens, contexte, situation…) et spéciﬁques (opinions, attitudes, intentions, accords, désaccords…) et en prenant en compte le vocabulaire, le rythme de parole, la diction et le langage, aﬁn de les exploiter dans un contexte de vie quotidienne et professionnelle.",
"– Le candidat peut reconnaître des mots familiers et des expressions quotidiennes ainsi que des énoncés très simples visant à satisfaire des besoins concrets lorsque les interlocuteurs parlent lentement et distinctement.",
"– Le candidat peut comprendre des expressions et du vocabulaire fréquemment utilisés dans des domaines le concernant – par exemple toutes les informations personnelles et familiales simples, les achats, l’environnement proche et le travail. <br/> – Le candidat peut saisir le sujet principal des messages et annonces clairs et simples.",
"– Le candidat peut comprendre les points essentiels quand un langage clair et standard est utilisé et s’il s’agit de choses familières dans par exemple le travail, l’école, les loisirs, etc.<br/> – Le candidat peut comprendre les points essentiels de la plupart des émissions de radio ou de télévision sur l’actualité ou des sujets d’intérêt personnel ou professionnel lorsque la diction est relativement lente et claire.",
"– Le candidat peut comprendre un discours étendu et des conférences et suivre même des lignes d’argumentation complexes à condition que le sujet soit raisonnablement familier. <br/>– Le candidat peut comprendre la plupart des programmes d’actualité et des journaux télévisés ainsi que la majorité des ﬁlms en langage classique.",
"– Le candidat peut comprendre un discours étendu même lorsqu’il n’est pas clairement structuré et que les articulations sont implicites et non signalées explicitement. <br/> – Le candidat peut comprendre les programmes de télévision et les ﬁlms sans trop d’efforts.",
"– Le candidat peut comprendre avec aisance n’importe quel type de langage parlé que ce soit en direct ou diffusé ou même lorsque l’on parle vite, à condition qu’il y ait une familiarité avec l’accent."
]
export const anglais =[
    {   
        id_forma:1,
        title:'Améliorer son anglais',
        sub_title: 'ANGLAIS A1-C2<br/>Compréhension Orale et Écrite',
        nb_hours : 20,
        price:'1.000€',
        type: 'LANGUES',
        level:'Débutant',
        img:'../images/formations/Anglais0.png',
        page_detail:'/formationDetail.html',
        page_CPF:'#',
        info:{
            ref:'anglais1',
            version:'28/04/2022',
            public_target:'La formation est ouverte à toutes les personnes dont l’anglais n’est pas la langue maternelle et qui souhaitent améliorer leurs compétences d’écoute et de lecture afin de renforcer leur employabilité.',//
            level_entry:'pas de prérequis',
            xp_pro:'pas de prérequis',
            langue:'pas de prérequis',
            stuff:'disposer d’un ordinateur et d’une connexion internet.',
            financement:'par le CPF dans le cadre du parcours d’achat direct sur Mon Compte Formation',
            rythme:'la formation peut être suivie sur un rythme libre, nous recommandons néanmoins de mobiliser 1h de travail personnel par jour.',
            accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
            pedagogie : `<br/>Conseillère dédiée pour favoriser la réussite de la formation avec un accompagnement pédagogique :<br/>
            - Par téléphone et par mail<br/>
            - Dans un délai de 24h<br/>
            - Du lundi au vendredi de 9h à 17h
            - Support de cours téléchargeables
            - Plateforme avec accès pour la durée de la formation`,
            evaluation:{
                avant:'test de positionnement',
                pendant:`questionnaires d'évaluation formative des connaissances`,
                fin:`évaluation sommative des connaissances questionnaire de satisfaction à chaud`,
                apres:'questionnaire de satisfaction à froid',
            },
            certificat:'Certification en anglais LanguageCert Test of English LTE (écouter, lire) - niveaux A1-C2 (RS5453)',
            validation_partielle:'non',
            equivalence:'aucune',
            level_end:'sans niveau spécifique'
        },
        content:{
           nb_module:15,
           modules:[
                "Module 01 : Rappel des règles grammaticales de base",
                "module 02 : Vocabulaire et verbes courants",
                "module 03 : Module 03 : Parler de soi et de son quotidien", 
                "Module 04 : Parler de nourriture et de ses goûts",
                "Module 05 : Adjectifs et pronoms",
                "Module 06 : Prépositions et génitif",
                "Module 07 : Parler de sa famille, de ses amis et de ses relations au travail",
                "Module 08 : Parler de sa maison et des tâches du quotidien",
                "Module 09 : Noms et adverbes",
                "Module 10 : Causalité et temporalité",
                "Module 11 : Prétérit",
                "Module 12 : Parler d’un film",
                "Module 13 : Parler avec une vendeuse",
                "Module 14 : Parler en voyage",
                "Module 15 : Parler de ses expériences"],
            resume : []
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
            ref:'anglais2',
            version:'28/04/2022',
            public_target:'La formation est ouverte à toutes les personnes dont l’anglais n’est pas la langue maternelle et qui souhaitent améliorer leurs compétences d’écoute et de lecture afin de renforcer leur employabilité.',//
            level_entry:'pas de prérequis',
            xp_pro:'pas de prérequis',
            langue:'pas de prérequis',
            stuff:'disposer d’un ordinateur et d’une connexion internet.',
            financement:'par le CPF dans le cadre du parcours d’achat direct sur Mon Compte Formation',
            rythme:'la formation peut être suivie sur un rythme libre, nous recommandons néanmoins de mobiliser 1h de travail personnel par jour.',
            accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
            pedagogie : `<br/>Conseillère dédiée pour favoriser la réussite de la formation avec un accompagnement pédagogique :<br/>
            - Par téléphone et par mail<br/>
            - Dans un délai de 24h<br/>
            - Du lundi au vendredi de 9h à 17h
            - Support de cours téléchargeables
            - Plateforme avec accès pour la durée de la formation`,
            evaluation:{
                avant:'test de positionnement',
                pendant:`questionnaires d'évaluation formative des connaissances`,
                fin:`évaluation sommative des connaissances questionnaire de satisfaction à chaud`,
                apres:'questionnaire de satisfaction à froid',
            },
            certificat:'Certification en anglais LanguageCert Test of English LTE (écouter, lire) - niveaux A1-C2 (RS5453)',
            validation_partielle:'non',
            equivalence:'aucune',
            level_end:'sans niveau spécifique'
        },
        content:{
           nb_module:15,
           modules:[
            "Module 01 : Rappel des règles grammaticales de base",
            "module 02 : Vocabulaire et verbes courants",
            "module 03 : Module 03 : Parler de soi et de son quotidien", 
            "Module 04 : Parler de nourriture et de ses goûts",
            "Module 05 : Adjectifs et pronoms",
            "Module 06 : Prépositions et génitif",
            "Module 07 : Parler de sa famille, de ses amis et de ses relations au travail",
            "Module 08 : Parler de sa maison et des tâches du quotidien",
            "Module 09 : Noms et adverbes",
            "Module 10 : Causalité et temporalité",
            "Module 11 : Prétérit",
            "Module 12 : Parler d’un film",
            "Module 13 : Parler avec une vendeuse",
            "Module 14 : Parler en voyage",
            "Module 15 : Parler de ses expériences"],
            resume : []
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
        id_forma:3,
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
            ref:'anglais3',
            version:'28/04/2022',
            public_target:'La formation est ouverte à toutes les personnes dont l’anglais n’est pas la langue maternelle et qui souhaitent améliorer leurs compétences d’écoute et de lecture afin de renforcer leur employabilité.',//
            level_entry:'pas de prérequis',
            xp_pro:'pas de prérequis',
            langue:'pas de prérequis',
            stuff:'disposer d’un ordinateur et d’une connexion internet.',
            financement:'par le CPF dans le cadre du parcours d’achat direct sur Mon Compte Formation',
            rythme:'la formation peut être suivie sur un rythme libre, nous recommandons néanmoins de mobiliser 1h de travail personnel par jour.',
            accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
            pedagogie : `<br/>Conseillère dédiée pour favoriser la réussite de la formation avec un accompagnement pédagogique :<br/>
            - Par téléphone et par mail<br/>
            - Dans un délai de 24h<br/>
            - Du lundi au vendredi de 9h à 17h
            - Support de cours téléchargeables
            - Plateforme avec accès pour la durée de la formation`,
            evaluation:{
                avant:'test de positionnement',
                pendant:`questionnaires d'évaluation formative des connaissances`,
                fin:`évaluation sommative des connaissances questionnaire de satisfaction à chaud`,
                apres:'questionnaire de satisfaction à froid',
            },
            certificat:'Certification en anglais LanguageCert Test of English LTE (écouter, lire) - niveaux A1-C2 (RS5453)',
            validation_partielle:'non',
            equivalence:'aucune',
            level_end:'sans niveau spécifique'
        },
        content:{
            nb_module:15,
            modules:[
                "Module 01 : Rappel des règles grammaticales de base",
                "module 02 : Vocabulaire et verbes courants",
                "module 03 : Module 03 : Parler de soi et de son quotidien", 
                "Module 04 : Parler de nourriture et de ses goûts",
                "Module 05 : Adjectifs et pronoms",
                "Module 06 : Prépositions et génitif",
                "Module 07 : Parler de sa famille, de ses amis et de ses relations au travail",
                "Module 08 : Parler de sa maison et des tâches du quotidien",
                "Module 09 : Noms et adverbes",
                "Module 10 : Causalité et temporalité",
                "Module 11 : Prétérit",
                "Module 12 : Parler d’un film",
                "Module 13 : Parler avec une vendeuse",
                "Module 14 : Parler en voyage",
                "Module 15 : Parler de ses expériences"],
             resume : []
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
            resume:RESUME_ANGLAIS,
        }
    },
    {
        id_forma:4,
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
            ref:'anglais4',
            version:'28/04/2022',
            public_target:'La formation est ouverte à toutes les personnes dont l’anglais n’est pas la langue maternelle et qui souhaitent améliorer leurs compétences d’écoute et de lecture afin de renforcer leur employabilité.',//
            level_entry:'pas de prérequis',
            xp_pro:'pas de prérequis',
            langue:'pas de prérequis',
            stuff:'disposer d’un ordinateur et d’une connexion internet.',
            financement:'par le CPF dans le cadre du parcours d’achat direct sur Mon Compte Formation',
            rythme:'la formation peut être suivie sur un rythme libre, nous recommandons néanmoins de mobiliser 1h de travail personnel par jour.',
            accompagnement:'Nos formations ont été conçues pour être réalisées en toute autonomie mais une équipe accompagnera le stagiaire pour s’assurer de sa réussite :<br> Des référents pédagogiques, administratifs, techniques et spécialiste handicap sont à votre disposition pendant votre formation.',
            pedagogie : `<br/>Conseillère dédiée pour favoriser la réussite de la formation avec un accompagnement pédagogique :<br/>
            - Par téléphone et par mail<br/>
            - Dans un délai de 24h<br/>
            - Du lundi au vendredi de 9h à 17h
            - Support de cours téléchargeables
            - Plateforme avec accès pour la durée de la formation`,
            evaluation:{
                avant:'test de positionnement',
                pendant:`questionnaires d'évaluation formative des connaissances`,
                fin:`évaluation sommative des connaissances questionnaire de satisfaction à chaud`,
                apres:'questionnaire de satisfaction à froid',
            },
            certificat:'Certification en anglais LanguageCert Test of English LTE (écouter, lire) - niveaux A1-C2 (RS5453)',
            validation_partielle:'non',
            equivalence:'aucune',
            level_end:'sans niveau spécifique'
        },
        content:{
            nb_module:15,
            modules:[
                "Module 01 : Rappel des règles grammaticales de base",
                "module 02 : Vocabulaire et verbes courants",
                "module 03 : Module 03 : Parler de soi et de son quotidien", 
                "Module 04 : Parler de nourriture et de ses goûts",
                "Module 05 : Adjectifs et pronoms",
                "Module 06 : Prépositions et génitif",
                "Module 07 : Parler de sa famille, de ses amis et de ses relations au travail",
                "Module 08 : Parler de sa maison et des tâches du quotidien",
                "Module 09 : Noms et adverbes",
                "Module 10 : Causalité et temporalité",
                "Module 11 : Prétérit",
                "Module 12 : Parler d’un film",
                "Module 13 : Parler avec une vendeuse",
                "Module 14 : Parler en voyage",
                "Module 15 : Parler de ses expériences"],
             resume : []
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
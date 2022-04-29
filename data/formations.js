import  {photoshop}  from "./photoshop.js";
import {anglais} from "./anglais.js";
import {dietetique} from "./dietetique.js";
import {management} from "./management.js";
import {entreprise} from './entreprise.js';
import {wordpress} from "./wordpress.js";
import { bureautique } from "./bureautique.js";
import { bilan } from "./bilan.js";

export const formation = [
    {
        id:1,
        type:'LANGUES',
        formation:anglais
    },
    {
        id:2,
        type:'DIETETIQUE',
        formation: dietetique
    },
    {
        id:3,
        type:'PHOTOSHOP',
        formation: photoshop
    },
    {
        id:4,
        type:'MANAGEMENT',
        formation: management,
    },
    {
        id:5,
        type:'ENTREPRISE',
        formation:entreprise,
    },
    {
        id:6,
        type:'DIGITAL',
        formation: wordpress,
    },
    {
        id:7,
        type:'BUREAUTIQUE',
        formation: bureautique,
    },
    {
        id:8,
        type:'BILAN DE COMPÉTENCES',
        formation: bilan,
    },
   
]
  


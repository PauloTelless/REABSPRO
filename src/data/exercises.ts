import { ExerciseCategory } from '../types';

export const exerciseCategories: ExerciseCategory[] = [
  {
    id: 'joelho',
    name: 'Recuperação de Joelho',
    description: 'Exercícios para auxiliar na recuperação e fortalecimento do joelho.',
    exercises: [
      {
        id: 'elevacao-perna',
        name: 'Elevação de perna estendida',
        videoUrl: 'https://youtu.be/XfT_5ZzYouk?si=2L1eSOG3YiRYcrXB',
        description: 'Deite-se de costas com uma perna dobrada e a outra estendida. Levante a perna estendida lentamente até a altura do joelho oposto e desça com controle.'
      },
      {
        id: 'agachamento-parede',
        name: 'Agachamento na parede',
        videoUrl: 'https://youtu.be/p1KsWs_SNjg?si=etjXI7khk5mwHqLE',
        description: 'Apoie as costas contra a parede e deslize para baixo até que os joelhos estejam em um ângulo de 90 graus. Mantenha a posição e depois retorne à posição inicial.'
      },
      {
        id: 'flexao-isquiotibiais',
        name: 'Flexão de isquiotibiais',
        videoUrl: 'https://youtube.com/shorts/cHu5wHeBltY?si=ffzLPmdGmlh-BnyG',
        description: 'Em pé, segure-se em um apoio e dobre o joelho, trazendo o calcanhar em direção ao glúteo. Mantenha a posição e depois retorne à posição inicial.'
      }
    ]
  },
  {
    id: 'ombro',
    name: 'Reabilitação de Ombro',
    description: 'Exercícios para recuperação da mobilidade e força no ombro.',
    exercises: [
      {
        id: 'pendulo-ombro',
        name: 'Pêndulo de ombro',
        videoUrl: 'https://youtu.be/a2O-4XRuH0E?si=hBYFZep3JrCBYEST',
        description: 'Incline-se para frente apoiando a mão saudável em uma superfície. Deixe o braço afetado pendurado e faça movimentos suaves em círculo.'
      },
      {
        id: 'deslizamento-parede',
        name: 'Deslizamento de ombro na parede',
        videoUrl: 'https://youtube.com/shorts/SaEMO2m15a0?si=XfGJOxAh0OoIywNy',
        description: 'De frente para a parede, deslize o braço para cima usando os dedos. Vá o mais alto possível sem dor e retorne à posição inicial.'
      },
      {
        id: 'alongamento-bastao',
        name: 'Alongamento de ombro com bastão',
        videoUrl: 'https://youtu.be/Q8qPBYVjk_8?si=WyM0sMSPFyBG1k9D',
        description: 'Segure um bastão com as duas mãos e levante-o acima da cabeça, depois para trás, mantendo os braços estendidos durante todo o movimento.'
      }
    ]
  },
  {
    id: 'tornozelo',
    name: 'Suporte de Tornozelo',
    description: 'Exercícios para fortalecer e melhorar a estabilidade do tornozelo.',
    exercises: [
      {
        id: 'flexao-tornozelos',
        name: 'Flexão de tornozelos',
        videoUrl: 'https://youtube.com/shorts/EdmC4dJBdgs?si=x8qH7-H1Vo3Mof6b',
        description: 'Sentado com a perna estendida, mova o pé para cima e para baixo, flexionando e estendendo o tornozelo.'
      },
      {
        id: 'extensao-tornozelo',
        name: 'Extensão de tornozelo',
        videoUrl: 'https://youtu.be/kMBYB75O1bg?si=gXUeYcT9RP-oc2Ju',
        description: 'Com o pé apoiado no chão, levante o calcanhar o máximo possível e retorne à posição inicial.'
      }
    ]
  },
  {
    id: 'coluna',
    name: 'Recuperação de Coluna',
    description: 'Exercícios para aliviar dores e fortalecer a coluna vertebral.',
    exercises: [
      {
        id: 'inclinacao-pelvica',
        name: 'Inclinação pélvica deitada',
        videoUrl: 'https://youtu.be/8u-hDVNFe2w?si=XiK_z4lDFtLtwKX5',
        description: 'Deite-se de costas com os joelhos dobrados. Pressione a parte inferior das costas contra o chão, contraindo os músculos abdominais.'
      },
      {
        id: 'gato-camelo',
        name: 'Alongamento do gato e camelo',
        videoUrl: 'https://youtu.be/pq0kxWuFviM?si=gaX3l74z3TJI_Pn3',
        description: 'De quatro, alterne entre arquear a coluna para cima (gato) e para baixo (camelo), movendo-se lentamente entre as posições.'
      }
    ]
  },
  {
    id: 'punho',
    name: 'Força no Punho',
    description: 'Exercícios para melhorar a força e mobilidade do punho.',
    exercises: [
      {
        id: 'desvio-radial-ulnar',
        name: 'Desvio de rádio e ulnar',
        videoUrl: 'https://youtube.com/shorts/EhLIiNOl8pU?si=g5ZpxyD-RiUMKXGG',
        description: 'Com o antebraço apoiado e a mão para fora da superfície, mova o punho de um lado para o outro lateralmente.'
      },
      {
        id: 'flexao-extensao-punho',
        name: 'Flexão e extensão de punho',
        videoUrl: 'https://youtu.be/J_XahdfxLM8?si=sVij3hib2vcgdZ6C',
        description: 'Com o antebraço apoiado, dobre o punho para cima e para baixo, mantendo o movimento controlado.'
      }
    ]
  }
];
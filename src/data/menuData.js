
import smokyBaconImage from '../assets/menu/smoky-bacon.jpg';
import comboperro from '../assets/menu/comboperro.jpg';
import bigcola from '../assets/menu/bigcola.jpg';
import golden from '../assets/menu/golden.jpg';
import sum from '../assets/menu/sum.jpg';
import adicionales from '../assets/menu/adicionales.jpg';
import hamburger from '../assets/menu/hamburger.jpg';
import sencilla from  '../assets/menu/sencilla.jpg';
import especial from '../assets/menu/especial.jpg';
import tentatacion from '../assets/menu/tentatcion.jpg';
import mixta from '../assets/menu/mixta.jpg';
import grocera  from '../assets/menu/grocera.jpg';
import pollo  from '../assets/menu/pollo.jpg';
import perrosencillo  from '../assets/menu/perrosencillo.jpg';
import perroespecial  from '../assets/menu/perroespecial.jpg';
import perropollo  from '../assets/menu/perropollo.jpg';
import perrocarne  from '../assets/menu/perrocarne.jpg';
import perromixto  from '../assets/menu/perromixto.jpg';
import crispy  from '../assets/menu/crispy.jpg';
import choriperro  from '../assets/menu/choriperro.jpg';
import pepitomixto  from '../assets/menu/pepitomixto.jpg';
import pepitopollo  from '../assets/menu/pepitopollo.jpg';
import pepitocarne  from '../assets/menu/pepitocarne.jpg';
import pepitocrispy  from '../assets/menu/pepitocrispy.jpg';
import tender  from '../assets/menu/tender.jpg';
import papasextrema  from '../assets/menu/papasextrema.jpg';
import papasjunior  from '../assets/menu/papasjunior.jpg';
import alasbbq  from '../assets/menu/alasbbq.jpg';
import cotufas  from '../assets/menu/cotufas.jpg';
import enrrollado from '../assets/menu/enrro.jpg';



export const MENU_CATEGORIES = [
  {
    id: '01',
    title: 'Hamburguesas',
    items: [
      {
        id: 'burg-1',
        tag: 'La favorita',
        name: 'Sencilla',
        description:
          'Carne de res jugosa, queso amarillo, lechuga, tomate, cebolla caramelizada, papas ralladas y salsa de la casa.',
        price: 3,
        image: sencilla,
      },
      {
        id: 'burg-2',
        tag: 'Con carácter',
        name: 'Especial',
        description:
          'Carne de res, facilita, cebolla caramelizada, jamon, huevo, lechuga, tomate, salsa de la casa y papas naturales.',
        price: 5,
        image: especial,
      },
      {
        id: 'burg-3',
        tag: 'Tentacion',
        name: 'Ingeniera',
        description:
          'Carne de res rellena con (cebolla y queso), facilita, jamon, huevo, tocineta, queso amarillo, pepinillo, jalapeño, lechuga, tomate, salsa de la casa y papas naturales.',
        price: 7.5,
        image: tentatacion,
      },
      {
        id: 'burg-4',
        tag: 'Mixta',
        name: 'Full Stack',
        description:
          'Carne de res, milanesa de pollo, facilita, jamon, tocineta, chorizo, huevo, queso amarillo, pepinillo, jalapeño, lechuga, tomate, salsa de la casa y papas naturales.',
        price: 7.5,
        image: mixta,
      },
      {
        id: 'burg-5',
        tag: 'Crocante',
        name: 'Crispy',
        description:
          'milanesa de pollo crspy, facilita, jamon, tocineta, huevo, queso amarillo, pepinillo, lechuga, tomate, salsa de la casa y papas naturales.',
        price: 7,
        image: grocera,
      },
      {
        id: 'burg-6',
        tag: 'Grosera',
        name: 'Overclock',
        description:
          'Carne de res, milanesa de pollo crspy, facilita, jamon, tocineta, huevo, chorizo, queso amarillo, pepinillo, jalapeño, lechuga, tomate, salsa de la casa y papas naturales.',
        price: 7.5,
        image: hamburger,
      },
      {
        id: 'burg-7',
        tag: 'Doble',
        name: 'Dual Bacon',
        description:
          'Doble carne de res, facilita, jamon, tocineta,chorizo, huevo, queso amarillo, pepinillo, jalapeño, lechuga, tomate, salsa de la casa y papas naturales.',
        price: 7.5,
        image: smokyBaconImage,
      },
      {
        id: 'burg-8',
        tag: 'Pollo',
        name: 'Prototipo',
        description:
          'milanesa de pollo, facilita, jamon, tocineta, huevo, queso amarillo, pepinillo, lechuga, tomate, salsa de la casa y papas naturales.',
        price: 6,
        image: pollo,
      },
    ],
  },
   {
    id: '02',
    title: 'Perros',
    items: [
      {
        id: 'perro-1',
        tag: 'El favorito',
        name: 'Sencillo',
        description:
          'Salchicha completa, queso amarillo, queso de año, ensalada, papas ralladas. ',
        price: 2,
        image: perrosencillo,
      },
      {
        id: 'perro-2',
        tag: 'Con carácter',
        name: 'Especial',
        description:
          'Salchicha completa, queso amarillo, queso de año, jamon, maiz, ensalada, papas naturales. ',
        price: 3,
        image: perroespecial,
      },
      {
        id: 'perro-3',
        tag: 'Pollo',
        name: 'Binario',
        description:
          'Salchicha completa, pollo, queso amarillo, tocineta, queso de año, jamon, maiz, papas naturales. ',
        price: 5.5,
        image: perropollo,
      },
      {
        id: 'perro-4',
        tag: 'Carne',
        name: 'Fuente',
        description:
          'Salchicha completa, carne jugosa, queso amarillo, tocineta, queso de año, jamon, maiz, papas naturales. ',
        price: 6,
        image: perrocarne,
      },
      {
        id: 'perro-5',
        tag: 'Mixto',
        name: 'Full Stack',
        description:
          'Salchicha completa, pollo, queso amarillo, tocineta, queso de año, jamon, maiz, papas naturales. ',
        price: 6.5,
        image: perromixto,
      },
      {
        id: 'perro-6',
        tag: 'Ingeniero',
        name: 'Prototipo',
        description:
          'Salchicha completa, pollo crispy, tocineta, queso amarillo, queso de año, jamon, maiz, papas naturales. ',
        price: 7,
        image: crispy,
      },
        {
        id: 'perro-7',
        tag: 'Choriperro',
        name: 'Admin',
        description:
          'Salchicha completa, chorizo, tocineta, queso amarillo, queso de año, jamon, papas naturales. ',
        price: 5.5,
        image: choriperro,
      },
    ],
  },
  {
    id: '03',
    title: 'Pepitos',
    items: [
      {
        id: 'pepi-1',
        tag: 'Mixto',
        name: 'Full Stack',
        description:
          '300gr de protenia carne jugosa y pollo, tocinea, maiz, jamon, queso amarillo, queso parmesano, papas naturales.',
        price: 8,
        image: pepitomixto,
      },
      {
        id: 'pepi-2',
        tag: 'Crispy',
        name: 'Open Source',
        description:
          '300gr de protenia pollo crispy, tocinea, maiz, jamon, queso amarillo, queso parmesano, papas naturales.',
        price: 8.5,
        image: pepitocrispy,
      },
      {
        id: 'pepi-3',
        tag: 'Pollo',
        name: 'Clasico',
        description:
          '300gr de protenia pollo, tocinea, maiz, jamon, queso amarillo, queso parmesano, papas naturales.',
        price: 8,
        image: pepitopollo,
      },
      {
        id: 'pepi-4',
        tag: 'Carne',
        name: 'Clasico',
        description:
          '300gr de protenia carne jugosa, tocinea, maiz, jamon, queso amarillo, queso parmesano, papas naturales.',
        price: 8,
        image: pepitocarne,
      },
    ],
  },
   {
    id: '04',
    title: 'Especiales',
    items: [
      {
        id: 'especi-1',
        tag: 'Papas',
        name: 'Full Stack',
        description:
          '200gr de proteina carne jugosa y pollo, salchichas, tocineta, maiz, jamon, queso amarillo, queso parmesano.',
        price: 7,
        image: papasextrema,
      },
      {
        id: 'especi-2',
        tag: 'Papas',
        name: 'Junior',
        description:
          'salchichas, tocineta, jamon, queso amarillo, queso parmesano, maiz.',
        price: 5,
        image: papasjunior,
      },
       {
        id: 'especi-3',
        tag: 'Cotufas',
        name: 'Dual core',
        description:
          '200 pollo crispy, tocineta y papas naturales.',
        price: 6.5,
        image: cotufas,
      },
       {
        id: 'especi-4',
        tag: 'Tender',
        name: 'Dual core',
        description:
          '200gr en tira de pollo, tocineta y papas naturales.',
        price: 6.5,
        image: tender,
      },
       {
        id: 'especi-5',
        tag: 'Enrollado',
        name: 'Megabyte',
        description:
          '200gr de proteina carne jugosa y pollo, tocineta, jamon, queso amarillo, lechuga, tomate y papas naturales.',
        price: 6.5,
        image: enrrollado,
      },
       {
        id: 'especi-6',
        tag: 'Alas',
        name: 'Megabyte',
        description:
          '10 alas de pollo empanizadas bañadas en salsa BBQ y papas naturales.',
        price: 7,
        image: alasbbq,
      },
    ],
  },
  {
    id: '05',
    title: 'Combos',
    items: [
      {
        id: 'combo-1',
        tag: 'Para compartir',
        name: 'Dúo Hamburgueza',
        description:
          'Dos hamburguesas sencillas de carne, queso amarillo, lechuga , tomate, cebolla carameliza, papas ralladas y un refresco 400ml.',
        price: 5.6,
        image: sencilla,
      },
      {
        id: 'combo-2',
        tag: 'Para compartir',
        name: 'Dúo Hot dog',
        description:
          'Dos perros sencillos pan pequeño , salchica completa, queso amarillo, queso de año, ensalada, papas ralladas y un refresco 400l.',
        price: 3.6,
        image: comboperro,
      },
    ],
  },
  {
    id: '06',
    title: 'Bebidas',
    items: [
      {
        id: 'drink-1',
        tag: null,
        name: 'Refresco 400 ml',
        description: 'Una bebida bien fría para acompañar tu pedido.',
        price: 0.70,
        image: sum,
      },
      {
        id: 'drink-2',
        tag: null,
        name: 'Refresco 1.5 litro',
        description: 'Una bebida bien fría para acompañar tu pedido.',
        price: 1.50,
        image:golden,
      },
       {
        id: 'drink-3',
        tag: null,
        name: 'Refresco 1 litro',
        description: 'Una bebida bien fría para acompañar tu pedido.',
        price: 1.10,
        image: golden,
      },
      {
        id: 'drink-4',
        tag: null,
        name: 'Refresco 2 litro',
        description: 'Una bebida bien fría para acompañar tu pedido.',
        price: 1.50,
        image: bigcola,
      },
         {
        id: 'drink-5',
        tag: null,
        name: 'Adicionales',
        description: 'Crea nuevo sabores en tu pedido (maiz , cebollas , pimenton).',
        price: 0.80,
        image: adicionales,
      },
    ],
  },
  
];

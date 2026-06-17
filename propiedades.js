/* =====================================================================
   PROPIEDADES DE HOMEPLUS
   ---------------------------------------------------------------------
   Para editar precios, textos, fotos o ubicación, modifica esta lista.
   Cada propiedad tiene:

     titulo      -> nombre de la propiedad
     zona        -> usado por el filtro de zonas
     precio      -> "$8,800" etc. o "Consultar"
     recamaras   -> número
     banos       -> número
     destacado   -> etiqueta corta
     descripcion -> texto completo que aparece al abrir la propiedad
     mapa        -> enlace de Google Maps (botón "Ver ubicación")
     fotos       -> lista de imágenes; la primera es la portada
   ===================================================================== */

const PROPIEDADES = [
  {
    titulo: "Departamento en Floresta",
    zona: "Floresta",
    precio: "$12,200",
    recamaras: 2,
    banos: 2,
    destacado: "Av. Peñuelas, Peñuelas",
    descripcion: "Departamento amueblado y equipado en Floresta, sobre Av. Peñuelas. Cuenta con sala, comedor, cocina equipada, recámaras con clóset y baños completos. Listo para mudarte, con buen equipamiento en cada espacio.",
    mapa: "https://www.google.com/maps/search/?api=1&query=Av.+Pe%C3%B1uelas+19,+Pe%C3%B1uelas,+76148+Santiago+de+Quer%C3%A9taro,+Qro.",
    fotos: [
      "floresta-1.jpg",
      "floresta-2.jpg",
      "floresta-3.jpg",
      "floresta-4.jpg",
      "floresta-5.jpg",
      "floresta-6.jpg",
      "floresta-7.jpg",
      "floresta-8.jpg",
      "floresta-9.jpg",
      "floresta-10.jpg",
      "floresta-11.jpg"
    ]
  },
  {
    titulo: "Casa amueblada en Claustros del Sur",
    zona: "Claustros del Sur",
    precio: "$25,000",
    recamaras: 3,
    banos: 3.5,
    destacado: "A 100 m del Hospital Ángeles Centro Sur",
    descripcion: "Casa amueblada y equipada en Claustros del Sur, a tan solo 100 metros del Hospital Ángeles Centro Sur. Cuenta con sala, comedor, cocina equipada, estudio y recámaras con clóset. Lista para mudarte.",
    mapa: "https://www.google.com/maps/place/Claustro+del+Sur,+76093+Santiago+de+Quer%C3%A9taro,+Qro.,+M%C3%A9xico/@20.5639879,-100.3640811,18z/data=!3m1!4b1!4m6!3m5!1s0x85d344970954a6db:0xe0bc675a72b885f8!8m2!3d20.5639703!4d-100.3627725!16s%2Fg%2F1tks6nvk",
    fotos: [
      "claustros-1.jpg",
      "claustros-2.jpg",
      "claustros-3.jpg",
      "claustros-4.jpg",
      "claustros-5.jpg",
      "claustros-6.jpg",
      "claustros-7.jpg",
      "claustros-8.jpg"
    ]
  },
  {
    titulo: "Departamento en Cipreses",
    zona: "Cipreses",
    precio: "$9,000",
    recamaras: 2,
    banos: 1,
    destacado: "Entre Sombrerete y Pie de la Cuesta",
    descripcion: "Duplex en planta alta con 2 recámaras y alcoba, 1 baño, lavandería cerrada con lavadora y estacionamiento para 1 auto, en condominio con portón eléctrico. Ubicado en Cipreses, entre Sombrerete y Pie de la Cuesta.",
    mapa: "https://maps.app.goo.gl/K1pyvX7uPcVhDSYR9",
    fotos: [
      "cipreses-1.jpg",
      "cipreses-2.jpg",
      "cipreses-3.jpg",
      "cipreses-4.jpg",
      "cipreses-5.jpg",
      "cipreses-6.jpg",
      "cipreses-7.jpg",
      "cipreses-8.jpg",
      "cipreses-9.jpg"
    ]
  },
  {
    titulo: "Duplex en El Arcángel",
    zona: "El Arcángel",
    precio: "Consultar",
    recamaras: 2,
    banos: 1,
    destacado: "Condominio con vigilancia · a 4 min de Plaza Sendero",
    descripcion: "Duplex en planta baja en el fraccionamiento El Arcángel, con sala, comedor, cocina y lavandería con calentador. Condominio con vigilancia, a 4 minutos de Plaza Sendero. Buena ubicación y espacios cómodos.",
    mapa: "https://www.google.com/maps/place/El+Arcangel,+76113+Qro.,+M%C3%A9xico/@20.6141171,-100.4544714,17.5z/data=!4m6!3m5!1s0x85d3506dddd745e7:0x3cf9caf895752907!8m2!3d20.6140483!4d-100.4520517!16s%2Fg%2F1q5gkmkc2",
    fotos: [
      "arcangel-1.jpg",
      "arcangel-2.jpg",
      "arcangel-3.jpg",
      "arcangel-4.jpg",
      "arcangel-5.jpg"
    ]
  }
];

export default {
  global: {
    Name: 'Intervención, control, seguimiento y mejora de brotes epidemiológicos en entornos penitenciarios',
    Description:
      'Este componente formativo aborda los fundamentos teóricos, conceptuales y normativos relacionados con los brotes epidemiológicos en entornos penitenciarios, fortaleciendo los conocimientos necesarios para comprender su ocurrencia y propagación. Asimismo, orienta el desarrollo de habilidades para identificar, manejar, mitigar y controlar brotes epidemiológicos en los Establecimientos de Reclusión del Orden Nacional (ERON), mediante la aplicación de lineamientos, protocolos y normatividad vigente en salud pública',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal-2.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Verificación y seguimiento de la respuesta ante brotes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Mesas de seguimiento intersectoriales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Revisión de guías, lineamientos y protocolos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Seguimiento de los Eventos de Interés en Salud Pública (EISP)',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Verificación de las acciones de identificación, manejo, mitigación y control',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Evaluación e identificación de oportunidades de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Valoración de la aplicación de guías y protocolos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Evaluación de resultados de las acciones implementadas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Identificación de brechas y oportunidades de mejora',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Priorización de acciones de mejoramiento',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Formulación, implementación y evaluación de planes de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Elaboración del plan de acción',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Implementación de acciones de mejora y capacitación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Seguimiento al cumplimiento del plan de acción',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Evaluación de la ejecución y resultados del plan',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acción de mejora',
      significado:
        'Actividad planificada para corregir una debilidad, superar una brecha o fortalecer la respuesta institucional frente a un evento epidemiológico.',
    },
    {
      termino: 'Brecha',
      significado:
        'Diferencia identificada entre las acciones o resultados esperados y las condiciones o resultados realmente alcanzados.',
    },
    {
      termino: 'Control sanitario',
      significado:
        'Conjunto de medidas destinadas a reducir o eliminar factores de riesgo que pueden afectar la salud de las personas y favorecer la transmisión de enfermedades.',
    },
    {
      termino: 'EISP',
      significado:
        'Evento de Interés en Salud Pública que, por sus características, requiere vigilancia, seguimiento y acciones de respuesta por parte de las autoridades sanitarias.',
    },
    {
      termino: 'Intersectorialidad',
      significado:
        'Articulación y coordinación entre diferentes instituciones y sectores para desarrollar acciones conjuntas frente a un evento de salud pública.',
    },
    {
      termino: 'Plan de mejora',
      significado:
        'Instrumento que organiza acciones dirigidas a corregir brechas, fortalecer procesos y mejorar la respuesta institucional.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). <em>Manejo de brotes en población privada de la libertad (PPL)</em> [Documento técnico].',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2023). <em>Principles for making prisons and places of detention resilient to infectious diseases, including epidemic and pandemic threats</em>. WHO Regional Office for Europe.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). <em>Lineamientos generales para la vigilancia y control de eventos de interés en salud pública en establecimientos penitenciarios y carcelarios - Colombia 2012</em>.',
      link: '',
    },
    {
      referencia:
        'Patiño, C. P., & Mosquera, C. J. (2025). <em>Proceso salud-enfermedad</em> [Presentación de PowerPoint].',
      link: '',
    },
    {
      referencia:
        'Bernal, C. (s. f.). <em>Fundamentos de epidemiología: Eje 1. Conceptualicemos</em> [Referente de pensamiento].',
      link: '',
    },
    {
      referencia:
        'Leavell, H. R., & Clark, E. G. (1965). <em>Preventive medicine for the doctor in his community: An epidemiologic approach</em> (3rd ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Mosquera Agualimpia, C. J. (2025). <em>Microorganismos y cadena de transmisión</em> [Presentación de PowerPoint]. SENA.',
      link: '',
    },
    {
      referencia:
        'Conceptos básicos de epidemiología. (s. f.). <em>Conceptos básicos de epidemiología</em> [Capítulo de libro].',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). <em>Guía de vigilancia y control de salud pública para población privada de la libertad</em>.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2024). <em>Lineamiento para el fortalecimiento de las acciones de prevención de enfermedades transmisibles generadoras de brotes en población privada de la libertad</em>. Ministerio de Salud y Protección Social.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

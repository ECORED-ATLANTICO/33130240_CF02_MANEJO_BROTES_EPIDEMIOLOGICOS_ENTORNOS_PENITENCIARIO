<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Formulación, implementación y evaluación de planes de mejora

    img(src="@/assets/curso/tema3/1.png", alt="", data-aos="zoom-in-down")  
    .row.justify-content-center.z-2
      .col-lg-10.p-4
        div.banner-text.shadow.bg-primario-p20.mb-3
          p.mb-0 La gestión de los brotes epidemiológicos en entornos penitenciarios requiere dar continuidad a los hallazgos obtenidos durante el seguimiento y análisis de las acciones desarrolladas. 
    
    .bg-terciario-t20.p-4.py-3.rounded-4.z-2
      .row.justify-content-center.align-items-center
        .col-lg-11
          p.mb-4.mb-lg-0 En este contexto, resulta fundamental orientar esfuerzos hacia el fortalecimiento de la respuesta institucional, estableciendo alternativas que permitan atender las brechas identificadas, optimizar los recursos disponibles y promover la participación coordinada de los actores responsables, con el propósito de consolidar prácticas sostenibles que contribuyan a proteger la salud colectiva. 
        .col-lg-1
          figure
            img.imgw-50(src="@/assets/curso/tema2/5.png", alt="" data-aos="zoom-in-down")

    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Elaboración del plan de acción

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La elaboración del plan de acción constituye una herramienta para transformar las brechas y oportunidades de mejora identificadas durante la evaluación de la respuesta ante brotes epidemiológicos en acciones concretas, organizadas y verificables. En los Establecimientos de Reclusión del Orden Nacional (ERON), este plan debe partir del análisis de:  

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.mb-4.mb-lg-5.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 3.
          span Aspectos para considerar en la formulación de planes de mejora
        .tabla-a.color-acento-contenido.tabla-a--text-left
          table
            thead
              tr(style="background-color: #DDEEE7")
                th Elemento
                th(colspan="2") Desarrollo 
                th(colspan="2") Ejemplo aplicado
            tbody
              tr(style="background-color: #EDF6F2")
                td #[strong Resultados obtenidos] 
                td(colspan="2") Analizar los hallazgos derivados del seguimiento y evaluación de las acciones implementadas, identificando logros, dificultades, incumplimientos y situaciones pendientes que permitan establecer necesidades concretas de mejoramiento. 
                td(colspan="2") El seguimiento evidencia retrasos en la identificación y aislamiento de casos respiratorios, por lo que se prioriza fortalecer la detección temprana y definir responsables para su ejecución. 
              tr
                td #[strong Condiciones particulares del establecimiento]
                td(colspan="2") Considerar las características propias del ERON, como población, capacidad instalada, infraestructura, disponibilidad de recursos, condiciones sanitarias y organización operativa, para establecer acciones de mejora viables y acordes con su contexto. 
                td(colspan="2") Ante la limitada disponibilidad de espacios para aislamiento, se identifican áreas que puedan adecuarse temporalmente y se establecen procedimientos para su utilización durante un brote. 
              tr(style="background-color: #EDF6F2")
                td #[strong Factores de riesgo de transmisión] 
                td(colspan="2") Identificar y valorar las condiciones individuales, ambientales, sanitarias e institucionales que puedan incrementar la exposición o transmisión, con el propósito de priorizar intervenciones dirigidas a reducir los riesgos identificados. 
                td(colspan="2") Al detectar deficiencias recurrentes en la disponibilidad de agua y prácticas de higiene, se priorizan acciones para garantizar el abastecimiento, fortalecer el lavado de manos y realizar seguimiento a las condiciones sanitarias. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p El Ministerio de Salud y Protección Social establece la necesidad de desarrollar acciones de prevención, vigilancia y control de manera articulada, de acuerdo con las responsabilidades de los diferentes actores involucrados. Por ello, el plan debe responder a necesidades reales y establecer acciones que contribuyan a reducir los riesgos identificados (Ministerio de Salud y Protección Social [MSPS], 2024).
        .bg-primario-p20.p-4.py-3.rounded-4
          p.mb-0 Para su elaboración, es necesario priorizar las situaciones que requieren intervención, definir claramente qué se pretende mejorar y establecer las actividades necesarias para alcanzar los resultados esperados. El plan debe especificar, como mínimo: 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        .bg-slider.p-4.z-2.rounded-1
          SlyderA(tipo="b")
            .tarjeta.tarjeta--blanca.rounded-4.p-lg-5
              h5.mb-4 Situación o problema identificado 
              p.mb-0 Describir con claridad la condición, dificultad o brecha que requiere intervención, considerando sus causas, efectos y los hallazgos obtenidos durante el seguimiento.
              p.mb-0 #[strong Ejemplo:] identificar interrupciones frecuentes en el suministro de agua que afectan la higiene y limpieza del establecimiento.  
            .tarjeta.tarjeta--blanca.rounded-4.px-lg-5
              h5.mb-4 Objetivo de mejora  
              p.mb-0 Establecer el resultado concreto que se espera alcanzar para corregir, reducir o controlar la situación identificada, procurando que sea viable y verificable.  
              p.mb-0 #[strong Ejemplo:] garantizar la disponibilidad continua de agua para las actividades de higiene, alimentación, limpieza y atención en salud. 
            .tarjeta.tarjeta--blanca.rounded-4.px-lg-5
              h5.mb-4 Acciones por ejecutar 
              p.mb-0 Definir las actividades específicas y organizadas que permitirán intervenir las causas o condiciones relacionadas con el problema y alcanzar el objetivo propuesto. 
              p.mb-0 #[strong Ejemplo:] realizar mantenimiento de tanques y redes, verificar la calidad del agua y establecer alternativas de abastecimiento. 
            .tarjeta.tarjeta--blanca.rounded-4.px-lg-5
              h5.mb-4 Responsables 
              p.mb-0 Identificar las personas, áreas o entidades encargadas de coordinar, ejecutar y verificar las acciones, de acuerdo con sus funciones y competencias.  
              p.mb-0 #[strong Ejemplo:] asignar responsabilidades al establecimiento penitenciario, prestador de salud y demás actores competentes según las actividades programadas. 
            .tarjeta.tarjeta--blanca.rounded-4.px-lg-5
              h5.mb-4 Recursos requeridos 
              p.mb-0 Determinar los recursos humanos, físicos, tecnológicos, financieros y materiales necesarios para ejecutar adecuadamente las acciones previstas y garantizar su continuidad.  
              p.mb-0 #[strong Ejemplo:] disponer de personal, equipos, insumos de limpieza y desinfección, elementos de protección y materiales requeridos para las intervenciones. 
            .tarjeta.tarjeta--blanca.rounded-4.px-lg-5
              h5.mb-4 Tiempos de cumplimiento 
              p.mb-0 Establecer plazos realistas para iniciar, desarrollar y finalizar las acciones, considerando su prioridad, complejidad y los recursos disponibles.  
              p.mb-0 #[strong Ejemplo:] programar la limpieza y desinfección de tanques en las fechas establecidas y registrar oportunamente su ejecución. 
            .tarjeta.tarjeta--blanca.rounded-4.px-lg-5
              h5.mb-4 Mecanismos de seguimiento 
              p.mb-0 Establecer herramientas y procedimientos para verificar periódicamente el avance, cumplimiento y resultados de las acciones, facilitando la identificación de dificultades y ajustes.  
              p.mb-0 #[strong Ejemplo:] aplicar listas de verificación, revisar indicadores y realizar reuniones periódicas para evaluar los avances del plan. 
      .col-sm-6.col-lg-4.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/4.png", alt="")

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Esta planificación debe considerar tanto las acciones sanitarias como aquellas relacionadas con infraestructura, agua, alimentación, limpieza y desinfección, vigilancia epidemiológica y atención en salud. 
        .bg-terciario-t20.p-4.py-3.rounded-4
          p.mb-0 La documentación evidencia, por ejemplo, que frente a las condiciones del servicio de alimentación se han utilizado instrumentos de supervisión para evaluar instalaciones, almacenamiento, producción, manipuladores, saneamiento, transporte y control de calidad, cuyos resultados permiten establecer planes de mejora y realizar posteriormente su seguimiento (MSPS, 2024). 
          
    p.mb-4.z-2 Finalmente, la elaboración del plan de acción debe contemplar cómo se verificará su ejecución y cómo se determinará si las acciones fueron efectivas. Para ello, es conveniente establecer lo siguiente: 

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2
      .col-xl-8
        TabsA.color-acento-botones.custom-tabs.mb-4.mb-lg-0
          .tarjeta.p-4.bg-secundario-s5.py-5(titulo="Indicadores")
            p.mb-0 Establecer medidas que permitan valorar objetivamente el avance y cumplimiento de las acciones programadas, comparando los resultados alcanzados con las metas previstas.  
            p.mb-0 #[strong Ejemplo:] verificar mensualmente el porcentaje de áreas que cumplen con el programa establecido de limpieza y desinfección. 
          .tarjeta.p-4.bg-secundario-s5.py-5(titulo="Evidencias")
            p.mb-0 Recopilar documentos, registros u otros soportes que permitan demostrar la ejecución y los resultados de las acciones desarrolladas.  
            p.mb-0 #[strong Ejemplo:] conservar listas de verificación, registros de limpieza, resultados de calidad del agua, actas, informes y soportes fotográficos. 
          .tarjeta.p-4.bg-secundario-s5.py-5(titulo="Responsables del seguimiento")
            p.mb-0 Determinar las personas, áreas o entidades encargadas de verificar el avance de las acciones, analizar los resultados y comunicar posibles desviaciones.  
            p.mb-0 #[strong Ejemplo:] designar al referente correspondiente para revisar periódicamente el cumplimiento de las medidas sanitarias establecidas. 
          .tarjeta.p-4.bg-secundario-s5.py-5(titulo="Fechas de seguimiento")
            p.mb-0 Definir momentos específicos para revisar el avance del plan, detectar oportunamente retrasos o incumplimientos y establecer los ajustes requeridos.  
            p.mb-0 #[strong Ejemplo:] programar revisiones mensuales de las acciones y una evaluación semestral para determinar su nivel de cumplimiento. 
      .col-sm-6.col-lg-4.d-none.d-xl-block
        figure
          img(src="@/assets/curso/tema3/6.png", alt="" data-aos="zoom-in-down")

    .bg-terciario-t20.p-4.py-3.rounded-4.z-2
      .row.justify-content-center.align-items-center
        .col-lg-11
          p.mb-4.mb-lg-0 Un plan de acción no finaliza con la programación de las actividades; requiere seguimiento periódico, evaluación de resultados y retroalimentación para garantizar la mejora continua. En este sentido, la experiencia documentada en los establecimientos penitenciarios muestra que los instrumentos de evaluación generan planes de mejora a los cuales posteriormente se realiza seguimiento, permitiendo verificar la implementación de las medidas correctivas (MSPS, 2024). De esta manera, el personal sanitario y administrativo puede utilizar el plan de acción como una herramienta práctica para organizar, ejecutar, verificar y mejorar la respuesta institucional frente a los brotes epidemiológicos. 
        .col-lg-1
          figure
            img.imgw-50(src="@/assets/curso/tema2/5.png", alt="" data-aos="zoom-in-down")

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Implementación de acciones de mejora y capacitación

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/7.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La implementación de acciones de mejora y capacitación constituye la etapa en la que las oportunidades de mejora identificadas durante la evaluación se convierten en acciones concretas para fortalecer la prevención, vigilancia y control de los brotes epidemiológicos en los Establecimientos de Reclusión del Orden Nacional (ERON). Para ello, es necesario desarrollar las acciones definidas en el plan de mejora, estableciendo responsables, tiempos, recursos y mecanismos de seguimiento que permitan verificar su cumplimiento. 
        .bg-terciario.p-4.py-3.rounded-4
          p.mb-0 El Ministerio de Salud y Protección Social señala la importancia de fortalecer la educación para la salud sobre enfermedades con riesgo de generar brotes y de actualizar al personal asistencial frente a estas enfermedades, promoviendo además la articulación con las autoridades sanitarias responsables de la prevención y control (Ministerio de Salud y Protección Social [MSPS], 2024). 
  
    p.mb-4.z-2 La capacitación debe responder a las brechas reconocidas en los procesos de identificación, manejo, mitigación y control y estar dirigida tanto al personal sanitario como al personal administrativo que participa en la gestión del establecimiento. Los contenidos pueden incluir:  

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-8
        SlyderF(columnas="col-xl-6")
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema3/8.svg' alt='')
            h5.text-center Reconocimiento temprano de signos y síntomas 
            p.mb-0.text-center Identificar oportunamente manifestaciones clínicas que puedan indicar la presencia de una enfermedad transmisible, facilitando la valoración inicial, la adopción de medidas preventivas y la activación de la atención correspondiente.
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema3/9.svg' alt='')
            h5.text-center Notificación oportuna 
            p.mb-0.text-center Comunicar de manera inmediata o dentro de los tiempos establecidos los casos o situaciones identificadas, utilizando los canales definidos para activar la vigilancia epidemiológica y orientar las acciones de respuesta. 
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema3/10.svg' alt='')
            h5.text-center Aplicación de guías y protocolos 
            p.mb-0.text-center Utilizar correctamente las orientaciones y procedimientos establecidos para la identificación, atención, seguimiento y control de los eventos, favoreciendo una actuación organizada y coherente entre los responsables. 
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema3/11.svg' alt='')
            h5.text-center Medidas de aislamiento 
            p.mb-0.text-center Aplicar acciones destinadas a separar temporalmente los casos que lo requieran, disminuyendo el contacto con otras personas y contribuyendo a interrumpir posibles cadenas de transmisión dentro del establecimiento. 
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema3/12.svg' alt='')
            h5.text-center Manejo de factores de riesgo 
            p.mb-0.text-center Reconocer e intervenir las condiciones individuales, sanitarias, ambientales e institucionales que puedan favorecer la aparición o propagación de enfermedades, priorizando medidas de prevención y control según los riesgos identificados. 
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema3/13.svg' alt='')
            h5.text-center Rutas institucionales de comunicación y respuesta 
            p.mb-0.text-center Reconocer los canales, responsables y procedimientos establecidos para comunicar situaciones epidemiológicas, coordinar acciones y activar oportunamente la respuesta entre las áreas y entidades involucradas.
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema3/14.svg' alt='')
            h5.text-center Higiene de manos 
            p.mb-0.text-center Realizar adecuadamente el lavado o la higiene de manos en los momentos requeridos, como práctica fundamental para disminuir la transmisión de microorganismos entre personas, superficies y espacios del establecimiento. 
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema3/15.svg' alt='')
            h5.text-center Limpieza y desinfección 
            p.mb-0.text-center Aplicar procedimientos adecuados para retirar suciedad y reducir la presencia de microorganismos en superficies, equipos y espacios, de acuerdo con su nivel de riesgo y los protocolos establecidos. 
      .col-lg-4.d-none.d-lg-block
        figure
          img.imgw-324(src='@/assets/curso/tema3/16.png', alt='')

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/17.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p El lineamiento identifica fallas en los procesos de limpieza y desinfección y propone como acciones de mejora fortalecer estos procesos y realizar capacitación al personal y a la población privada de la libertad para mejorar las condiciones del entorno (MSPS, 2024) 
        .bg-terciario.p-4.py-3.rounded-4
          p.mb-0 La implementación de las acciones de mejora también requiere fortalecer la capacidad institucional para utilizar la información epidemiológica en la toma de decisiones. El análisis de los brotes debe permitir reconocer las causas de las situaciones identificadas, establecer medidas correctivas y verificar posteriormente si estas fueron efectivas.  

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p El Ministerio de Salud y Protección Social señala que la caracterización incompleta de algunos brotes limita la disponibilidad de información para prevenir nuevos eventos, por lo cual plantea fortalecer el análisis de los brotes y la toma de decisiones con base en la información analizada. Asimismo, se identifican dificultades relacionadas con la articulación entre los establecimientos y las secretarías de salud, aspecto frente al cual se recomienda trabajar coordinadamente con las autoridades sanitarias (MSPS, 2024). 
        .bg-secundario-s10.p-4.py-3.rounded-4
          p.mb-0 Finalmente, la implementación debe acompañarse de seguimiento, evaluación y retroalimentación, de manera que la capacitación y las acciones de mejora no se desarrollen como actividades aisladas, sino como parte de un proceso continuo de fortalecimiento institucional. De esta manera, el personal sanitario y administrativo puede participar activamente en el siguiente ciclo:  
      .col-sm-8.col-lg-5.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/18.png", alt="")
    
    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Ciclo de atención frente a eventos epidemiológicos
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema3/19-mob.png", alt="La figura muestra un ciclo continuo de mejora orientado a fortalecer la respuesta institucional frente a eventos epidemiológicos. Mediante una secuencia organizada, muestra cómo el análisis de las situaciones permite establecer mejoras, fortalecer las capacidades del personal, desarrollar las acciones previstas y comprobar sus resultados. La conexión entre las etapas evidencia que el proceso se retroalimenta continuamente, facilitando la identificación de nuevas necesidades y la realización de ajustes que favorecen una respuesta más oportuna, coordinada y efectiva ")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema3/19.png", alt="La figura muestra un ciclo continuo de mejora orientado a fortalecer la respuesta institucional frente a eventos epidemiológicos. Mediante una secuencia organizada, muestra cómo el análisis de las situaciones permite establecer mejoras, fortalecer las capacidades del personal, desarrollar las acciones previstas y comprobar sus resultados. La conexión entre las etapas evidencia que el proceso se retroalimenta continuamente, facilitando la identificación de nuevas necesidades y la realización de ajustes que favorecen una respuesta más oportuna, coordinada y efectiva ")
        
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Seguimiento al cumplimiento del plan de acción

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/20.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p El seguimiento al cumplimiento del plan de acción permite verificar de manera sistemática si las actividades definidas para atender las brechas y oportunidades de mejora están siendo ejecutadas de acuerdo con los responsables, tiempos y condiciones establecidos. En los Establecimientos de Reclusión del Orden Nacional (ERON), este seguimiento debe estar articulado con las acciones de prevención, vigilancia y control de enfermedades transmisibles y con la información obtenida durante el análisis de los eventos epidemiológicos.
        .bg-terciario.p-4.py-3.rounded-4
          p El Ministerio de Salud y Protección Social plantea la necesidad de fortalecer la toma de decisiones a partir de la información generada por el análisis de los brotes y del seguimiento a la implementación de las acciones definidas, de manera que los resultados obtenidos permitan orientar nuevas intervenciones cuando sea necesario (Ministerio de Salud y Protección Social [MSPS], 2024). 
          p.mb-0 Para realizar este seguimiento es necesario establecer criterios verificables de cumplimiento, tales como:  
          
    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-8
        .bg-slider.p-4.z-2.rounded-1
          SlyderA(tipo="b")
            .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
              h5.mb-4 Actividades ejecutadas 
              p Verificar las acciones desarrolladas y su correspondencia con lo programado.  
              p.mb-0 #[strong Ejemplo:] comprobar que se realizaron las jornadas de limpieza y desinfección establecidas en el plan de acción. 
            .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
              h5.mb-4 Responsables 
              p Comprobar el cumplimiento de las funciones asignadas a las personas, áreas o entidades involucradas.  
              p.mb-0 #[strong Ejemplo:] verificar que el responsable de saneamiento realizó la inspección de los tanques de almacenamiento de agua. 
            .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
              h5.mb-4 Fechas programadas 
              p Comparar los tiempos establecidos con las fechas reales de ejecución para identificar cumplimiento o retrasos.  
              p.mb-0 #[strong Ejemplo:] confirmar que la capacitación sobre prevención de brotes se realizó dentro del plazo definido. 
            .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
              h5.mb-4 Evidencias 
              p Revisar los documentos, registros y soportes que permiten demostrar la ejecución de las acciones programadas.  
              p.mb-0 #[strong Ejemplo:] verificar listas de asistencia, actas, registros de limpieza e informes de las actividades realizadas. 
            .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
              h5.mb-4 Resultados obtenidos 
              p Analizar los avances alcanzados y contrastarlos con los resultados esperados en el plan.  
              p.mb-0 #[strong Ejemplo:] comprobar si las acciones implementadas permitieron mejorar el cumplimiento de los procedimientos de higiene de manos. 
            .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
              h5.mb-4 Dificultades encontradas 
              p Identificar barreras o situaciones que afectaron la ejecución de las acciones y requieren ajustes.  
              p.mb-0 #[strong Ejemplo:] registrar retrasos en una actividad debido a la falta temporal de insumos para limpieza y desinfección. 
      .col-sm-6.col-lg-4.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/21.png", alt="")

    p.mb-4.z-2 El seguimiento debe permitir determinar si las acciones previstas realmente se están implementando y si responden a las necesidades identificadas.  

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Entre las acciones que pueden ser objeto de verificación se encuentran la disponibilidad de un espacio para aislamiento, la continuidad y calidad del agua para consumo humano, el mantenimiento de los tanques, las condiciones sanitarias de la infraestructura y el cumplimiento de los protocolos de limpieza y desinfección en áreas comunes, celdas, áreas de sanidad y espacios de aislamiento (MSPS, 2024).

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-7
        .bg-primario-p10.p-4.py-3.rounded-4
          p De esta manera, el seguimiento permite pasar de una revisión documental a la comprobación de que las medidas previstas están produciendo cambios concretos en las condiciones sanitarias del establecimiento. 
          p.mb-0 El seguimiento también debe incorporar la vigilancia de los casos y eventos epidemiológicos, verificando que la información sea registrada, notificada y actualizada oportunamente.  
      .col-sm-8.col-lg-5.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/23.png", alt="")
    
    .row.justify-content-center.align-items-center.mb-4
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/24.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La documentación establece la importancia de realizar la notificación de los casos en el SIVIGILA de acuerdo con las definiciones de caso y los protocolos de vigilancia del Instituto Nacional de Salud (INS), así como efectuar el seguimiento de los casos confirmados hasta su estado final, recuperación u otro desenlace, conforme a las orientaciones vigentes del Ministerio de Salud y Protección Social, el INS y la Organización Mundial de la Salud (OMS) (MSPS, 2024). 
        .bg-terciario-t20.p-4.py-3.rounded-4
          p.mb-0 Además, las secretarías de salud tienen entre sus responsabilidades orientar y verificar el cumplimiento de las acciones, capacitar al personal de los ERON, apoyar las actividades requeridas y articular el trabajo con los responsables de los establecimientos, fortaleciendo así el seguimiento interinstitucional (MSPS, 2024). 

    p.mb-0 Finalmente, el seguimiento debe generar retroalimentación y toma de decisiones, especialmente cuando se identifiquen retrasos, incumplimientos o resultados diferentes a los esperados. Un hallazgo durante el seguimiento no debe entenderse únicamente como un incumplimiento, sino como una oportunidad para ajustar el plan, redefinir responsables, fortalecer la capacitación o gestionar los recursos requeridos. En este sentido, el seguimiento de los planes de mejora debe mantenerse como un proceso continuo que permita verificar avances y orientar nuevas acciones.  

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Evaluación del seguimiento al cumplimiento del plan de acción

    img(src="@/assets/curso/tema3/25.png", alt="", data-aos="zoom-in-down")  
    .row.justify-content-center.z-2
      .col-lg-10.p-4
        div.banner-text.shadow.bg-primario-p20.mb-3
          p.mb-0 La evaluación de la ejecución y de los resultados del plan de acción permite determinar si las actividades programadas fueron implementadas de acuerdo con lo establecido y si estas contribuyeron efectivamente a controlar el evento epidemiológico. En los Establecimientos de Reclusión del Orden Nacional (ERON), esta evaluación debe considerar tanto el cumplimiento de las acciones previstas como los cambios observados en la situación epidemiológica y sanitaria.  

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-7
        p Para evaluar la ejecución, es necesario comparar las actividades programadas con las actividades efectivamente realizadas, verificando aspectos como responsables, tiempos, recursos, evidencias y nivel de cumplimiento. Esta revisión debe incluir las diferentes acciones implementadas durante la respuesta al brote, entre ellas la búsqueda activa comunitaria e institucional, las intervenciones dirigidas a los factores de riesgo, las acciones para disminuir la vulnerabilidad y las medidas de cuarentena cuando sean requeridas.  
        .bg-terciario-t20.p-4.py-3.rounded-4.mb-4.mb-lg-0
          p.mb-0 La evaluación debe permitir identificar actividades cumplidas, parcialmente cumplidas o no ejecutadas y establecer las razones que expliquen las desviaciones encontradas. De esta manera, el personal sanitario y administrativo puede determinar si las dificultades estuvieron relacionadas con recursos, coordinación, capacidades institucionales, condiciones ambientales u otros factores que requieran intervención (MSPS, 2016).  
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/26.png", alt="")
    
    p.mb-4.z-2 La evaluación de los resultados debe orientarse a determinar si las acciones implementadas produjeron el efecto esperado sobre el evento epidemiológico. Para ello, pueden analizarse los siguientes indicadores:

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.mb-4.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 3.
          span Aspectos para considerar en la formulación de planes de mejora
        .tabla-a.color-acento-contenido.tabla-a--text-left
          table
            thead
              tr(style="background-color: #DDEEE7")
                th Indicador 
                th Concepto / qué permite evaluar 
                th Cálculo 
                th Ejemplo aplicado 
            tbody
              tr(style="background-color: #EDF6F2")
                td #[strong Aparición de nuevos casos] 
                td Permite identificar cuántos casos nuevos relacionados con el evento epidemiológico se presentan durante un periodo determinado y observar si su aparición aumenta, disminuye o se mantiene. 
                td Número de casos nuevos registrados en el periodo. También puede compararse con el periodo anterior. 
                td 
                  p.mb-0 Semana 1: 12 casos nuevos.  
                  p.mb-0 Semana 2: 7.  
                  p.mb-0 Semana 3: 3.  
                  p.mb-0 #[strong Resultado]: se observa disminución progresiva. 
              tr
                td #[strong Evolución de los casos identificados] 
                td Permite conocer el estado y evolución de las personas afectadas, considerando los casos que continúan activos, se recuperan, requieren atención adicional o presentan otro desenlace. 
                td (Casos con evolución favorable ÷ total de casos en seguimiento) × 100 
                td 
                  p.mb-0 18 de 20 casos presentan evolución favorable:  
                  p.mb-0 (18 ÷ 20) × 100 = #[strong 90 %]. 
              tr(style="background-color: #EDF6F2")
                td #[strong Cumplimiento de las medidas de control] 
                td Determina el grado de ejecución de las medidas previstas para controlar el evento, como aislamiento, limpieza, desinfección, seguimiento de contactos u otras intervenciones establecidas. 
                td (Medidas ejecutadas ÷ medidas programadas) × 100 
                td 
                  p.mb-0 Se programaron 10 medidas y se ejecutaron 9:  
                  p.mb-0 (9 ÷ 10) × 100 = #[strong 90 % de cumplimiento]. 
              tr
                td #[strong Modificación de los factores de riesgo]
                td Permite establecer cuántos factores de riesgo identificados fueron corregidos, reducidos o intervenidos mediante las acciones desarrolladas durante la implementación del plan. 
                td (Factores intervenidos satisfactoriamente ÷ factores priorizados) × 100. 
                td 
                  p.mb-0 Se priorizaron 8 factores de riesgo y 6 fueron intervenidos:  
                  p.mb-0 #[strong (6 ÷ 8) × 100 = 75 %]. 
              tr(style="background-color: #EDF6F2")
                td #[strong Condiciones para declarar el control del evento]
                td Permite verificar el cumplimiento de los criterios técnicos establecidos para considerar que el evento se encuentra controlado, según sus características y los lineamientos aplicables. 
                td (Criterios cumplidos ÷ criterios establecidos) × 100.  
                td 
                  p.mb-0 Si el protocolo establece 5 criterios y se cumplen los 5:  
                  p.mb-0 #[strong (5 ÷ 5) × 100 = 100 %]. Posteriormente se verifica si procede declarar el control. 

    p.mb-4.z-2 Finalmente, los resultados de la evaluación deben utilizarse para tomar decisiones, retroalimentar el plan y fortalecer la respuesta institucional. Si se identifican acciones insuficientes, resultados no esperados o factores de riesgo que permanecen sin controlar, será necesario ajustar las estrategias, definir nuevas actividades, fortalecer la capacitación o gestionar los recursos requeridos.

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-5
        .bg-secundario-s5.p-4.py-3.rounded-4.mb-4.mb-lg-0
          p.mb-0 La Organización Mundial de la Salud plantea que la preparación y respuesta frente a enfermedades infecciosas en establecimientos penitenciarios debe sustentarse en evidencia y en la evaluación de las intervenciones, fortaleciendo además la vigilancia, la capacitación y la conexión con los sistemas de salud externos (World Health Organization [WHO], 2023). En este sentido, la evaluación del plan de acción debe cerrar un ciclo de planificar → ejecutar → verificar → evaluar → ajustar, convirtiéndose en una herramienta para la mejora continua de la prevención, mitigación y control de brotes epidemiológicos en los ERON. 
      .col-lg-7
        .bg-audio.rounded-4.px-4.py-4.py-lg-0
          .row.align-items-center.justify-content-center
            .col-8.col-sm-4
              figure
                img.imgw-190.mb-4.mb-sm-0(src="@/assets/curso/common/mic.png", alt="")
            .col-sm-8.col-lg-8
              p A continuación, se invita a ir al siguiente podcast: 
              TarjetaAudio.mb-3(
                texto="Técnicas de corte profesional precisión estética y seguridad en la cocina fría"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

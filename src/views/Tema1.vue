<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Verificación y seguimiento de la respuesta ante brotes

    img(src="@/assets/curso/tema1/1.png", alt="", data-aos="zoom-in-down")  
    .row.justify-content-center.z-2
      .col-lg-10.p-4
        div.banner-text.shadow.bg-primario-p20.mb-3
          p.mb-0 La atención de un brote epidemiológico no finaliza con la implementación de las medidas iniciales de intervención y control. Es necesario mantener una observación sistemática de las acciones desarrolladas, los cambios en el comportamiento del evento y los resultados obtenidos.  
    
    .row.justify-content-center
      .col-xl-10
        .bg-terciario.p-4.py-3.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-10
              p.mb-4.mb-lg-0 Este proceso facilita reconocer avances, identificar situaciones que requieren ajustes y disponer de información para orientar decisiones oportunas, fortalecer la coordinación institucional y contribuir a la protección de la salud colectiva en los establecimientos penitenciarios. 
            .col-lg-2
              figure
                img.imgw-85(src="@/assets/curso/tema1/2.png", alt="" data-aos="zoom-in-down")

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Mesas de seguimiento intersectoriales

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Las mesas de seguimiento intersectoriales constituyen un mecanismo de articulación entre las instituciones y actores responsables de la vigilancia y respuesta en salud pública frente a eventos de interés en salud pública (EISP) y brotes epidemiológicos en los establecimientos de reclusión.  
        .bg-secundario-s10.p-4.py-3.rounded-4
          p.mb-0 Estos espacios permiten analizar de manera conjunta la información disponible, revisar el comportamiento del evento, verificar las acciones desarrolladas y establecer compromisos entre los diferentes actores involucrados. En el contexto penitenciario, la articulación puede involucrar al INPEC, la USPEC, las entidades territoriales de salud y otros actores del sector salud, de acuerdo con las características y necesidades del evento (Ministerio de Salud y Protección Social [MSPS], s. f.). 

    .row.justify-content-center
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 1.
          span Tipos de canales de distribución 
        .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
          table
            thead
              tr(style="background-color: #DDEEE7")
                th Aspecto 
                th(colspan="2") Definición 
                th(colspan="2") Ejemplo 
            tbody
              tr
                td #[strong Seguimiento de la notificación]
                td(colspan="2") Verificar que los casos y eventos identificados hayan sido reportados oportunamente, comprobando la actualización de la información, el cumplimiento de los procedimientos establecidos y la continuidad de la comunicación entre los actores responsables. 
                td(colspan="2") Confirmar que un caso sospechoso de tuberculosis haya sido notificado y que su información se actualice conforme avance la investigación.
              tr(style="background-color: #EDF6F2")
                td #[strong Investigación y análisis de los brotes]
                td(colspan="2") Examinar sistemáticamente la información epidemiológica para establecer las características, magnitud, distribución y evolución del brote, identificando posibles fuentes, mecanismos de transmisión y relaciones entre los casos que orienten las decisiones de control. 
                td(colspan="2") Analizar varios casos de enfermedad respiratoria presentados en un pabellón para establecer cuándo comenzaron, dónde se concentran y si existe relación entre ellos. 
              tr
                td #[strong Revisión de los factores de riesgo identificados]
                td(colspan="2") Analizar periódicamente las condiciones individuales, colectivas, ambientales y sanitarias relacionadas con la aparición o propagación del brote, verificando su permanencia, disminución o aparición de nuevos riesgos que requieran ajustar las intervenciones. 
                td(colspan="2") Verificar si continúan condiciones como ventilación insuficiente, hacinamiento o contacto cercano después de implementar las primeras medidas de control. 
              tr(style="background-color: #EDF6F2")
                td #[strong Revisión de las estrategias implementadas para el control]
                td(colspan="2") Valorar las medidas aplicadas durante la respuesta al brote para determinar su cumplimiento y resultados, identificando dificultades y oportunidades de ajuste que permitan fortalecer las acciones de prevención, intervención y control. 
                td(colspan="2") Revisar si el aislamiento de casos, la búsqueda de contactos y el fortalecimiento de la higiene contribuyeron a disminuir la aparición de nuevos casos. 

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        .bg-terciario-t20.p-4.py-3.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-10
              p.mb-4.mb-lg-0 La información generada durante la vigilancia permite valorar la magnitud y evolución de los eventos, detectar cambios en sus patrones de ocurrencia y orientar las medidas de prevención y control. Asimismo, el análisis puede realizarse mediante Comités de Vigilancia Epidemiológica o unidades de análisis convocadas por las secretarías de salud, con participación de las entidades y funcionarios relacionados con la situación epidemiológica (MSPS, s. f.). 
            .col-lg-2
              figure
                img.imgw-105(src="@/assets/curso/tema1/4.png", alt="" data-aos="zoom-in-down")

    .row.justify-content-center.align-items-center
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p En este sentido, las mesas de seguimiento no deben limitarse a informar sobre las actividades realizadas, sino que deben permitir verificar el cumplimiento de los compromisos, identificar dificultades, establecer acciones correctivas y fortalecer la respuesta institucional.  
        .bg-terciario.p-4.py-3.rounded-4
          p.mb-0 El lineamiento establece mecanismos de implementación y seguimiento en los que participan las secretarías de salud, el INPEC y la USPEC, y señala al director del ERON como responsable de organizar la implementación y seguimiento del lineamiento en el establecimiento. De esta manera, estos espacios contribuyen a fortalecer la coordinación intersectorial, mejorar el flujo de información y favorecer la toma de decisiones oportunas frente a los brotes epidemiológicos (MSPS, s. f.) 

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Revisión de guías, lineamientos y protocolos

    .row.justify-content-center.align-items-center.mb-3
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/6.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p La intervención y el control de los brotes epidemiológicos en entornos penitenciarios requieren revisar periódicamente los documentos técnicos que orientan las actuaciones frente a los eventos de interés en salud pública. Esta revisión permite verificar que las actividades de identificación, atención, notificación, investigación, prevención, control y seguimiento se desarrollen de manera organizada y conforme con las orientaciones establecidas para cada evento.   
        .bg-secundario-s10.p-4.py-3.rounded-4
          p.mb-0 En este proceso, no basta con comprobar la existencia de guías, lineamientos y protocolos; también es necesario analizar su aplicación en las condiciones particulares de los establecimientos penitenciarios. Esto implica reconocer las responsabilidades de los actores involucrados, verificar el cumplimiento de los procedimientos y detectar dificultades, desviaciones o necesidades de ajuste que puedan afectar la respuesta institucional. 

    p.mb-4.mb-lg-5 La revisión de guías, lineamientos y protocolos puede desarrollarse mediante una secuencia organizada que facilite comprobar su aplicación durante la respuesta ante un brote. Para ello, se plantean cuatro momentos que permiten orientar la revisión, reconocer oportunidades de mejora y fortalecer las actuaciones realizadas en el establecimiento penitenciario. 

    .row.justify-content-center.align-items-center
      .col-lg-8
        TabsA.color-acento-botones.custom-tabs--1.mb-4.mb-lg-0
          .tarjeta.p-4.bg-secundario-s5.py-5(titulo="Identificar")
            p.mb-0 Reconocer la guía, lineamiento o protocolo aplicable al evento epidemiológico, considerando sus características, alcance y propósito, así como las orientaciones que deben tenerse en cuenta durante la respuesta institucional. 
          .tarjeta.p-4.bg-secundario-s5.py-5(titulo="Verificar")
            p.mb-0 Comparar las acciones realizadas en el establecimiento penitenciario con los procedimientos, criterios y responsabilidades establecidos en el documento técnico, con el propósito de reconocer su nivel de cumplimiento. 
          .tarjeta.p-4.bg-secundario-s5.py-5(titulo="Analizar")
            p.mb-0 Examinar los resultados de la verificación para identificar fortalezas, dificultades, incumplimientos o desviaciones que puedan afectar la oportunidad y efectividad de las acciones implementadas frente al brote. 
          .tarjeta.p-4.bg-secundario-s5.py-5(titulo="Ajustar")
            p.mb-0 Definir las modificaciones o acciones de mejora necesarias frente a las situaciones identificadas, procurando fortalecer los procedimientos, corregir dificultades y favorecer una respuesta más efectiva ante el evento epidemiológico. 
      .col-sm-6.col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/7.png", alt="" data-aos="zoom-in-down")

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Seguimiento de los Eventos de Interés en Salud Pública (EISP)

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El seguimiento de los Eventos de Interés en Salud Pública (EISP) constituye un componente esencial de la vigilancia epidemiológica en los establecimientos penitenciarios, debido a las condiciones particulares de convivencia, concentración poblacional y vulnerabilidad que pueden favorecer la aparición y propagación de enfermedades transmisibles.  

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-7
        p En este contexto, los EISP comprenden aquellos eventos que, por su frecuencia, gravedad, comportamiento epidemiológico, posibilidades de prevención o impacto colectivo, requieren vigilancia, notificación, análisis y, cuando corresponda, intervención por parte de las autoridades sanitarias y demás actores responsables. (Ministerio de Salud y Protección Social [MSPS], 2024).
        .bg-terciario-t5.p-4.py-3.rounded-4
          p.mb-0 Su desarrollo requiere mantener actualizada la información de los casos identificados, realizar seguimiento a las personas afectadas y sus contactos cuando corresponda, analizar la evolución del evento y verificar la continuidad de las medidas establecidas. Asimismo, facilita reconocer oportunamente la aparición de nuevos casos, cambios en los factores de riesgo o situaciones que puedan favorecer la transmisión. 
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/9.png", alt="")
    
    .bg-secundario-s10.p-4.py-2.rounded-5
      p.mb-0.text-center Dentro de las acciones principales tenemos:

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

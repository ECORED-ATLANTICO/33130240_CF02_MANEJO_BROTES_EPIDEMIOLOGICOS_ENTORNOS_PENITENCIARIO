<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-3
      .col-sm-6.col-xl-4
        figure
          img.mb-4.mb-xl-0(src="@/assets/curso/intro.png", alt="" data-aos="zoom-in-down")
      .col-xl-8
        p El componente formativo Intervención, control, seguimiento y mejora de brotes epidemiológicos en entornos penitenciarios; permite verificar y evaluar la aplicación de las acciones de identificación, manejo, mitigación y control de brotes epidemiológicos en los Establecimientos de Reclusión del Orden Nacional (ERON), teniendo en cuenta los lineamientos, guías y protocolos establecidos. 
        .bg-terciario-t5.p-4.py-3.rounded-4.mb-3
          p.mb-0 Se abordarán las acciones de seguimiento y verificación mediante mesas intersectoriales, la revisión del cumplimiento de protocolos, el seguimiento de los Eventos de Interés en Salud Pública (EISP) y la valoración de las acciones implementadas frente a los brotes. Estos procesos requieren articulación entre los diferentes actores involucrados en la vigilancia y respuesta en salud pública, así como el análisis oportuno de la información generada durante la atención del evento 
        p.mb-0 A través del desarrollo de estos conocimientos, se fortalecerán las capacidades para analizar los resultados de las acciones implementadas, identificar brechas y oportunidades de mejora y formular planes de acción orientados al fortalecimiento de la respuesta institucional. Asimismo, se promoverá el seguimiento de los compromisos, la capacitación de los actores involucrados y la evaluación de la ejecución de las acciones de mejora. 
    
    .bg-primario-p10.p-4.py-3.rounded-4
      p.mb-0 De esta manera, el componente busca favorecer un proceso de verificación, actuación y mejora continua, que permita fortalecer la capacidad de respuesta frente a los brotes epidemiológicos y contribuir a la protección de la salud de la población privada de la libertad, de acuerdo con los lineamientos del sistema de vigilancia en salud pública. 








    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

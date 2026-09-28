<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Intervención, control, seguimiento y mejora de brotes epidemiológicos en entornos penitenciarios desarrolla un proceso continuo para verificar, evaluar y mejorar la respuesta institucional frente a los brotes epidemiológicos en los Establecimientos de Reclusión del Orden Nacional (ERON). En primer lugar, se fortalecen las mesas de seguimiento intersectoriales, la revisión de guías, lineamientos y protocolos y el seguimiento de los Eventos de Interés en Salud Pública (EISP). 

    p Estas acciones permiten verificar la identificación del evento, la notificación, la implementación de medidas de prevención, control y mitigación, el seguimiento de casos y contactos, así como la evaluación y cierre del evento. Posteriormente, se realiza la evaluación de la respuesta mediante la valoración de la aplicación de las guías y protocolos y el análisis de los resultados obtenidos. Este proceso permite determinar el nivel de cumplimiento de las acciones, reconocer fortalezas, identificar brechas y establecer oportunidades de mejora. 

    p.mb-4.mb-lg-5 A partir de los hallazgos se priorizan las acciones de mejoramiento y se formula un plan de acción. Este debe definir las actividades, responsables, tiempos, recursos y mecanismos de seguimiento necesarios para responder a las necesidades identificadas. La implementación incluye acciones de mejora y capacitación dirigidas a fortalecer las capacidades. Finalmente, el plan requiere seguimiento y evaluación para verificar su cumplimiento y determinar la efectividad de las acciones implementadas. La comparación entre lo programado y lo ejecutado permite identificar desviaciones, realizar ajustes y generar retroalimentación.
    

    .row.justify-content-center
      .col-lg-11.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

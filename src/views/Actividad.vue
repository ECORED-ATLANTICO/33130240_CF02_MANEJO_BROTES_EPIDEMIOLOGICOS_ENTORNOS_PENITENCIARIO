<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Intervención, control, seguimiento y mejora de brotes epidemiológicos en entornos penitenciarios',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la apropiación de los conceptos y procedimientos relacionados con la Intervención, control, seguimiento y mejora de brotes epidemiológicos en entornos penitenciarios',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los principales propósitos de las mesas de seguimiento intersectoriales frente a un brote epidemiológico?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir los procedimientos de vigilancia epidemiológica establecidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Analizar conjuntamente la información, verificar las acciones y establecer compromisos entre los actores involucrados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Concentrar la toma de decisiones exclusivamente en el personal asistencial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Limitar el seguimiento a la elaboración de informes posteriores al brote.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las mesas intersectoriales facilitan la articulación, el análisis conjunto, la verificación de acciones y el establecimiento de compromisos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Durante la revisión de una guía o protocolo, ¿qué implica el momento denominado “Verificar”?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Modificar inmediatamente el protocolo cuando se presenta un nuevo caso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar únicamente el nombre del documento aplicable al evento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Examinar exclusivamente los resultados epidemiológicos obtenidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Comparar las acciones realizadas con los procedimientos, criterios y responsabilidades establecidos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Verificar implica contrastar las acciones ejecutadas con lo establecido en los documentos técnicos para reconocer su nivel de cumplimiento.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes acciones corresponde al seguimiento de los Eventos de Interés en Salud Pública (EISP)?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener actualizada la información de los casos y analizar la evolución del evento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Suspender la vigilancia una vez se hayan implementado las primeras medidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registrar únicamente los casos que requieren hospitalización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Esperar el cierre del evento para analizar los factores de riesgo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El seguimiento de los EISP requiere información actualizada y análisis continuo de su comportamiento.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Mediante qué sistema se realiza la notificación formal de los eventos identificados, según el componente formativo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'RIPS.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'ERON.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'SIVIGILA.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'USPEC.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La notificación formal de los eventos se realiza mediante el Sistema de Vigilancia en Salud Pública (SIVIGILA).',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué debe comprobarse durante la caracterización de una situación epidemiológica?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente la disponibilidad de personal asistencial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La recopilación y análisis de información sobre personas afectadas, tiempo, lugar y comportamiento de los casos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Exclusivamente la cantidad de recursos financieros disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Solo el cumplimiento de las actividades administrativas del establecimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los elementos que permiten comprender la magnitud y evolución de una situación epidemiológica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Al valorar la aplicación de guías y protocolos, ¿cuál de los siguientes aspectos debe verificarse?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La antigüedad laboral del personal del establecimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La clasificación de seguridad asignada al ERON.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El número total de dependencias administrativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La notificación, investigación del brote, seguimiento de casos y aplicación de medidas de prevención y control.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Identifica aspectos fundamentales que deben considerarse al valorar la aplicación de guías y protocolos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué permite determinar la evaluación de los resultados de las acciones implementadas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Si las medidas adoptadas contribuyeron a disminuir los eventos y a interrumpir las cadenas de transmisión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Si deben eliminarse los procedimientos de vigilancia existentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Si las funciones sanitarias pueden trasladarse exclusivamente al personal administrativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Si puede suspenderse el seguimiento de los factores de riesgo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La evaluación permite establecer los efectos de las acciones sobre la ocurrencia de eventos y las cadenas de transmisión.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'En los eventos relacionados con enfermedades transmitidas por alimentos (ETA), ¿cuál fue el principal factor de riesgo identificado en el componente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Deficiencias en las redes hidrosanitarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Condiciones relacionadas con la infraestructura administrativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Manejo higiénico de los alimentos por parte del operador.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Falta de espacios destinados al aislamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El manejo higiénico de los alimentos por parte del operador representa el principal factor señalado para los eventos relacionados con ETA.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de las siguientes situaciones representa una brecha que puede requerir una oportunidad de mejora?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ejecución completa de las acciones previstas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La persistencia de condiciones estructurales y ambientales que favorecen la aparición de brotes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El cumplimiento oportuno de los protocolos establecidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La disminución sostenida de los factores de riesgo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha reconocido que las condiciones estructurales y ambientales persistentes pueden constituir brechas que requieren intervención.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué finalidad tiene el seguimiento semestral como mecanismo para identificar brechas y oportunidades de mejora?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir las reuniones entre las entidades involucradas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Realizar exclusivamente el registro de nuevos casos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Finalizar automáticamente los planes de mejora existentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Verificar periódicamente el cumplimiento, los resultados y las dificultades de las acciones implementadas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El seguimiento semestral permite revisar avances, resultados y dificultades para establecer los ajustes necesarios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de las siguientes acciones corresponde a la prioridad de prevención y preparación frente a brotes?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fortalecer la higiene de manos, la vacunación, la educación en salud y la disponibilidad de espacios para aislamiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Esperar la aparición de nuevos casos antes de iniciar acciones preventivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Concentrar las intervenciones únicamente en modificaciones de infraestructura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Suspender la capacitación mientras no exista un brote activo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha identificado acciones orientadas a proteger la salud y fortalecer la preparación frente a posibles eventos epidemiológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'Al elaborar un plan de acción, ¿qué debe considerarse para que las acciones propuestas sean viables y acordes con el contexto del ERON?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el número de casos registrados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exclusivamente los recursos financieros disponibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las características del establecimiento, su infraestructura, capacidad instalada, recursos y condiciones sanitarias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Solamente las actividades realizadas durante el último brote.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las condiciones particulares del establecimiento deben considerarse al formular acciones de mejora viables.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de los siguientes elementos establece el resultado concreto que se espera alcanzar mediante un plan de acción?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recursos requeridos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Objetivo de mejora.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Responsables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mecanismos de seguimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha identificado que el objetivo de mejora establece el resultado concreto, viable y verificable que se pretende alcanzar.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es la función de las evidencias dentro del seguimiento de un plan de acción?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazar los indicadores establecidos para evaluar el plan.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Determinar exclusivamente los recursos financieros utilizados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Definir las responsabilidades antes de iniciar las actividades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Demostrar mediante documentos, registros u otros soportes la ejecución y los resultados de las acciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Las evidencias permiten comprobar objetivamente la ejecución y los resultados de las acciones desarrolladas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál debe ser el propósito principal de la capacitación implementada como parte de las acciones de mejora?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fortalecer las capacidades frente a las brechas identificadas en la gestión de los brotes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir las acciones de vigilancia y seguimiento epidemiológico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Limitar la intervención al personal encargado de funciones administrativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Realizar actividades independientes de los hallazgos obtenidos durante la evaluación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La capacitación debe responder a las brechas identificadas y fortalecer las capacidades de los actores involucrados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la secuencia del ciclo continuo de mejora presentado en el componente formativo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Capacitar → verificar → identificar → implementar → mejorar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Implementar → identificar → verificar → capacitar → mejorar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Identificar → mejorar → capacitar → implementar → verificar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Verificar → implementar → mejorar → identificar → capacitar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha reconocido la secuencia del ciclo continúo utilizado para fortalecer la respuesta institucional frente a eventos epidemiológicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Durante el seguimiento del plan de acción, ¿qué permite comparar las fechas programadas con las fechas reales de ejecución?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar el número de casos confirmados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar el cumplimiento de los tiempos establecidos o la existencia de retrasos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Establecer automáticamente el cierre del evento epidemiológico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la revisión de las evidencias documentales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Comparar las fechas programadas y reales permite reconocer oportunamente cumplimientos o retrasos en las actividades.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Se programaron 12 medidas de control y se ejecutaron 9. ¿Cuál es el porcentaje de cumplimiento?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '90 %.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '60 %.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '80 %.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '75 %.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha aplicado correctamente el indicador de cumplimiento: (9 ÷ 12) × 100 = 75 %',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'En un ERON se priorizaron 10 factores de riesgo y 8 fueron intervenidos satisfactoriamente. ¿Cuál es el porcentaje de factores intervenidos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '80 %.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '20 %.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '90 %.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '70 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha aplicado correctamente el indicador: (8 ÷ 10) × 100 = 80 % de los factores de riesgo intervenidos satisfactoriamente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Si durante la evaluación del plan se identifican acciones insuficientes o factores de riesgo que permanecen sin controlar, ¿qué debe hacerse?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener el plan sin modificaciones hasta que finalice el periodo establecido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Declarar automáticamente controlado el evento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ajustar las estrategias, definir nuevas actividades, fortalecer la capacitación o gestionar los recursos necesarios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Suspender el seguimiento para formular posteriormente un nuevo plan.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha reconocido que los resultados de la evaluación deben utilizarse para retroalimentar y ajustar el plan, fortaleciendo la mejora continua.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Ha superado la actividad y demuestra una adecuada apropiación de los conocimientos relacionados con la intervención, el control, el seguimiento y la mejora de la respuesta frente a brotes epidemiológicos en entornos penitenciarios.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se recomienda revisar nuevamente los contenidos del componente formativo, especialmente los relacionados con la verificación, evaluación, seguimiento y formulación de acciones de mejora, e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

export default {
  common: {
    loading: "Cargando...",
    error: "Error",
    next: "Siguiente Paso",
    cancel: "Cancelar",
    all: "Todos",
    selected: "seleccionados"
  },
  instances: {
    title: "Selección de Instancias",
    subtitle: "Elige instancias para mensajes masivos",
    filters: {
      all: "Todas",
      baileys: "Baileys",
      business: "Business"
    },
    status: {
      error: {
        title: "Error al cargar instancias",
        unknown: "Error desconocido",
        incomplete_config: "Configuración incompleta"
      }
    },
    selection: {
      count: "{selected} de {total} instancias seleccionadas",
      select_all: "Seleccionar todas",
      deselect_all: "Desmarcar todas"
    },
    instance: {
      type: {
        baileys: "Baileys",
        business: "Business"
      }
    },
    buttons: {
      next: "Siguiente Paso"
    },
    errors: {
      fetch: "Error al cargar instancias. Por favor, intente nuevamente."
    },
    search_placeholder: "Escribe para buscar instancias..."
  },
  contacts: {
    title: "Entrada de Contactos",
    subtitle: "Agrega sus contactos para iniciar mensajes masivos",
    tabs: {
      manual: "Entrada Manual",
      csv: "Importar CSV"
    },
    upload: {
      title: "Haz clic para subir CSV o arrastra y suelta aquí",
      button: "Descargar CSV de Ejemplo"
    },
    manual: {
      placeholder: "Ingresa los contactos (uno por línea)\n\nEjemplo:\n5511999999999, Nombre, Valor 1, Valor 2, Valor 3, Valor 4, Valor 5\n5511999999999, Nombre, Valor 1, Valor 2, Valor 3, Valor 4, Valor 5"
    },
    status: {
      contacts_count: "{count} contactos insertados"
    },
    buttons: {
      next: "Siguiente Paso"
    }
  },
  message: {
    title: "Composición del Mensaje",
    subtitle: "Configura su mensaje para envío masivo",
    form: {
      message: "Mensaje",
      message_placeholder: "Escribe su mensaje...\n\nPuedes usar variables como:\n[name] - Nombre del contacto\n[value1] - Valor personalizado 1\n[value2] - Valor personalizado 2",
      delay: "Intervalo entre mensajes",
      delay_help: "Tiempo de espera entre cada mensaje (en segundos)",
      media: {
        title: "Medios",
        button: "Seleccionar archivo",
        selected: "Archivo seleccionado:",
        remove: "Eliminar",
        help: "Formatos soportados: jpg, jpeg, png, gif, pdf, mp4"
      }
    },
    preview: {
      title: "Vista previa",
      subtitle: "Mira cómo se verá su mensaje",
      sample_contact: "Contacto de ejemplo"
    },
    chatwoot: {
      title: "Configuración de Chatwoot",
      subtitle: "Configura las opciones de integración",
      agents: {
        button: "Seleccionar Agentes",
        title: "Asignación de Agentes",
        subtitle: "Selecciona agentes para asignación automática",
        empty: "No hay agentes disponibles",
        buttons: {
          cancel: "Cancelar",
          save: "Guardar Selección"
        },
        count: "{count} Agente | {count} Agentes"
      },
      labels: {
        button: "Seleccionar Etiquetas",
        title: "Etiquetas",
        subtitle: "Selecciona etiquetas para asignación automática",
        count: "{count} Etiqueta | {count} Etiquetas",
        empty: "No hay etiquetas disponibles",
        empty_subtitle: "Verifique la conexión con la base de datos de Chatwoot",
        buttons: {
          cancel: "Cancelar",
          save: "Guardar Selección"
        }
      }
    },
    typebot: {
      button: "Configurar Typebot",
      title: "Configuración de Typebot",
      subtitle: "Configura la integración con Typebot"
    },
    status: {
      ready: "Listo para iniciar",
      contacts_count: "{count} contactos serán procesados"
    },
    buttons: {
      start: "Iniciar Envío",
      cancel: "Cancelar"
    }
  },
  message_composition: {
    title: "Composición del Mensaje",
    subtitle: "Escribe su mensaje y configura el envío",
    form: {
      message: "Mensaje:",
      message_placeholder: "Escribe su mensaje aquí...",
      available_variables: "{count} variables disponibles",
      available_variables_count: "Variables ({count})",
      add_template: "Agregar Plantilla",
      template_label: "Plantilla",
      media: {
        title: "Enviar imagen o video",
        select_file: "Seleccionar archivo",
        file_selected: "Archivo seleccionado"
      },
      typebot: {
        title: "Configuración de Typebot",
        url: {
          label: "URL del Bot",
          placeholder: "https://bot.oriondesign.art.br",
          error: "Por favor, ingrese una URL válida"
        },
        flow: {
          label: "ID del Flujo",
          placeholder: "flujo-nombre-w1902a",
          error: "ID del Flujo es requerido"
        },
        buttons: {
          cancel: "Cancelar",
          save: "Guardar Configuración"
        }
      },
      agents: {
        title: "Seleccionar Agentes",
        button: "Seleccionar Agentes",
        count: "{count} Agente | {count} Agentes",
        selected: "agentes seleccionados"
      },
      labels: {
        title: "Seleccionar Etiquetas",
        button: "Seleccionar Etiquetas",
        count: "{count} Etiqueta | {count} Etiquetas",
        selected: "etiquetas seleccionadas"
      },
      timing: {
        min_time: "Tiempo Mínimo (segundos)",
        max_time: "Tiempo Máximo (segundos)"
      }
    },
    errors: {
      invalid_url: "Por favor, ingrese una URL válida para el bot",
      file_upload: "Error al subir el archivo",
      unsupported_format: "Formato de archivo no soportado. Solo PNG, JPG, JPEG, MP4 y PDF están permitidos.",
      template_limit: "Puedes agregar un máximo de 3 plantillas de mensaje"
    },
    buttons: {
      send: "Enviar Mensajes"
    },
    variables: {
      help_text: "Variables disponibles (clic para insertar):"
    }
  },
  progress: {
    title: "Progreso del Envío",
    status: {
      starting: "🚀 Iniciando envío...",
      waiting: "⏸️ Esperando {seconds} segundos...",
      sending: "📱 Enviando mensaje a {phone}...",
      retry: "⚠️ Intento {attempt}/3 de enviar mensaje a {phone}...",
      media_success: "✅ Media enviado con éxito a {phone}",
      message_success: "✅ Mensaje enviado con éxito a {phone}",
      chatwoot_start: "🤖 Iniciando proceso en Chatwoot...",
      chatwoot_sync: "⏳ Sincronizando con Chatwoot...",
      chatwoot_agent: "👤 Asignando conversación al agente {name}...",
      chatwoot_labels: "🏷️ Asignando {count} etiqueta{plural}...",
      chatwoot_complete: "✅ Proceso Chatwoot completado",
      canceled: "🚫 Envío cancelado",
      completed: "✨ Envío finalizado",
      error: "❌ Error al iniciar envío"
    },
    stats: {
      pending: "Pendientes",
      sent: "Enviados",
      errors: "Errores",
      total: "Total"
    },
    summary: {
      title: "Resumen del Envío",
      canceled_title: "Envío Cancelado",
      total_messages: "Total de mensajes",
      sent_messages: "Mensajes enviados con éxito",
      error_messages: "Mensajes con error",
      unsent_messages: "Mensajes no enviados",
      success_rate: "Tasa de éxito"
    },
    buttons: {
      cancel: "Cancelar Envío",
      new: "Nuevo Envío",
      download: "Descargar Reporte CSV"
    },
    report: {
      title: "REPORTE DE ENVÍO",
      instances: {
        title: "INSTANCIAS SELECCIONADAS",
        type: {
          baileys: "📱 Baileys",
          business: "✓ Business"
        }
      },
      data: {
        title: "DATOS DEL ENVÍO",
        total_contacts: "Total de Contactos",
        variables_found: "Variables Encontradas"
      },
      content: {
        title: "CONTENIDO",
        template: "Plantilla",
        no_template: "Sin plantilla definida"
      },
      media: {
        title: "MEDIOS",
        status: "Estado",
        status_values: {
          yes: "Sí",
          no: "No"
        },
        file: "Archivo",
        type: "Tipo"
      },
      typebot: {
        title: "TYPEBOT",
        status: "Estado",
        url: "URL",
        bot: "Bot"
      },
      timing: {
        title: "CONFIGURACIÓN DE TIEMPO",
        min: "Mínimo",
        max: "Máximo",
        seconds: "segundos"
      },
      csv: {
        filename: "reporte-envio",
        phone: "Teléfono",
        status: "Estado",
        instance: "Instancia",
        template: "Plantilla",
        message: "Mensaje",
        sent_at: "Enviado en",
        agent: "Agente",
        labels: "Etiquetas"
      }
    }
  }
} 
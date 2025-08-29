export default {
  common: {
    loading: "Loading...",
    error: "Error",
    next: "Next Step",
    cancel: "Cancel",
    all: "All",
    selected: "selected"
  },
  instances: {
    title: "Instance Selection",
    subtitle: "Choose instances for mass messaging",
    filters: {
      all: "All",
      baileys: "Baileys",
      business: "Business"
    },
    status: {
      error: {
        title: "Error loading instances",
        unknown: "Unknown error",
        incomplete_config: "Incomplete configuration"
      }
    },
    selection: {
      count: "{selected} of {total} instances selected",
      select_all: "Select all",
      deselect_all: "Deselect all"
    },
    instance: {
      type: {
        baileys: "Baileys",
        business: "Business"
      }
    },
    buttons: {
      next: "Next Step"
    },
    errors: {
      fetch: "Error loading instances. Please try again."
    },
    search_placeholder: "Type to search instances..."
  },
  contacts: {
    title: "Contact Input",
    subtitle: "Add your contacts to start mass messaging",
    tabs: {
      manual: "Manual Input",
      csv: "Import CSV"
    },
    upload: {
      title: "Click to upload CSV or drag and drop here",
      button: "Download Example CSV"
    },
    manual: {
      placeholder: "Enter contacts (one per line)\n\nExample:\n5511999999999, Name, Value 1, Value 2, Value 3, Value 4, Value 5\n5511999999999, Name, Value 1, Value 2, Value 3, Value 4, Value 5"
    },
    status: {
      contacts_count: "{count} contacts inserted"
    },
    buttons: {
      next: "Next Step"
    }
  },
  message: {
    title: "Message Composition",
    subtitle: "Configure your message for mass sending",
    form: {
      message: "Message",
      message_placeholder: "Type your message...\n\nYou can use variables like:\n[name] - Contact name\n[value1] - Custom value 1\n[value2] - Custom value 2",
      delay: "Message interval",
      delay_help: "Wait time between each message (in seconds)",
      media: {
        title: "Media",
        button: "Select file",
        selected: "Selected file:",
        remove: "Remove",
        help: "Supported formats: jpg, jpeg, png, gif, pdf, mp4"
      }
    },
    preview: {
      title: "Preview",
      subtitle: "See how your message will be displayed",
      sample_contact: "Sample contact"
    },
    chatwoot: {
      title: "Chatwoot Settings",
      subtitle: "Configure integration options",
      agents: {
        button: "Select Agents",
        title: "Agent Assignment",
        subtitle: "Select agents for automatic assignment",
        empty: "No agents available",
        buttons: {
          cancel: "Cancel",
          save: "Save Selection"
        },
        count: "{count} Agent | {count} Agents"
      },
      labels: {
        button: "Select Labels",
        title: "Labels",
        subtitle: "Select labels for automatic assignment",
        count: "{count} Label | {count} Labels",
        empty: "No labels available",
        empty_subtitle: "Check your Chatwoot database connection",
        buttons: {
          cancel: "Cancel",
          save: "Save Selection"
        }
      }
    },
    typebot: {
      button: "Configure Typebot",
      title: "Typebot Configuration",
      subtitle: "Configure Typebot integration"
    },
    status: {
      ready: "Ready to start",
      contacts_count: "{count} contacts will be processed"
    },
    buttons: {
      start: "Start Sending",
      cancel: "Cancel"
    }
  },
  message_composition: {
    title: "Message Composition",
    subtitle: "Write your message and configure the sending",
    form: {
      message: "Message:",
      message_placeholder: "Type your message here...",
      available_variables: "{count} available variables",
      available_variables_count: "Variables ({count})",
      add_template: "Add Template",
      template_label: "Template",
      media: {
        title: "Send image or video",
        select_file: "Select file",
        file_selected: "File selected"
      },
      typebot: {
        title: "Typebot Configuration",
        url: {
          label: "Bot URL",
          placeholder: "https://bot.oriondesign.art.br",
          error: "Please enter a valid URL"
        },
        flow: {
          label: "Flow ID",
          placeholder: "flow-name-w1902a",
          error: "Flow ID is required"
        },
        buttons: {
          cancel: "Cancel",
          save: "Save Configuration"
        },
        button: "Start Typebot",
        added: "Bot added"
      },
      agents: {
        title: "Select Agents",
        button: "Select Agents",
        count: "{count} Agent | {count} Agents",
        selected: "Agents"
      },
      labels: {
        title: "Select Labels",
        button: "Select Labels",
        count: "{count} Label | {count} Labels",
        selected: "selected labels"
      },
      timing: {
        min_time: "Minimum Time (seconds)",
        max_time: "Maximum Time (seconds)"
      }
    },
    errors: {
      invalid_url: "Please enter a valid URL for the bot",
      file_upload: "Error uploading file",
      unsupported_format: "Unsupported file format. Only PNG, JPG, JPEG, MP4 and PDF are allowed.",
      template_limit: "You can add a maximum of 3 message templates"
    },
    buttons: {
      send: "Send Messages"
    },
    variables: {
      help_text: "Available variables (click to insert):"
    }
  },
  progress: {
    title: "Sending Progress",
    status: {
      starting: "🚀 Starting broadcast...",
      waiting: "⏸️ Waiting {seconds} seconds...",
      sending: "📱 Sending message to {phone}...",
      retry: "⚠️ Attempt {attempt}/3 to send message to {phone}...",
      media_success: "✅ Media sent successfully to {phone}",
      message_success: "✅ Message sent successfully to {phone}",
      chatwoot_start: "🤖 Starting Chatwoot process...",
      chatwoot_sync: "⏳ Syncing with Chatwoot...",
      chatwoot_agent: "👤 Assigning conversation to agent {name}...",
      chatwoot_labels: "🏷️ Assigning {count} label{plural}...",
      chatwoot_complete: "✅ Chatwoot process completed",
      canceled: "🚫 Broadcast canceled",
      completed: "✨ Broadcast completed",
      error: "❌ Error starting broadcast"
    },
    stats: {
      pending: "Pending",
      sent: "Sent",
      errors: "Errors",
      total: "Total"
    },
    summary: {
      title: "Broadcast Summary",
      canceled_title: "Broadcast Canceled",
      total_messages: "Total messages",
      sent_messages: "Successfully sent messages",
      error_messages: "Messages with errors",
      unsent_messages: "Unsent messages",
      success_rate: "Success rate"
    },
    buttons: {
      cancel: "Cancel Broadcast",
      new: "New Broadcast",
      download: "Download CSV Report"
    },
    report: {
      title: "BROADCAST REPORT",
      instances: {
        title: "SELECTED INSTANCES",
        type: {
          baileys: "📱 Baileys",
          business: "✓ Business"
        }
      },
      data: {
        title: "BROADCAST DATA",
        total_contacts: "Total Contacts",
        variables_found: "Variables Found"
      },
      content: {
        title: "CONTENT",
        template: "Template",
        no_template: "No template defined"
      },
      media: {
        title: "MEDIA",
        status: "Status",
        status_values: {
          yes: "Yes",
          no: "No"
        },
        file: "File",
        type: "Type"
      },
      typebot: {
        title: "TYPEBOT",
        status: "Status",
        url: "URL",
        bot: "Bot"
      },
      timing: {
        title: "TIMING CONFIGURATION",
        min: "Minimum",
        max: "Maximum",
        seconds: "seconds"
      },
      csv: {
        filename: "broadcast-report",
        phone: "Phone",
        status: "Status",
        instance: "Instance",
        template: "Template",
        message: "Message",
        sent_at: "Sent at",
        agent: "Agent",
        labels: "Labels"
      }
    }
  }
}
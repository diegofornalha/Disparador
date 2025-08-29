'use client'

import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { SelecaoInstanciasComponent } from "@/components/selecao-instancias"
import { EntradaContatosComponent } from "@/components/entrada-contatos"
import { ComposicaoMensagemComponent } from "@/components/composicao-mensagem"
import { isAuthenticated } from '@/utils/auth'
import type { Contact, Instance } from "@/types"

type Step = 'selecao' | 'contatos' | 'composicao'

export default function DisparoPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<Step>('selecao')
  const [selectedInstances, setSelectedInstances] = useState<Instance[]>([])
  const [contacts, setContacts] = useState<Contact[]>([])

  // Verificar autenticação
  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login')
    }
  }, [])

  const handleSelecaoInstancias = (instances: Instance[]) => {
    setSelectedInstances(instances)
    setCurrentStep('contatos')
  }

  const handleEntradaContatos = (_instances: Instance[], contactsData: Contact[]) => {
    setContacts(contactsData)
    setCurrentStep('composicao')
  }

  switch (currentStep) {
    case 'selecao':
      return <SelecaoInstanciasComponent 
        onNextStep={handleSelecaoInstancias} 
      />
    case 'contatos':
      return (
        <EntradaContatosComponent 
          selectedInstances={selectedInstances}
          onNextStep={handleEntradaContatos}
        />
      )
    case 'composicao':
      return (
        <ComposicaoMensagemComponent 
          selectedInstances={selectedInstances}
          contacts={contacts}
        />
      )
    default:
      return <SelecaoInstanciasComponent onNextStep={() => handleSelecaoInstancias([])} />
  }
} 
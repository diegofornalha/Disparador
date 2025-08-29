'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2, Smartphone, RefreshCw, CheckCircle, XCircle, LogIn } from 'lucide-react'

export default function ConnectPage() {
  const router = useRouter()
  const [instances, setInstances] = useState<any[]>([])
  const [selectedInstance, setSelectedInstance] = useState('')
  const [qrCode, setQrCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<string>('')
  const [newInstanceName, setNewInstanceName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('21936182339')

  const baseUrl = process.env.NEXT_PUBLIC_EVOLUTION_URL
  const apiKey = process.env.NEXT_PUBLIC_EVOLUTION_API

  // Buscar instâncias
  const fetchInstances = async () => {
    try {
      const response = await fetch(`${baseUrl}/instance/fetchInstances`, {
        headers: { 'apikey': apiKey || '' }
      })
      const data = await response.json()
      setInstances(data)
    } catch (error) {
      console.error('Erro ao buscar instâncias:', error)
    }
  }

  // Criar nova instância
  const createInstance = async () => {
    if (!newInstanceName) {
      alert('Digite um nome para a instância')
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(`${baseUrl}/instance/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': apiKey || ''
        },
        body: JSON.stringify({
          instanceName: newInstanceName,
          integration: 'WHATSAPP-BAILEYS',
          number: phoneNumber
        })
      })

      const data = await response.json()
      if (data.instance) {
        setSelectedInstance(newInstanceName)
        await fetchInstances()
        await generateQRCode(newInstanceName)
      }
    } catch (error) {
      console.error('Erro ao criar instância:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Gerar QR Code
  const generateQRCode = async (instanceName: string) => {
    setIsLoading(true)
    setQrCode('')
    
    try {
      const response = await fetch(`${baseUrl}/instance/connect/${instanceName}`, {
        headers: { 'apikey': apiKey || '' }
      })
      
      const data = await response.json()
      
      if (data.base64) {
        setQrCode(data.base64)
        // Verificar status a cada 3 segundos
        checkConnectionStatus(instanceName)
      } else if (data.instance?.state === 'open') {
        setConnectionStatus('Já conectado!')
        setQrCode('')
      } else {
        // Tentar novamente em 2 segundos
        setTimeout(() => generateQRCode(instanceName), 2000)
      }
    } catch (error) {
      console.error('Erro ao gerar QR Code:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Verificar status da conexão
  const checkConnectionStatus = async (instanceName: string) => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch(`${baseUrl}/instance/connectionState/${instanceName}`, {
          headers: { 'apikey': apiKey || '' }
        })
        
        const data = await response.json()
        
        if (data.instance?.state === 'open') {
          setConnectionStatus('✅ Conectado com sucesso!')
          setQrCode('')
          clearInterval(interval)
          await fetchInstances()
        } else if (data.instance?.state === 'connecting') {
          setConnectionStatus('Conectando...')
        } else {
          setConnectionStatus('Aguardando leitura do QR Code...')
        }
      } catch (error) {
        console.error('Erro ao verificar status:', error)
      }
    }, 3000)

    // Limpar intervalo após 5 minutos
    setTimeout(() => clearInterval(interval), 300000)
  }

  // Deletar instância
  const deleteInstance = async (instanceName: string) => {
    if (!confirm(`Deseja deletar a instância ${instanceName}?`)) return

    setIsLoading(true)
    try {
      await fetch(`${baseUrl}/instance/delete/${instanceName}`, {
        method: 'DELETE',
        headers: { 'apikey': apiKey || '' }
      })
      await fetchInstances()
      if (selectedInstance === instanceName) {
        setSelectedInstance('')
        setQrCode('')
      }
    } catch (error) {
      console.error('Erro ao deletar instância:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Logout da instância
  const logoutInstance = async (instanceName: string) => {
    setIsLoading(true)
    try {
      await fetch(`${baseUrl}/instance/logout/${instanceName}`, {
        method: 'DELETE',
        headers: { 'apikey': apiKey || '' }
      })
      await fetchInstances()
      setConnectionStatus('Desconectado')
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchInstances()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <Smartphone className="h-6 w-6" />
                Conectar WhatsApp - Evolution API
              </CardTitle>
              <Button 
                onClick={() => router.push('/')}
                variant="outline"
                className="flex items-center gap-2"
              >
                <LogIn className="h-4 w-4" />
                Entrar no Disparador
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Coluna Esquerda - Instâncias e Criar Nova */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Criar Nova Instância</h3>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="instanceName">Nome da Instância</Label>
                      <Input
                        id="instanceName"
                        value={newInstanceName}
                        onChange={(e) => setNewInstanceName(e.target.value)}
                        placeholder="Ex: meu-whatsapp"
                        className="mt-1 bg-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Número (opcional)</Label>
                      <Input
                        id="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="21936182339"
                        className="mt-1 bg-white"
                      />
                    </div>
                    <Button 
                      onClick={createInstance}
                      disabled={isLoading || !newInstanceName}
                      className="w-full"
                    >
                      {isLoading ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Criando...</>
                      ) : (
                        'Criar Instância'
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Instâncias Existentes</h3>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {instances.map((instance) => (
                      <div
                        key={instance.id}
                        className={`p-3 border rounded-lg cursor-pointer transition-all ${
                          selectedInstance === instance.name
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => {
                          setSelectedInstance(instance.name)
                          if (instance.connectionStatus !== 'open') {
                            generateQRCode(instance.name)
                          } else {
                            setConnectionStatus('✅ Já conectado')
                            setQrCode('')
                          }
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{instance.name}</p>
                            <p className="text-sm text-gray-500">
                              Status: {instance.connectionStatus === 'open' ? (
                                <span className="text-green-600 font-medium">Conectado</span>
                              ) : (
                                <span className="text-red-600 font-medium">Desconectado</span>
                              )}
                            </p>
                            {instance.ownerJid && (
                              <p className="text-xs text-gray-400">{instance.ownerJid}</p>
                            )}
                          </div>
                          <div className="flex gap-2">
                            {instance.connectionStatus === 'open' && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  logoutInstance(instance.name)
                                }}
                              >
                                Logout
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={(e) => {
                                e.stopPropagation()
                                deleteInstance(instance.name)
                              }}
                            >
                              Deletar
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={fetchInstances}
                    variant="outline"
                    className="w-full mt-3"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Atualizar Lista
                  </Button>
                </div>
              </div>

              {/* Coluna Direita - QR Code */}
              <div>
                <h3 className="text-lg font-semibold mb-3">QR Code</h3>
                <Card className="border-2">
                  <CardContent className="p-6">
                    {selectedInstance ? (
                      <div className="text-center">
                        {isLoading ? (
                          <div className="py-20">
                            <Loader2 className="h-12 w-12 animate-spin mx-auto text-gray-400" />
                            <p className="mt-4 text-gray-600">Gerando QR Code...</p>
                          </div>
                        ) : qrCode ? (
                          <div>
                            <p className="mb-4 font-medium">
                              Escaneie o QR Code com seu WhatsApp
                            </p>
                            <div className="inline-block p-4 bg-white rounded-lg shadow-lg">
                              <img 
                                src={qrCode} 
                                alt="QR Code" 
                                className="w-64 h-64"
                              />
                            </div>
                            <p className="mt-4 text-sm text-gray-600">
                              {connectionStatus}
                            </p>
                            <Button
                              onClick={() => generateQRCode(selectedInstance)}
                              variant="outline"
                              className="mt-4"
                            >
                              <RefreshCw className="mr-2 h-4 w-4" />
                              Gerar Novo QR Code
                            </Button>
                          </div>
                        ) : (
                          <div className="py-20">
                            {connectionStatus.includes('Conectado') ? (
                              <>
                                <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                                <p className="mt-4 text-lg font-medium text-green-600">
                                  {connectionStatus}
                                </p>
                              </>
                            ) : (
                              <>
                                <XCircle className="h-16 w-16 text-gray-400 mx-auto" />
                                <p className="mt-4 text-gray-600">
                                  Selecione uma instância desconectada
                                </p>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-20">
                        <Smartphone className="h-16 w-16 text-gray-400 mx-auto" />
                        <p className="mt-4 text-gray-600">
                          Crie uma nova instância ou selecione uma existente
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
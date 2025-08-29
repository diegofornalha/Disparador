import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import mime from 'mime-types'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path: filePath } = req.query
  
  // Garante que filePath é uma string
  const filePathString = Array.isArray(filePath) ? filePath.join('/') : filePath
  
  // Constrói o caminho completo do arquivo
  const fullPath = path.join(process.cwd(), 'public/uploads', filePathString)

  try {
    // Verifica se o arquivo existe
    if (!fs.existsSync(fullPath)) {
      return res.status(404).json({ error: 'Arquivo não encontrado' })
    }

    // Obtém o tipo MIME do arquivo
    const contentType = mime.lookup(fullPath) || 'application/octet-stream'
    
    // Define os headers apropriados
    res.setHeader('Content-Type', contentType)
    
    // Lê e envia o arquivo
    const fileBuffer = fs.readFileSync(fullPath)
    res.send(fileBuffer)
  } catch (error) {
    console.error('Erro ao servir arquivo:', error)
    res.status(500).json({ error: 'Erro ao processar arquivo' })
  }
}

import { parsePhoneNumber } from 'libphonenumber-js';

export const sendMessage = async (
  number: string, 
  text: string, 
  instanceName: string,
  variables?: Record<string, string>
) => {
  let formattedNumber = number;

  const autoFillDdi = process.env.NEXT_PUBLIC_AUTO_FILL_DDI === 'true';
  const defaultLocation = process.env.NEXT_PUBLIC_DEFAULT_LOCATION || 'BR';

  if (autoFillDdi && number.length <= 15 && !number.endsWith('@g.us')) {
    try {
      const phoneNumber = parsePhoneNumber(number, defaultLocation);
      formattedNumber = phoneNumber.number; // Retorna o número formatado com o DDI correto
    } catch (error) {
      console.error('Erro ao formatar número:', error);
    }
  }

  const processedText = variables ? 
    text.replace(/\[(\w+)\]/g, (match, variable) => {
      const value = variables[variable];
      return value || match;
    }) : 
    text;

  const baseUrl = process.env.NEXT_PUBLIC_EVOLUTION_URL;
  const apikey = process.env.NEXT_PUBLIC_EVOLUTION_API;
  const url = `${baseUrl}/message/sendText/${instanceName}`;
  
  const payload = {
    number: formattedNumber,
    text: processedText,
    options: {
      delay: 1200,
      presence: "composing"
    }
  };

  console.log('📤 Enviando mensagem:', {
    url,
    payload,
    instanceName
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': apikey
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('❌ Erro na resposta:', {
        status: response.status,
        statusText: response.statusText,
        errorData
      });
      throw new Error(`Erro ao enviar mensagem: ${response.status} - ${errorData}`);
    }

    return response;
  } catch (error) {
    console.error('❌ Erro ao enviar mensagem:', error);
    throw error;
  }
};

import { useState } from 'react';
import { Button, Textarea, TextInput } from '@mantine/core';
import { IconBrandWhatsapp } from '@tabler/icons-react';

export default function ContactoWhatsApp() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarWhatsApp = () => {
    if (!mensagem.trim()) return;

    const texto = `Olá, sou ${nome || 'um visitante'} e gostaria de falar contigo. 
Mensagem: ${mensagem}`;

    const url = `https://wa.me/258853399617?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto">
      <TextInput
        label="Nome"
        placeholder="Digite o seu nome"
        value={nome}
        onChange={(e) => setNome(e.currentTarget.value)}
      />
      <Textarea
        label="Mensagem"
        placeholder="Escreva a sua mensagem"
        minRows={4}
        value={mensagem}
        onChange={(e) => setMensagem(e.currentTarget.value)}
      />
      <Button onClick={enviarWhatsApp} leftSection={<IconBrandWhatsapp size={18} />} color="green">
        Enviar pelo WhatsApp
      </Button>
    </div>
  );
}

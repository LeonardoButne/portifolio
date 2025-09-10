import zapitaLogo from '../assets/zapita-logo.png';

import zapita0 from '../assets/zapita/image0.jpeg';
import zapita1 from '../assets/zapita/image1.jpeg';
import zapita2 from '../assets/zapita/image2.jpeg';
import zapita3 from '../assets/zapita/image3.jpeg';
import zapita4 from '../assets/zapita/image4.jpeg';
import zapita5 from '../assets/zapita/image5.jpeg';
import zapita6 from '../assets/zapita/image6.jpeg';
import zapita7 from '../assets/zapita/image7.jpeg';

import venus0 from '../assets/venus/image (1).jpeg';
import venus1 from '../assets/venus/image (1).jpeg';
import venus2 from '../assets/venus/image (2).jpeg';
import venus3 from '../assets/venus/image (3).jpeg';
import venus4 from '../assets/venus/image (4).jpeg';
import venus5 from '../assets/venus/image (5).jpeg';
import venus6 from '../assets/venus/image (6).jpeg';
import venus7 from '../assets/venus/image (7).jpeg';
import venus8 from '../assets/venus/image (8).jpeg';

import events0 from '../assets/events/1.png';
import events1 from '../assets/events/2.png';
import events2 from '../assets/events/3.png';
import events3 from '../assets/events/4.png';
import events4 from '../assets/events/5.png';
import events5 from '../assets/events/6.png';
import events6 from '../assets/events/7.png';
import events7 from '../assets/events/8.png';

import koila1 from '../assets/koila/image (1).png';
import koila2 from '../assets/koila/image (2).png';
import koila3 from '../assets/koila/image (3).png';
import koila4 from '../assets/koila/image (4).png';
import koila5 from '../assets/koila/image (5).png';
import koila7 from '../assets/koila/image (7).png';
import koila8 from '../assets/koila/image.png';
import koila9 from '../assets/koila/image (9).png';

export interface ProjectStat {
  title: string;
  value: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  status: 'Concluído' | 'Em desenvolvimento';
  progress: number;
  stats: ProjectStat[];
  demoImages?: string[];
  gridCols?: { base: number; sm: number; lg: number };
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Events - QR Tickets App',
    description:
      'Aplicativo mobile para compra e venda de tickets eletrônicos com QR Code. Interface moderna e pagamentos seguros.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    status: 'Concluído',
    progress: 100,
    stats: [
      { title: 'Downloads', value: '--' },
      { title: 'Avaliação', value: '--' },
      { title: 'Usuários', value: '--' },
    ],
    demoImages: [events2, events5, events1, events7, events3, events4, events0, events6],
    gridCols: { base: 1, sm: 2, lg: 4 },
  },
  {
    id: 2,
    title: 'Koila - CarRental App',
    description: 'Plataforma completa para aluguel de veículos com sistema de reservas, pagamentos e gestão de frota.',
    image:
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80',
    technologies: ['Flutter', 'Node.js', 'MySQL', 'TypeScript'],
    status: 'Em desenvolvimento',
    progress: 85,
    stats: [
      { title: 'Veículos', value: '--' },
      { title: 'Cidades', value: '--' },
      { title: 'Reservas', value: '--' },
    ],
    demoImages: [koila4, koila3, koila1, koila8, koila9, koila7, koila5, koila2],
    gridCols: { base: 1, sm: 2, lg: 4 },
  },
  {
    id: 3,
    title: 'Zapita - JobBot WhatsApp',
    description:
      'Bot inteligente que envia vagas de emprego personalizadas via WhatsApp baseado no perfil profissional.',
    image: zapitaLogo,
    technologies: ['Node.js', 'PostgreSQL', 'TypeScript', 'Google Cloud'],
    status: 'Concluído',
    progress: 100,
    stats: [
      { title: 'Usuários', value: '15+' },
      { title: 'Vagas/dia', value: '50+' },
      { title: 'Taxa match', value: '93%' },
    ],
    demoImages: [zapita0, zapita1, zapita2, zapita3, zapita4, zapita5, zapita6, zapita7],
    gridCols: { base: 1, sm: 2, lg: 4 },
  },
  {
    id: 4,
    title: 'Venus - BarberShop Manager',
    description:
      'Sistema web completo para gestão de barbearias com agendamentos, controle financeiro e gestão de clientes.',
    image:
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80',
    technologies: ['Node.js', 'PostgreSQL', 'TypeScript', 'Sequelize'],
    status: 'Concluído',
    progress: 100,
    stats: [
      { title: 'Barbearias', value: '1' },
      { title: 'Agendamentos', value: '2.1K' },
      { title: 'Faturamento', value: '+ 540k Mzn' },
    ],
    demoImages: [venus0, venus1, venus2, venus3, venus4, venus5, venus6, venus7, venus8],
    gridCols: { base: 1, sm: 2, lg: 1 },
  },
];

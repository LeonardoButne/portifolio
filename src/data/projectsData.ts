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
    title: 'QR Tickets App',
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
    demoImages: ['https://placehold.co/600x400?text=QR+Tickets+1', 'https://placehold.co/600x400?text=QR+Tickets+2'],
  },
  {
    id: 2,
    title: 'CarRental App',
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
    demoImages: ['https://placehold.co/600x400?text=QR+Tickets+1', 'https://placehold.co/600x400?text=QR+Tickets+2'],
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

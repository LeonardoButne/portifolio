import { Card, Group, Image, Text, Container, SimpleGrid, Badge, Button } from '@mantine/core';
import { IconExternalLink, IconBrandGithub } from '@tabler/icons-react';
import classes from './ProjectsSection.module.css';

interface ProjectStat {
  title: string;
  value: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  status: 'Concluído' | 'Em desenvolvimento';
  progress: number;
  stats: ProjectStat[];
}

const projects: Project[] = [
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
      { title: 'Downloads', value: '2.5K+' },
      { title: 'Avaliação', value: '4.8/5' },
      { title: 'Usuários', value: '1.2K' },
    ],
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
      { title: 'Veículos', value: '150+' },
      { title: 'Cidades', value: '5' },
      { title: 'Reservas', value: '320' },
    ],
  },
  {
    id: 3,
    title: 'JobBot WhatsApp',
    description:
      'Bot inteligente que envia vagas de emprego personalizadas via WhatsApp baseado no perfil profissional.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80',
    technologies: ['Node.js', 'PostgreSQL', 'TypeScript', 'Google Cloud'],
    status: 'Concluído',
    progress: 100,
    stats: [
      { title: 'Usuários', value: '15+' },
      { title: 'Vagas/dia', value: '50+' },
      { title: 'Taxa match', value: '93%' },
    ],
  },
  {
    id: 4,
    title: 'BarberShop Manager',
    description:
      'Sistema web completo para gestão de barbearias com agendamentos, controle financeiro e gestão de clientes.',
    image:
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80',
    technologies: ['Node.js', 'PostgreSQL', 'TypeScript', 'Sequelize'],
    status: 'Concluído',
    progress: 100,
    stats: [
      { title: 'Barbearias', value: '12' },
      { title: 'Agendamentos', value: '2.1K' },
      { title: 'Faturamento', value: 'R$ 45K' },
    ],
  },
];

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const statusColor = project.status === 'Concluído' ? 'green' : 'blue';

  const techBadges = project.technologies.map((tech: string) => (
    <Badge key={tech} variant="light" size="xs">
      {tech}
    </Badge>
  ));

  const statsItems = project.stats.map((stat: ProjectStat) => (
    <div key={stat.title} className={classes.stat}>
      <Text size="xs" c="dimmed">
        {stat.title}
      </Text>
      <Text fw={600} size="sm">
        {stat.value}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding="lg" radius="md" className={classes.card}>
      <Card.Section>
        <Image src={project.image} alt={project.title} height={200} fit="cover" />
      </Card.Section>

      <Group justify="space-between" mt="lg" mb="xs">
        <Text className={classes.title}>{project.title}</Text>
        <Badge color={statusColor} variant="light" size="sm">
          {project.status}
        </Badge>
      </Group>

      <Text size="sm" c="dimmed" mb="md" lineClamp={3}>
        {project.description}
      </Text>

      <Group gap={5} mb="md">
        {techBadges}
      </Group>

      <Card.Section className={classes.footer}>
        <div className={classes.stats}>{statsItems}</div>
        <Group gap={8} mt="sm">
          <Button variant="light" size="xs" leftSection={<IconExternalLink size={14} />}>
            Demo
          </Button>
          <Button variant="outline" size="xs" leftSection={<IconBrandGithub size={14} />}>
            Código
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <Container fluid px="xl" py="xl">
      <div className={classes.header}>
        <Text size="xl" fw={600} mb="xs" ta="center">
          Meus Projetos
        </Text>
        <Text c="dimmed" ta="center" mb="xl">
          Alguns dos projetos que desenvolvi utilizando as mais modernas tecnologias
        </Text>
      </div>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

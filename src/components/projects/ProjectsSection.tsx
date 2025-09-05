import { Card, Group, Image, Text, Container, SimpleGrid, Badge, Button } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import classes from './ProjectsSection.module.css';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projectsData';
import type { Project, ProjectStat } from '../../data/projectsData';

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
          <Button
            component={Link}
            to={`/projects/${project.id}`}
            variant="light"
            size="xs"
            leftSection={<IconExternalLink size={14} />}
          >
            Demo
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

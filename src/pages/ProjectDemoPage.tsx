import { useParams } from 'react-router-dom';
import { Container, Image, SimpleGrid, Text } from '@mantine/core';
import { projects } from './ProjectsSection'; // importa sua lista

export function ProjectDemoPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <Text ta="center">Projeto não encontrado</Text>;
  }

  return (
    <Container py="xl">
      <Text fw={600} size="xl" mb="lg" ta="center">
        {project.title} - Demo
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {project.demoImages.map((img, index) => (
          <Image key={index} src={img} alt={`${project.title} demo ${index + 1}`} radius="md" />
        ))}
      </SimpleGrid>
    </Container>
  );
}

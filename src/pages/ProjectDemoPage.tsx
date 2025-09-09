import { useParams } from 'react-router-dom';
import { Box, Image, SimpleGrid, Text } from '@mantine/core';
import { projects } from '../data/projectsData';

export function ProjectDemoPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <Text ta="center">Projeto não encontrado</Text>;
  }

  return (
    <Box
      style={{
        background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
        minHeight: '100vh', // ocupa a altura total
        width: '100%', // ocupa a largura total
        padding: '2rem',
      }}
    >
      <Text fw={600} size="xl" mb="lg" ta="center">
        {project.title} - Demo
      </Text>
      <SimpleGrid
        cols={project.gridCols ?? { base: 1, sm: 2, lg: 2 }} 
        spacing="lg"
      >
        {project.demoImages?.map((img, index) => (
          <Image key={index} src={img} alt={`${project.title} demo ${index + 1}`} radius="md" />
        ))}
      </SimpleGrid>
    </Box>
  );
}

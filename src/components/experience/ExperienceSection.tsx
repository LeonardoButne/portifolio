import { Container, Title, Text, SimpleGrid } from '@mantine/core';
import { ExperienceCard } from './ExperienceCard';
import classes from './ExperienceSection.module.css';
import miremePhoto from '../../assets/MIREME.jpg';
import unitecPhoto from '../../assets/unitec.ico';
import sourcecode from '../../assets/sourcecode.jpeg';

export function ExperienceSection() {
  const experiences = [
    {
      avatar: miremePhoto,
      role: 'Estagiário em administração de redes e Suporte Técnico',
      name: 'MIREME - Ministério dos Recursos Minerais e Energia',
      email: 'mireme@mireme.gov.mz',
      phone: '+258 8* *** ****',
      period: 'Abril 2024 - Outubro 2024',
      location: 'Av. Femão Magalhães Nº 21, Maputo, Moçambique',
      color: 'blue',
      responsibilities: [
        { text: 'Configuração e monitorização de rede com Zabbix', highlight: true },
        {
          text: 'Configuração de firewalls e implementação de políticas de segurança para protecção contra ameaças cibernéticas.',
          highlight: true,
        },
        {
          text: 'Gestão de acessos e políticas de grupo via Active Directory (permissões de usuários).',
          highlight: true,
        },
        { text: 'Instalação e configuração de computadores, laptops, impressoras e telefones.' },
        { text: 'Atendimento de helpdesk e suporte técnico aos utilizadores' },
        { text: 'Diagnóstico e solução de falhas em hardware e software, reduzindo tempo de inatividade.' },
      ],
      technologies: ['Zabbix', 'Windows Server', 'Redes TCP/IP', 'Fibra Óptica'],
    },
    {
      avatar: unitecPhoto,
      role: 'Backend Developer',
      name: 'UNITEC Academy',
      email: 'info@unitec.ac.mz',
      phone: '+258 8* *** ****',
      period: 'Abril 2025 - Agosto 2025',
      location: 'Maputo, Moçambique',
      color: 'blue',
      responsibilities: [
        {
          text: 'Participação activa no desenvolvimento de uma API completa para gestão e venda de eBooks, com arquitetura em camadas (models, usecases, controllers, routes), promovendo organização e escalabilidade do sistema.',
          highlight: true,
        },
        { text: 'Desenvolvimento de APIs REST com Node.js e TypeScript', highlight: true },
        {
          text: 'Design e desenvolvimento de relacionamentos complexos entre tabelas com MySQL, utilizando Sequelize como ORM.',
          highlight: true,
        },
        {
          text: 'Criação de endpoints RESTful bem documentados (com swagger) e testáveis, com foco em boas práticas de desenvolvimento.',
          highlight: true,
        },
        { text: 'Implementação de autenticação e autorização segura com JWT' },
        { text: 'Testes de APIs com Insomnia' },
        { text: 'Trabalho colaborativo com foco em qualidade de código, versionamento com Git e metodologias ágeis.' },
      ],
      technologies: [
        'Node.js',
        'TypeScript',
        'MySQL',
        'Express.js',
        'JWT',
        'Sequelize',
        'Insomnia',
        'Swagger',
        'Git',
        'GitLab',
        'Metodologias Ágeis',
      ],
    },
    {
      avatar: sourcecode,
      role: 'Software Tester QA',
      name: 'Source Code Solutions',
      email: 'admin@sourcecode.solutions',
      phone: '+258 84 222 2222',
      period: 'Agosto 2025 - Atualmente',
      location: 'Maputo, Moçambique',
      color: 'green',
      responsibilities: [
        { text: 'Planeamento e execução de testes funcionais e de regressão' },
        { text: 'Automatização de testes com frameworks modernas', highlight: true },
        { text: 'Identificação e reporte de bugs detalhados' },
        { text: 'Colaboração com equipa de devs para garantir qualidade' },
        { text: 'Criação de casos de teste e documentação QA' },
      ],
      technologies: ['Selenium', 'Jest', 'Cypress', 'Postman', 'JIRA', 'TestRail'],
    },
  ];

  return (
    <Container size="xl" py={60} className={classes.container}>
      <div className={classes.header}>
        <Title order={2} size="h1" mb="xl" ta="center" className={classes.title}>
          Experiência Profissional
        </Title>
        <Text size="lg" c="dimmed" ta="center" maw={600} mx="auto" mb="xl">
          Uma jornada de crescimento profissional através de diferentes áreas da tecnologia
        </Text>
      </div>

      <SimpleGrid cols={1} spacing="xl">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

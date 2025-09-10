import { IconBrandLinkedin, IconBrandGithub, IconMail, IconCode } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import classes from './PortfolioFooter.module.css';

const data = [
  {
    title: 'Serviços',
    links: [
      { label: 'Desenvolvimento Web', link: '#servicos' },
      { label: 'APIs REST', link: '#servicos' },
      { label: 'Suporte Técnico', link: '#servicos' },
      { label: 'Consultoria', link: '#servicos' },
    ],
  },
  {
    title: 'Portfolio',
    links: [
      { label: 'Projetos Recentes', link: '#projetos' },
      { label: 'Experiência', link: '#experiencia' },
      { label: 'Tecnologias', link: '#skills' },
      { label: 'Certificações', link: '#certificacoes' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: 'Email', link: 'leonardobutne78@gmail.com' },
      { label: 'LinkedIn', link: 'https://linkedin.com/in/perfil' },
      { label: 'GitHub', link: 'https://github.com/LeonardoButne' },
      { label: 'Whatsapp', link: 'https://wa.me/+258853399617' },
    ],
  },
];

export function PortfolioFooter() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        target={link.link.startsWith('http') ? '_blank' : undefined}
        rel={link.link.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Group gap="md" align="center" mb="sm">
            <div>
              <Text size="lg" fw={600} className={classes.brandName}>
                Leonardo Benjamim
              </Text>
              <Group gap={4} align="center">
                <IconCode size={14} />
                <Text size="xs" c="dimmed">
                  Web & Mobile Developer
                </Text>
              </Group>
            </div>
          </Group>

          <Text size="sm" c="dimmed" className={classes.description}>
            Transformando ideias em soluções digitais robustas e escaláveis. Especializado em desenvolvimento de
            softwares modernos e eficientes.
          </Text>
        </div>

        <div className={classes.groups}>{groups}</div>
      </Container>

      <Container className={classes.afterFooter}>
        <div>
          <Text c="dimmed" size="sm" mb={4}>
            © 2025 Leonardo Benjamim. Todos os direitos reservados.
          </Text>
          <Text size="xs" c="dimmed">
            • Powered by React & TypeScript
          </Text>
        </div>

        <Group gap={8} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            color="blue"
            variant="subtle"
            component="a"
            href="www.linkedin.com/in/leonardo-butne-7a702528b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin size={20} stroke={1.5} />
          </ActionIcon>

          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://github.com/usuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <IconBrandGithub size={20} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="red"
            variant="subtle"
            component="a"
            href="leonardobutne78@gmail.com"
            aria-label="Email"
          >
            <IconMail size={20} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

import { Burger, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderSearch.module.css';

const links = [
  { link: '/experience', label: 'Experiencia' },
  { link: '/about', label: 'Sobre' },
  { link: '/projects', label: 'Projectos' },
  { link: '/community', label: 'Contactos' },
];

export function HeaderSearch({
  title = 'Leonardo Benjamim',
  backgroundColor = '#4b6cb7',
  showLogo = false,
  showLinks = true,
}) {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a key={link.label} href={link.link} className={classes.link} onClick={(event) => event.preventDefault()}>
      {link.label}
    </a>
  ));

  return (
    <div className={classes.header} style={{ backgroundColor: backgroundColor }}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          {showLogo ? (
            <MantineLogo size={28} />
          ) : (
            <Title order={3} style={{ color: 'white', margin: 0 }}>
              {title}
            </Title>
          )}
        </Group>

        <Group>
          {showLinks && (
            <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
              {items}
            </Group>
          )}
        </Group>
      </div>
    </div>
  );
}

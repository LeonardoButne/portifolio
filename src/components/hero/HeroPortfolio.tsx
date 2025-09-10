import { IconCode, IconDeviceMobile } from '@tabler/icons-react';
import { Button, Group, Image, Text, Title } from '@mantine/core';
import profilePhoto from '../../assets/profile.jpeg';
import classes from './HeroPortfolio.module.css';

export function HeroPortfolio() {
  return (
    <div className={classes.inner}>
      <div className={classes.content}>
        <Title className={classes.title}>
          Leonardo Benjamim <br />
          Software Developer | Mobile & Web <br />
        </Title>
        <Text c="dimmed" mt="md" size="lg">
          Ajudo pessoas e empresas a transformarem ideias em soluções digitais eficientes, com experiência em
          desenvolvimento de aplicações móveis (Android/iOS), web e infraestrutura de redes.
        </Text>
        <Group mt={30}>
          <Button radius="xl" size="md" className={classes.control} leftSection={<IconDeviceMobile size={16} />}>
            Ver Projetos
          </Button>
          <Button
            variant="default"
            radius="xl"
            size="md"
            className={classes.control}
            leftSection={<IconCode size={16} />}
            onClick={() => window.open('https://www.github.com/leonardobutne', '_blank')}
          >
            GitHub
          </Button>
        </Group>
      </div>
      <div className={classes.imageWrapper}>
        <Image
          src={profilePhoto}
          className={classes.image}
          alt="Leonardo Benjamim - Desenvolvedor Android"
          fallbackSrc="https://via.placeholder.com/300x300/4b6cb7/white?text=Sua+Foto"
        />
      </div>
    </div>
  );
}

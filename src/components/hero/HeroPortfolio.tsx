import { IconCheck, IconBrandAndroid, IconCode, IconDeviceMobile } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import profilePhoto from '../../assets/profile.jpeg';
import classes from './HeroPortfolio.module.css';

export function HeroPortfolio() {
  return (
    <div className={classes.inner}>
      <div className={classes.content}>
        <Title className={classes.title}>
          Leonardo Butne <br />
          Desenvolvedor de Software <br />
        </Title>
        <Text c="dimmed" mt="md" size="lg">
          Especialista em desenvolvimento de aplicativos Android nativos com Kotlin e Java. Criando experiências mobile
          modernas, funcionais e intuitivas para milhares de usuários.
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

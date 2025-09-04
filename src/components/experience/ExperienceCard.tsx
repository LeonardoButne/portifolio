// ExperienceCard.tsx
import { Avatar, Group, Text, Card, Stack, List, ThemeIcon, Badge, Box, Divider } from '@mantine/core';
import { IconAt, IconPhoneCall, IconCircleCheck, IconBriefcase, IconCalendar } from '@tabler/icons-react';
import classes from './ExperienceSection.module.css';

interface ExperienceItem {
  text: string;
  highlight?: boolean;
}

interface ExperienceCardProps {
  avatar: string;
  role: string;
  name: string;
  email?: string;
  phone?: string;
  period?: string;
  location?: string;
  responsibilities: ExperienceItem[];
  technologies?: string[];
  color?: string;
}

export function ExperienceCard({
  avatar,
  role,
  name,
  email,
  phone,
  period,
  location,
  responsibilities,
  technologies,
  color = 'blue',
}: ExperienceCardProps) {
  return (
    <Card shadow="sm" padding="xl" radius="md" withBorder className={classes.card}>
      <Group wrap="wrap" align="flex-start" gap="xl">
        {/* Avatar + Info */}
        <Stack className={classes.leftSection} align="center">
          <Avatar src={avatar} size={250} radius="md" mb="md" />
          <Badge color={color} variant="light" size="lg">
            <IconBriefcase size={14} style={{ marginRight: 4 }} />
            {name}
          </Badge>
          {period && (
            <Group gap={4} justify="center">
              <IconCalendar size={14} className={classes.icon} />
              <Text size="sm" c="dimmed" fw={500}>
                {period}
              </Text>
            </Group>
          )}
          {location && (
            <Text size="sm" c="dimmed" fs="italic">
              📍 {location}
            </Text>
          )}
        </Stack>

        {/* Divider */}
        <Divider orientation="vertical" className={classes.verticalDivider} />

        {/* Conteúdo principal */}
        <Box flex={1} className={classes.rightSection}>
          <Stack gap="lg">
            {/* Cargo e contatos */}
            <div>
              <Text size="xl" fw={700} className={classes.roleTitle} mb={4}>
                {role}
              </Text>
              <Group gap="md" wrap="wrap">
                <Group gap={6} wrap="nowrap">
                  <IconAt stroke={1.5} size={16} className={classes.icon} />
                  <Text size="sm" c="dimmed">
                    {email}
                  </Text>
                </Group>
                <Group gap={6} wrap="nowrap">
                  <IconPhoneCall stroke={1.5} size={16} className={classes.icon} />
                  <Text size="sm" c="dimmed">
                    {phone}
                  </Text>
                </Group>
              </Group>
            </div>

            {/* Responsabilidades */}
            <div>
              <Text size="lg" fw={600} mb="md" c="dark.8">
                Principais Responsabilidades
              </Text>
              <List
                spacing="sm"
                size="md"
                icon={
                  <ThemeIcon color={color} size={20} radius="xl" variant="light">
                    <IconCircleCheck size={14} />
                  </ThemeIcon>
                }
                style={{ textAlign: 'left' }}
              >
                {responsibilities.map((item, index) => (
                  <List.Item key={index} className={item.highlight ? classes.highlightItem : undefined}>
                    <Text size="md" c="dark.7" lh={1.5}>
                      {item.text}
                    </Text>
                  </List.Item>
                ))}
              </List>
            </div>

            {/* Tecnologias */}
            {technologies && technologies.length > 0 && (
              <div>
                <Text size="lg" fw={600} mb="md" c="dark.8">
                  Tecnologias & Ferramentas
                </Text>
                <Group gap="sm">
                  {technologies.map((tech, index) => (
                    <Badge key={index} variant="light" color={color} size="md" style={{ fontSize: '12px' }}>
                      {tech}
                    </Badge>
                  ))}
                </Group>
              </div>
            )}
          </Stack>
        </Box>
      </Group>
    </Card>
  );
}

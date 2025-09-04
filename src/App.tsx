import { Container, AppShell } from '@mantine/core';
import './App.css';
import { HeaderSearch } from './components/header/HeaderSearch';
import { HeroPortfolio } from './components/hero/HeroPortfolio';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ExperienceSection } from './components/experience/ExperienceSection';

function App() {
  return (
    <AppShell
      header={{ height: 80 }}
      padding={0}
      navbar={{ width: 0, breakpoint: 'sm', collapsed: { desktop: true, mobile: true } }}
      aside={{ width: 0, breakpoint: 'md', collapsed: { desktop: true, mobile: true } }}
    >
      <AppShell.Header>
        <HeaderSearch
          title="Leonardo Benjamim"
          backgroundColor="#4b6cb7"
          showLogo={false}
          showSearch={true}
          showLinks={true}
        />
      </AppShell.Header>

      <AppShell.Main>
        <Container fluid>
          <HeroPortfolio />
          <ExperienceSection />
          <ProjectsSection />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;

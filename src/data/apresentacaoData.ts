import { SystemComponent, TechItem } from '../types';

export const SYSTEM_COMPONENTS: SystemComponent[] = [
  {
    title: 'Dados de Satélite Simulados',
    desc: 'NDVI, temperatura superficial e umidade do solo de Landsat-9, Sentinel-2 e GOES-16.',
  },
  {
    title: 'Sistema Semáforo de Riscos',
    desc: 'Tradução dos índices numéricos em alertas visuais: Verde (Normal), Amarelo (Atenção), Vermelho (Crítico).',
  },
  {
    title: 'Mapa Simulado de Regiões',
    desc: 'Visualização geográfica com coordenadas GPS reais das regiões afetadas do Brasil.',
  },
  {
    title: 'Checklist de Ações Preventivas',
    desc: 'Lista interativa com persistência local. O usuário marca o concluído e o estado é salvo.',
  },
  {
    title: 'Histórico com Gráfico de Tendência',
    desc: 'Evolução de NDVI, temperatura e alertas ao longo dos meses em gráfico de barras.',
  },
  {
    title: 'Persistência com AsyncStorage',
    desc: 'Sessão de login, preferência de tema e progresso do checklist salvos localmente.',
  },
];

export const TECH_STACK: TechItem[] = [
  { name: 'React Native + Expo SDK 54', role: 'Framework Mobile' },
  { name: 'React Navigation v7',        role: 'Navegação entre telas' },
  { name: 'AsyncStorage',               role: 'Persistência local' },
  { name: 'Context API',                role: 'Gerenciamento de estado global' },
  { name: 'Typescript',         role: 'Lógica da aplicação' },
];

import { ChecklistItem } from '../types';

export type InitialChecklistItem = Omit<ChecklistItem, 'completed'>;

export const INITIAL_CHECKLIST: InitialChecklistItem[] = [
  {
    id: 'CK001',
    task: 'Verificar sistema de irrigação de emergência',
    category: 'Infraestrutura',
  },
  {
    id: 'CK002',
    task: 'Comunicar autoridades locais sobre risco de queimada',
    category: 'Comunicação',
  },
  {
    id: 'CK003',
    task: 'Preparar rotas de evacuação para comunidades próximas',
    category: 'Segurança',
  },
  {
    id: 'CK004',
    task: 'Verificar equipamentos de combate a incêndio',
    category: 'Equipamento',
  },
  {
    id: 'CK005',
    task: 'Monitorar boletins meteorológicos a cada 6 horas',
    category: 'Monitoramento',
  },
  {
    id: 'CK006',
    task: 'Reforçar patrulhamento nas áreas de risco crítico',
    category: 'Segurança',
  },
  {
    id: 'CK007',
    task: 'Criar relatório de situação para defesa civil',
    category: 'Comunicação',
  },
  {
    id: 'CK008',
    task: 'Acionar brigada comunitária de prevenção',
    category: 'Infraestrutura',
  },
];


export const CHECKLIST_CATEGORIES: string[] = [
  'Segurança',
  'Comunicação',
  'Infraestrutura',
  'Equipamento',
  'Monitoramento',
];

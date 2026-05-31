import { ColorScheme, ChartMetric } from '../interfaces';
import { HistoryData } from '../types';

export const HISTORY_DATA: HistoryData = {
  
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],

  
  ndvi: [0.72, 0.68, 0.61, 0.45, 0.32, 0.18],

  
  temperature: [28.1, 29.3, 31.5, 35.2, 38.7, 42.3],

  
  alerts: [1, 2, 1, 3, 5, 8],
};

export const CHART_METRICS: ChartMetric[] = [
  {
    key: 'alerts',
    label: 'Alertas por Mês',
    shortLabel: '🔴 Alertas',
    unit: 'alertas',
    colorKey: 'danger', 
    data: [1, 2, 1, 3, 5, 8],
    maxVal: 8,
  },
  {
    key: 'ndvi',
    label: 'Índice NDVI Médio',
    shortLabel: '🌿 NDVI',
    unit: '',
    colorKey: 'success',
    data: [0.72, 0.68, 0.61, 0.45, 0.32, 0.18],
    maxVal: 1,
    decimals: 2,
  },
  {
    key: 'temp',
    label: 'Temperatura Superficial (°C)',
    shortLabel: '🌡️ Temp',
    unit: '°C',
    colorKey: 'warning',
    data: [28.1, 29.3, 31.5, 35.2, 38.7, 42.3],
    maxVal: 42.3,
  },
];

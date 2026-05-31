

import { Alert } from '../interfaces';

export const ALERT_DATA: Alert[] = [
  {
    id: 'ALT001',
    title: 'Risco de Queimada Elevado',
    region: 'Cerrado — Brasília/DF',
    level: 'red',
    levelLabel: 'CRÍTICO',
    satelliteData: {
      ndvi: 0.12,
      temperature: 42.3,
      humidity: 18,
      lastScan: '2026-05-26 14:32 UTC',
      satellite: 'Landsat-9 / MODIS',
    },
    humanTranslation:
      'A vegetação nesta área está extremamente seca (NDVI 0.12 — quase sem verde). ' +
      'A temperatura superficial chegou a 42°C e a umidade do solo é de apenas 18%. ' +
      'Qualquer faísca pode causar um incêndio de grande proporção.',
    coordinates: { lat: -15.7801, lng: -47.9292 },
  },
  {
    id: 'ALT004',
    title: 'Desmatamento Detectado',
    region: 'Mato Grosso — MT',
    level: 'red',
    levelLabel: 'CRÍTICO',
    satelliteData: {
      ndvi: 0.08,
      temperature: 39.7,
      humidity: 22,
      lastScan: '2026-05-26 11:48 UTC',
      satellite: 'Landsat-9',
    },
    humanTranslation:
      'O satélite detectou perda súbita de 340 hectares de vegetação em apenas 7 dias ' +
      '(NDVI caiu de 0.78 para 0.08). A área apresenta sinais claros de corte raso de árvores. ' +
      'Provável atividade ilegal de desmatamento em curso.',
    coordinates: { lat: -12.6819, lng: -56.9211 },
  },
  {
    id: 'ALT002',
    title: 'Risco Moderado de Inundação',
    region: 'Vale do Paraíba — SP',
    level: 'yellow',
    levelLabel: 'ATENÇÃO',
    satelliteData: {
      ndvi: 0.55,
      temperature: 28.1,
      humidity: 78,
      lastScan: '2026-05-26 13:15 UTC',
      satellite: 'Sentinel-2 / GOES-16',
    },
    humanTranslation:
      'O solo desta região está saturado de água (78% de umidade), o que é incomum ' +
      'para esta época do ano. As imagens de satélite mostram expansão das margens do rio. ' +
      'Há risco moderado de enchentes nas próximas 48 horas caso chova mais de 30mm.',
    coordinates: { lat: -22.5502, lng: -45.4252 },
  },
  {
    id: 'ALT003',
    title: 'Vegetação Saudável — Normal',
    region: 'Amazônia — Pará/PA',
    level: 'green',
    levelLabel: 'NORMAL',
    satelliteData: {
      ndvi: 0.82,
      temperature: 31.5,
      humidity: 85,
      lastScan: '2026-05-26 12:00 UTC',
      satellite: 'Sentinel-2',
    },
    humanTranslation:
      'A floresta nesta área está densa e saudável (NDVI 0.82 — muito verde). ' +
      'A temperatura e umidade estão dentro dos padrões históricos esperados para a Amazônia. ' +
      'Não há alertas ativos para esta região no momento.',
    coordinates: { lat: -3.4168, lng: -65.8561 },
  }
];

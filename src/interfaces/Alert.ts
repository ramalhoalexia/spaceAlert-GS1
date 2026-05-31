import { SatelliteData, Coordinates } from '../types';

export type AlertLevel = 'red' | 'yellow' | 'green';

export interface Alert {
  id: string;
  title: string;
  region: string;
  level: AlertLevel;
  levelLabel: string;
  satelliteData: SatelliteData;
  humanTranslation: string;
  coordinates: Coordinates;
}

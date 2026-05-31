import { ColorScheme } from './ColorScheme';

export interface ChartMetric {
  key: string;
  label: string;
  shortLabel: string;
  unit: string;
  colorKey: keyof ColorScheme;
  data: number[];
  maxVal: number;
  decimals?: number;
}

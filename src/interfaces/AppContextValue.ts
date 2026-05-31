import { ColorScheme } from './ColorScheme';
import { ChecklistItem } from '../types';

export interface AppContextValue {
  isAuthenticated: boolean;
  isDark: boolean;
  isLoading: boolean;
  colors: ColorScheme;
  checklist: ChecklistItem[];
  login: () => Promise<void>;
  logout: () => Promise<void>;
  toggleTheme: () => Promise<void>;
  toggleChecklistItem: (id: string) => Promise<void>;
}

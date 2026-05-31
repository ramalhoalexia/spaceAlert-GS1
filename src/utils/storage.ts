import AsyncStorage from '@react-native-async-storage/async-storage';
import { ChecklistItem, UserSession, ThemePreference } from '../types';

export const STORAGE_KEYS = {
  
  SESSION: '@spaceAlert_session',
  
  THEME: '@spaceAlert_theme',
  
  CHECKLIST: '@spaceAlert_checklist',
};


export const saveSession = async (): Promise<void> => {
  await AsyncStorage.setItem(
    STORAGE_KEYS.SESSION,
    JSON.stringify({
      isAuthenticated: true,
      loginTime: new Date().toISOString(),
    })
  );
};


export const clearSession = async (): Promise<void> => {
  await AsyncStorage.removeItem(STORAGE_KEYS.SESSION);
};


export const loadSession = async (): Promise<UserSession | null> => {
  const raw = await AsyncStorage.getItem(STORAGE_KEYS.SESSION);
  return raw ? JSON.parse(raw) as UserSession : null;
};


export const saveTheme = async (isDark: boolean): Promise<void> => {
  await AsyncStorage.setItem(STORAGE_KEYS.THEME, JSON.stringify({ isDark }));
};


export const loadTheme = async (): Promise<ThemePreference | null> => {
  const raw = await AsyncStorage.getItem(STORAGE_KEYS.THEME);
  return raw ? JSON.parse(raw) as ThemePreference : null;
};

export const saveChecklist = async (checklist: ChecklistItem[]): Promise<void> => {
  await AsyncStorage.setItem(STORAGE_KEYS.CHECKLIST, JSON.stringify(checklist));
};


export const loadChecklist = async (): Promise<ChecklistItem[] | null> => {
  const raw = await AsyncStorage.getItem(STORAGE_KEYS.CHECKLIST);
  return raw ? JSON.parse(raw) as ChecklistItem[] : null;
};

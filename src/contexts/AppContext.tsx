import React, { createContext, useState, useEffect, useCallback } from 'react';
import { COLORS_LIGHT, COLORS_DARK } from '../types/theme';
import { INITIAL_CHECKLIST } from '../data/checklistData';
import { AppContextValue } from '../interfaces';
import { ChecklistItem, AppProviderProps } from '../types';
import {
  saveSession,
  clearSession,
  loadSession,
  saveTheme,
  loadTheme,
  saveChecklist,
  loadChecklist,
} from '../utils/storage';

export const AppContext = createContext<AppContextValue | null>(null);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false); 
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [checklist, setChecklist] = useState<ChecklistItem[]>(
    INITIAL_CHECKLIST.map((item) => ({ ...item, completed: false }))
  );

  const colors = isDark ? COLORS_DARK : COLORS_LIGHT;

  useEffect(() => {
    const bootstrapApp = async () => {
      try {
        const [session, theme, savedChecklist] = await Promise.all([
          loadSession(),
          loadTheme(),
          loadChecklist(),
        ]);

        
        if (session?.isAuthenticated) {
          setIsAuthenticated(true);
        }

        
        if (theme?.isDark !== undefined) {
          setIsDark(theme.isDark);
        }

        
        if (savedChecklist) {
          setChecklist(
            INITIAL_CHECKLIST.map((item) => ({
              ...item,
              completed: savedChecklist.find((s) => s.id === item.id)?.completed ?? false,
            }))
          );
        }
      } catch (error) {
        console.warn('[AppProvider] Erro ao carregar dados persistidos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    bootstrapApp();
  }, []);

  

  const login = useCallback(async (): Promise<void> => {
    try {
      await saveSession();
      setIsAuthenticated(true);
    } catch (error) {
      console.warn('[AppProvider] Erro ao salvar sessão:', error);
    }
  }, []);

  const logout = useCallback(async (): Promise<void> => {
    try {
      await clearSession();
      setIsAuthenticated(false);
    } catch (error) {
      console.warn('[AppProvider] Erro ao remover sessão:', error);
    }
  }, []);

  

  const toggleTheme = useCallback(async (): Promise<void> => {
    setIsDark((prev) => {
      const next = !prev;
      saveTheme(next).catch((err) =>
        console.warn('[AppProvider] Erro ao salvar tema:', err)
      );
      return next;
    });
  }, []);

  

  const toggleChecklistItem = useCallback(async (id: string): Promise<void> => {
    setChecklist((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
      saveChecklist(updated).catch((err) =>
        console.warn('[AppProvider] Erro ao salvar checklist:', err)
      );
      return updated;
    });
  }, []);

  const contextValue: AppContextValue = {
    isAuthenticated,
    isDark,
    isLoading,
    colors,
    checklist,
    login,
    logout,
    toggleTheme,
    toggleChecklistItem,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

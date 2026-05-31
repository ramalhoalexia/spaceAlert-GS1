import { Alert } from '../interfaces';

export type RootStackParamList = {
  Login: undefined;
};

export type MainTabParamList = {
  DashboardTab: undefined;
  ApresentacaoTab: undefined;
  AcoesTab: undefined;
  HistoricoTab: undefined;
};

export type DashboardStackParamList = {
  Dashboard: undefined;
  Detalhes: { alert: Alert };
};

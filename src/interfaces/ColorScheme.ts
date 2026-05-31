export interface ColorScheme {
  background: string;
  surface: string;
  surfaceSecondary: string;
  primary: string;
  primaryLight: string;

  text: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  danger: string;
  dangerLight: string;
  warning: string;
  warningLight: string;
  success: string;
  successLight: string;
  cardShadow: string;
  statusBar: 'dark-content' | 'light-content';

  tabBarBorder: string;
  loginHeaderGradStart: string;

  loginInputBg: string;
  loginInputIcon: string;
  loginInputBorder: string;
  loginTextSubtitle: string;
}

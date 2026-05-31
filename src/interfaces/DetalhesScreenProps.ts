import { Alert } from './Alert';

export interface DetalhesScreenProps {
  route: {
    params: {
      alert: Alert;
    };
  };
  navigation: any;
}

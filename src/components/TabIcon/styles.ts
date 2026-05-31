import { StyleSheet } from 'react-native';
import { ColorScheme } from '../../interfaces';

const styles = (colors: ColorScheme) => StyleSheet.create({
  focused: {
    fontSize: 24,
    opacity: 1,
  },
  unfocused: {
    fontSize: 20,
    opacity: 0.55,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { ColorScheme } from '../../interfaces';

const createStyles = (colors: ColorScheme) => StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 4,
  },
});

export default createStyles;

import { StyleSheet } from 'react-native';
import { ColorScheme } from '../../interfaces';

const createStyles = (colors: ColorScheme) => StyleSheet.create({
  alertCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 14,
    paddingInline: 20,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 3,
  },
  alertRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  alertInfoCol: {
    flex: 1,
    marginRight: 12,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
    marginBottom: 8,
    alignItems: 'center',
  },
  ndviBadge: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  ndviBadgeText: {
    fontSize: 10,
    color: colors.textMuted,
    fontFamily: 'Inter_400Regular',
  },
  alertTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 2,
    fontFamily: 'Inter_600Semibold',
  },
  alertRegion: {
    fontSize: 12,
    color: colors.text,
    marginBottom: 6,
    fontFamily: 'Inter_400Regular',
  },
  alertLink: {
    fontSize: 12,
    color: colors.textMuted,
    fontFamily: 'Inter_400Regular',
  },
  alertImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },
});

export default createStyles;

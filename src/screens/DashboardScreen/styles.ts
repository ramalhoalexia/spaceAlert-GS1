import { StyleSheet } from 'react-native';
import { ColorScheme } from '../../interfaces';

const createStyles = (colors: ColorScheme) => StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientSection: {
    marginTop: -16,
    marginHorizontal: -16,
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 110,
  },
  weatherCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 18,
    marginHorizontal: 30,
    marginBottom: 0,
    shadowColor: '#00000030',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 6,
  },
  weatherRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 16,
  },
  weatherInfo: {
    flex: 1,
  },
  weatherTemp: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    fontFamily: 'Inter_700Bold',
  },
  weatherLocation: {
    fontSize: 12,
    color: colors.text,
    marginTop: 2,
    fontFamily: 'Inter_400Regular',
  },
  summaryContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  summaryBadge: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  summaryCount: {
    fontSize: 14,
    fontWeight: '800',
    fontFamily: 'Inter_700Bold',
  },
  summaryLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 2,
    fontFamily: 'Inter_400Regular',
  },
  updateText: {
    fontSize: 10,
    color: colors.textMuted,
    marginTop: 14,
    marginBottom: 14,
    fontFamily: 'Inter_400Regular',
  },
  alertCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 14,
    paddingInline: 20,
    marginBottom: 12,
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
    alignItems: 'center'
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

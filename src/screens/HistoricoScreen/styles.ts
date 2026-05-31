import { StyleSheet, Dimensions } from 'react-native';
import { ColorScheme } from '../../interfaces';

const createStyles = (colors: ColorScheme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingTop: 16,
  },
  gradientSection: {
    marginTop: -16,
    marginHorizontal: -16,
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 8,
  },
  selectorCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 30,
    marginBottom: 0,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 6,
  },
  selectorTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    fontFamily: 'Inter_700Bold',
    marginBottom: 10,
  },
  selectorRow: {
    flexDirection: 'row',
    gap: 10,
  },
  selectorButton: {
    flex: 1,
    borderRadius: 14,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  selectorText: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  chartCard: {
    marginVertical: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
    fontFamily: 'Inter_700Bold',
  },
  cardSubtitle: {
    fontSize: 11,
    color: colors.textMuted,
    marginBottom: 14,
    fontFamily: 'Inter_400Regular',
  },
  chartContainer: {
    paddingTop: 10,
  },
  chartBarsArea: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 12,
    paddingHorizontal: 8,
  },
  chartBarCol: {
    flex: 1,
    alignItems: 'center',
  },
  chartBarVal: {
    fontSize: 9,
    color: colors.textMuted,
    marginBottom: 4,
    fontFamily: 'Inter_400Regular',
  },
  chartBar: {
    width: '100%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    opacity: 0.85,
  },
  chartXRow: {
    flexDirection: 'row',
    marginTop: 8,
    paddingHorizontal: 8,
  },
  chartXLabel: {
    flex: 1,
    textAlign: 'center',
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  trendCard: {
    marginVertical: 8,
  },
  trendTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  trendTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.danger,
    fontFamily: 'Inter_700Bold',
  },
  trendBody: {
    fontSize: 13,
    color: colors.text,
    lineHeight: 20,
    fontFamily: 'Inter_400Regular',
  },
  trendBold: {
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
  tableTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
    marginBottom: 8,
  },
  tableTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    fontFamily: 'Inter_700Bold',
  },
  tableCard: {
    padding: 0,
    overflow: 'hidden',
    marginVertical: 8,
  },
  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
  },
  tableHeaderCol: {
    flex: 1,
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
  },
  tableCellMonth: {
    flex: 1,
    color: colors.text,
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Inter_400Regular',
  },
  tableCellNdvi: {
    flex: 1,
    fontSize: 13,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold',
  },
  tableCellTemp: {
    flex: 1,
    color: colors.textSecondary,
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Inter_400Regular',
  },
  tableCellAlertWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableAlertBadge: {
    borderRadius: 6,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableAlertBadgeText: {
    fontSize: 13,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
  },
});

export default createStyles;

import { StyleSheet } from 'react-native';
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
    paddingBottom: 110,
  },
  gradientSection: {
    marginTop: -16,
    marginHorizontal: -16,
    paddingTop: 16,
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  bannerCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 4,
  },
  bannerTitle: {
    fontSize: 24,
    fontFamily: 'DMSerifText_400Regular',
    color: colors.primary,
    marginTop: 8,
    textAlign: 'center',
  },
  bannerSubtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 19,
  },
  bannerBadge: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginTop: 12,
  },
  bannerBadgeText: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: '600',
  },
  cardBody: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 22,
  },
  bold: {
    fontWeight: '700',
  },
  boldDanger: {
    fontWeight: '700',
    color: colors.danger,
  },
  italic: {
    fontStyle: 'italic',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  sectionHeaderTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    fontFamily: 'Inter_700Bold',
  },
  compRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  compInfo: {
    flex: 1,
  },
  compTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 4,
  },
  compDesc: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 19,
  },
  techRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  techRowLast: {
    borderBottomWidth: 0,
  },
  techName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
  },
  techRoleBadge: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: colors.border,
  },
  techRoleText: {
    fontSize: 11,
    color: colors.textSecondary,
  },
  criteriaCard: {
    backgroundColor: colors.successLight,
  },
  criteriaTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.success,
    marginBottom: 8,
  },
  criteriaBullet: {
    fontSize: 13,
    color: colors.success,
    lineHeight: 22,
  },
});

export default createStyles;

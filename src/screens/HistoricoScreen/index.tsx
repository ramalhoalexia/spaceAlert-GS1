import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faDatabase,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import useApp from '../../hooks/useApp';
import AppHeader from '../../components/AppHeader';
import Card from '../../components/Card';
import { HISTORY_DATA, CHART_METRICS } from '../../data/historyData';
import { ChartMetric } from '../../interfaces';
import createStyles from './styles';

const CHART_HEIGHT = 140;

const labelMap: Record<string, string> = {
  alerts: 'Alertas',
  ndvi: 'NDVI',
  temp: 'Temp',
};

const HistoricoScreen = () => {
  const { colors } = useApp();
  const styles = createStyles(colors);
  const insets = useSafeAreaInsets();


  const [activeKey, setActiveKey] = useState<string>('alerts');


  const activeMetric = CHART_METRICS.find((m) => m.key === activeKey) as ChartMetric;


  const activeColor = colors[activeMetric.colorKey];


  const renderBarChart = () => (
    <View style={[styles.chartContainer, { height: CHART_HEIGHT + 30 }]}>

      <View style={[styles.chartBarsArea, { height: CHART_HEIGHT }]}>
        {activeMetric.data.map((value, idx) => {
          const barHeight = Math.max((value / activeMetric.maxVal) * CHART_HEIGHT, 4);
          const displayValue = activeMetric.decimals
            ? value.toFixed(activeMetric.decimals)
            : Math.round(value);

          return (
            <View key={idx} style={styles.chartBarCol}>

              <Text style={styles.chartBarVal}>
                {displayValue}
              </Text>

              <View
                style={[
                  styles.chartBar,
                  {
                    height: barHeight,
                    backgroundColor: activeColor,
                  }
                ]}
              />
            </View>
          );
        })}
      </View>


      <View style={styles.chartXRow}>
        {HISTORY_DATA.labels.map((label, idx) => (
          <Text key={idx} style={styles.chartXLabel}>
            {label}
          </Text>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.loginHeaderGradStart} />
      <AppHeader title="SpaceAlert" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 96 }
        ]}
        showsVerticalScrollIndicator={false}
      >

        <LinearGradient
          colors={[colors.loginHeaderGradStart, colors.primary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientSection}
        >

          <View style={styles.selectorCard}>
            <Text style={styles.selectorTitle}>Histórico</Text>
            <View style={styles.selectorRow}>
              {CHART_METRICS.map((metric) => {
                const metricColor = colors[metric.colorKey];
                const isActive = activeKey === metric.key;
                const activeLabel = labelMap[metric.key] ?? metric.shortLabel;

                return (
                  <TouchableOpacity
                    key={metric.key}
                    onPress={() => setActiveKey(metric.key)}
                    style={[
                      styles.selectorButton,
                      isActive ? {
                        backgroundColor: colors[metric.colorKey + 'Light'],
                        borderColor: metricColor,
                      } : {
                        backgroundColor: colors.surface,
                        borderColor: colors.border,
                      }
                    ]}
                    accessibilityLabel={`Visualizar gráfico de ${metric.label}`}
                    accessibilityRole="button"
                  >
                    <Text
                      style={[
                        styles.selectorText,
                        {
                          color: isActive ? metricColor : colors.textSecondary,
                        }
                      ]}
                    >
                      {activeLabel}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </LinearGradient>


        <Card colors={colors} style={styles.chartCard}>
          <Text style={styles.cardTitle}>
            {activeMetric.label}
          </Text>
          <Text style={styles.cardSubtitle}>
            Janeiro a Junho de 2026 • Região: Brasil Central
          </Text>
          {renderBarChart()}
        </Card>


        <Card colors={colors} style={styles.trendCard}>
          <View style={styles.trendTitleRow}>
            <FontAwesomeIcon icon={faTriangleExclamation as any} color={colors.danger} size={18} />
            <Text style={styles.trendTitle}>Tendência Detectada</Text>
          </View>
          <Text style={styles.trendBody}>
            Os dados dos últimos 6 meses mostram uma{' '}
            <Text style={styles.trendBold}>queda consistente do NDVI</Text>{' '}
            (de 0.72 para 0.18) e uma{' '}
            <Text style={styles.trendBold}>alta de 50% nos alertas críticos</Text>,
            indicando degradação ambiental acelerada na região monitorada.
          </Text>
        </Card>


        <View style={styles.tableTitleRow}>
          <FontAwesomeIcon icon={faDatabase as any} color={colors.primary} size={18} />
          <Text style={styles.tableTitle}>Dados Completos - 2026</Text>
        </View>

        <Card colors={colors} style={styles.tableCard}>

          <View style={[styles.tableHeader, { backgroundColor: colors.primary }]}>
            {['Mês', 'NDVI', 'Temp(ºC)', 'Alertas'].map((col, idx) => (
              <Text key={idx} style={styles.tableHeaderCol}>
                {col}
              </Text>
            ))}
          </View>


          {HISTORY_DATA.labels.map((label, idx) => {
            const ndviVal = HISTORY_DATA.ndvi[idx];
            const tempVal = HISTORY_DATA.temperature[idx];
            const alertCount = HISTORY_DATA.alerts[idx];


            const ndviColor =
              ndviVal >= 0.6 ? colors.success :
                ndviVal >= 0.4 ? colors.warning :
                  colors.danger;


            const alertColor =
              alertCount >= 5 ? colors.danger :
                alertCount >= 3 ? colors.warning :
                  colors.success;
            const alertBg =
              alertCount >= 5 ? colors.dangerLight :
                alertCount >= 3 ? colors.warningLight :
                  colors.successLight;

            return (
              <View
                key={idx}
                style={[
                  styles.tableRow,
                  {
                    borderBottomWidth: idx < HISTORY_DATA.labels.length - 1 ? 1 : 0,
                    borderBottomColor: colors.border,
                    backgroundColor: idx % 2 === 0 ? colors.surface : colors.surfaceSecondary,
                  }
                ]}
              >
                <Text style={styles.tableCellMonth}>
                  {label}
                </Text>
                <Text style={[styles.tableCellNdvi, { color: ndviColor }]}>
                  {ndviVal.toFixed(2)}
                </Text>
                <Text style={styles.tableCellTemp}>
                  {tempVal.toFixed(1)}
                </Text>
                <View style={styles.tableCellAlertWrapper}>
                  <View style={[styles.tableAlertBadge, { backgroundColor: alertBg }]}>
                    <Text style={[styles.tableAlertBadgeText, { color: alertColor }]}>
                      {alertCount}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoricoScreen;

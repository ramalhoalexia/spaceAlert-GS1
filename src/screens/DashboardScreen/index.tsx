import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCloudSun, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import useApp from '../../hooks/useApp';
import AppHeader from '../../components/AppHeader';
import AlertCard from '../../components/AlertCard';
import { ALERT_DATA } from '../../data/alertData';
import createStyles from './styles';
import { Alert } from '../../interfaces';
import { DashboardScreenProps } from '../../types';

const DashboardScreen = ({ navigation }: DashboardScreenProps) => {
  const { colors } = useApp();
  const styles = createStyles(colors);


  const summary = {
    red: ALERT_DATA.filter((a) => a.level === 'red').length,
    yellow: ALERT_DATA.filter((a) => a.level === 'yellow').length,
    green: ALERT_DATA.filter((a) => a.level === 'green').length,
  };


  const summaryItems = [
    { level: 'red', count: summary.red, label: 'Crítico', color: colors.danger, bg: colors.dangerLight },
    { level: 'yellow', count: summary.yellow, label: 'Atenção', color: colors.warning, bg: colors.warningLight },
    { level: 'green', count: summary.green, label: 'Normal', color: colors.success, bg: colors.successLight },
  ];

  return (
    <LinearGradient
      colors={[colors.loginHeaderGradStart, colors.background]}
      locations={[0.1, 0.1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor={colors.loginHeaderGradStart} />


        <AppHeader title="SpaceAlert" />


        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>


          <LinearGradient
            colors={[colors.loginHeaderGradStart, colors.primary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradientSection}
          >

            <View style={styles.weatherCard}>
              <View style={styles.weatherRow}>
                <FontAwesomeIcon
                  icon={faCloudSun as any}
                  color={colors.text}
                  size={36}
                />
                <View style={styles.weatherInfo}>
                  <Text style={styles.weatherTemp}>23°C</Text>
                  <Text style={styles.weatherLocation}>
                    <FontAwesomeIcon icon={faLocationDot as any} color={colors.text} size={11} />
                    {'  '}São Paulo
                  </Text>
                </View>
              </View>


              <View style={styles.summaryContainer}>
                {summaryItems.map((item) => (
                  <View
                    key={item.level}
                    style={[
                      styles.summaryBadge,
                      { backgroundColor: item.bg }
                    ]}
                  >
                    <Text style={[styles.summaryCount, { color: item.color }]}>
                      {item.count}
                    </Text>
                    <Text style={[styles.summaryLabel, { color: item.color }]}>
                      {item.label}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </LinearGradient>


          <Text style={styles.updateText}>
            Última atualização: 26/05/2026 às 14:32 UTC
          </Text>


          {ALERT_DATA.map((alert: Alert) => (
            <AlertCard
              key={alert.id}
              alert={alert}
              colors={colors}
              onPress={() => navigation.navigate('Detalhes', { alert })}
              style={{ marginBottom: 12 }}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>

  );
};

export default DashboardScreen;

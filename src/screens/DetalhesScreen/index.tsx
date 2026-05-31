import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faSatellite,
  faLocationDot,
  faLeaf,
  faThermometerHalf,
  faTint,
  faInfoCircle,
  faCheck,
  faMap,
} from '@fortawesome/free-solid-svg-icons';
import useApp from '../../hooks/useApp';
import AppHeader from '../../components/AppHeader';
import AlertCard from '../../components/AlertCard';
import Card from '../../components/Card';
import createStyles from './styles';
import { DetalhesScreenProps } from '../../interfaces';
import { DataRowProps } from '../../types';

const DetalhesScreen = ({ route, navigation }: DetalhesScreenProps) => {
  const { colors } = useApp();
  const styles = createStyles(colors);
  const insets = useSafeAreaInsets();
  const { alert } = route.params;

  const levelColor = {
    red: colors.danger,
    yellow: colors.warning,
    green: colors.success,
  }[alert.level] ?? colors.success;

  const DataRow = ({ icon, label, value, unit, isLast = false }: DataRowProps) => (
    <View style={[styles.dataRow, isLast && { borderBottomWidth: 0 }]}>
      <View style={styles.dataRowLeft}>
        <FontAwesomeIcon icon={icon} color={colors.textSecondary} size={18} />
        <Text style={styles.dataRowLabel}>{label}</Text>
      </View>
      <Text style={styles.dataRowValueContainer}>
        <Text style={styles.dataRowValue}>{value}</Text>
        <Text style={styles.dataRowUnit}> {unit}</Text>
      </Text>
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

          <AlertCard
            alert={alert}
            colors={colors}
            style={styles.alertCardOverride}
          />
        </LinearGradient>


        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
            accessibilityLabel="Voltar para a tela anterior"
            accessibilityRole="button"
          >
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('AcoesTab')}
            style={styles.actionButton}
            accessibilityLabel="Ver ações preventivas recomendadas"
            accessibilityRole="button"
          >
            <View style={styles.actionButtonIconWrapper}>
              <FontAwesomeIcon icon={faCheck as any} color="#FFFFFF" size={10} />
            </View>
            <Text style={styles.actionButtonText}>Ver Ações Preventivas</Text>
          </TouchableOpacity>
        </View>


        <Card colors={colors} style={styles.mapCard}>
          <View style={styles.mapCanvas}>

            <View style={styles.gridContainer}>
              {[...Array(6)].map((_, r) => (
                <View key={r} style={styles.gridRow}>
                  {[...Array(8)].map((_, c) => (
                    <View key={c} style={styles.gridCell} />
                  ))}
                </View>
              ))}
            </View>


            <View style={styles.mapLabelContainer}>
              <FontAwesomeIcon icon={faMap as any} color={colors.textSecondary} size={13} />
              <Text style={styles.mapLabel}>
                Mapa Simulado - {alert.region}
              </Text>
            </View>


            <View style={styles.pinWrapper}>
              <View style={[styles.pinGlow, { backgroundColor: levelColor + '50' }]}>
                <FontAwesomeIcon icon={faLocationDot as any} color="#000000" size={24} />
              </View>
              <View style={styles.tooltip}>
                <Text style={styles.tooltipText}>
                  {alert.coordinates.lat.toFixed(4)}°, {alert.coordinates.lng.toFixed(4)}°
                </Text>
              </View>
            </View>
          </View>
        </Card>


        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleRow}>
            <FontAwesomeIcon icon={faSatellite as any} color={colors.primary} size={18} />
            <Text style={styles.sectionTitle}>Dados Técnicos do Satélite</Text>
          </View>
          <Text style={styles.sectionSubtitle}>
            Fonte: {alert.satelliteData.satellite} • {alert.satelliteData.lastScan}
          </Text>
        </View>

        <Card colors={colors} style={styles.dataCard}>
          <DataRow
            icon={faLeaf as any}
            label="Índice NDVI"
            value={alert.satelliteData.ndvi.toFixed(2)}
            unit="(0–1)"
          />
          <DataRow
            icon={faThermometerHalf as any}
            label="Temperatura Superficial"
            value={alert.satelliteData.temperature.toFixed(1)}
            unit="°C"
          />
          <DataRow
            icon={faTint as any}
            label="Umidade do Solo"
            value={`${alert.satelliteData.humidity}`}
            unit="%"
            isLast={true}
          />
        </Card>


        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleRow}>
            <FontAwesomeIcon icon={faInfoCircle as any} color={colors.primary} size={18} />
            <Text style={styles.sectionTitle}>O que isso significa?</Text>
          </View>
        </View>

        <Card colors={colors} style={styles.explanationCard}>
          <Text style={styles.translationText}>
            {alert.humanTranslation}
          </Text>
        </Card>

      </ScrollView>
    </SafeAreaView>
  );
};

export default DetalhesScreen;

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faSatellite,
  faCircleDot,
  faBolt,
  faDesktop,
  faCode,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import useApp from '../../hooks/useApp';
import AppHeader from '../../components/AppHeader';
import Card from '../../components/Card';
import createStyles from './styles';
import { SYSTEM_COMPONENTS, TECH_STACK } from '../../data/apresentacaoData';

const ApresentacaoScreen = () => {
  const { colors } = useApp();
  const styles = createStyles(colors);

    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.loginHeaderGradStart} />
      <AppHeader title="SpaceAlert" />

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        
        <LinearGradient
          colors={[colors.loginHeaderGradStart, colors.primary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientSection}
        >
          <View style={styles.bannerCard}>
            <FontAwesomeIcon
              icon={faSatellite as any}
              color={colors.primary}
              size={48}
              style={{ marginBottom: 6 }}
            />
            <Text style={styles.bannerTitle}>
              SpaceAlert
            </Text>
            <Text style={styles.bannerSubtitle}>
              Tradução de Dados de Satélite em Alertas de Linguagem Humana
            </Text>
            <View style={styles.bannerBadge}>
              <Text style={styles.bannerBadgeText}>
                Global Solution 2026 — FIAP
              </Text>
            </View>
          </View>
        </LinearGradient>

        
        <View style={styles.sectionHeaderRow}>
          <FontAwesomeIcon icon={faCircleDot as any} color={colors.primary} size={18} />
          <Text style={styles.sectionHeaderTitle}>Objetivo do Trabalho</Text>
        </View>
        <Card colors={colors}>
          <Text style={styles.cardBody}>
            Criar uma solução mobile que{' '}
            <Text style={styles.bold}>democratize o acesso</Text> a dados científicos
            de satélites, transformando índices complexos (NDVI, temperatura superficial) em{' '}
            <Text style={styles.bold}>alertas claros e acionáveis</Text> para gestores
            públicos, agricultores e comunidades vulneráveis.
          </Text>
        </Card>

        
        <View style={styles.sectionHeaderRow}>
          <FontAwesomeIcon icon={faBolt as any} color={colors.primary} size={18} />
          <Text style={styles.sectionHeaderTitle}>Problema Abordado</Text>
        </View>
        <Card colors={colors}>
          <Text style={styles.cardBody}>
            Dados de satélites ambientais são extremamente ricos, mas{' '}
            <Text style={styles.boldDanger}>inacessíveis ao público geral</Text>.
            {'\n\n'}Um índice NDVI de 0.12 não significa nada para um agricultor, mas{' '}
            <Text style={styles.italic}>
              "sua lavoura está extremamente seca e sob risco de incêndio"
            </Text>{' '}
            é compreensível e acionável.
          </Text>
        </Card>

        
        <View style={styles.sectionHeaderRow}>
          <FontAwesomeIcon icon={faDesktop as any} color={colors.primary} size={18} />
          <Text style={styles.sectionHeaderTitle}>Componentes do Sistema</Text>
        </View>
        {SYSTEM_COMPONENTS.map((comp, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <TouchableOpacity
              key={idx}
              activeOpacity={0.7}
              onPress={() => setExpandedIndex(isExpanded ? null : idx)}
              style={{ marginVertical: 1 }}
            >
              <Card colors={colors} style={{ padding: 14, marginVertical: 4 }}>
                <View style={styles.compRow}>
                  <FontAwesomeIcon
                    icon={(isExpanded ? faChevronUp : faChevronDown) as any}
                    color={colors.text}
                    size={15}
                    style={{ marginRight: 10, marginTop: 3 }}
                  />
                  <View style={styles.compInfo}>
                    <Text style={styles.compTitle}>
                      {comp.title}
                    </Text>
                    {isExpanded && (
                      <Text style={styles.compDesc}>
                        {comp.desc}
                      </Text>
                    )}
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          );
        })}

        
        <View style={styles.sectionHeaderRow}>
          <FontAwesomeIcon icon={faCode as any} color={colors.primary} size={18} />
          <Text style={styles.sectionHeaderTitle}>Stack Tecnológica</Text>
        </View>
        <Card colors={colors}>
          {TECH_STACK.map((tech, idx) => (
            <View
              key={idx}
              style={[
                styles.techRow,
                idx === TECH_STACK.length - 1 ? styles.techRowLast : null
              ]}
            >
              <Text style={styles.techName}>
                {tech.name}
              </Text>
              <View style={styles.techRoleBadge}>
                <Text style={styles.techRoleText}>{tech.role}</Text>
              </View>
            </View>
          ))}
        </Card>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ApresentacaoScreen;

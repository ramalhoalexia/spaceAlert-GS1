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
  faFloppyDisk,
  faChevronDown,
  faChevronUp,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import useApp from '../../hooks/useApp';
import AppHeader from '../../components/AppHeader';
import { CHECKLIST_CATEGORIES } from '../../data/checklistData';
import createStyles from './styles';


const AcoesScreen = () => {
  const { colors, checklist, toggleChecklistItem } = useApp();
  const styles = createStyles(colors);
  const insets = useSafeAreaInsets();


  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    Segurança: true,
  });

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const completedCount = checklist.filter((item) => item.completed).length;
  const totalCount = checklist.length;
  const progress = totalCount > 0 ? completedCount / totalCount : 0;

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

          <View style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressTitle}>Progresso Geral</Text>
              <Text style={styles.progressCount}>{completedCount}/{totalCount}</Text>
            </View>


            <View style={styles.progressBarTrack}>
              <View
                style={[
                  styles.progressBarFill,
                  { width: `${progress * 100}%` }
                ]}
              />
            </View>

            <Text style={styles.progressText}>
              {Math.round(progress * 100)}% das ações preventivas concluídas
            </Text>
          </View>
        </LinearGradient>


        <View style={styles.persistenceNotice}>
          <FontAwesomeIcon icon={faFloppyDisk as any} color={colors.textMuted} size={15} style={styles.persistenceIcon} />
          <Text style={styles.persistenceNoticeText}>
            Seu progresso é salvo automaticamente mesmo se o app for fechado.
          </Text>
        </View>


        {CHECKLIST_CATEGORIES.map((category) => {
          const items = checklist.filter((item) => item.category === category);
          if (items.length === 0) return null;

          const isExpanded = !!expandedCategories[category];

          return (
            <View key={category} style={styles.categoryContainer}>

              <TouchableOpacity
                onPress={() => toggleCategory(category)}
                activeOpacity={0.7}
                style={styles.categoryHeader}
              >
                <Text style={styles.categoryTitle}>{category}</Text>
                <FontAwesomeIcon
                  icon={(isExpanded ? faChevronDown : faChevronUp) as any}
                  color={colors.primary}
                  size={14}
                />
              </TouchableOpacity>


              {isExpanded && (
                <View style={styles.itemsContainer}>
                  {items.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => toggleChecklistItem(item.id)}
                      activeOpacity={0.8}
                      style={[
                        styles.taskCard,
                        item.completed ? styles.taskCardCompleted : ""
                      ]}
                      accessibilityLabel={`Tarefa: ${item.task}. ${item.completed ? 'Concluída' : 'Pendente'}. Toque para alternar.`}
                      accessibilityRole="checkbox"
                    >

                      {item.completed ? (
                        <View style={styles.checkboxCompleted}>
                          <FontAwesomeIcon icon={faCheck as any} color="#FFFFFF" size={10} />
                        </View>
                      ) : (
                        <View style={styles.checkboxUncompleted} />
                      )}


                      <Text style={styles.taskText}>{item.task}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AcoesScreen;

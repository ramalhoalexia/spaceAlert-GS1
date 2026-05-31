import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import AlertBadge from '../AlertBadge';
import { AlertCardProps } from '../../interfaces';
import { ALERT_IMAGES } from '../../data/alertImages';
import createStyles from './styles';

const AlertCard = ({ alert, colors, onPress, style }: AlertCardProps) => {
  const styles = createStyles(colors);

  const CardContent = (
    <View style={styles.alertRow}>
      
      <View style={styles.alertInfoCol}>
        
        <View style={styles.badgeRow}>
          <AlertBadge level={alert.level} label={alert.levelLabel} colors={colors} />
          <View style={styles.ndviBadge}>
            <Text style={styles.ndviBadgeText}>
              NDVI: {alert.satelliteData.ndvi.toFixed(2)}
            </Text>
          </View>
        </View>

        
        <Text style={styles.alertTitle}>
          {alert.title}
        </Text>

        
        <Text style={styles.alertRegion}>
          <FontAwesomeIcon icon={faLocationDot as any} color={colors.text} size={11} />
          {'  '}{alert.region}
        </Text>

        
        <Text style={styles.alertLink}>
          Ver detalhes {'>'}
        </Text>
      </View>

      
      {ALERT_IMAGES[alert.id] && (
        <Image
          source={ALERT_IMAGES[alert.id]}
          style={styles.alertImage}
          resizeMode="cover"
        />
      )}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[styles.alertCard, style]}
        accessibilityLabel={`Ver detalhes do alerta: ${alert.title}`}
        accessibilityRole="button"
      >
        {CardContent}
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.alertCard, style]}>
      {CardContent}
    </View>
  );
};

export default AlertCard;

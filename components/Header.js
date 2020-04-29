import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import GeneralStatusBarColor from './GeneralStatusBarColorStyles';

export default function Header({
  navigation,
  name,
  rightButton,
  rightClick,
  leftClick,
}) {

  return (
    <>
      <GeneralStatusBarColor
        backgroundColor="#02983e"
        barStyle="light-content"
      />
      <View style={styles.header}>
        <RectButton
          style={styles.actionButton}
          onPress={() => {
            if (typeof leftClick === 'function'){
              leftClick();
            };
            navigation.goBack();
          }}
        >
          <Ionicons name="md-arrow-back" size={28} color={'#fff'} />
        </RectButton>
        <Text style={styles.pageName}>{name}</Text>
        <RectButton
          style={styles.actionButton}
          onPress={() => {
            if (typeof rightClick === 'function') {
              rightClick();
            }
          }}
        >
          <Ionicons name={rightButton} size={28} color={'#fff'} />
        </RectButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#02983e',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    zIndex: 100,
    elevation: 3,
  },
  actionButton: {
    padding: 15,
  },

  pageName: {
    fontSize: 20,
    color: '#fff',
  },
});

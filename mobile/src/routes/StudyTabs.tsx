import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

import Favorites from '../pages/Favorites';
import TeacherList from '../pages/TeacherList';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
      <Navigator 
        tabBarOptions={{ style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex:0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 16,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d'
       }}
      >
        <Screen
          name="TeacherList"
          component={TeacherList}
          options={{
            tabBarLabel: 'Proffys',
            tabBarIcon: ({color, size}) => {
              return (
                <Ionicons name="md-book" color={color} size={size} />
              )
            }
          }} 
        />
        <Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({color, size}) => {
              return (
                <Ionicons name="ios-heart-empty" color={color} size={size} />
              )
            }
          }} 
        />
      </Navigator>
  );
}

export default StudyTabs;
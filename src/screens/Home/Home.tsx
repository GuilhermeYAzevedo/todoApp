import React from 'react';
import {Text, View} from 'react-native';

import styles from './HomeStyles';
import {Header} from '../../component/Header';

const Home = () => {
  const todo = [
    {id: 1, value: 'Training'},
    {id: 2, value: 'Go to bed'},
    {id: 3, value: 'Drink water'},
    {id: 4, value: 'Food the pets'},
  ];
   let tasks =  todo.map(() => {
       
   });
  return (
    <View style={styles.container}>
      <Header name="Pet" />
      <View style={styles.content}>
        <Text>My projects</Text>
        <Text key={todo.id} text={todo.value}/>
      </View>
    </View>
  );
};

export default Home;

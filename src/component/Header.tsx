import React from 'react';
import {Text, View} from 'react-native';
import User from '../models/User';

export class Header extends React.Component<User> {
  user: User;
  constructor(props: any) {
    super(props);
    this.user = new User();
    this.user.name = this.props.name;
  }

  render() {
    return (
      <View>
        <Text>{this.user.name}</Text>
      </View>
    );
  }
}

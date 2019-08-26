import React, {Component} from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {View, FlatList, Text} from 'react-native';
import ListItem from './ListItem';

class Saved extends Component {


  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ alignSelf: 'center'}}>Pull down to refresh</Text>
        <FlatList
         data = {this.props.cards}
         extraData = {this.props}
         renderItem = {({item}) => <ListItem pet={item}/>}
         keyExtractor = {item => String(item.id)}
        />
      </View>
    )
  }
};

const mapStateToProps = (state) => {
  const {length,cards} = state.filter;
  return {length,cards};
};

export default connect(mapStateToProps)(Saved);
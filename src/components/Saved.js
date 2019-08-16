import React, {Component} from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {View, FlatList, Text} from 'react-native';
import ListItem from './ListItem';

class Saved extends Component {



  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
         data = {this.props.cards}
         renderItem = {({item}) => <ListItem pet={item}/>}
         keyExtractor = {item => String(item.id)}
        />
      </View>
    )
  }
};

const mapStateToProps = (state) => {
  const {id, cards} = state.filter;
  return {id, cards};
};

export default connect(mapStateToProps)(Saved);
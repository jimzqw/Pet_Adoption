import React, {Component} from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {View, FlatList, Text} from 'react-native';
import ListItem from './ListItem';

class Saved extends Component {

  state = {
    refresh : false
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ alignSelf: 'center'}}>Pull down to refresh</Text>
        <FlatList
         data = {this.props.cards}
         refreshing = {this.state.refresh}
         onRefresh = {() => this.setState({refresh: false})}
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
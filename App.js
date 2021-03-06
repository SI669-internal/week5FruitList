import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export class App1 extends React.Component {
  constructor(props) {
    super(props);

    this.fruit = [
      { type: 'apple', key: '1'},
      { type: 'banana', key: '2'},
      { type: 'grape', key: '3'},
      { type: 'pineapple', key: '4'},
    ];
  }

  render() {
    return (
      <View style={styles.container1}>
        <View>
          <FlatList
            data={this.fruit}
            renderItem={({item}) => 
              <View>
                <Text>{item.type}</Text>
              </View>
            }
            style={styles.list}
          />
        </View>
      </View>
    );
  }
}

export default class App2 extends React.Component {
  constructor(props) {
    super(props);

    this.fruit = [
      { type: 'apple', key: '1'},
      { type: 'banana', key: '2'},
      { type: 'grape', key: '3'},
      { type: 'pineapple', key: '4'},
    ];
  }

  render() {
    return (
      <View style={styles.container2}>
        <View>
          <FlatList
            data={this.fruit}
            renderItem={({item}) => 
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.type}</Text>
              </View>
            }
            style={styles.list}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  container2: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'grey', 
  },
  itemContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
    margin: 10,
    padding: 15,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  itemText: {
    fontSize: 44,
  }
});
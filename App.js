import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';

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
      <SafeAreaView style={styles.container}>
        <View style={styles.bodyContainer}>
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
      </SafeAreaView>
    );
  }
}

export  class App extends React.Component {
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
      <SafeAreaView style={styles.container}>
          <FlatList
            data={this.fruit}
            renderItem={({item}) => 
                <View>
                  <Text>{item.type}</Text>
                </View>
            }
          />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  itemContainer: {
    backgroundColor: 'lightblue',
    margin: 5,
    padding: 15,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  itemText: {
    fontSize: 44,
  }
});
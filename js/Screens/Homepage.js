import React, { Component } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

class Homepage extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          items: [],
          temp_item: ""
        }
      }

    render() {
        return (
          <View>
            <TextInput
              placeholder='Add to list'
              onChangeText={value => this.setState({ temp_item: value})}
              value={this.state.temp_item}
            />
            <Button
              onPress={() => {
                this.addItemToList();
              }}
              title="Add To List!"
            />
    
            <FlatList
              data={this.state.items}
              renderItem={({ item, index }) =>
                <View>
                  <Text>{item}</Text>
                  <Button
                    onPress={() => this.remove(index)}
                    title="Remove Item"
                  />
                </View>
              }
            />
    
            <View>
            <Text>{this.state.items}</Text>
            </View>
          
          </View>
        )
      }

}

export default Homepage
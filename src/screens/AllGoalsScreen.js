import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Button,
} from "react-native";
import { Pedometer } from "expo-sensors";
import { connect } from "react-redux";
import { fetchGoals } from "../store/goal";

class AllGoalsScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    const goals = this.props.user.goals;
    const { navigation } = this.props;
    return (
      <View>
        <FlatList
          keyExtractor={(goal) => {
            return goal.id.toString();
          }}
          data={goals}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>Goals:</Text>
                <Text>status: {item.usergoal.status}</Text>
                <Text>number of days: {item.usergoal.numberOfDays}</Text>
                <Text>completed days: {item.usergoal.completedDays}</Text>
                <Text>type: {item.type} </Text>
                <Button
                  title="Details"
                  onPress={() => {
                    navigation.navigate("SingleGoal", { id: item.usergoal.id });
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapState)(AllGoalsScreen);

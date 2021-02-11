import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";

function StepVisualData({ allGoals }) {
  const completedGoalsData = () => {
    let data = [];
    let xValue = 0;
    for (let i = 0; i < allGoals.length; i++) {
      if (allGoals[i].status === "complete" && allGoals[i].type === "Steps") {
        const amtOfStepsForEachGoal =
          allGoals[i].completedDays * allGoals[i].quantity;
        xValue++;
        let yValue = amtOfStepsForEachGoal;

        const completionObject = {
          stepGoal: `goal ${xValue}`,
          totalNumberOfSteps: yValue,
        };
        data.push(completionObject);
      }
    }

    return data;
  };
  const totalSum = () => {
    let totalBottles = 0;
    for (let i = 0; i < allGoals.length; i++) {
      if (allGoals[i].status === "complete" && allGoals[i].type === "Steps") {
        const amtOfBottlesForEachGoal =
          allGoals[i].completedDays * allGoals[i].quantity;
        totalBottles += amtOfBottlesForEachGoal;
      }
    }
    return totalBottles;
  };

  /* const data = [
    { stepGoal: 1, totalNumberOfSteps: 1000},
  ]; */

  return (
    <View style={styles.container}>
      <Text>{`You have taken ${totalSum()} steps so far`}</Text>
      <VictoryChart
        width={350}
        minDomain={{ y: 0 }}
        theme={VictoryTheme.material}
        color="blue"
      >
        <VictoryLine
          data={completedGoalsData()}
          x="stepGoal"
          y="totalNumberOfSteps"
        />
      </VictoryChart>

      <Text>Step Goals Compeleted</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#faecd9",
    height: 400,
  },
});
export default StepVisualData;

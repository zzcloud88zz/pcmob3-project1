import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";

function HomeScreen() {
  const [colorArray, setColorArray] = useState([
    { red: 255, green: 128, blue: 0, id: "0" },
    { red: 0, green: 128, blue: 255, id: "1" },
    { red: 128, green: 0, blue: 255, id: "2" },
  ]);

function addColor() {
   setColorArray([
     ...colorArray,
     {
       red: Math.floor(Math.random() * 256),
       green: Math.floor(Math.random() * 256),
       blue: Math.floor(Math.random() * 256),
       id: `${colorArray.length}`,
     },
   ]);
 }

  function renderItem({ item }) {
    return <BlockRGB red={item.red} green={item.green} blue={item.blue} />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
       style={{ height: 40, justifyContent: "center", width: "25%", backgroundColor: "black", margin: 10, borderRadius: 10 }}
       onPress={addColor}
     >
       <Text style={{ color: "tomato", textAlign: "center" }}>Add colour</Text>
     </TouchableOpacity>
      <FlatList
        style={{ width: "100%" }}
        data={colorArray}
        renderItem={renderItem}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Kueh Lapis" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

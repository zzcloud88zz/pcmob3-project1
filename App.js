import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";

function HomeScreen({ navigation }) {
  const [colorArray, setColorArray] = useState([]);

function renderItem({ item }) {
   return (
     <TouchableOpacity
       onPress={() => navigation.navigate("DetailsScreen", { ...item })}
     >
       <BlockRGB red={item.red} green={item.green} blue={item.blue} />
     </TouchableOpacity>
   );
 }

function addColor() {
   setColorArray([
     ...colorArray,
     {
       red: Math.floor(Math.random() * 256),
       green: Math.floor(Math.random() * 256),
       blue: Math.floor(Math.random() * 256),
       id: `${colorArray.length.toString()}`,
     },
   ]);
 }

function resetColor() {
  setColorArray([]);
}

  return (
    <View style={styles.container}>
      <TouchableOpacity
       style={{ height: 40, justifyContent: "center", width: "25%", backgroundColor: "black", margin: 10, borderRadius: 10 }}
       onPress={addColor}
     >
       <Text style={{ color: "tomato", textAlign: "center" }}>Add colour</Text>
     </TouchableOpacity>

     <TouchableOpacity
       style={{ height: 40, justifyContent: "center", width: "25%", backgroundColor: "brown", margin: 10, borderRadius: 10 }}
       onPress={resetColor}
     >
       <Text style={{ color: "violet", textAlign: "center" }}>Reset</Text>
     </TouchableOpacity>

      <FlatList
        style={{ width: "100%" }}
        data={colorArray}
        renderItem={renderItem}
      />
    </View>
  );
}

function DetailsScreen({ route }) {
  const { red, green, blue } = route.params;
  
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: `rgb(${red}, ${green}, ${blue})` },
      ]}
    >
      <View style={{ padding: 30 }}>
        <Text style={styles.detailText}>Red: {red}</Text>
        <Text style={styles.detailText}>Green: {green}</Text>
        <Text style={styles.detailText}>Blue: {blue}</Text>
      </View>
    </View>
  );
 }

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Kueh Lapis" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
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
  detailText: {
    fontSize: 36,
    padding: 20,
  }
});
